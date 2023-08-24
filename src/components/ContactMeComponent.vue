<template>
  <div
    class="mt-10 text-xl text-left mx-auto max-w-[900px] pl-12 pr-12 px-6 md:px-12 md:pl-20 md:pr-20 lg:px-24 xl:px-32 dark:text-white"
  >
    <h1 class="font-bold">{{ $t('Contact') }}</h1>
    <p class="text-lg">{{ $t('Follow-sentence') }}</p>
  </div>
  <div class="mt-4 max-w-[900px] md:mx-auto grid grid-cols-1 ml-2 md:flex md:justify-center">
      <div class="ml-5 inline-flex">
        <a
          href="https://github.com/arnolcb"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:no-underline"
        >
          <button
            class="text-white py-3 px-5 rounded-md flex items-center border-none"
          >
            <div
              class="bg-white h-9 w-9 rounded-full flex items-center justify-center"
            >
              <i class="fa-brands fa-github w-5 h-5 text-black text-center"></i>
            </div>
            <div>
              <div class="text-sm ml-2 text-black dark:text-white text-left">
                Github
              </div>
              <div
                class="text-sm ml-2 text-left text-blue-500 hover:text-blue-600"
              >
                @arnolcb
              </div>
            </div>
          </button>
        </a>
      </div>

      <div class="ml-5 inline-flex">
        <a
          href="https://www.linkedin.com/in/arnolcaceres/"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:no-underline"
        >
          <button
            class="text-white py-3 px-5 rounded-md flex items-center border-none"
          >
            <div
              class="bg-white h-9 w-9 rounded-full flex items-center justify-center"
            >
              <i class="fa-brands fa-linkedin w-5 h-5 text-black text-center"></i>
            </div>
            <div>
              <div class="text-sm ml-2 text-black dark:text-white text-left">
                LinkedIn
              </div>
              <div
                class="text-sm ml-2 text-left text-blue-500 hover:text-blue-600"
              >
                @arnolcaceres
              </div>
            </div>
          </button>
        </a>
      </div>

      <div class="ml-5 inline-flex">
        <a
          href="https://www.hackerrank.com/444rnol"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:no-underline"
        >
          <button
            class="text-white py-3 px-5 rounded-md flex items-center border-none"
          >
            <div
              class="bg-white h-9 w-9 rounded-full flex items-center justify-center"
            >
              <i class="fa-brands fa-hackerrank w-5 h-5 text-black text-center"></i>
            </div>
            <div>
              <div class="text-sm ml-2 text-black dark:text-white text-left">
                HackerRank
              </div>
              <div
                class="text-sm ml-2 text-left text-blue-500 hover:text-blue-600"
              >
                @444rnol
              </div>
            </div>
          </button>
        </a>
      </div>

      <div class="ml-5 inline-flex">
        <a
          href="https://twitter.com/444rnol"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:no-underline"
        >
          <button
            class="text-white py-3 px-5 rounded-md flex items-center border-none"
          >
            <div
              class="bg-white h-9 w-9 rounded-full flex items-center justify-center"
            >
              <i class="fa-brands fa-x-twitter w-5 h-5 text-black text-center"></i>
            </div>
            <div>
              <div class="text-sm ml-2 text-black dark:text-white text-left">
                X - Twitter
              </div>
              <div
                class="text-sm ml-2 text-left text-blue-500 hover:text-blue-600"
              >
                @444rnol
              </div>
            </div>
          </button>
        </a>
      </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
