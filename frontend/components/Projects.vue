<template>
	<div class="projects" data-scroll data-scroll-offset="10%, 0%">
		<div class="projects__head" v-if="title">
			<div class="projects__title">{{ title }}</div>
		</div>

		<div class="projects__list">
			<ProjectItem
				v-for="(item, index) in projectsList"
				v-bind:key="item.id"
				:item="item"
				:even="(index + 1) % 2 == 0"
			/>
		</div>

		<div class="projects__footer" v-if="moreButton">
			<Button to="/work" nuxt>+ 8 new</Button>
		</div>
	</div>
</template>

<script>
import { projectsQuery } from '~/graphql/queries/projects'
import ProjectItem from '~/components/ProjectItem'
import Button from '~/components/ui/Button'

export default {
	data: () => ({}),
	components: {
		ProjectItem,
	},
	props: ['moreButton', 'title'],
	computed: {
		projectsList() {
			return this.projects.data.attributes.Project
		},
	},
	methods: {},
	apollo: {
		projects: {
			prefetch: true,
			query: projectsQuery,
		},
	},
}
</script>

<style lang="sass">
@import "assets/styles/base/variables"
@import "assets/styles/base/mixins"

.projects
  +container
  width: 100%
  display: flex
  flex-direction: column
  grid-gap: 2rem

.projects__head
  grid-gap: 60px
  display: grid

  +media-up(md)
    grid-template-columns: 4fr 6fr

.projects__title
  +section-title

  +media-up(md)
    grid-column-start: 2

.projects__list
  display: flex
  flex-direction: column
  gap: 132px

.projects__footer
  position: relative
  margin-top: 6.25rem
  align-self: center
  justify-content: center

.projects--margins
  margin-top: 88px
  +yo('margin-bottom', (375px: 75px, 1440px: 130px))
</style>
