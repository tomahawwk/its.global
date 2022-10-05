<template>
	<section class="about-cards">
		<div class="cards-stack" v-if="cards" ref="inner">
			<!-- <div v-for="(card, i) in cards" :key="i" @click="goTo(card, i)" ref="cards"> -->
			<!-- <Card :card="card" :index="i + 1" :active="activeIndex === i" /> -->
			<!-- </div> -->
			<div
				v-for="(card, index) in cards"
				:key="index"
				ref="cards"
				@click="goTo(card, index)"
			>
				<Card :data="card" />
			</div>
		</div>
	</section>
</template>

<script>
import { gsap } from 'gsap'
import Card from '~/components/Card.vue'

const lerp = (t, e, i) => (1 - i) * t + i * e

const mathCalcProgressCoords = (t, e) => {
	for (var i = e[0], n = Math.abs(t - i), s = 0; s < e.length; s++) {
		var o = Math.abs(t - e[s])
		o < n && ((n = o), (i = e[s]))
	}
	return i
}

export default {
	props: { content: { type: Array } },
	data: () => ({
		dragging: false,
		lerpFactor: 0.2,
		progressTarget: 0,
		activeIndex: 0,
		coordsMap: {
			1: [0],
			2: [0, 1],
			3: [0, 0.5, 1],
			4: [0, 0.33, 0.66, 1],
			5: [0, 0.25, 0.5, 0.75, 1],
			6: [0, 0.2, 0.4, 0.6, 0.8, 1],
			7: [0, 0.14, 0.28, 0.42, 0.56, 0.7, 1],
		},
	}),
	computed: {
		coords() {
			return this.coordsMap[this.cards.length]
		},
		cards() {
			let counter = 0

			const cards = [
				{
					badge: 'Manifesto',
					title: 'Insight: identify and uncover',
					text: 'First, we investigate what forms the basis of the brand and makes it noticeable. We observe, we listen, we ask questions: everything to identify its strengths. This is the way how a knowledge base appears, later it will form the basis of a unique identity of the brand, its communication, values and sustainable marketing content strategy. We consider brand awareness to be the foundation of its longevity.',
					imageUrl:
						'//images.ctfassets.net/4u5xmjygb30s/6dxJjFwnIu3x0nf9gB2ByT/c31a36426a807eaa4c9fe264648b4c7b/manifesto-01.jpg?fm=webp&fl=&w=&fit=',
				},
				{
					badge: 'Manifesto',
					title: 'Simplicity is timeless',
					text: 'Systems develop, communications become more complex. The faster this happens, the more we strive for pivotal, obvious solutions. Virtually all work tends towards the simplification: to add something new we have to get rid of the superfluous and seek the essence. We believe that simplicity is a key in creating permanent values unaffected by time and the vagaries of fashion.',
					imageUrl:
						'//images.ctfassets.net/4u5xmjygb30s/6VMKkDKBrwgN5Df00EKykP/81ebba9785a3c7267c654b61f138d48c/manifesto-02.jpg?fm=webp&fl=&w=&fit=',
				},
				{
					badge: 'Manifesto',
					title: 'Emotions uplift',
					text: 'It’s great when a product is smart, functional, and meaningful at the same time. However, above all it has to evoke emotions. Brands are like people: important are only those whom we like. By inspiring people with vivid impressions and new experiences, we strengthen emotional connections with the brand. When a brand evokes empathy, we will see positive dynamics in brand awareness, recognition, and engagement.',
					imageUrl:
						'//images.ctfassets.net/4u5xmjygb30s/ZaHBuKJAqcyprhAYEnFKm/f1583fd3234adf624c131da510bc3e5e/manifesto-03.jpg?fm=webp&fl=&w=&fit=',
				},
				{
					badge: 'Manifesto',
					title: 'Content runs the show',
					text: 'Original content attracts attention and showcases brand core values. In a world with constant battles for attention, content determines the quality of customers’ experience and the degree of brand penetration into a person’s life. Good content becomes synonymous with careful attention to the quality of the products and services offered. By creating something new, you demonstrate the ability to inspire society and unite people around your vision.',
					imageUrl:
						'//images.ctfassets.net/4u5xmjygb30s/27IMDiEdHVQOagVEyuw4ZP/2edb6f541eceac1a6b0eb808be271faa/manifesto-04.jpg?fm=webp&fl=&w=&fit=',
				},
			]

			// this.content.forEach((field) => {
			//   if (field.nodeType !== 'hr') {
			//     const card = cards[counter]
			//     if (Array.isArray(card)) {
			//       card.push(field)
			//     } else {
			//       cards[counter] = []
			//       cards[counter].push(field)
			//     }
			//   } else {
			//     counter++
			//   }
			// })

			return cards
		},
	},
	mounted() {
		this.$nextTick(() => {
			this.init()
		})
	},
	// beforeDestroy() {
	// 	this.destroy()
	// },
	methods: {
		async init() {
			this.compute()
			this.initTl()
			await this.manageDnD()
			this.update()
			window.addEventListener('resize', this.resize)
		},
		initTl() {
			if (this.tl && this.tl.kill) {
				this.tl.kill()
			}
			this.tl = new gsap.timeline()
			this.tl.addLabel('start', 0)
			const s = 100 * this.leafDelta
			this.$refs.cards.forEach((e, t) => {
				this.tl.set(
					e,
					{
						x: -s * t + '%',
					},
					'start'
				)
				if (t !== this.$refs.cards.length - 1) {
					this.tl.to(e, {
						x: -s * t - s + '%',
						duration: 1,
						ease: 'none',
					})
				}
			})
			this.tl.progress(0.01)
			this.tl.progress(this.progressTarget)
			this.tl.pause()
		},
		async manageDnD() {
			const Hammer = (await import('hammerjs')).default
			this.panManager = new Hammer.Manager(this.$el, {
				inputClass: Hammer.TouchMouseInput,
			})
			this.panManager.add(
				new Hammer.Pan({
					direction: Hammer.DIRECTION_HORIZONTAL,
					threshold: 0,
				})
			)
			this.onPanStart = () => {
				this.dragging = true
				this.progressOnGrabStart = this.tl.progress()
			}
			this.panManager.on('panstart', this.onPanStart)
			this.onPanMove = ({ deltaX, velocityX }) => {
				const e = deltaX / this.progressDistDivider
				this.progressTarget = Math.max(
					0,
					Math.min(this.progressOnGrabStart + e, 1)
				)
				this.panSpeed = velocityX
			}
			this.panManager.on('panmove', this.onPanMove)
			this.onPanEnd = () => {
				this.dragging = false
			}
			this.panManager.on('panend', this.onPanEnd)
		},
		goTo(card, index) {
			if (this.tw && this.tw.kill) {
				this.tw.kill()
				this.tw = null
			}
			this.tw = gsap.to(this, {
				duration: 0.5,
				progressTarget: this.coords[index],
				ease: 'power2.out',
			})
		},
		update() {
			this.activeIndex = this.coords.indexOf(
				mathCalcProgressCoords(this.progressTarget, this.coords)
			)
			this.tl.progress(
				lerp(this.tl.progress(), this.progressTarget, this.lerpFactor)
			)
			this.RAF = requestAnimationFrame(this.update.bind(this))
		},
		compute() {
			this.innerBCR = this.$refs.inner.getBoundingClientRect()
			this.leafW = window.innerWidth <= 900 ? 0.8 : 0.5
			this.leafDelta =
				1 -
				((1 / this.leafW) * (1 - this.leafW)) / (this.$refs.cards.length - 1)
			this.progressDistDivider =
				-this.innerBCR.width *
				this.leafW *
				this.leafDelta *
				(this.$refs.cards.length - 1)
		},
		resize() {
			this.compute()
			this.initTl()
		},
		destroy() {
			this.panManager.off('panstart', this.onPanStart)
			this.panManager.off('panmove', this.onPanMove)
			this.panManager.off('panend', this.onPanEnd)
			this.panManager.destroy()
			this.panManager = null
			window.removeEventListener('resize', this.resize)
			cancelAnimationFrame(this.RAF)
		},
	},
}
</script>

<style lang="sass" scoped></style>
