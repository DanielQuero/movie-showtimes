<template lang="pug">
router-link.movie-box(:to="{ name: 'movieDetail', params: { id: movieInfo.id } }")
  .movie-img-box
    img.movie-img(:src="movieInfo?.posterImgUrl")
  .movie-info-box
    .rating-row
      StarRating(:rating="movieInfo.voteAverage")
      b.vote-average {{ movieInfo.voteAverage }}
    .movie-title {{ movieInfo.title }}
</template>

<script lang="ts" src="./movieCard.ts"/>
<style lang="sass" scoped src="./movieCard.sass"/>
