export interface ServiceCopy {
  name: string
  title: string
  desc: string
  lead: string
  points: string[]
}

export interface Copy {
  htmlLang: string
  brand: string
  nav: { experiences: string, birthdays: string, slowcafe: string, centers: string, book: string, menu: string, close: string }
  top: { yourCenter: string, whatsapp: string, franchise: string, skip: string }
  home: {
    title: string
    desc: string
    eyebrow: string
    h1: string
    sub: string
    ctaWorkshops: string
    ctaParty: string
    heroCaption: string
    quick: { label: string, what: string, center: string, go: string, options: Record<string, string> }
    bentoTitle: string
    bentoSub: string
    agendaTitle: string
    agendaAll: string
    partyTitle: string
    partySub: string
    centersTitle: string
    centersSub: string
    b2bTitle: string
    b2bSub: string
    b2bCta: string
    faqTitle: string
    faq: { q: string, a: string }[]
  }
  common: {
    book: string
    askWhatsapp: string
    seeMore: string
    ages: string
    spots: string
    lastSpots: string
    free: string
    noWorkshops: string
    otherCenters: string
    allCenters: string
    openCenter: string
    newBadge: string
    whyTitle: string
    nextStepTitle: string
    nextStepText: string
    related: string
    home: string
    days: string[]
    whatsappText: string
    english: string
    legal: string
    rights: string
    footerTag: string
    selectCenter: string
    noWhatsapp: string
  }
  party: {
    tabs: { center: string, home: string, pijama: string }
    center: { title: string, text: string, items: string[] }
    home: { title: string, text: string, items: string[] }
    pijama: { title: string, text: string, items: string[] }
    ask: string
    msg: string
  }
  booking: {
    title: string
    desc: string
    h1: string
    lead: string
    formTitle: string
    name: string
    phone: string
    kids: string
    message: string
    send: string
    hint: string
    category: Record<string, string>
    all: string
  }
  centersPage: { title: string, desc: string, h1: string, lead: string }
  centerPage: { title: (c: string) => string, desc: (c: string) => string, h1: (c: string) => string, lead: (c: string) => string, h2Agenda: string, h2Services: string, h2Contact: string }
  notFound: { title: string, text: string, back: string }
  services: Record<string, ServiceCopy>
}
