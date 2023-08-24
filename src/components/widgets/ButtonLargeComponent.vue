<template>
  <div class="ml-5 inline-flex">
    <a :href="link" target="_blank" rel="noopener noreferrer" class="hover:no-underline">
      <button
        class="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-800 transition-colors text-white py-3 px-5 rounded-md flex items-center"
      >
        <i :class="iconClasses"></i>
        <div>
          <div class="text-sm text-black dark:text-white">{{ buttonText }}</div>
        </div>
      </button>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
    },
    icon:{
      type: String,
      required: true,
    },
    buttonText:{
      type: String,
      required: true,
    },
  },
  computed: {
    iconClasses() {
      return `${this.icon} w-5 h-5 mr-3 text-black dark:text-white`;
    },
  },
};
</script>
<style></style>
