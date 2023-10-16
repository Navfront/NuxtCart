<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">

useHead({
  title: "Корзина товаров",
  link: [
    {
      rel: 'stylesheet',
      href: 'normalize.min.css',
    },
    {
      rel: 'stylesheet',
      href: 'style.min.css',
    },
  ]
})
</script>