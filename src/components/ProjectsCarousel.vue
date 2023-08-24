<script setup>
import projectsData from "../components/projects/projectsData.js";
</script>

<template>
  <div
    class="mt-10 text-xl text-left mx-auto max-w-[900px] pl-12 pr-12 px-6 md:px-12 md:pl-20 md:pr-20 lg:px-24 xl:px-32 dark:text-white"
  >
    <h1 class="font-bold">{{ $t("My latest projects") }}</h1>
    <p class="text-sm">
      <span
        class="text-blue-500 hover:text-blue-600 cursor-pointer"
        @click="$router.push('projects')"
      >
        {{ $t("projects.description") }}
        <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
      </span>
    </p>

    <div class="carousel-container mt-4">
      <div class="carousel-arrow left" @click="moveCarousel(-1)">
        <!-- Icono de flecha izquierda aquí 
        <i class="fa-solid fa-arrow-left"></i>-->
      </div>

      <div class="carousel">
        <!-- Tus tarjetas van aquí -->
        <router-link to="/projects">
        <div
        class="bg-white dark:bg-gray-800 border-2 border-gray-200 ml-2 mr-2 dark:border-gray-900 max-w-[200px] min-w-[200px] text-dark dark:text-white rounded-lg font-sans hover:scale-105 transition-all"
      >
        <h2 class="text-base text-center mt-4 mb-2 font-bold font-mono">
          My Homepage
        </h2>
        <img
          class="h-20 w-32 mt-2 mb-2 mx-auto rounded"
          src="../components/projects/images/MyHomepage3.png"
        />
        <!--<p class="text-sm text-center mt-2 mb-2">Texto de prueba</p>-->
        <p class="text-md text-center mb-4">
          <i class="fa-brands fa-vuejs mr-2"></i>
          <i class="fa-brands fa-css3-alt"></i>
        </p>
      </div></router-link>

      <router-link to="/projects/bbcc">
        <div
        class="bg-white dark:bg-gray-800 border-2 border-gray-200 ml-2 mr-2 dark:border-gray-900 max-w-[200px] min-w-[200px] text-dark dark:text-white rounded-lg font-sans hover:scale-105 transition-all"
      >
        <h2 class="text-base text-center mt-4 mb-2 font-bold font-mono">
          BBCC
        </h2>
        <img
          class="h-20 w-32 mt-2 mb-2 mx-auto rounded"
          src="../components/projects/images/bbcc-inmobiliaria-cover.png"
        />
        <!--<p class="text-sm text-center mt-2 mb-2">Texto de prueba</p>-->
        <p class="text-md text-center mb-4">
          <i class="fa-brands fa-php mr-2"></i>
          <i class="fa-brands fa-square-js mr-2"></i>
          <i class="fa-brands fa-css3-alt"></i>
        </p>
      </div>
      </router-link>

      <router-link to="/projects/birthBot">
      <div
        class="bg-white dark:bg-gray-800 border-2 border-gray-200 ml-2 mr-2 dark:border-gray-900 max-w-[200px] min-w-[200px] text-dark dark:text-white rounded-lg font-sans hover:scale-105 transition-all"
      >
        <h2 class="text-base text-center mt-4 mb-2 font-bold font-mono">
          birthBot
        </h2>
        <img
          class="h-20 w-32 mt-2 mb-2 mx-auto rounded"
          src="../components/projects/images/birthbot.png"
        />
        <!--<p class="text-sm text-center mt-2 mb-2">Texto de prueba</p>-->
        <p class="text-md text-center mb-4">
          <i class="fa-brands fa-python mr-2"></i>
          <i class="fa-brands fa-discord"></i>
        </p>
      </div>
      </router-link>

      <div class="carousel-arrow right" @click="moveCarousel(1)">
        <!-- Icono de flecha derecha aquí 
        <i class="fa-solid fa-arrow-right"></i>-->
      </div>
    </div>

    <div class="mt-4 flex justify-center">
      
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0, // Índice de la tarjeta actual
      cards: [], // Aquí debes colocar tus datos de tarjetas
      cardsPerPage: 2, // Número de tarjetas por página
    };
  },
  computed: {
    visibleCards() {
      // Calcula las tarjetas visibles en función del índice actual y las tarjetas por página
      return this.cards.slice(
        this.currentIndex,
        this.currentIndex + this.cardsPerPage
      );
    },
  },
  methods: {
    moveCarousel(step) {
      // Mueve el carrusel hacia la izquierda (-1) o la derecha (1)
      const newIndex = this.currentIndex + step;
      if (newIndex >= 0 && newIndex <= this.cards.length - this.cardsPerPage) {
        this.currentIndex = newIndex;
      }
    },
  },
};
</script>

<style scoped>
.carousel-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.carousel {
  display: flex;
  transition: transform 0.3s ease;
}

.carousel-arrow {
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 30px; /* Ajusta el ancho según tus necesidades */
  height: 30px; /* Ajusta el alto según tus necesidades */
  opacity: 0.7; /* Ajusta la opacidad según tus necesidades */
}

.carousel-arrow.left {
  left: 10px;
}

.carousel-arrow.right {
  right: 10px;
}
</style>
