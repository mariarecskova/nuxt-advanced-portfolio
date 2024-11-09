<template>
  <div
    class="flex flex-col items-start space-y-8 md:space-y-12 h-screen px-12 md:px-16 py-12"
  >
    <h2
      v-for="project in projects"
      class="font-space-mono text-xl md:text-2xl"
      ref="title"
    >
      {{ project.title }}
    </h2>
    <h4 class="font-space-mono text-xl md:text-2xl">01.07.2021-30.10.2022</h4>
    <p class="font-space-mono text-lg sm:text-xl mt-8">
      This is the website of a Berlin-based real estate company. It was built
      with React and Next.js frameworks, combined with Typescript.
      <br />The users can search and filter for apartments, register, upload
      documents, and send messages to the brokers. It also displays relevant
      informations and news about the property market in Berlin.<br />
      I worked on smaller UI improvements and fixed bugs in the beginning. Then
      I participated in bigger features, for example user account creation,
      document upload, property news, lexicon, newsletters and other various
      tasks that involved working creating new content models and queries in the
      company's Contentful CMS.<br />
      I optimized the website's SEO by implementing JSON-LD - structured data
      markup that helps Google Search Engine to understand the content of a
      page.<br />
      I also created several end-to-end test with Cypress, and I wrote the
      majority of the project documentation in the internal GitHub Wiki.
    </p>
    <div class="flex h-24 py-8 md:py-4">
      <a href="https://accentro.de/" target="_blank">
        <VideoPlayer v-bind:projects="projects"> </VideoPlayer>
      </a>
    </div>
  </div>
</template>

<script>
import VideoPlayer from "../../components/VideoPlayer.vue";
import accentroVideo from "~/assets/videos/accentroVideo.mp4";
import accentroDesktop from "~/assets/videos/accentro_desktop.mp4";

export default {
  data() {
    return {
      projects: [
        {
          video: {
            url: accentroVideo,
            url2: accentroDesktop,
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
