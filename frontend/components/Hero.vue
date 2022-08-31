<template>
  <section class="hero">
    <div class="hero-title">
        <div class="hero-title__part">
            <span>Design &</span>
            <div class="hero-title__image hero-title__image--big"></div>
        </div>
        <div class="hero-title__part">
            <span>web development</span>
        </div>
        <div class="hero-title__part">
            <div class="hero-title__image"></div>
            <small>for</small>
            <div class="hero-title__word" @mouseover="onMouseover" @mouseout="stop">{{ word }}</div>
        </div>
    </div>
  </section>
</template>

<script>
import { heroWordsQuery } from '~/graphql/query'
export default ({
  data() {
    return {
        heroWord: [],
        delay: 300,
        wordInterval: null,
        wordIndex: 0,
        word: 'buisness'
    }
  },
  apollo: {
    heroWord: {
      prefetch: true,
      query: heroWordsQuery
    }
  },
  computed : {
    words() {
      return this.heroWord.data.attributes.Word;
    },
  },
  methods: {
    onMouseover() {
      this.start();
    },
    start() {
      this.wordInterval = setInterval(() => {
        if (this.wordIndex === this.words.length - 1) {
          this.wordIndex = 0
        } else {
          this.wordIndex = this.wordIndex + 1
        }
        this.onWordChange(this.words[this.wordIndex].Word)
      }, this.delay)
    },
    stop() {
      clearInterval(this.wordInterval)
      this.wordIndex = 0
    },
    onWordChange(word) {
        this.word = word;
    }
  },
  mounted(){
    console.log(this.heroWord)
  }
})
</script>

<style lang="sass">
@import "assets/sass/_utils"

.hero
    height: 100vh
    width: 100%
    display: flex
    align-items: center
    padding: 0 7vw

.hero-title
    +yo('font-size', (375px: 48px, 1920px: 144px))
    line-height: .7
    letter-soacing: 0.04em
    +trav(l)
    display: grid
    grid-gap: 30px
    small
        font-size: 35%
        +yo('font-size', (375px: 28px, 1920px: 48px))
        +trav(r)

.hero-title__part
    display: flex
    align-items: flex-end
    grid-gap: 20px

.hero-title__image
    width: 15vw
    height: 11vh
    border: 1px solid black
    border-radius: 8px

.hero-title__image--big
    width: 18vw

.hero-title__word
    position: relative
    cursor: auto
    &:before
        content: ''
        position: absolute
        height: 6px
        width: 100%
        bottom: -8px
        left: 5px
        background: rgba(0,0,0,.05)

</style>