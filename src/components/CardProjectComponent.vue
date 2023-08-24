<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: String,
  description: String,
  image: String,
  technologies: String,
  link: String,
  color: String,
});

const techs = `https://skillicons.dev/icons?i=${props.technologies}`;
const imageWithTechs = `${props.image}?i=${props.technologies}`;

const numTechs = props.technologies.split(",").length;
const techsWidth = numTechs * 12;
const techsHeight = 24;
</script>

<template>
  <div class="card ml-8 mr-8 md:ml-0 md:mr-0">
    <div
      class="card-container max-w-md min-w-[200px] text-white rounded-lg font-sans overflow-hidden"
      :style="{ backgroundColor: color }"
    >
      <h2 class="text-xl text-center mt-6 mb-2 font-bold">{{ title }}</h2>

      <div class="card-container-content text-center px-8">
        <p>{{ description }}</p>
        <img
          :src="techs"
          :style="{ width: techsWidth, height: techsHeight }"
          class="mx-auto mt-4 mb-4"
        />
        <RouterLink :to="link">
          <button
            class="block mx-auto px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300 transition-colors"
            @click="redirectToLink(link)"
          >
            {{ $t("See project") }}
            <i
              class="fa-solid fa-arrow-up-right-from-square text-black w-3 h-3 ml-1"
            ></i>
          </button>
        </RouterLink>
        <div class="card-container-image flex justify-center mt-4">
          <img
            :src="imageWithTechs"
            alt="project image"
            class="w-50 h-48 object-cover rounded-t-lg hover:scale-110 transition-all mt-6"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>
