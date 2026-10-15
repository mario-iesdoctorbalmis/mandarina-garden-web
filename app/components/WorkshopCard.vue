<script setup lang="ts">
import { centers, type Workshop } from '~/data/site'

const props = defineProps<{ workshop: Workshop }>()
const copy = useCopy()
const { locale } = useI18n()

const tones: Record<string, string> = { cocina: 'tone-primary', arte: 'tone-sage', fiesta: 'tone-berry', ciencia: 'tone-sage' }
const tagTone: Record<string, string> = { cocina: '', arte: 'tag-sage', fiesta: 'tag-berry', ciencia: 'tag-sage' }
const title = computed(() => props.workshop.title[locale.value as 'es' | 'en' | 'ca'] ?? props.workshop.title.es)
const day = computed(() => copy.value.common.days[props.workshop.day])
const link = computed(() => {
  const c = centers.find(x => x.key === props.workshop.center)
  return whatsappLink(c?.whatsapp ?? null, `${copy.value.common.whatsappText} ${title.value} (${day.value} ${props.workshop.time})`)
})
</script>

<template>
  <article class="card wcard">
    <div class="thumb" :class="tones[workshop.category]" aria-hidden="true">
      {{ workshop.icon }}
      <span class="tag" :class="tagTone[workshop.category]">{{ copy.booking.category[workshop.category] }}</span>
    </div>
    <div class="body">
      <h3>{{ title }}</h3>
      <div class="meta">
        <span>🕔 {{ day }} {{ workshop.time }}h</span>
        <span v-if="workshop.minAge">👶 +{{ workshop.minAge }} {{ copy.common.ages }}</span>
        <span :class="{ 'tag tag-berry': workshop.spots <= 3 }">{{ workshop.spots <= 3 ? copy.common.lastSpots : `${workshop.spots} ${copy.common.spots}` }}</span>
      </div>
      <div class="foot">
        <span class="price">{{ workshop.price ? `${workshop.price}€` : copy.common.free }}</span>
        <a v-if="link" class="btn btn-primary btn-sm" :href="link" target="_blank" rel="noopener">{{ copy.common.book }}</a>
      </div>
    </div>
  </article>
</template>
