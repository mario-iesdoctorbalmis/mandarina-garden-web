<script setup lang="ts">
import { ROUTES } from '~/data/site'

const copy = useCopy()
const lp = useLocalePath()
const { center } = useCenter()
const wa = computed(() => whatsappLink(center.value.whatsapp, copy.value.common.whatsappText))
</script>

<template>
  <div class="sticky-cta">
    <NuxtLink class="btn btn-primary" :to="lp('/' + ROUTES.booking)">📅 {{ copy.nav.book }}</NuxtLink>
    <a v-if="wa" class="btn btn-wa" :href="wa" target="_blank" rel="noopener">💬 WhatsApp</a>
  </div>
</template>
