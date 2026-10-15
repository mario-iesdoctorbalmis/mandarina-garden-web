<script setup lang="ts">
const copy = useCopy()
const lp = useLocalePath()
const event = useRequestEvent()
if (import.meta.server && event) { setResponseStatus(event, 404) }
useSeoMeta({ title: () => copy.value.notFound.title, robots: 'noindex' })
</script>

<template>
  <section class="section">
    <div class="container" style="text-align:center">
      <h1>404 🍊</h1>
      <p>{{ copy.notFound.text }}</p>
      <NuxtLink class="btn btn-primary" :to="lp('/')">{{ copy.notFound.back }}</NuxtLink>
    </div>
  </section>
</template>
