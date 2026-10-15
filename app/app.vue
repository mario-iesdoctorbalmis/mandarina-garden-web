<script setup lang="ts">
const { restore } = useCenter()
const copy = useCopy()
const i18nHead = useLocaleHead({ dir: false, seo: true })
useHead(() => ({
  htmlAttrs: { lang: i18nHead.value.htmlAttrs?.lang },
  link: i18nHead.value.link,
  meta: i18nHead.value.meta
}))
onMounted(restore)
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <a class="skip" href="#main">{{ copy.top.skip }}</a>
    <SiteHeader />
    <main id="main">
      <NuxtPage />
    </main>
    <SiteFooter />
    <StickyMobileCTA />
  </div>
</template>
