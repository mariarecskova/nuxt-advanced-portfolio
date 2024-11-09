<template>
  <div class="bg-black h-full md:h-screen px-6 md:px-14 py-12">
    <div class="mt-4 opacity-0" ref="me">
      <h2 class="text-white font-exo text-3xl md:text-5xl">ABOUT ME</h2>
      <div class="md:flex md:items-center md:space-x-24">
        <img
          class="object-cover h-60 md:h-80 mt-8 md:mt-12"
          src="../assets/images/maria.jpeg"
          alt="maria"
        />

        <div class="flex-col space-y-4 md:space-y-8 justify-center">
          <div
            v-for="contact in contacts"
            class="flex items-center space-x-4 mt-8 md:mt-12 font-space-mono text-white font-semibold text-lg md:text-2xl"
          >
            <img :src="contact.image.url" class="h-4 md:h-6" alt="mail icon" />
            <span>
              <a :href="contact.url" target="_blank">
                <p class="cursor-pointer">{{ contact.text }}</p>
              </a>
            </span>
          </div>
        </div>
      </div>
      <p
        class="text-white text-lg md:text-2xl font-space-mono leading-normal md:leading-relaxed font-semibold mt-8 md:mt-12"
      >
        I am a frontend developer based in Freiburg, Germany. <br />I started my
        career in tech 4,5 years ago, after finishing an intensive coding
        bootcamp at Wild Code School in Berlin. Since then I have been working
        on great projects in agile teams, firstly for smaller companies, and
        currently for a large corporation. <br />
        My favorite tech stack is React, Typescript and Next.js, using Tailwind
        for styling. This portfolio website was built with Vue.js, Nuxt and
        Three.js. <br />I feel empowered whenever I see a new component
        appearing on my screen. Coding gives me an endless source of creativity.
        I enjoy problem solving more than anything. Errors and bugs will always
        come, the challenge is to learn from them.
      </p>
    </div>

    <h2
      class="text-white font-exo text-xl md:text-5xl opacity-0 mt-8 md:mt-12"
      ref="title"
      style="transform: translateY(30px)"
    >
      MY PROJECTS
    </h2>
    <div
      class="flex flex-col sm:grid sm:grid-cols-2 sm:gap-x3 md:gap-x-4 md:gap-y-12 mt-8 md:mt-12 ml:grid-cols-4 ml:gap-x-5"
    >
      <div
        ref="projects"
        v-for="project in projects"
        class="w-full sm:w-11/12 md:w-full py-8 sm:py-4"
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
    <div ref="slider" class="opacity-0">
      <Slider />
    </div>
  </div>
</template>

<script>
import accentro from "~/assets/images/accentro_mobile.png";
import anikomasszazs from "~/assets/images/anikomasszazs.png";
import proprate from "~/assets/images/proprate_mobile.png";
import workademy from "~/assets/images/workademy_mobile.png";
import mail from "~/assets/images/mail-24.png";
import linkedIn from "~/assets/images/linkedin-24.png";
import gsap from "gsap";
import Slider from "../components/Slider.vue";

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
      contacts: [
        {
          image: {
            url: mail,
          },
          text: "maria.recska@gmail.com",
          url: "mailto:maria.recska@gmail.com",
        },
        {
          image: {
            url: linkedIn,
          },
          text: "LinkedIn",
          url: "https://www.linkedin.com/in/mariarecskova/",
        },
      ],
    };
  },
  components: {
    Slider,
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
    gsap.to(this.$refs.me, {
      opacity: 1,
      duration: 1.5,
      y: 0,
      ease: "expo",
    });
    gsap.to(this.$refs.slider, {
      opacity: 1,
      duration: 1.5,
      y: 0,
      ease: "expo",
    });
  },
};
</script>
