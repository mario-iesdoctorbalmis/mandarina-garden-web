<script setup lang="ts">
import { SITE_URL, services } from '~/data/site'

const copy = useCopy()
const lp = useLocalePath()
const slug = pageSlug()
const service = services.find(s => s.slug === slug)
if (!service) { throw createError({ statusCode: 404, statusMessage: 'Not found', fatal: true }) }

const text = computed(() => copy.value.services[service.key]!)
const related = computed(() => services.filter(s => s.group === service.group && s.key !== service.key).slice(0, 4))

usePageSeo(() => `${text.value.title} | Mandarina Garden`, () => text.value.desc)
useSchemaOrg([
  defineWebPage({ name: text.value.title, description: text.value.desc }),
  { '@type': 'Service', name: text.value.title, description: text.value.desc, url: `${SITE_URL}/${service.slug}`, provider: { '@id': `${SITE_URL}/#identity` } }
])
</script>

<template>
  <div>
    <BreadcrumbNav :items="[{ name: text.name, path: '/' + service.slug }]" />
    <div class="container">
      <header class="page-hero" :class="`tone-${service.tone}`">
        <p class="eyebrow">{{ service.icon }} {{ text.name }}</p>
        <h1>{{ text.title }}</h1>
        <p class="lead">{{ text.lead }}</p>
      </header>
    </div>

    <section class="section">
      <div class="container split">
        <div>
          <h2>{{ copy.common.whyTitle }}</h2>
          <div class="points">
            <div v-for="p in text.points" :key="p" class="card">
              <span class="tag" :class="`tag-${service.tone === 'primary' ? '' : service.tone}`">✓</span>
              <p style="margin:.6rem 0 0"><strong>{{ p }}</strong></p>
            </div>
          </div>
          <div v-if="service.key === 'birthdays'" style="margin-top:2rem"><PartyTabs /></div>
          <div v-if="service.key === 'workshops'" style="margin-top:2rem"><WorkshopAgenda filterable /></div>
        </div>
        <ContactCard />
      </div>
    </section>

    <section v-if="related.length" class="section" style="padding-top:0">
      <div class="container">
        <h2>{{ copy.common.related }}</h2>
        <div class="center-list">
          <NuxtLink v-for="s in related" :key="s.key" class="card" :to="lp('/' + s.slug)">
            <strong>{{ s.icon }} {{ copy.services[s.key]?.name }}</strong>
            <span>{{ copy.services[s.key]?.lead }}</span>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
