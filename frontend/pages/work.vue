<template>
  <div class="container page--work">
		<h1 class="u-text-center">Work</h1>
    <Projects />
  </div>
</template>

<script>
import Vue from 'vue'
import Services from "~/components/Services";
import Projects from "~/components/Projects";
import page from '~/mixins/page'

export default Vue.extend({
  mixins: [page],
})
</script>

<style lang="sass">
.page.page--work
  padding-top: calc(var(--header-height) + 70px)
  padding-bottom: 8.25rem
  gap: 0
</style>
