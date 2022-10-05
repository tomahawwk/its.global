<template>
  <nuxt-link class="link" :to="url">{{ text }}</nuxt-link>
</template>

<script>
export default ({
  props: ['text', 'url'],
})
</script>

<style lang="sass">
  .link
    font-size: 16px
</style>