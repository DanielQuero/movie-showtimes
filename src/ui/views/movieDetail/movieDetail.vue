<template lang="pug">
.demo_wrap(v-if="movieInfo")
  .image-container
    img.slider-style-img(:src="movieInfo.backdropImgUrl")
  .movie-section
    transition(name="slideup" appear)
      .container.movie-detail-floating-box(v-if="!loading")
        .movie-detail-box
          .movie-img-box
            img.movie-img(:src="movieInfo.posterImgUrl")
          .movie-info-box
            .movie-title {{ movieInfo.title }}
            .rating-row
              StarRating.rating-component(:rating="movieInfo.voteAverage")
              b.vote-average {{ movieInfo.voteAverage }}
              span.vote-count &nbsp; ({{ movieInfo.voteCount }} voters)
            .genres-row
              .chip(v-for="genre in movieInfo.genres") {{ genre.name }}
            .duration-row Duration: {{ movieInfo.runtime }} min
            .movie-description-box
              h3.movie-tagline {{ movieInfo.tagline }}
              .movie-description {{ movieInfo.overview }}
</template>

<script lang="ts" src="./movieDetail.ts"/>
<style lang="sass" scoped src="./movieDetail.sass"/>
