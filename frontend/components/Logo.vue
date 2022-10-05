<template>
  <nuxt-link to="/" class="logo">
    <img :src='`${image.attributes.url}`' />
  </nuxt-link>
</template>
<script>
export default ({
  props: ["image"]
})
</script>

<style lang="sass">
@import "assets/styles/base/variables"
@import "assets/styles/base/mixins-animations"

.logo
  position: relative
  width: 120px
  height: 30px
  +fadeY
  animation-delay: .4s

  img
    width: 100%
    height: 100%
</style>
