export const SITE_URL = 'https://www.mandarinagarden.es'

export type Tone = 'primary' | 'sage' | 'berry'

export interface Center {
  key: string
  slug: string
  name: string
  city: string
  region: string
  country: 'ES' | 'PA'
  isNew?: boolean
  whatsapp: string | null
}

export const centers: Center[] = [
  { key: 'alicante', slug: 'mandarina-garden-alicante-playa-san-juan', name: 'Alicante Playa San Juan', city: 'Alicante', region: 'Alicante', country: 'ES', whatsapp: '34691619755' },
  { key: 'pau5', slug: 'mandarina-garden-small-world-pau5', name: 'Alicante PAU5', city: 'Alicante', region: 'Alicante', country: 'ES', isNew: true, whatsapp: '34633329803' },
  { key: 'barakaldo', slug: 'bakery-reposteria-dulces-barakaldo', name: 'Barakaldo', city: 'Barakaldo', region: 'Bizkaia', country: 'ES', whatsapp: '34661559688' },
  { key: 'castro', slug: 'cafeteria-relax-peques-castrourdiales', name: 'Castro Urdiales', city: 'Castro Urdiales', region: 'Cantabria', country: 'ES', whatsapp: '34682371110' },
  { key: 'castellar', slug: 'mandarina-garden-castellar-del-valles', name: 'Castellar del Vallès', city: 'Castellar del Vallès', region: 'Barcelona', country: 'ES', isNew: true, whatsapp: '34624094935' },
  { key: 'canaveral', slug: 'mandarina-garden-canaveral-madrid', name: 'Madrid El Cañaveral', city: 'Madrid', region: 'Madrid', country: 'ES', isNew: true, whatsapp: '34692371810' },
  { key: 'parla', slug: 'mandarina-garden-parla', name: 'Parla', city: 'Parla', region: 'Madrid', country: 'ES', whatsapp: '34633960618' },
  { key: 'xativa', slug: 'mandarina-garden-xativa', name: 'Xàtiva', city: 'Xàtiva', region: 'Valencia', country: 'ES', isNew: true, whatsapp: null },
  { key: 'panama', slug: 'cafeteria-espacio-infantil-panama', name: 'Panamá', city: 'Ciudad de Panamá', region: 'Panamá', country: 'PA', whatsapp: null }
]

export const DEFAULT_CENTER = 'pau5'

export interface Service {
  key: string
  slug: string
  icon: string
  tone: Tone
  group: 'experiencias' | 'cumples' | 'slowcafe' | 'franquicia'
  primary?: boolean
}

export const services: Service[] = [
  { key: 'babyresort', slug: 'ludoteca-magica-baby-resort', icon: '🎈', tone: 'primary', group: 'experiencias', primary: true },
  { key: 'cogrowing', slug: 'espacio-cogrowing-coworking', icon: '☕', tone: 'sage', group: 'slowcafe', primary: true },
  { key: 'art', slug: 'art-studio-para-ninos', icon: '🎨', tone: 'primary', group: 'experiencias', primary: true },
  { key: 'mornings', slug: 'espacio-infantil-montessori-coworking', icon: '🌱', tone: 'sage', group: 'experiencias', primary: true },
  { key: 'camps', slug: 'campamentos-urbanos-dias-sin-cole', icon: '⛺', tone: 'primary', group: 'experiencias' },
  { key: 'workshops', slug: 'talleres-actividades-infantiles', icon: '🧪', tone: 'berry', group: 'experiencias' },
  { key: 'printables', slug: 'mandarina-garden-printables', icon: '🖨️', tone: 'sage', group: 'experiencias' },
  { key: 'birthdays', slug: 'ideas-celebrar-fiestas-cumples-infantiles', icon: '🎂', tone: 'berry', group: 'cumples' },
  { key: 'homeparties', slug: 'animacion-cumples-eventos-infantiles', icon: '🏠', tone: 'berry', group: 'cumples' },
  { key: 'themed', slug: 'fiestas-tematicas-y-especiales', icon: '🎃', tone: 'berry', group: 'cumples' },
  { key: 'pijama', slug: 'fiestas-pijama-party-infantiles', icon: '🌙', tone: 'berry', group: 'cumples' },
  { key: 'sweet', slug: 'mesas-dulces-decoracion-comuniones', icon: '🍬', tone: 'berry', group: 'cumples' },
  { key: 'corporate', slug: 'eventos-empresas-centros-comerciales', icon: '🏢', tone: 'sage', group: 'franquicia' },
  { key: 'slowcafe', slug: 'cafeteria-relax-slow-cafe', icon: '☕', tone: 'sage', group: 'slowcafe' },
  { key: 'cakes', slug: 'tartas-decoradas-encargos', icon: '🍰', tone: 'berry', group: 'slowcafe' },
  { key: 'breakfasts', slug: 'regala-desayuno-merienda-domicilio', icon: '🥐', tone: 'sage', group: 'slowcafe' },
  { key: 'franchise', slug: 'franquicia-cafeteria-ocio-infantil', icon: '🌳', tone: 'sage', group: 'franquicia' }
]

