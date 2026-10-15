<script setup lang="ts">
import { workshops } from '~/data/site'

const props = withDefaults(defineProps<{ center?: string, filterable?: boolean }>(), { center: undefined, filterable: false })
const copy = useCopy()
const { key } = useCenter()
const cat = ref('all')
const active = computed(() => props.center ?? key.value)
const list = computed(() => workshops
  .filter(w => w.center === active.value && (cat.value === 'all' || w.category === cat.value))
  .sort((a, b) => a.day - b.day))
const cats = ['cocina', 'arte', 'ciencia', 'fiesta']
</script>

<template>
  <div>
    <div v-if="filterable" class="filters" role="group">
      <button type="button" class="chipbtn" :aria-pressed="cat === 'all'" @click="cat = 'all'">{{ copy.booking.all }}</button>
      <button v-for="c in cats" :key="c" type="button" class="chipbtn" :aria-pressed="cat === c" @click="cat = c">{{ copy.booking.category[c] }}</button>
    </div>
    <div v-if="list.length" class="grid-cards">
      <WorkshopCard v-for="w in list" :key="w.id" :workshop="w" />
    </div>
    <p v-else class="empty">{{ copy.common.noWorkshops }}</p>
  </div>
</template>
