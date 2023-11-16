<template lang="pug">
.bigger-container
  h1 Latest Movies

  .movies-list(:style="{ '--total': moviesList.length }")
    transition-group(name="scale" appear)
      MovieCard(
        v-for="(movie, index) in moviesList"
        :movieInfo="movie"
        :key="movie.id"
        :data-index="index"
        :style="{ '--total': moviesList.length , '--i': `${index}`}"
      )
</template>

<script lang="ts" src="./home.ts"/>
<style lang="sass" scoped src="./home.sass"/>