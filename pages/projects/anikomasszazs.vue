<template>
  <div
    class="flex flex-col items-start space-y-8 md:space-y-12 h-screen px-12 md:px-16 py-12 text-white"
  >
    <div>
      <h2 class="font-exo text-4xl md:text-5xl" ref="title">ANIKOMASSZAZS</h2>
    </div>
    <h4 class="font-exo text-2xl md:text-3xl">01.02.2021-15.02.2021</h4>
    <p class="font-exo sm:text-xl md:text-2xl mt-8">
      This is static website of a Hungarian massage therapist living in my home
      village in Slovakia. It was a great practice for me on how to provide a
      complete service.
      <br />Firstly, I took some high resolution photos of her massage studio,
      then I created her logo with Canva. Then I chose a color combination from
      the photos, and from this I created Figma designs for mobile and desktop.
      <br />
      Then I coded the website with HTML, Javascript and CSS, following the
      mobile first approach. At the end, I deployed a page on Netlify, and I
      chose a domain provider for her. The domain already expired, but the page
      is still available on Netlify.
    </p>
    <div class="flex h-24 py-8 object-cover md:py-4">
      <a href="https://anikomasszazs.netlify.app/index.html" target="_blank">
        <div>
          <img
            v-if="windowWidth <= 640"
            :src="anikomasszazsMobile"
            alt="anikomasszazs-mobile"
          />
          <img
            v-else-if="windowWidth <= 880"
            :src="anikomasszazsTablet"
            alt="anikomasszazs-tablet"
          />
          <img v-else :src="anikomasszazsDesktop" alt="anikomasszazs-desktop" />
        </div>
      </a>
    </div>
  </div>
</template>
<script>
import anikomasszazsDesktop from "~/assets/images/anikomasszazsDesktop.png";
import anikomasszazsTablet from "~/assets/images/animasszazsTablet.png";
import anikomasszazsMobile from "~/assets/images/anikomasszazsMobile.png";
import "../../assets/css/style.css";
import { useWindowSize } from "vue-window-size";

export default {
  setup() {
    const { width, height } = useWindowSize();
    return {
      windowWidth: width,
      windowHeight: height,
    };
  },
  data: function () {
    return {
      anikomasszazsDesktop: anikomasszazsDesktop,
      anikomasszazsTablet: anikomasszazsTablet,
      anikomasszazsMobile: anikomasszazsMobile,
    };
  },
};
</script>
