<script setup lang="ts">
import { ENGLISH_SCHOOL_URL, ROUTES, services } from '~/data/site'

const copy = useCopy()
const lp = useLocalePath()
const { center } = useCenter()
const { locale, locales } = useI18n()
const switchPath = useSwitchLocalePath()
const open = ref(false)
const route = useRoute()
watch(() => route.fullPath, () => { open.value = false })

const experiences = computed(() => services.filter(s => ['babyresort', 'mornings', 'art', 'camps', 'workshops'].includes(s.key)))
const wa = computed(() => whatsappLink(center.value.whatsapp, copy.value.common.whatsappText))
</script>

<template>
  <div>
    <div class="topbar">
      <div class="container">
        <div class="pill-select-wrap">
          <span class="hide-m">{{ copy.top.yourCenter }}: </span>
          <LocationPill />
        </div>
        <div class="topbar-right">
          <a v-if="wa" class="wa-top" :href="wa" target="_blank" rel="noopener">💬 {{ copy.top.whatsapp }}</a>
          <nav class="lang" aria-label="Idioma / Language">
            <template v-for="l in locales" :key="l.code">
              <a :href="switchPath(l.code)" :hreflang="l.language" :lang="l.code" :aria-current="l.code === locale">{{ l.code.toUpperCase() }}</a>
            </template>
          </nav>
          <NuxtLink class="hide-m" :to="lp('/' + ROUTES.franchise)">{{ copy.top.franchise }}</NuxtLink>
        </div>
      </div>
    </div>

    <header class="header">
      <div class="container">
        <NuxtLink class="logo" :to="lp('/')" aria-label="Mandarina Garden">
          <img src="/logo.png" alt="" width="42" height="42">
          <span>Mandarina Garden</span>
        </NuxtLink>

        <nav class="nav" aria-label="Principal">
          <div class="nav-drop">
            <button type="button" aria-haspopup="true">{{ copy.nav.experiences }} ▾</button>
            <div class="drop-panel">
              <NuxtLink v-for="s in experiences" :key="s.key" :to="lp('/' + s.slug)">
                <span aria-hidden="true">{{ s.icon }}</span> {{ copy.services[s.key]?.name }}
              </NuxtLink>
              <a :href="ENGLISH_SCHOOL_URL" target="_blank" rel="noopener"><span aria-hidden="true">🇬🇧</span> {{ copy.common.english }}</a>
            </div>
          </div>
          <NuxtLink :to="lp('/' + ROUTES.birthdays)">{{ copy.nav.birthdays }}</NuxtLink>
          <NuxtLink :to="lp('/' + ROUTES.slowcafe)">{{ copy.nav.slowcafe }}</NuxtLink>
          <NuxtLink :to="lp('/' + ROUTES.centers)">{{ copy.nav.centers }}</NuxtLink>
          <NuxtLink class="btn btn-primary btn-sm" :to="lp('/' + ROUTES.booking)">📅 {{ copy.nav.book }}</NuxtLink>
        </nav>

        <button type="button" class="menu-btn" :aria-label="copy.nav.menu" :aria-expanded="open" aria-controls="mobile-nav" @click="open = true">☰</button>
      </div>
    </header>

    <div id="mobile-nav" class="mobile-nav" :class="{ open }" role="dialog" aria-modal="true" :aria-label="copy.nav.menu" :aria-hidden="!open">
      <div class="top">
        <span class="logo">Mandarina Garden</span>
        <button type="button" class="menu-btn" :aria-label="copy.nav.close" @click="open = false">✕</button>
      </div>
      <nav>
        <NuxtLink :to="lp('/')">{{ copy.common.home }}</NuxtLink>
        <span class="eyebrow" style="padding-left:1rem">{{ copy.nav.experiences }}</span>
        <NuxtLink v-for="s in experiences" :key="s.key" class="sub" :to="lp('/' + s.slug)">{{ s.icon }} {{ copy.services[s.key]?.name }}</NuxtLink>
        <NuxtLink :to="lp('/' + ROUTES.birthdays)">{{ copy.nav.birthdays }}</NuxtLink>
        <NuxtLink :to="lp('/' + ROUTES.slowcafe)">{{ copy.nav.slowcafe }}</NuxtLink>
        <NuxtLink :to="lp('/' + ROUTES.centers)">{{ copy.nav.centers }}</NuxtLink>
        <NuxtLink :to="lp('/' + ROUTES.booking)">📅 {{ copy.nav.book }}</NuxtLink>
      </nav>
    </div>
  </div>
</template>
