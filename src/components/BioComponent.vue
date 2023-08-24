<template>
  <div
    class="mt-10 text-xl text-left mx-auto max-w-[900px] pl-12 pr-12 px-6 md:px-12 md:pl-20 md:pr-20 lg:px-24 xl:px-32 dark:text-white"
  >
    <h1 class="font-bold text-left">Bio</h1>
    <div class="flex text-lg font-mono">
      <div class="font-bold hover:text-blue-500 transition-colors">2003</div>
      <div class="font-sans ml-2 ">
        {{ $t("bio.2003") }}
      </div>
    </div>

    <div class="flex text-lg font-mono">
      <div class="font-bold hover:text-blue-500 transition-colors">2018</div>
      <div class="font-sans ml-2 ">
        {{ $t("bio.2018") }}
      </div>
    </div>

    <div class="flex text-lg font-mono">
      <div class="font-bold hover:text-blue-500 transition-colors">2020 - present</div>
      <div class="font-sans ml-2 ">
        {{ $t("bio.2020") }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
