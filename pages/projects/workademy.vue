<template>
  <div
    class="flex-col space-y-4 md:space-y-8 h-screen px-6 md:px-12 py-12 text-white max-w-sm md:max-w-lg ml:max-w-5xl"
  >
    <h2 class="font-exo text-4xl md:text-5xl" ref="title">Workademy</h2>
    <h4 class="font-exo text-2xl md:text-3xl">10.03.2020-04.05.2020</h4>
    <p class="font-exo text-xl mt-8">
      The internship was organized as part of the Wild Code School training
      program. <br />
      We developed the admin part of the Smart Course Builder application, using
      React, Redux and styled components. <br />I was coding smaller components
      in the beginning (buttons, home page, clickable sidebar) and then I was
      responsible for theming (light and dark mode) using React hooks and
      Context API
    </p>
    <div class="mt-8 flex flex-col space-y-8">
      <a class="font-exo text-3xl" href="https://github.com/chudaol/workademy"
        >Project on GitHub</a
      >
    </div>
    <div class="flex h-24 md:h-32 py-8 md:py-4 ml:max-w-2xl">
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
