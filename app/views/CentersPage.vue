<script setup lang="ts">
import { ROUTES } from '~/data/site'

const copy = useCopy()
usePageSeo(() => copy.value.centersPage.title, () => copy.value.centersPage.desc)
useSchemaOrg([defineWebPage({ name: copy.value.centersPage.title, description: copy.value.centersPage.desc })])
</script>

<template>
  <div>
    <BreadcrumbNav :items="[{ name: copy.nav.centers, path: '/' + ROUTES.centers }]" />
    <div class="container">
      <header class="page-hero tone-sage">
        <h1>{{ copy.centersPage.h1 }}</h1>
        <p class="lead">{{ copy.centersPage.lead }}</p>
      </header>
    </div>
    <section class="section">
      <div class="container"><CenterLinks /></div>
    </section>
  </div>
</template>
