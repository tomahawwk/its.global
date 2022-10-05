<template>
	<ul class="menu">
		<li v-for="link in links" v-bind:key="link.id">
			<AnimatedLink :text="link.text" :url="link.url" />
		</li>
	</ul>
</template>

<script>
import AnimatedLink from '~/components/ui/AnimatedLink'

export default {
	components: {
		AnimatedLink,
	},
	props: ['links'],
}
</script>

<style lang="sass" scoped>
@import "assets/styles/base/variables"
@import "assets/styles/base/mixins"

.menu
  display: flex
  grid-gap: 35px
  li
    +fadeY
    &:nth-child(1)
      animation-delay: .5s
    &:nth-child(2)
      animation-delay: .6s
    &:nth-child(3)
      animation-delay: .7s

.menu--footer
  grid-gap: 4vw
  font-size: 20px

  +media-up(md)
    font-size: 24px

.menu--footer a
  font-weight: 400
  color: white

  .animated-link__part--bottom span
    color: $green

.animated-link
  &.nuxt-link-active
    text-decoration: line-through
</style>
