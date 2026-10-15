<script setup lang="ts">
import { centers, ROUTES, services, SOCIAL } from '~/data/site'

const copy = useCopy()
const lp = useLocalePath()
const year = new Date().getFullYear()
const social = SOCIAL.map(u => ({ url: u, label: new URL(u).hostname.replace('www.', '').split('.')[0]! }))
const group = (g: string) => services.filter(s => s.group === g)
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <p class="logo" style="color:#fff">🍊 Mandarina Garden</p>
          <p>{{ copy.common.footerTag }}</p>
          <div class="social">
            <a v-for="s in social" :key="s.url" :href="s.url" target="_blank" rel="noopener me" style="text-transform:capitalize">{{ s.label }}</a>
          </div>
        </div>
        <div>
          <h3>{{ copy.nav.experiences }}</h3>
          <ul>
            <li v-for="s in group('experiencias')" :key="s.key"><NuxtLink :to="lp('/' + s.slug)">{{ copy.services[s.key]?.name }}</NuxtLink></li>
          </ul>
        </div>
        <div>
          <h3>{{ copy.nav.birthdays }} · {{ copy.nav.slowcafe }}</h3>
          <ul>
            <li v-for="s in [...group('cumples'), ...group('slowcafe')]" :key="s.key"><NuxtLink :to="lp('/' + s.slug)">{{ copy.services[s.key]?.name }}</NuxtLink></li>
          </ul>
        </div>
        <div>
          <h3>{{ copy.nav.centers }}</h3>
          <ul>
            <li v-for="c in centers" :key="c.key"><NuxtLink :to="lp('/' + c.slug)">{{ c.name }}</NuxtLink></li>
            <li><NuxtLink :to="lp('/' + ROUTES.franchise)">{{ copy.top.franchise }}</NuxtLink></li>
          </ul>
        </div>
      </div>
      <p class="legal">© {{ year }} Mandarina Garden. {{ copy.common.rights }}</p>
    </div>
  </footer>
</template>
