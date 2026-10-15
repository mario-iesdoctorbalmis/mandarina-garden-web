<script setup lang="ts">
import { centers } from '~/data/site'

defineProps<{ light?: boolean }>()
const copy = useCopy()
const { key, select } = useCenter()
const id = useId()
</script>

<template>
  <label class="pill-select" :class="{ light }" :for="id">
    <span class="sr-only">{{ copy.common.selectCenter }}</span>
    <span aria-hidden="true">📍</span>
    <select :id="id" :value="key" @change="select(($event.target as HTMLSelectElement).value)">
      <option v-for="c in centers" :key="c.key" :value="c.key">{{ c.name }}</option>
    </select>
  </label>
</template>
