<template>
  <div class="header container">
    <Logo />
    <HeaderMenu />
  </div>
</template>

<script>
import Vue from 'vue'
import HeaderMenu from "~/components/HeaderMenu";
import Logo from "~/components/Logo";
export default ({
  data() {
    return {
      api_url: process.env.strapiBaseUri,
    };
  },
  props: {
    articles: Object,
  },
  mounted(){
    console.log(this.api_url)
  }
})
</script>

<style lang="sass">
    .header
        display: flex
        top: 0
        left: 0
        width: 100vw
        position: fixed
        padding-top: 35px
        padding-bottom:35px
        align-items: center
        justify-content: space-between
</style>