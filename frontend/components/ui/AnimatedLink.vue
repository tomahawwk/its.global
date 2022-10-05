<template>
  <nuxt-link class="animated-link" :to="url">
    <div class="animated-link__part animated-link__part--top">
      <span v-for='symbol in textArray' :style="`transition-delay: ${symbol.delay}`">{{ symbol.text }}</span>
    </div>
    <div class="animated-link__part animated-link__part--bottom">
      <span v-for='symbol in textArray' :style="`transition-delay: ${symbol.delay}`">{{ symbol.text }}</span>
    </div>
  </nuxt-link>
</template>

<script>
export default ({
  props: ['text', 'url'],
  computed: {
    textArray() {
      const array = [];
      Array.from(this.text).forEach((el, index) => {
        if(el === "_")
          el = "&nbsp;"

        array.push({
          id: index,
          text: el,
          delay: `${0.025 * index}s`
        })
      })
      return array;
    }
  }
})
</script>

<style lang="sass">
  .animated-link
    font-size: 16px
    position: relative
    overflow: hidden
    display: block
    &:hover
      .animated-link__part--top
        span
          transform: skewX(30deg) translateY(-100%)
      .animated-link__part--bottom
        span
          transform: skewX(0) translateY(-100%)
        
  .animated-link__part
    display: inline-flex
    left: 0
    span
      will-change: transform
      transition: transform .6s cubic-bezier(.67,.01,.27,1)
    &--bottom
      position: absolute
      left: 0
      top: 100%

</style>