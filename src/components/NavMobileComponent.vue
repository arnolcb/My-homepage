<script setup>
import { useDark, useToggle } from "@vueuse/core";
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const isDark = useDark();
const toggleDark = useToggle(isDark);
const showDropdown = ref(false);
const route = useRoute();

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

const formatLabel = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

const dropdownItems = [
  { label: 'Projects', to: '/projects' },
].filter(item => item.to !== route.path);
</script>

<template>
  <div class="nav-container mt-2 relative">
    <div class="justify-center items-center bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-900 text-black dark:text-white mt-5 p-2 rounded-full">
      <div class="text-center font-sans relative">
        <ul class="flex flex-row justify-center">
          <li class="nav-item ml-4">
            <router-link :to="route.path">{{ formatLabel(route.name || $t('Home')) }}</router-link>
          </li>
          <li class="nav-item relative">
            <button class="nav-button flex items-center" @click="toggleDropdown">
              <img
                src="@/assets/img/down-arrow.svg"
                class="w-5 h-6"
                v-if="isDark"
                style="filter: invert(1)"
              />
              <img
                src="@/assets/img/down-arrow.svg"
                class="w-5 h-6"
                v-else
              />
            </button>
            <div v-if="showDropdown" class="nav-dropdown" :class="{ 'dark': isDark }">
              <router-link v-if="route.name !== 'home'" class="nav-dropdown-item" :to="`/`">{{ formatLabel($t('Home')) }}</router-link>
              <router-link v-for="(item, index) in dropdownItems" :key="index" class="nav-dropdown-item" :to="item.to">{{ formatLabel($t(item.label)) }}</router-link>
              <select class="nav-dropdown-item bg-transparent" :class="{ 'dark:text-black': isDark }" @change="changeLocale">
                <option value="en">EN</option>
                <option value="es">ES</option>
              </select>
              <button class="nav-button flex items-center" @click="toggleDark()">
                <img
                  v-if="isDark"
                  src="@/assets/img/dark-mode-icon.svg"
                  alt="Icono Dark"
                  class="w-6 h-6"
                  style="filter: invert(1)"
                />
                <img
                  v-else
                  src="@/assets/img/light-mode-icon.svg"
                  alt="Icono Light"
                  class="w-6 h-6"
                />
              </button>
            </div>
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

.nav-dropdown {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  display: none;
  background-color: white;
  border: 2px solid #ddd;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

.dark .nav-dropdown {
  background-color: rgb(31 41 55);
  border-color: rgb(17 24 39);
}

.nav-dropdown-item {
  display: block;
  padding: 8px;
}

.dark .nav-dropdown-item {
  color: white;
}

.nav-dropdown-item.dark.text-black {
  color: black;
}

.nav-item:hover .nav-dropdown {
  display: block;
}
</style>
