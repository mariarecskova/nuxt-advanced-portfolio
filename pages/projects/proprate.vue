<template>
  <div
    class="flex-col space-y-4 md:space-y-8 h-screen px-6 md:px-12 py-12 text-white max-w-sm sm:max-w-xl md:max-w-5xl ml:max-w-7xl"
  >
    <h2
      v-for="project in projects"
      class="font-exo text-4xl md:text-5xl"
      ref="title"
    >
      {{ project.title }}
    </h2>
    <h4 class="font-exo text-2xl md:text-3xl">30.08.2021-11.10.2021</h4>
    <p class="font-exo text-lg md:text-2xl mt-8">
      I worked on this project for a short time, when the workload was less by
      ACCENTRO. PropRate is a free tool to analyze real estate.<br />The
      webapplication was built with React and Next.js frameworks, using also
      Typescript as a language. The user can rate and compare apartments for
      sale within Germany.<br />I worked on smaller features: UI improvements,
      user account creation and password check. I implemented some end-to-end
      tests with Cypress.
    </p>
    <div class="flex h-24 py-8 md:py-4">
      <a href="https://proprate.de/" target="_blank">
        <VideoPlayer v-bind:projects="projects" />
      </a>
    </div>
  </div>
</template>

<script>
import VideoPlayer from "../../components/VideoPlayer.vue";
import proprateVideo from "~/assets/videos/proprateVideo.mp4";
import proprateDesktop from "~/assets/videos/proprate_desktop.mp4";

export default {
  data() {
    return {
      projects: [
        {
          video: {
            url: proprateVideo,
            url2: proprateDesktop,
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
