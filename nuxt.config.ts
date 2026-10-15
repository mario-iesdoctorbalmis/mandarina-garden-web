import { resolve } from 'node:path'
import { writeFileSync } from 'node:fs'
import { centers, services, ROUTES, SITE_URL } from './app/data/site'

const slugs = [
  ...services.map(s => ({ slug: s.slug, view: 'ServicePage' })),
  ...centers.map(c => ({ slug: c.slug, view: 'CenterPage' })),
  { slug: ROUTES.centers, view: 'CentersPage' },
  { slug: ROUTES.booking, view: 'BookingPage' }
]
const locales = ['', '/en', '/ca']

// 301 desde las URLs antiguas (.html) para conservar el posicionamiento
const redirects = locales.flatMap(l => [
  ...slugs.map(({ slug }) => `${l}/${slug}.html ${l}/${slug} 301`),
  `${l}/index.html ${l || '/'} 301`
]).join('\n')
writeFileSync(resolve(__dirname, 'public/_redirects'), `${redirects}\n`)

// Vercel no lee _redirects: mismos 301 en vercel.json
const vercelRedirects = redirects.split('\n').map((line) => {
  const [source, destination] = line.split(' ')
  return { source, destination, statusCode: 301 }
})
writeFileSync(resolve(__dirname, 'vercel.json'), `${JSON.stringify({ redirects: vercelRedirects }, null, 2)}\n`)

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/i18n', '@nuxtjs/sitemap', '@nuxtjs/robots', 'nuxt-schema-org'],
  css: ['@fontsource-variable/quicksand', '@fontsource-variable/dm-sans', '~/assets/css/main.css'],

  site: { url: SITE_URL, name: 'Mandarina Garden', defaultLocale: 'es' },

  i18n: {
    baseUrl: SITE_URL,
    strategy: 'prefix_except_default',
    defaultLocale: 'es',
    detectBrowserLanguage: false,
    locales: [
      { code: 'es', language: 'es-ES', name: 'Español' },
      { code: 'en', language: 'en-GB', name: 'English' },
      { code: 'ca', language: 'ca-ES', name: 'Valencià' }
    ]
  },

  sitemap: { autoLastmod: true },
  robots: { sitemap: [`${SITE_URL}/sitemap_index.xml`] },
  schemaOrg: { identity: { type: 'Organization', name: 'Mandarina Garden', url: SITE_URL, logo: `${SITE_URL}/logo.png` } },

  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: '/logo.png' }],
      meta: [{ name: 'theme-color', content: '#F27438' }]
    }
  },

  hooks: {
    'pages:extend' (pages) {
      for (const { slug, view } of slugs) {
        pages.push({ name: slug, path: `/${slug}`, file: resolve(__dirname, `app/views/${view}.vue`) })
      }
    }
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/en', '/ca', ...locales.flatMap(l => slugs.map(({ slug }) => `${l}/${slug}`)), '/404.html']
    }
  }
})
