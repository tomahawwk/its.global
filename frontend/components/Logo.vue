<template>
  <nuxt-link to="/" class="logo">
    <img :src="require(`~/assets/svg/logo.svg`)" />
  </nuxt-link>
</template>

<style lang="sass">
    .logo
        position: relative
        width: 120px
        height: 30px
        img
            width: 100%
            height: 100%
</style>