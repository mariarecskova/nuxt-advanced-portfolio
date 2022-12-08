<template>
  <div class="bg-black h-full md:h-screen px-6 py-12">
    <div class="mt-4">
      <h2 class="text-white font-exo text-3xl md:text-5xl">ABOUT ME</h2>
      <p
        class="text-white text-xl md:text-2xl font-space-mono font-semibold mt-8 md:mt-12"
      >
        I am a frontend developer based in Freiburg, Germany. <br />I started my
        career in tech 2,5 years ago, after finishing an intensive coding
        bootcamp at Wild Code School. I work with Typescript, React and Next.js.
        Currently, I am learning Vue and Three.js. <br />I feel empowered
        whenever I see a new component appearing on my screen. Coding gives me
        an endless source of creativity. I enjoy problem solving more than
        anything. Errors and bugs will always come, and it is a challenge to
        learn from them.
      </p>
    </div>

    <h2
      class="text-white font-exo text-3xl md:text-5xl opacity-0 mt-8 md:mt-12"
      ref="title"
      style="transform: translateY(30px)"
    >
      MY PROJECTS
    </h2>
    <div class="md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-12 mt-8 md:mt-12">
      <div
        ref="projects"
        v-for="project in projects"
        class="md:w-full opacity-0 py-8 md:py-4"
        style="transform: translateX(30px)"
      >
        <NuxtLink :to="`${project.url}`">
          <img
            :src="project.image.url"
            alt="accentro"
            style="height: 50vh"
            class="object-cover"
          />
          <p class="text-white text-2xl font-space-mono font-semibold">
            {{ project.title }}
          </p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import accentro from "~/assets/images/accentro_mobile.png";
import anikomasszazs from "~/assets/images/anikomasszazs.png";
import proprate from "~/assets/images/proprate_mobile.png";
import workademy from "~/assets/images/workademy_mobile.png";
import gsap from "gsap";

export default {
  data() {
    return {
      projects: [
        {
          image: {
            url: accentro,
          },
          title: "ACCENTRO",
          url: "./projects/accentro",
        },
        {
          image: {
            url: proprate,
          },
          title: "PROPRATE",
          url: "./projects/proprate",
        },
        {
          image: {
            url: workademy,
          },
          title: "WORKADEMY",
          url: "./projects/workademy",
        },
        {
          image: {
            url: anikomasszazs,
          },
          title: "ANIKOMASSZAZS",
          url: "./projects/anikomasszazs",
        },
      ],
    };
  },

  mounted() {
    gsap.to(this.$refs.title, {
      opacity: 1,
      duration: 1.5,
      y: 0,
      ease: "expo",
    });
    gsap.to(this.$refs.projects, {
      opacity: 1,
      duration: 1.5,
      stagger: 0.1,
      x: 0,
      ease: "expo",
      delay: 0.3,
    });
  },
};
</script>
