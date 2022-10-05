<template>
	<section class="hero" data-scroll data-scroll-offset="10%, 0%">
		<Scalable :width="title.width" :height="title.height">
			<div class="hero-title">
				<div class="hero-title__part hero-title__part--1">
					<span>Design &</span>

					<div
						class="hero-title__image hero-title__image--big"
						v-if="firstImage"
					>
						<img :src="`${firstImage.attributes.url}`" />
					</div>
				</div>

				<div class="hero-title__part hero-title__part--2">
					<span><span class="u-italic">web</span> development</span>
				</div>

				<div class="hero-title__part hero-title__part--3">
					<div class="hero-title__image" v-if="secondImage">
						<img :src="`${secondImage.attributes.url}`" />
					</div>

					<small class="hero-title__rotate">for</small>

					<div
						class="hero-title__word"
						@mouseover="onMouseover"
						@mouseout="stop"
					>
						{{ word }}
					</div>
				</div>
			</div>
		</Scalable>
	</section>
</template>

<script>
import { heroQuery } from '~/graphql/queries/hero'
import Scalable from '~/components/ui/Scalable.vue'

export default {
	data: () => ({
		delay: 600,
		wordInterval: null,
		wordIndex: 0,
		word: 'business',
		title: {
			width: 1160,
			// height: 732,
			height: 760,
		},
	}),
	apollo: {
		hero: {
			prefetch: true,
			query: heroQuery,
		},
	},
	computed: {
		firstImage() {
			return this.hero.data.attributes.first_image.image?.data
		},
		secondImage() {
			return this.hero.data.attributes.second_image.image?.data
		},
		words() {
			return this.hero.data.attributes.word
		},
	},
	methods: {
		onMouseover() {
			this.start()
		},
		start() {
			this.wordInterval = setInterval(() => {
				if (this.wordIndex === this.words.length - 1) {
					this.wordIndex = 0
				} else {
					this.wordIndex = this.wordIndex + 1
				}
				this.onWordChange(this.words[this.wordIndex].text)
			}, this.delay)
		},
		stop() {
			clearInterval(this.wordInterval)
			this.wordIndex = 0
		},
		onWordChange(word) {
			this.word = word
		},
	},
	components: { Scalable },
}
</script>
