<script setup lang="ts">
import { ROUTES } from '~/data/site'

const copy = useCopy()
const lp = useLocalePath()
const { center } = useCenter()
const wa = computed(() => whatsappLink(center.value.whatsapp, copy.value.common.whatsappText))
</script>

<template>
  <div class="card side">
    <h2 style="font-size:1.4rem">{{ copy.common.nextStepTitle }}</h2>
    <p>{{ copy.common.nextStepText }}</p>
    <LocationPill light />
    <div class="cta-row">
      <a v-if="wa" class="btn btn-wa" :href="wa" target="_blank" rel="noopener">💬 {{ copy.common.askWhatsapp }}</a>
      <NuxtLink class="btn btn-ghost" :to="lp('/' + ROUTES.booking)">📅 {{ copy.nav.book }}</NuxtLink>
    </div>
  </div>
</template>
