<template>
	<footer class="footer container" data-scroll data-scroll-offset="30%, 0%">
		<div class="footer__top">
			<span class="footer__office" v-if="office">{{ office.text }}</span>
			<p class="footer__text" v-if="text">{{ text.text }}</p>

			<AnimatedLink
				v-if="email"
				:text="email.text"
				:url="email.url"
				class="footer__email"
			/>
		</div>
		<div class="footer__bottom">
			<Menu v-if="socials" :links="socials" class="menu--footer" />
			<div class="footer__address">
				<span
					v-if="address"
					v-for="addressRow in address"
					v-bind:key="addressRow.id"
					>{{ addressRow.text }}</span
				>
			</div>
		</div>
	</footer>
</template>

<script>
import { footerQuery } from '~/graphql/queries/footer'
import Link from '~/components/ui/Link'
import Menu from '~/components/Menu'
export default {
	computed: {
		office() {
			return this.footer.data.attributes.Office
		},
		text() {
			return this.footer.data.attributes.Text
		},
		email() {
			return this.footer.data.attributes.Email
		},
		socials() {
			return this.footer.data.attributes.Socials
		},
		address() {
			return this.footer.data.attributes.Address
		},
	},
	apollo: {
		footer: {
			prefetch: true,
			query: footerQuery,
		},
	},
}
</script>

<style lang="sass">
@import "assets/styles/base/variables"
@import "assets/styles/base/mixins"

.footer
  background: black
  color: white
  padding-top: 46px
  padding-bottom: 100px
  display: flex
  flex-direction: column
  +yo('gap', (425px: 66px, 1440px: 110px))

  +media-up(md)
    padding-top: 90px

  +media-up(lg)

.footer.is-inview
  .footer__office, .footer__text, .footer__email, .footer__bottom .menu li, .footer__address span
    opacity: 1
    transform: translateY(0)

.footer__top
  max-width: 700px
  display: flex
  flex-direction: column
  grid-gap: 28px

  +media-up(md)
    grid-gap: 20px

.footer__office
  // font-weight: 400
  font-size: 16px
  display: flex
  align-items: center
  grid-gap: 7px
  line-height: 120%
  +transitionY
  transition-delay: .4s

  &:before
    content: ''
    width: 6px
    height: 6px
    margin-top: -3px
    border-radius: 100%
    background-color: white

.footer__text
  +yo('font-size', (425px: 22px, 1440px: 36px))
  line-height: 1.15
  +transitionY
  transition-delay: .3s

.footer__email
  font-weight: 400
  +yo('font-size', (425px: 36px, 1440px: 64px))
  line-height: 1.11
  color: var(--voice)
  +transitionY
  transition-delay: .2s

  &:visited
    color: var(--voice)

.footer__bottom
  display: flex
  justify-content: space-between
  align-items: flex-end
  .menu
    li
      animation: none
      &:nth-child(1)
        +transitionY
        transition-delay: .2s
      &:nth-child(2)
        +transitionY
        transition-delay: .3s
      &:nth-child(3)
        +transitionY
        transition-delay: .4s

.footer__address
  display: none
  grid-gap: 4px
  flex-direction: column

  span
    text-align: right
    // font-weight: 400
    font-size: 16px
    &:nth-child(1)
      +transitionY
      transition-delay: .6s
    &:nth-child(2)
      +transitionY
      transition-delay: .5s
    &:nth-child(3)
      +transitionY
      transition-delay: .4s

  +media-up(md)
    display: flex
</style>
