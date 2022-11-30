<template>
  <div>
    <canvas ref="canvas"></canvas>
    <div
      id="container"
      class="absolute text-white text-center w-full max-w-2xl px-6"
    >
      <h1
        id="maria"
        class="font-space-mono text-xl uppercase tracking-wide opacity-0"
      >
        Maria Recskova
      </h1>
      <p id="paragraph" class="font-exo text-4xl mt-4 opacity-0">
        FRONTEND DEVELOPER WITH ENDLESS CURIOSITY FOR THE UNKNOWN
      </p>
      <a
        id="projectButton"
        class="border px-8 py-4 text-xl font-space-mono uppercase mt-8 hover:bg-white hover:text-slate-800 hover:border-0 inline-block opacity-0"
      >
        MY PROJECTS
      </a>
    </div>
  </div>
</template>

<script>
import {
  PlaneGeometry,
  Float32BufferAttribute,
  BufferAttribute,
  PerspectiveCamera,
  Raycaster,
  Scene,
  WebGLRenderer,
  MeshPhongMaterial,
  DoubleSide,
  Mesh,
  DirectionalLight,
  BufferGeometry,
  PointsMaterial,
  Points,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import gsap from "gsap";
import "../assets/css/style.css";
export default {
  mounted() {
    const dat = require("dat.gui");
    const gui = new dat.GUI();

    const world = {
      plane: {
        width: 400,
        height: 400,
        widthSegments: 50,
        heightSegments: 50,
      },
    };

    gui.add(world.plane, "width", 1, 500).onChange(generatePlane);
    gui.add(world.plane, "height", 1, 500).onChange(generatePlane);
    gui.add(world.plane, "widthSegments", 1, 100).onChange(generatePlane);
    gui.add(world.plane, "heightSegments", 1, 100).onChange(generatePlane);

    function generatePlane() {
      planeMesh.geometry.dispose();
      planeMesh.geometry = new PlaneGeometry(
        world.plane.width,
        world.plane.height,
        world.plane.widthSegments,
        world.plane.heightSegments
      );

      // vertice position randomization
      const { array } = planeMesh.geometry.attributes.position;
      const randomValues = [];
      for (let i = 0; i < array.length; i++) {
        if (i % 3 === 0) {
          const x = array[i];
          const y = array[i + 1];
          const z = array[i + 2];

          array[i] = x + (Math.random() - 0.5) * 3;
          array[i + 1] = y + (Math.random() - 0.5) * 3;
          array[i + 2] = z + (Math.random() - 0.5) * 3;
        }
        randomValues.push(Math.random() * Math.PI * 2);
      }

      //duplicating the array it with a new property
      planeMesh.geometry.attributes.position.randomValues = randomValues;
      planeMesh.geometry.attributes.position.originalPosition =
        planeMesh.geometry.attributes.position.array;

      const colors = [];
      for (let i = 0; i < planeMesh.geometry.attributes.position.count; i++) {
        colors.push(0, 0.19, 0.4);
      }
      planeMesh.geometry.setAttribute(
        "color",
        new BufferAttribute(new Float32Array(colors), 3)
      );
    }

    const camera = new PerspectiveCamera(
      75,
      innerWidth / innerHeight,
      0.1,
      1000
    );
    //laser pointer monitoring
    const raycaster = new Raycaster();
    const scene = new Scene();
    const renderer = new WebGLRenderer({ canvas: this.$refs.canvas });

    new OrbitControls(camera, renderer.domElement);

    renderer.setSize(innerWidth, innerHeight);
    renderer.setPixelRatio(devicePixelRatio);
    //this stops the jaggyness- it recognizes automatically the pixel ratio

    camera.position.z = 50;

    const planeGeometry = new PlaneGeometry(
      world.plane.width,
      world.plane.height,
      world.plane.widthSegments,
      world.plane.heightSegments
    );
    nt;

    const planeMaterial = new MeshPhongMaterial({
      side: DoubleSide,
      flatShading: FlatShading,
      vertexColors: true,
    });

    const planeMesh = new Mesh(planeGeometry, planeMaterial);
    scene.add(planeMesh);
    generatePlane();

    const light = new DirectionalLight(0xffffff, 1);
    light.position.set(0, 1, -1);
    scene.add(light);

    const backLight = new DirectionalLight(0xffffff, 1);
    light.position.set(0, 0, 1);
    scene.add(backLight);

    const starGeometry = new BufferGeometry();
    const starMaterial = new PointsMaterial({ color: 0xffffff });

    const starVertices = [];
    for (let i = 0; i < 10000; i++) {
      //gets a range from -1000 to 1000, and for 10000 stars from all dimensions
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      starVertices.push(x, y, z);
    }
    starGeometry.setAttribute(
      "position",
      new Float32BufferAttribute(starVertices, 3)
    );

    const stars = new Points(starGeometry, starMaterial);
    scene.add(stars);

    //they has to be undefined in the beginning
    const mouse = {
      x: undefined,
      y: undefined,
    };

    let frame = 0;

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      raycaster.setFromCamera(mouse, camera);
      frame += 0.01;
      const { array, originalPosition, randomValues } =
        planeMesh.geometry.attributes.position;

      for (let i = 0; i < array.length; i += 3) {
        //x
        array[i] =
          originalPosition[i] + Math.cos(frame + randomValues[i]) * 0.01;
        //y
        array[i + 1] =
          originalPosition[i + 1] +
          Math.sin(frame + randomValues[i + 1]) * 0.001;
      }

      planeMesh.geometry.attributes.position.needsUpdate = true;

      const interSects = raycaster.intersectObject(planeMesh);
      if (interSects.length > 0) {
        const { color } = interSects[0].object.geometry.attributes;
        //vertice 1
        color.setX(interSects[0].face.a, 0.1);
        color.setY(interSects[0].face.a, 0.5);
        color.setZ(interSects[0].face.a, 1);

        //vertice 2
        color.setX(interSects[0].face.b, 0.1);
        color.setY(interSects[0].face.b, 0.5);
        color.setZ(interSects[0].face.b, 1);

        //vertice 3
        color.setX(interSects[0].face.c, 0.1);
        color.setY(interSects[0].face.c, 0.5);
        color.setZ(interSects[0].face.c, 1);

        interSects[0].object.geometry.attributes.color.needsUpdate = true;

        const initialColor = {
          r: 0,
          g: 0.19,
          b: 0.4,
        };

        const hoverColor = {
          r: 0.1,
          g: 0.5,
          b: 1,
        };

        gsap.to(hoverColor, {
          r: initialColor.r,
          g: initialColor.g,
          b: initialColor.b,
          duration: 1,
          onUpdate: () => {
            color.setX(interSects[0].face.a, hoverColor.r);
            color.setY(interSects[0].face.a, hoverColor.g);
            color.setZ(interSects[0].face.a, hoverColor.b);

            //vertice 2
            color.setX(interSects[0].face.b, hoverColor.r);
            color.setY(interSects[0].face.b, hoverColor.g);
            color.setZ(interSects[0].face.b, hoverColor.b);

            //vertice 3
            color.setX(interSects[0].face.c, hoverColor.r);
            color.setY(interSects[0].face.c, hoverColor.g);
            color.setZ(interSects[0].face.c, hoverColor.b);
            color.needsUpdate = true;
          },
        });
      }
      stars.rotation.x += 0.0005;
    }

    animate();

    addEventListener("mousemove", (event) => {
      mouse.x = (event.clientX / innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / innerHeight) * 2 + 1;
    });

    gsap.to("#maria", {
      opacity: 1,
      duration: 1.5,
      y: 0,
      ease: "expo",
    });

    gsap.to("#paragraph", {
      opacity: 1,
      duration: 1.5,
      delay: 0.3,
      y: 0,
      ease: "expo",
    });

    gsap.to("#projectButton", {
      opacity: 1,
      duration: 1.5,
      delay: 0.6,
      y: 0,
      ease: "expo",
    });

    document.querySelector("#projectButton");
    addEventListener("click", (e) => {
      e.preventDefault();
      gsap.to("#container", {
        opacity: 0,
      });
      gsap.to(camera.position, {
        z: 25,
        ease: "power3.inOut",
        duration: 2,
      });
      gsap.to(camera.rotation, {
        x: 1.57,
        ease: "power3.inOut",
        duration: 2,
      });
      gsap.to(camera.position, {
        y: 1000,
        ease: "power3.in",
        duration: 1,
        delay: 2,
        onComplete: () => {
          this.$router.push("/work");
        },
      });
    });
    //to maintain the perfect aspect ratio
    addEventListener("resize", () => {
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(innerWidth, innerHeight);
    });
  },
};
</script>

<style></style>
