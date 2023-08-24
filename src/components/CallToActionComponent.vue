<template>
  <div
    class="hero-container text-center md:flex md:justify-center md:items-center mt-12"
  >
    <div class="">
      <img
        src="../assets/img/profile.png"
        alt="hero"
        class="hero-image rounded-full h-60 text-center items-center mx-auto md:mx-0"
      />
    </div>
    <div class="ml-6">
      <div class="mt-4 md:mt-0 text-3xl">
        <div class="hand-container">
          <img
            src="../assets/img/waving-hand-sign.png"
            alt="waving-hand-sign"
            class="hand w-16 h-16 inline-block animate-wave"
          />
        </div>
        <div class="font-bold text-4xl dark:text-white">Arnol Cáceres</div>
        <div class="dark:text-white">{{ $t("Presentation") }}</div>
        <div class="msg dark:text-white">
          <span class="typing-text">{{ typingMessage }}</span>
          <span class="cursor" :class="{ blinking: showCursor }">|</span>
        </div>
      </div>
    </div>
  </div>
  <!--Button CTA-->
  <div class="text-center mt-6">
    <button
      class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors"
    >
      <a
        href="/src/assets/download/CV_2023.pdf"
        download="CV_Arnol_Caceres.pdf"
      >
        <i class="fa-solid fa-file-arrow-down h-4 w-4"></i>
        {{ $t("Resume") }}</a
      >
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      typingMessage: "",
      currentIndex: 0,
      showCursor: true,
    };
  },
  mounted() {
    this.startTypingAnimation();
  },
  methods: {
    startTypingAnimation() {
      const message = this.$t("Presentation-sub");
      const typingInterval = 100; // Interval between typing each letter (in milliseconds)
      const cursorBlinkInterval = 500; // Interval for cursor blinking (in milliseconds)
      const pauseDuration = 3000; // Pause duration before animation restarts (in milliseconds)

      const typeLetter = () => {
        if (this.currentIndex <= message.length) {
          this.typingMessage = message.slice(0, this.currentIndex);
          this.currentIndex++;
          setTimeout(typeLetter, typingInterval);
        } else {
          this.showCursor = false;
          setTimeout(() => {
            this.showCursor = true;
            this.currentIndex = 0;
            this.typingMessage = ""; // Clear the message
            setTimeout(this.startTypingAnimation, cursorBlinkInterval);
          }, pauseDuration);
        }
      };

      typeLetter();
    },
  },
};
</script>

<style>
.hero-image {
  animation: fadein 2s ease-in-out;
}

@keyframes fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.typing-text {
  display: inline-block;
}

.cursor {
  opacity: 1;
}

.blinking {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.hand-container {
  user-select: none;
}

.hand {
  transition: transform 0.3s ease-in-out; /* Agregar una transición suave */
}

.hand:hover {
  transform-origin: bottom right; /* Punto de origen de la transformación */
  transform: rotate(15deg); /* Rotación cuando el cursor está sobre la imagen */
}
</style>
