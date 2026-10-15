<script setup lang="ts">
import { SITE_URL, centers, services } from '~/data/site'

const copy = useCopy()
const lp = useLocalePath()
const slug = pageSlug()
const center = centers.find(c => c.slug === slug)
if (!center) { throw createError({ statusCode: 404, statusMessage: 'Not found', fatal: true }) }

const cp = computed(() => copy.value.centerPage)
const wa = computed(() => whatsappLink(center.whatsapp, copy.value.common.whatsappText))
const cards = services.filter(s => s.primary || s.key === 'birthdays')

usePageSeo(() => cp.value.title(center.name), () => cp.value.desc(center.name))
useSchemaOrg([
  defineWebPage({ name: cp.value.h1(center.name), description: cp.value.desc(center.name) }),
  {
    '@type': ['ChildCare', 'LocalBusiness'],
    '@id': `${SITE_URL}/${center.slug}#center`,
    name: `Mandarina Garden ${center.name}`,
    url: `${SITE_URL}/${center.slug}`,
    image: `${SITE_URL}/logo.png`,
    telephone: center.whatsapp ? `+${center.whatsapp}` : undefined,
    address: { '@type': 'PostalAddress', addressLocality: center.city, addressRegion: center.region, addressCountry: center.country },
    parentOrganization: { '@id': `${SITE_URL}/#identity` },
    sameAs: ['https://www.instagram.com/mandarinagarden/']
  }
])
</script>

<template>
  <div>
    <BreadcrumbNav :items="[{ name: copy.nav.centers, path: '/mandarina-garden-donde-estamos' }, { name: center.name, path: '/' + center.slug }]" />
    <div class="container">
      <header class="page-hero tone-primary">
        <p class="eyebrow">📍 {{ center.city }}<span v-if="center.isNew" class="tag" style="margin-left:.5rem">{{ copy.common.newBadge }}</span></p>
        <h1>{{ cp.h1(center.name) }}</h1>
        <p class="lead">{{ cp.lead(center.city) }}</p>
        <div class="cta-row">
          <a v-if="wa" class="btn btn-wa" :href="wa" target="_blank" rel="noopener">💬 {{ copy.common.askWhatsapp }}</a>
          <p v-else style="margin:0">{{ copy.common.noWhatsapp }}</p>
          <NuxtLink class="btn btn-ghost" :to="lp('/reserva-online')">📅 {{ copy.nav.book }}</NuxtLink>
        </div>
      </header>
    </div>

    <section class="section">
      <div class="container">
        <h2>{{ cp.h2Agenda }}</h2>
        <WorkshopAgenda :center="center.key" />
      </div>
    </section>

    <section class="section" style="padding-top:0">
      <div class="container">
        <h2>{{ cp.h2Services }}</h2>
        <div class="center-list">
          <NuxtLink v-for="s in cards" :key="s.key" class="card" :to="lp('/' + s.slug)">
            <strong>{{ s.icon }} {{ copy.services[s.key]?.name }}</strong>
            <span>{{ copy.services[s.key]?.lead }}</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="section" style="padding-top:0">
      <div class="container">
        <h2>{{ copy.common.otherCenters }}</h2>
        <CenterLinks :exclude="center.key" />
      </div>
    </section>
  </div>
</template>
