<template>
  <div>
    <div ref="projects" v-for="project in projects">
      <video loop autoplay playsinline muted style="object-fit: cover">
        <source :src="project.video.url" type="video/mp4" />
      </video>
    </div>
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
