<script setup lang="ts">
import { ROUTES } from '~/data/site'

const copy = useCopy()
const { center } = useCenter()
usePageSeo(() => copy.value.booking.title, () => copy.value.booking.desc)
useSchemaOrg([defineWebPage({ name: copy.value.booking.title, description: copy.value.booking.desc })])

const form = reactive({ name: '', phone: '', kids: '', message: '' })
const link = computed(() => whatsappLink(
  center.value.whatsapp,
  `${copy.value.common.whatsappText}\n${copy.value.booking.name}: ${form.name}\n${copy.value.booking.phone}: ${form.phone}\n${copy.value.booking.kids}: ${form.kids}\n${form.message}`
))
</script>

<template>
  <div>
    <BreadcrumbNav :items="[{ name: copy.nav.book, path: '/' + ROUTES.booking }]" />
    <div class="container">
      <header class="page-hero tone-primary">
        <h1>{{ copy.booking.h1 }}</h1>
        <p class="lead">{{ copy.booking.lead }}</p>
        <LocationPill light />
      </header>
    </div>

    <section class="section">
      <div class="container">
        <h2>{{ copy.home.agendaTitle }} {{ center.name }}</h2>
        <WorkshopAgenda filterable />
      </div>
    </section>

    <section class="section" style="padding-top:0">
      <div class="container" style="max-width:640px">
        <h2>{{ copy.booking.formTitle }}</h2>
        <form class="card form" @submit.prevent>
          <label>{{ copy.booking.name }}<input v-model="form.name" type="text" autocomplete="name"></label>
          <label>{{ copy.booking.phone }}<input v-model="form.phone" type="tel" autocomplete="tel"></label>
          <label>{{ copy.booking.kids }}<input v-model="form.kids" type="text"></label>
          <label>{{ copy.booking.message }}<textarea v-model="form.message" rows="4" /></label>
          <a v-if="link" class="btn btn-wa" :href="link" target="_blank" rel="noopener">💬 {{ copy.booking.send }}</a>
          <p v-else>{{ copy.common.noWhatsapp }}</p>
          <small>{{ copy.booking.hint }}</small>
        </form>
      </div>
    </section>
  </div>
</template>
