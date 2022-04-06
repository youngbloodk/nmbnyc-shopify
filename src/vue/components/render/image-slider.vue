<template>
  <Splide
    :options="{
      autoplay: true,
      rewind: true,
      interval: 2000,
      pagination: false,
    }"
  >
    <SplideSlide v-for="image in this.images" :key="image">
      <img :src="image" :alt="image.alt" class="min-h-full object-cover" />
    </SplideSlide>
  </Splide>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

export default {
  components: { Splide, SplideSlide },
  props: {
    images: {
      type: Array,
      default: () => {
        [];
      },
    },
  },
};
</script>

<style>
.splide__arrow {
  background-color: transparent !important;
}
</style>