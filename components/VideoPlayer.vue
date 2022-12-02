<template>
  <div>
    <v-card elevation="2" ref="projects" v-for="project in projects">
      <a href="https://accentro.de/">
        <video loop autoplay playsinline muted style="object-fit: cover">
          <source :src="project.video.url" type="video/mp4" />
        </video>
      </a>
    </v-card>
  </div>
</template>
<script>
import accentroVideo from "~/assets/videos/accentroVideo.mp4";

export default {
  data() {
    return {
      projects: [
        {
          video: {
            url: accentroVideo,
          },
          title: "ACCENTRO",
          url: "https://accentro.de/",
        },
      ],
    };
  },
};
</script>
