<template>
  <div
    class="mt-8 md:mt-16 text-white font-exo text-xl md:text-5xl w-full pb-4 md:pb-12 sm:max-w-lg md:max-w-3xl ml:max-w-5xl"
  >
    <h2>TESTIMONIALS</h2>
    <div class="mt-8 md:mt-12">
      <img :src="quote" />
      <div ref="slider" class="keen-slider">
        <div class="keen-slider__slide number-slide1">
          <p class="text-lg md:text-2xl font-space-mono font-semibold">
            Working with Maria was always a pleasure. The team recognized her as
            an interested, open-minded, honest, kind, and respectful person that
            is capable of facing new challenges as well as to apply newly
            acquired skills to solve problems.
          </p>
          <p class="text-md md:text-lg mt-8">
            Kevin Graf, Senior Developer and Project Manager, SODEFA
          </p>
        </div>
        <div class="keen-slider__slide number-slide2">
          <p class="text-lg md:text-2xl font-space-mono font-semibold">
            Maria ist eine sehr gute Teamplayerin und hat sich im Laufe der
            Projekte schnell neues Wissen angeeignet. Auftretende Probleme hat
            Maria immer klar kommuniziert. Die Lösung der Probleme konnte Sie
            immer klar mitverfolgen; i.d.R. reichten einige Hinweise, damit Sie
            selbstständig zu tragfähigen Lösungen gelangen konnte. Maria hat
            eine positive Grundeinstellung und eine ausgeprägte
            Lernbereitschaft.
          </p>
          <p class="text-md md:text-lg mt-8">
            Ruwen Poljak, Senior Developer, Metrinomics
          </p>
        </div>
        <div class="keen-slider__slide number-slide3">
          <p class="text-lg md:text-2xl font-space-mono font-semibold">
            I worked with Maria on several projects in Wild Code School and saw
            her great progress along the way! From the very first project, she
            was proactive in the team meetings and was giving great ideas and
            always made sure that her tasks were completed. She was also very
            active outside projects, by teaching yoga classes every day before
            the lessons she made a positive impact on the mental health of our
            group.
          </p>
          <p class="text-md md:text-lg mt-8">
            Olena Shutovska, React Developer, Workademy Teammate
          </p>
        </div>
        <div class="keen-slider__slide number-slide4">
          <p class="text-lg md:text-2xl font-space-mono font-semibold">
            I worked with Maria on two projects. She was a very good
            communicator and planed our projects effectively. She eagerly
            volunteered for difficult tasks and loved to learn new technologies
            and skills. I valued working with her, because she was always
            willing to give and accept good advice.
          </p>
          <p class="text-md md:text-lg mt-8">
            Pingcheng Yin, Sofware Engineer, Workademy Teammate
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";
import quote from "~/assets/images/quote.png";

export default {
  name: "Slider",
  data: function () {
    return {
      quote: quote,
    };
  },
  mounted() {
    this.slider = new KeenSlider(
      this.$refs.slider,
      {
        slidesPerView: 1,
        loop: true,
        slides: 4,
        mode: "snap",
      },
      [
        (slider) => {
          let timeout;
          let mouseOver = false;
          function clearNextTimeout() {
            clearTimeout(timeout);
          }
          function nextTimeout() {
            clearTimeout(timeout);
            if (mouseOver) return;
            timeout = setTimeout(() => {
              slider.next();
            }, 7000);
          }
          slider.on("created", () => {
            slider.container.addEventListener("mouseover", () => {
              mouseOver = true;
              clearNextTimeout();
            });
            slider.container.addEventListener("mouseout", () => {
              mouseOver = false;
              nextTimeout();
            });
            nextTimeout();
          });
          slider.on("dragStarted", clearNextTimeout);
          slider.on("animationEnded", nextTimeout);
          slider.on("updated", nextTimeout);
        },
      ]
    );
  },
  beforeDestroy() {
    if (this.slider) this.slider.destroy();
  },
};
</script>

<style>
[class^="number-slide"],
[class*=" number-slide"] {
  padding: 16px;
}
</style>
