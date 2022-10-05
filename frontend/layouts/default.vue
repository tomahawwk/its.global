<template>
	<div>
		<Header :active="headerActive" />
		<div class="scroll-container">
			<Nuxt class="page" data-scroll />
			<Footer />
		</div>
		<Intro @complete="introCompleted = true" />
		<Popup />
	</div>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'

import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Intro from '~/components/Intro'
import Logo from '~/components/Logo'
import Popup from '~/components/ui/Popup'

export default {
	data: () => ({
		introCompleted: false,
	}),
	computed: {
		...mapGetters({
			headerActive: 'dom/headerActive',
		}),
	},
}
</script>

<style lang="sass" scoped>
.scroll-container
  overflow: hidden
  min-height: 100vh
</style>
