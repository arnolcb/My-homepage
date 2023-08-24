<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import NavComponent from "../components/NavComponent.vue";
import NavMobileComponent from "../components/NavMobileComponent.vue";
import CallToActionComponent from "../components/CallToActionComponent.vue";
import AboutMeComponent from "../components/AboutMeComponent.vue";
import BioComponent from "../components/BioComponent.vue";
import ContactMeComponent from "../components/ContactMeComponent.vue";
import ProjectsCarousel from "../components/ProjectsCarousel.vue";
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
    <transition name="nav-transition" mode="out-in">
      <NavComponent v-if="isDesktop" key="desktop" />
      <NavMobileComponent v-else key="mobile" />
    </transition>
  </div>
  <CallToActionComponent />
  <AboutMeComponent />
  <BioComponent />
  <!--<ProjectsCarousel />-->
  <ContactMeComponent />

  <FooterComponent />
</template>

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
</style>
