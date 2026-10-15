import { es } from '~/data/es'
import { en } from '~/data/en'
import { ca } from '~/data/ca'
import type { Copy } from '~/data/copy.types'
import { centers, DEFAULT_CENTER, SITE_URL } from '~/data/site'

const dictionaries: Record<string, Copy> = { es, en, ca }

export function useCopy () {
  const { locale } = useI18n()
  return computed<Copy>(() => dictionaries[locale.value] ?? es)
}

export function useCenter () {
  const cookie = useCookie<string>('mg-center', { maxAge: 60 * 60 * 24 * 365, sameSite: 'lax', default: () => DEFAULT_CENTER })
  // Estado inicial fijo en servidor para que el HTML prerenderizado sea idéntico; se restaura la preferencia al montar.
  const key = useState<string>('mg-center', () => DEFAULT_CENTER)
  const center = computed(() => centers.find(c => c.key === key.value) ?? centers.find(c => c.key === DEFAULT_CENTER)!)
  function restore () {
    if (centers.some(c => c.key === cookie.value)) { key.value = cookie.value }
  }
  function select (k: string) {
    if (!centers.some(c => c.key === k)) { return }
    key.value = k
    cookie.value = k
  }
  return { key, center, select, restore }
}

export function whatsappLink (phone: string | null, text: string) {
  return phone ? `https://wa.me/${phone}?text=${encodeURIComponent(text)}` : null
}

export function usePageSeo (title: MaybeRefOrGetter<string>, description: MaybeRefOrGetter<string>) {
  const t = toValue
  useSeoMeta({
    title: () => t(title),
    description: () => t(description),
    ogTitle: () => t(title),
    ogDescription: () => t(description),
    ogType: 'website',
    ogSiteName: 'Mandarina Garden',
    ogImage: `${SITE_URL}/logo.png`,
    twitterCard: 'summary'
  })
}

export function pageSlug () {
  return useRoute().path.replace(/^\/(en|ca)(?=\/|$)/, '').replace(/^\//, '').replace(/\/$/, '')
}
