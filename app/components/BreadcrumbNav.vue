<script setup lang="ts">
import { SITE_URL } from '~/data/site'

const props = defineProps<{ items: { name: string, path: string }[] }>()
const copy = useCopy()
const lp = useLocalePath()

const all = computed(() => [{ name: copy.value.common.home, path: '/' }, ...props.items])
useSchemaOrg([{
  '@type': 'BreadcrumbList',
  itemListElement: all.value.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: SITE_URL + lp(it.path) }))
}])
</script>

<template>
  <nav class="crumbs container" aria-label="Breadcrumb">
    <template v-for="(it, i) in all" :key="it.path">
      <NuxtLink v-if="i < all.length - 1" :to="lp(it.path)">{{ it.name }}</NuxtLink>
      <span v-else aria-current="page">{{ it.name }}</span>
      <span v-if="i < all.length - 1"> › </span>
    </template>
  </nav>
</template>
