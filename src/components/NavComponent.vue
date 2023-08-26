<script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <div class="nav-container"> <!--New: mt-2-->
    <div
      class="justify-center items-center bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-900 text-black dark:text-white mt-5 p-2 rounded-full"
    >
      <div class="text-center font-sans">
        <ul class="flex flex-row justify-center">
          <li class="nav-item mr-6 ml-4">
            <router-link to="/">{{ $t("Home") }}</router-link>
          </li>
          <!--
          <li class="nav-item mr-6">
            <router-link to="/about">{{ $t("About") }}</router-link>
          </li>
          -->
          <li class="nav-item mr-6">
            <router-link to="/projects">{{ $t("Projects") }}</router-link>
          </li>
          <!--
          <li class="nav-item mr-6">
            <router-link to="/contact">{{ $t("Contact") }}</router-link>
          </li>
          -->
          <li class="nav-item mr-6">
            <select class="bg-transparent" @change="changeLocale">
              <option class="dark:text-black" value="en">EN</option>
              <option class="dark:text-black" value="es">ES</option>
            </select>
          </li>
          <li class="nav-item mr-4">
            <button class="nav-button flex items-center" @click="toggleDark()">
              <img
                v-if="isDark"
                src="/images/dark-mode-icon.svg"
                alt="Icono Dark"
                class="w-6 h-6"
                style="filter: invert(1)"
              />
              <img
                v-else
                src="/images/light-mode-icon.svg"
                alt="Icono Light"
                class="w-6 h-6"
              />
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeLocale(event) {
      const selectedLocale = event.target.value;
      this.$i18n.locale = selectedLocale;
    },
  },
};
</script>

<style>
.nav-container {
  display: flex;
  justify-content: center;
}

.nav-item {
  padding: 8px 16px;
  border-radius: 20px;
  transition: background-color 0.3s ease;
}

.nav-item:hover {
  background-color: #f2f2f2;
}

.dark .nav-item:hover {
  background-color: rgb(17 24 39);
}
</style>
