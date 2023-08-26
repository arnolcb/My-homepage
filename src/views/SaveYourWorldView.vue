<script setup>
import ButtonLargeComponent from "../components/widgets/ButtonLargeComponent.vue";
import { ref, onMounted, onBeforeUnmount } from "vue";
import NavComponent from "../components/NavComponent.vue";
import NavMobileComponent from "../components/NavMobileComponent.vue";

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

<template lang="">
  <div>
    <transition name="nav-transition" mode="out-in">
      <NavComponent v-if="isDesktop" key="desktop" />
      <NavMobileComponent v-else key="mobile" />
    </transition>
  </div>
  <div class="text-center py-7 font-bold text-2xl dark:text-white">Save Your World</div>
  <img
    src="/images/welcome-saveyourworld-2-re.gif"
    alt=""
    class="w-96 h-90 mx-auto"
  />
  <div class="flex justify-center mt-5">
    <ButtonLargeComponent
      link="https://github.com/arnolcb/save-your-world"
      icon="fa-brands fa-github"
      buttonText="View repository"
    />
    <!--
    <ButtonLargeComponent
      link=""
      icon="fa-solid fa-link"
      buttonText="Live preview"
    />-->
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
</style>
