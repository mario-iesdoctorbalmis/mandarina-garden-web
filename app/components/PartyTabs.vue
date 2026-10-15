<script setup lang="ts">
type Mode = 'center' | 'home' | 'pijama'
const copy = useCopy()
const { center } = useCenter()
const mode = ref<Mode>('center')
const modes: Mode[] = ['center', 'home', 'pijama']
const panel = computed(() => copy.value.party[mode.value])
const link = computed(() => whatsappLink(center.value.whatsapp, copy.value.party.msg))
const lp = useLocalePath()
</script>

<template>
  <div class="party">
    <div class="tabs" role="tablist">
      <button v-for="m in modes" :id="`tab-${m}`" :key="m" type="button" role="tab" :aria-selected="mode === m" :aria-controls="`panel-${m}`" @click="mode = m">
        {{ copy.party.tabs[m] }}
      </button>
    </div>
    <div :id="`panel-${mode}`" class="tabpanel" role="tabpanel" :aria-labelledby="`tab-${mode}`">
      <h3>{{ panel.title }}</h3>
      <p>{{ panel.text }}</p>
      <ul class="ticks">
        <li v-for="i in panel.items" :key="i">{{ i }}</li>
      </ul>
      <a v-if="link" class="btn btn-primary" :href="link" target="_blank" rel="noopener">🎂 {{ copy.party.ask }}</a>
      <NuxtLink v-else class="btn btn-primary" :to="lp('/reserva-online')">🎂 {{ copy.party.ask }}</NuxtLink>
    </div>
  </div>
</template>
