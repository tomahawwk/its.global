<template>
	<nuxt-link to="/work" class="button-wrap">
		<div
			class="button-wrap__area"
			ref="buttonArea"
			@mouseover="onMouseoverButton"
			@mouseout="onMouseoutButton"
		></div>

		<div ref="buttonMore" class="button button--circle">
			<slot></slot>
		</div>
	</nuxt-link>
</template>

<script>
import { gsap } from 'gsap'

export default {
	name: 'Button',
	methods: {
		onMouseoverButton(e) {
			this.$refs.buttonArea.addEventListener('mousemove', this.callParallax)
		},

		onMouseoutButton(e) {
			this.$refs.buttonArea.addEventListener('mouseleave', (e) => {
				gsap.to(this.$refs.buttonMore, {
					scale: 1,
					x: 0,
					y: 0,
					ease: 'sine',
					duration: 0.8,
				})
			})
		},

		callParallax(e) {
			this.parallaxIt(e, this.$refs.buttonMore)
		},

		parallaxIt(e, target, movement = 0.5) {
			var boundingRect = this.$refs.buttonArea.getBoundingClientRect()
			var relX = e.pageX - boundingRect.left
			var relY = e.pageY - boundingRect.top
			var scrollTop = window.pageYOffset || document.documentElement.scrollTop

			gsap.to(target, {
				x: (relX - boundingRect.width / 2) * movement,
				y: (relY - boundingRect.height / 2 - scrollTop) * movement,
				ease: 'power1',
				duration: 0.8,
			})
		},
	},
}
</script>
