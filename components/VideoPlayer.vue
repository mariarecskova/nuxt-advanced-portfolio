<template>
  <div>
    <v-card elevation="2" ref="projects" v-for="project in projects">
      <video
        v-lazy-load
        loop
        autoplay
        playsinline
        muted
        style="object-fit: cover"
      >
        <source :src="project.video.url" type="video/mp4" />
      </video>
    </v-card>
  </div>
</template>
<script>
export default {
  props: ["projects"],
  data() {
    return {};
  },
};
</script>
