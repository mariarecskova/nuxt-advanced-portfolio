<template>
  <div>
    <div ref="projects" v-for="project in projects">
      <video
        loop
        autoplay
        playsinline
        muted
        loading="lazy"
        style="object-fit: cover"
      >
        <source
          v-if="windowWidth <= 880"
          :src="project.video.url"
          type="video/mp4"
        />
        <source v-else :src="project.video.url2" type="video/mp4" />
      </video>
    </div>
  </div>
</template>
<script>
import { useWindowSize } from "vue-window-size";

export default {
  setup() {
    const { width, height } = useWindowSize();
    return {
      windowWidth: width,
      windowHeight: height,
    };
  },
  props: ["projects"],
  data() {
    return {};
  },
};
</script>
