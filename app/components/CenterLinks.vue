<script setup lang="ts">
import { centers } from '~/data/site'

const copy = useCopy()
const lp = useLocalePath()
withDefaults(defineProps<{ exclude?: string }>(), { exclude: '' })
</script>

<template>
  <div class="center-list">
    <template v-for="c in centers" :key="c.key">
      <NuxtLink v-if="c.key !== exclude" class="card" :to="lp('/' + c.slug)">
        <strong>{{ c.name }} <span v-if="c.isNew" class="tag">{{ copy.common.newBadge }}</span></strong>
        <span>{{ c.region }}{{ c.country === 'PA' ? ' · Panamá' : '' }}</span>
      </NuxtLink>
    </template>
  </div>
</template>
