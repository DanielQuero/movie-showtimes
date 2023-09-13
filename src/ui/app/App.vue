<template lang="pug">
TopBar
main
  RouterView
</template>

<script lang="ts">
import TopBar from '@/ui/app/layout/topBar/topBar.vue'

import { Component, Vue } from 'vue-facing-decorator'

@Component({
  components: {
    TopBar,
  },
})
export default class HomeView extends Vue {}
</script>

<style lang="sass">
main
  padding-top: 60px
</style>