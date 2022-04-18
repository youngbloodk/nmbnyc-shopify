<template>
  <Renderer :alpha="true" ref="renderer" resize="window" :antialias="true">
    <Camera :position="{ x: 0, y: 0, z: 100 }" />
    <Scene>
      <NoisyImage
        :src="this.image"
        :width="750"
        :time-coef="0.0005"
        :noise-coef="6"
        :z-coef="3"
        :disp-coef="0.015"
      />
    </Scene>
  </Renderer>
</template>

<script>
import { Camera, Renderer, Scene } from "troisjs";
import NoisyImage from "./noisy-image.vue";
import { useWindowSize } from "vue-window-size";
import { toRef } from "@vue/reactivity";

export default {
  components: { Camera, NoisyImage, Renderer, Scene },
  props: { image: { type: String, default: "" } },

  setup(props) {
    const image = toRef(props, "image");
    const { width, height } = useWindowSize();
    let img = new Image();
    img.src = image.value;
    console.log(img.width);

    return {
      windowWidth: width,
      windowHeight: height,
    };
  },
};
</script>