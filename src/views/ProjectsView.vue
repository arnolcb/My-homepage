<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import NavComponent from "../components/NavComponent.vue";
import NavMobileComponent from "../components/NavMobileComponent.vue";
import CardProjectComponent from "../components/CardProjectComponent.vue";
import projectsData from "../components/projects/projectsData.js";
import FooterComponent from "../components/FooterComponent.vue";

const isDesktop = ref(window.innerWidth >= 600);

const updateWindowWidth = () => {
  isDesktop.value = window.innerWidth >= 600;
};

onMounted(() => {
  window.addEventListener("resize", updateWindowWidth);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateWindowWidth);
});
</script>

<template>
  <div>
    <div>
      <transition name="nav-transition" mode="out-in">
        <NavComponent v-if="isDesktop" key="desktop" />
        <NavMobileComponent v-else key="mobile" />
      </transition>
    </div>
    <!--
    <div class="mt-10">
      <h1 class="mb-5 text-center text-3xl font-semibold">
        {{ $t("Projects welcome") }}
      </h1>
    </div>
    -->
    <div class="projects mx-auto md:px-4 lg:px-8 xl:px-0" style="max-width: 960px">
      <div class="projects-container grid gap-8 justify-center lg:grid-cols-2 mt-10 mb-10">
        <CardProjectComponent
          v-for="(project, index) in projectsData"
          :key="index"
          :title="project.title"
          :description="project.description"
          :image="project.image"
          :technologies="project.technologies"
          :link="project.link"
          :color="project.color"
        />
      </div>
      <FooterComponent />
    </div>
    
  </div>
</template>

<script>
export default {};
</script>

<style>
.nav-transition-enter-active,
.nav-transition-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.nav-transition-enter,
.nav-transition-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.projects {
  margin: 0 auto;
}
</style>
