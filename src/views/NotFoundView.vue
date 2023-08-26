<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import NavComponent from "../components/NavComponent.vue";
import NavMobileComponent from "../components/NavMobileComponent.vue";
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
  <transition name="nav-transition" mode="out-in">
    <NavComponent v-if="isDesktop" key="desktop" />
    <NavMobileComponent v-else key="mobile" />
  </transition>

  <h1 class="text-center font-mono mt-10 dark:text-white">ERROR</h1>
  <img
    src="/images/cat-404.png"
    alt="cat-404"
    class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mx-auto select-none"
  />
  <div class="text-center font-mono">
    <h1 class="ml-12 mr-12 dark:text-white">{{ $t("Notfound-message") }}</h1>
  </div>
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

.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.center-content {
  align-items: center;
  justify-content: center;
  flex: 1;
}
</style>
