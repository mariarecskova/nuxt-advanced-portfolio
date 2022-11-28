<template>
  <div class="bg-black h-full md:h-screen px-6 py-12">
    <h2
      class="text-white font-exo text-5xl opacity-0"
      ref="title"
      style="transform: translateY(30px)"
    >
      MY PROJECTS
    </h2>
    <div class="mt-4 md:flex md:space-x-4 md:mt-8">
      <div
        ref="projects"
        v-for="project in projects"
        class="w-max-w-xs md:w-full opacity-0 py-8 md:py-4"
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
          url: "/accentro",
        },
        {
          image: {
            url: proprate,
          },
          title: "PROPRATE",
          url: "/proprate",
        },
        {
          image: {
            url: workademy,
          },
          title: "WORKADEMY",
          url: "/workademy",
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
