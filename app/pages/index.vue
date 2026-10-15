<script setup lang="ts">
import { ENGLISH_SCHOOL_URL, ROUTES, SITE_URL, centers, services } from '~/data/site'

const copy = useCopy()
const lp = useLocalePath()
const { key, center, select } = useCenter()
const { locale } = useI18n()

usePageSeo(() => copy.value.home.title, () => copy.value.home.desc)

const what = ref('talleres')
const dest = computed(() => {
  const map: Record<string, string> = { talleres: ROUTES.booking, cumples: ROUTES.birthdays, ludoteca: 'ludoteca-magica-baby-resort', mornings: 'espacio-infantil-montessori-coworking' }
  return lp('/' + map[what.value])
})
const svc = (k: string) => services.find(s => s.key === k)!

useSchemaOrg([
  defineWebSite({ name: 'Mandarina Garden', url: SITE_URL, inLanguage: locale.value }),
  defineWebPage({ name: copy.value.home.title, description: copy.value.home.desc }),
  ...centers.map(c => ({
    '@type': 'ChildCare',
    '@id': `${SITE_URL}/${c.slug}#center`,
    name: `Mandarina Garden ${c.name}`,
    url: `${SITE_URL}/${c.slug}`,
    areaServed: c.city,
    parentOrganization: { '@id': `${SITE_URL}/#identity` }
  })),
  { '@type': 'FAQPage', mainEntity: copy.value.home.faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
])
</script>

<template>
  <div>
    <section class="hero">
      <div class="container hero-grid">
        <div>
          <p class="eyebrow">🍊 {{ copy.home.eyebrow }}</p>
          <h1>{{ copy.home.h1 }}</h1>
          <p class="sub">{{ copy.home.sub }}</p>
          <div class="cta-row">
            <NuxtLink class="btn btn-primary" :to="lp('/' + ROUTES.booking)">{{ copy.home.ctaWorkshops }}</NuxtLink>
            <NuxtLink class="btn btn-ghost" :to="lp('/' + ROUTES.birthdays)">{{ copy.home.ctaParty }} →</NuxtLink>
          </div>
        </div>
        <div class="hero-art" role="img" :aria-label="copy.home.heroCaption">
          <span class="fruit" aria-hidden="true">🍊</span>
          <span class="chip a">☕ SlowCafé</span>
          <span class="chip b">🎈 BabyResort</span>
        </div>
      </div>
    </section>

    <form class="container card quick" @submit.prevent="navigateTo(dest)">
      <label>
        {{ copy.home.quick.what }}
        <span class="pill-select light">
          <select v-model="what">
            <option v-for="(label, k) in copy.home.quick.options" :key="k" :value="k">{{ label }}</option>
          </select>
        </span>
      </label>
      <label>
        {{ copy.home.quick.center }}
        <span class="pill-select light">
          <select :value="key" @change="select(($event.target as HTMLSelectElement).value)">
            <option v-for="c in centers" :key="c.key" :value="c.key">{{ c.name }}</option>
          </select>
        </span>
      </label>
      <button class="btn btn-primary" type="submit">{{ copy.home.quick.go }} →</button>
    </form>

    <section class="section">
      <div class="container">
        <div class="section-head">
          <h2>{{ copy.home.bentoTitle }}</h2>
          <p>{{ copy.home.bentoSub }}</p>
        </div>
        <div class="bento">
          <NuxtLink class="big tone-primary" :to="lp('/' + svc('babyresort').slug)">
            <span class="ico" aria-hidden="true">🎈</span>
            <div><h3>{{ copy.services.babyresort.name }}</h3><p>{{ copy.services.babyresort.lead }}</p></div>
            <span class="more">{{ copy.common.seeMore }} →</span>
          </NuxtLink>
          <NuxtLink class="wide tone-sage" :to="lp('/' + ROUTES.slowcafe)">
            <span class="ico" aria-hidden="true">☕</span>
            <div><h3>{{ copy.services.cogrowing.name }}</h3><p>{{ copy.services.cogrowing.lead }}</p></div>
            <span class="more">{{ copy.common.seeMore }} →</span>
          </NuxtLink>
          <NuxtLink class="tone-primary" :to="lp('/' + svc('art').slug)">
            <span class="ico" aria-hidden="true">🎨</span>
            <div><h3>{{ copy.services.art.name }}</h3><p>{{ copy.services.camps.lead }}</p></div>
          </NuxtLink>
          <NuxtLink class="tone-sage" :to="lp('/' + svc('mornings').slug)">
            <span class="ico" aria-hidden="true">🌱</span>
            <div><h3>{{ copy.services.mornings.name }}</h3><p>{{ copy.services.mornings.lead }}</p></div>
          </NuxtLink>
          <a class="wide tone-berry" :href="ENGLISH_SCHOOL_URL" target="_blank" rel="noopener">
            <span class="ico" aria-hidden="true">🇬🇧</span>
            <div><h3>{{ copy.common.english }}</h3></div>
            <span class="more">mandarinaenglish.es ↗</span>
          </a>
        </div>
      </div>
    </section>

    <section class="section" style="padding-top:0">
      <div class="container">
        <div class="section-head">
          <h2>{{ copy.home.agendaTitle }} {{ center.name }}</h2>
        </div>
        <WorkshopAgenda />
        <p style="margin-top:1.2rem"><NuxtLink class="btn btn-ghost" :to="lp('/' + ROUTES.booking)">📅 {{ copy.home.agendaAll }} →</NuxtLink></p>
      </div>
    </section>

    <section class="section" style="padding-top:0">
      <div class="container">
        <div class="section-head">
          <h2>🎂 {{ copy.home.partyTitle }}</h2>
          <p>{{ copy.home.partySub }}</p>
        </div>
        <PartyTabs />
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head">
          <h2>{{ copy.home.centersTitle }}</h2>
          <p>{{ copy.home.centersSub }}</p>
        </div>
        <CenterLinks />
      </div>
    </section>

    <section class="section" style="padding-top:0">
      <div class="container faq">
        <h2>{{ copy.home.faqTitle }}</h2>
        <details v-for="f in copy.home.faq" :key="f.q">
          <summary>{{ f.q }}</summary>
          <p>{{ f.a }}</p>
        </details>
      </div>
    </section>

    <section class="container">
      <div class="b2b">
        <div><h2>{{ copy.home.b2bTitle }}</h2><p>{{ copy.home.b2bSub }}</p></div>
        <NuxtLink class="btn" :to="lp('/' + ROUTES.franchise)">{{ copy.home.b2bCta }} →</NuxtLink>
      </div>
    </section>
  </div>
</template>