export const ROUTES = {
  centers: 'mandarina-garden-donde-estamos',
  booking: 'reserva-online',
  birthdays: 'ideas-celebrar-fiestas-cumples-infantiles',
  slowcafe: 'cafeteria-relax-slow-cafe',
  franchise: 'franquicia-cafeteria-ocio-infantil',
  privacy: 'politica-privacidad'
} as const

export const SOCIAL = [
  'https://www.facebook.com/Mandarinagarden',
  'https://www.instagram.com/mandarinagarden/',
  'https://www.youtube.com/c/MandarinagardenChannel',
  'https://www.pinterest.es/MandarinaGardenOfficial/',
  'https://www.linkedin.com/company/mandarina-garden',
  'https://twitter.com/mandarinagarden'
]

export const ENGLISH_SCHOOL_URL = 'https://www.mandarinaenglish.es/'

export interface Workshop {
  id: string
  center: string
  icon: string
  category: 'cocina' | 'arte' | 'fiesta' | 'ciencia'
  day: number
  time: string
  minAge: number
  price: number
  spots: number
  title: { es: string, en: string, ca: string }
}

// Datos de ejemplo: sustituir por la agenda real de cada centro.
export const workshops: Workshop[] = [
  { id: 'w1', center: 'pau5', icon: '🍪', category: 'cocina', day: 5, time: '17:30', minAge: 3, price: 12, spots: 8, title: { es: 'Pequeños Cocineros', en: 'Little Chefs', ca: 'Petits Cuiners' } },
  { id: 'w2', center: 'pau5', icon: '🧪', category: 'ciencia', day: 6, time: '18:00', minAge: 5, price: 14, spots: 2, title: { es: 'Magic Slime Lab', en: 'Magic Slime Lab', ca: 'Magic Slime Lab' } },
  { id: 'w3', center: 'pau5', icon: '🎃', category: 'fiesta', day: 4, time: '17:30', minAge: 0, price: 18, spots: 12, title: { es: 'Gran Fiesta Temática', en: 'Big Theme Party', ca: 'Gran Festa Temàtica' } },
  { id: 'w4', center: 'alicante', icon: '🎨', category: 'arte', day: 3, time: '17:30', minAge: 4, price: 12, spots: 6, title: { es: 'Pintamos en Lienzo', en: 'Canvas Painting', ca: 'Pintem en Llenç' } },
  { id: 'w5', center: 'alicante', icon: '🍪', category: 'cocina', day: 5, time: '17:30', minAge: 3, price: 12, spots: 3, title: { es: 'Pequeños Cocineros', en: 'Little Chefs', ca: 'Petits Cuiners' } },
  { id: 'w6', center: 'canaveral', icon: '🧪', category: 'ciencia', day: 6, time: '11:00', minAge: 5, price: 14, spots: 9, title: { es: 'Magic Slime Lab', en: 'Magic Slime Lab', ca: 'Magic Slime Lab' } },
  { id: 'w7', center: 'canaveral', icon: '🎨', category: 'arte', day: 4, time: '17:30', minAge: 4, price: 12, spots: 7, title: { es: 'Arcilla y Color', en: 'Clay & Colour', ca: 'Fang i Color' } },
  { id: 'w8', center: 'barakaldo', icon: '🍪', category: 'cocina', day: 5, time: '17:30', minAge: 3, price: 12, spots: 10, title: { es: 'Pequeños Cocineros', en: 'Little Chefs', ca: 'Petits Cuiners' } },
  { id: 'w9', center: 'parla', icon: '🎃', category: 'fiesta', day: 6, time: '17:00', minAge: 0, price: 18, spots: 1, title: { es: 'Gran Fiesta Temática', en: 'Big Theme Party', ca: 'Gran Festa Temàtica' } }
]
