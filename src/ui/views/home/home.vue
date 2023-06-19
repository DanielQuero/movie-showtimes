<template lang="pug">
.bigger-container
  h1 Latest Movies

  .movies-list
    MovieCard(v-for="movie in moviesList" :movieInfo="movie")
</template>

<script lang="ts" src="./home.ts"/>
<style lang="sass" scoped src="./home.sass"/>