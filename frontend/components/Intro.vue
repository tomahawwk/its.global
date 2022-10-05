<template>
	<section
		:class="[
			'intro',
			{
				'intro--animated': animated,
				'intro--hidden': hidden,
			},
		]"
	>
		<img :src="logoImage" class="intro__logo" />
	</section>
</template>

<script>
import logoImage from '../assets/images/its.agency.svg'

export default {
	data: () => ({
		hidden: false,
		animated: false,
		logoImage: logoImage,
	}),
	mounted() {
		window.addEventListener('load', () => {
			this.animated = true

			setTimeout(() => {
				this.hidden = true
				this.$emit('complete')
			}, 500)
		})
	},
}
</script>

<style lang="sass" scoped>
.intro
  z-index: 1100
  position: fixed
  top: 0
  left: 0
  width: 100vw
  height: 100vh

  display: flex
  align-items: center
  justify-content: center

  background: #000
  transition: opacity 0.4s cubic-bezier(.5,0,.4,1) 0.1s
  opacity: 1

.intro--animated
  opacity: 0

.intro--hidden
  pointer-events: none

.intro__logo
  transition: transform 0.6s cubic-bezier(.5,0,.4,1) 0.1s, opacity 0.1s cubic-bezier(.5,0,.4,1)
  animation: logoPulsation 1.8s infinite cubic-bezier(.5,0,.4,1)

.intro--animated .intro__logo
  transform: scale(10)
  opacity: 0 !important

@keyframes logoPulsation
  0%
    opacity: .20
  40%
    opacity: 1
  50%
    opacity: 1
  60%
    opacity: 1
  100%
    opacity: .20
</style>
