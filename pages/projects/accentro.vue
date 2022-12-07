<template>
  <div
    class="flex-col space-y-4 md:space-y-8 h-screen px-6 md:px-12 py-12 text-white max-w-sm md:max-w-lg ml:max-w-5xl"
  >
    <h2 v-for="project in projects" class="font-exo text-5xl" ref="title">
      {{ project.title }}
    </h2>
    <h4 class="font-exo text-3xl">01.07.2021-30.10.2022</h4>
    <p class="font-exo text-xl mt-8">
      This is the website of a Berlin-based real estate company. It was built
      with React and next.js frameworks, combined with Typescript.
      <br />The user can search and filter for apartments, register, upload
      documents, and send messages to the brokers. It also displays relevant
      informations and news about the property market in Berlin.<br />
      worked on different features (UI improvements, user account creation,
      document upload, news display and chart display with the help of
      Contentful).<br />
      I implemented several end-to-end test with Cypress, and I wrote nearly the
      complete documentation of the project in the internal GitHub Wiki.
    </p>
    <div class="flex h-24 py-8 md:py-4 ml:max-w-md">
      <a href="https://accentro.de/">
        <VideoPlayer v-bind:projects="projects"></VideoPlayer>
      </a>
    </div>
  </div>
</template>

<script>
import VideoPlayer from "../../components/VideoPlayer.vue";
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
        },
      ],
    };
  },
  components: {
    VideoPlayer,
  },
};
</script>
