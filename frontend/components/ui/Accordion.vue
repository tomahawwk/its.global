<template>
	<ul class="services__list">
		<slot></slot>
	</ul>
</template>

<script>
export default {
	data() {
		return {
			Accordion: {
				count: 0,
				current: null,
			},
		}
	},
	provide() {
		return { Accordion: this.Accordion }
	},
}
</script>
