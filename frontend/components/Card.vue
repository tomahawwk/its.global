<template>
	<article class="card">
		<div class="card__badge">{{ data.badge }}</div>
		<h2 class="card__heading" v-if="data">{{ data.title }}</h2>
		<div class="card__text">
			<p>{{ data.text }}</p>
		</div>
		<img :src="data.imageUrl" class="card__image" alt="" />
	</article>
</template>

<script>
export default {
	props: ['data'],
	// props: { card: { type: Array }, index: Number, active: Boolean },
	// data: () => ({
	// 	imageLoaded: false,
	// }),
	// mounted() {
	// 	this.loadObserve()
	// },
	// methods: {
	// 	loadObserve() {
	// 		this.loadObserver = new IntersectionObserver((entries) => {
	// 			entries.forEach(({ isIntersecting, target }) => {
	// 				if (!isIntersecting) return false
	// 				const img = this.$el.querySelector('.about-card__img')
	// 				if (img) img.src = img.dataset.src
	// 				this.loadObserver.unobserve(target)
	// 			})
	// 		})
	// 		this.loadObserver.observe(this.$el)
	// 	},
	// },
}
</script>
