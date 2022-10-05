<template>
	<div>
		<Hero />
		<Services />
		<Projects
			class="projects--margins"
			title="Featured projects"
			more-button="true"
		/>
		<Cards />
	</div>
</template>

<script>
import Vue from 'vue'
import Hero from '~/components/Hero'
import Services from '~/components/Services'
import Projects from '~/components/Projects'
import page from '~/mixins/page'
import Cards from '~/components/Cards'

export default Vue.extend({
	mixins: [page],
})
</script>
