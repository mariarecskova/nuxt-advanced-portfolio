<template>
  <div
    class="flex flex-col items-start space-y-8 md:space-y-12 h-screen px-12 md:px-16 py-12"
  >
    <h2 class="font-space-mono text-xl md:text-2xl" ref="title">Workademy</h2>
    <h4 class="font-space-mono text-xl md:text-2xl">10.03.2020-04.05.2020</h4>
    <p class="font-space-mono text-lg sm:text-xl mt-8">
      The internship was organized as part of the Wild Code School training
      program. <br />
      We developed the admin part of the Smart Course Builder application, using
      React, Redux and styled components. <br />I was coding smaller components
      in the beginning (buttons, home page, clickable sidebar) and then I was
      responsible for theming (light and dark mode) using React hooks and
      Context API
    </p>
    <div class="mt-8 flex flex-col space-y-8">
      <a
        class="font-space-mono text-3xl"
        href="https://github.com/chudaol/workademy"
        >Project on GitHub</a
      >
    </div>
    <div class="flex h-24 py-8 md:py-4">
      <a href="https://www.theworkademy.com/" target="_blank">
        <VideoPlayer v-bind:projects="projects" />
      </a>
    </div>
  </div>
</template>

<script>
import VideoPlayer from "../../components/VideoPlayer.vue";
import workademyVideo from "~/assets/videos/workademy_ok.mp4";

export default {
  data() {
    return {
      projects: [
        {
          video: {
            url: workademyVideo,
            url2: workademyVideo,
          },
          title: "WORKADEMY",
        },
      ],
    };
  },
  components: {
    VideoPlayer,
  },
};
</script>
