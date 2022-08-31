<template>
  <div class="header-menu">
    <div v-for="link in headerMenu.data.attributes.link" v-bind:key="link.id">
      <Link :text="link.text" :url="link.url" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Link from '~/components/Link'
import { headerMenuQuery } from '~/graphql/query'
export default ({
  data() {
    return {
      headerMenu: [],
    }
  },
  apollo: {
    headerMenu: {
      prefetch: true,
      query: headerMenuQuery
    }
  },
  components: {
    Link
  }
})
</script>

<style lang="sass" scoped>
  .header-menu
    display: flex
    grid-gap: 35px
</style>
