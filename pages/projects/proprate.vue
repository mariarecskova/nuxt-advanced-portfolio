<template>
  <div
    class="flex-col space-y-4 md:space-y-8 h-screen px-6 md:px-12 py-12 text-white max-w-sm md:max-w-lg ml:max-w-5xl"
  >
    <h2 v-for="project in projects" class="font-exo text-5xl" ref="title">
      {{ project.title }}
    </h2>
    <h4 class="font-exo text-3xl">30.08.2021-11.10.2021</h4>
    <p class="font-exo text-xl mt-8">
      I worked on this project for a short time, when the workload was less by
      ACCENTRO. PropRate is a free tool to analyze real estate.<br />The
      webapplication was built with React and next.js frameworks, using also
      Typescript as a language. The user can rate and compare apartments for
      sale within Germany.<br />I worked on smaller features: UI improvements,
      user account creation and password check. I implemented end-to-end test
      with Cypress.
    </p>
    <div class="flex h-24 py-8 md:py-4 ml:max-w-md">
      <a href="https://proprate.de/">
        <VideoPlayer v-bind:projects="projects"></VideoPlayer>
      </a>
    </div>
  </div>
</template>

<script>
import VideoPlayer from "../../components/VideoPlayer.vue";
import proprateVideo from "~/assets/videos/proprateVideo.mp4";

export default {
  data() {
    return {
      projects: [
        {
          video: {
            url: proprateVideo,
          },
          title: "PROPRATE",
        },
      ],
    };
  },
  components: {
    VideoPlayer,
  },
};
</script>
