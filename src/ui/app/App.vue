<template lang="pug">
TopBar
main
  RouterView
footer
  .container.footer-container
    .extra
      span Made by&nbsp;
      a(href="https://danielquero.github.io/" target="_blank") Daniel Quero
    .attributions-box
      img(src="tmdb.svg")
      | This product uses the TMDB API but is not endorsed or certified by TMDB.
</template>

<script lang="ts">
import TopBar from '@/ui/app/layout/topBar/topBar.vue'

import { Component, Vue } from 'vue-facing-decorator'

@Component({
  components: {
    TopBar,
  },
})
export default class HomeView extends Vue {
  year = (new Date()).getFullYear()
}
</script>

<style lang="sass">
main
  padding-top: 60px
footer
  .footer-container
    display: flex
    align-items: center
    justify-content: space-between
    flex-wrap: wrap
    .extra
      font-size: 20px !important
      flex: 1
    .attributions-box
      max-width: 320px
      font-size: 12px !important
      display: flex
      img
        width: 60px
        margin-right: 10px

</style>