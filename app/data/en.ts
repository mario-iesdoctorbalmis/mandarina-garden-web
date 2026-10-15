import type { Copy } from './copy.types'

export const en: Copy = {
  htmlLang: 'en',
  brand: 'Mandarina Garden',
  nav: { experiences: 'Experiences', birthdays: 'Birthdays', slowcafe: 'SlowCafé', centers: 'Centres', book: 'Book', menu: 'Menu', close: 'Close' },
  top: { yourCenter: 'Your centre', whatsapp: 'Direct WhatsApp', franchise: 'Franchise', skip: 'Skip to content' },
  home: {
    title: 'Kids play centre, SlowCafé and birthday parties | Mandarina Garden',
    desc: 'Supervised kids play centre, SlowCafé, creative workshops and children’s birthday parties in Alicante, Madrid, Barakaldo, Castro Urdiales, Parla, Xàtiva and more. Book in two clicks.',
    eyebrow: 'Where imagination lives',
    h1: 'The place where kids create and grown-ups unwind',
    sub: 'Supervised play area, SlowCafé, creative workshops and magical birthday parties, close to you.',
    ctaWorkshops: 'Explore workshops',
    ctaParty: 'Plan a birthday',
    heroCaption: 'Parents in SlowCafé · Kids in BabyResort',
    quick: { label: 'Quick booking', what: 'What are you looking for?', center: 'Centre', go: 'Check availability', options: { talleres: 'Afternoon workshops', cumples: 'Birthday party', ludoteca: 'Play area by the hour', mornings: 'Montessori mornings' } },
    bentoTitle: 'Discover every segment of Mandarina',
    bentoSub: 'Five ways to enjoy Mandarina Garden, all in one place.',
    agendaTitle: 'This month’s schedule at',
    agendaAll: 'See the full calendar',
    partyTitle: 'Birthdays and events',
    partySub: 'Compare options without reloading the page and request your party.',
    centersTitle: 'Find your Mandarina Garden',
    centersSub: 'Alicante, Madrid, Basque Country, Cantabria, Catalonia, Valencia and Panama.',
    b2bTitle: 'Want to plant your own Mandarina?',
    b2bSub: 'Kids café and play centre franchise, plus events for companies and shopping centres.',
    b2bCta: 'Franchise information',
    faqTitle: 'Frequently asked questions',
    faq: [
      { q: 'What is Mandarina Garden?', a: 'A family leisure space with a BabyResort play area supervised by staff, a SlowCafé for grown-ups, daily workshops and children’s birthday parties.' },
      { q: 'Where are the Mandarina Garden centres?', a: 'We have centres in Alicante (Playa San Juan and PAU5), Barakaldo, Castro Urdiales, Castellar del Vallès, Madrid El Cañaveral, Parla, Xàtiva and Panama.' },
      { q: 'Can birthdays be celebrated at home?', a: 'Yes. Celebrate at the centre, at home or with a Pyjama Party. Message your nearest centre on WhatsApp for a quote.' },
      { q: 'How do I book a workshop?', a: 'Pick your centre, open the schedule and press Book. You will be taken to WhatsApp with the message ready for that centre.' }
    ]
  },
  common: {
    book: 'Book', askWhatsapp: 'Ask on WhatsApp', seeMore: 'See more', ages: 'years', spots: 'spots', lastSpots: 'Last spots', free: 'Free',
    noWorkshops: 'No workshops published for this centre yet. Ask us on WhatsApp.', otherCenters: 'Other centres', allCenters: 'See all centres', openCenter: 'View centre',
    newBadge: 'New', whyTitle: 'What you will find', nextStepTitle: 'Shall we talk?', nextStepText: 'Message the centre closest to you and we will reply shortly.',
    related: 'You may also like', home: 'Home',
    days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    whatsappText: 'Hello, I have seen everything on your website and I was looking for...',
    english: 'School of English', legal: 'Legal notice and privacy', rights: 'All rights reserved.', footerTag: 'They won’t want to leave, and you probably won’t either.',
    selectCenter: 'Choose your centre', noWhatsapp: 'This centre has no WhatsApp yet. Please use the booking form.'
  },
  party: {
    tabs: { center: 'At the centre', home: 'At home', pijama: 'Pyjama Party' },
    center: { title: 'Birthday at the centre', text: 'We take care of everything: space, staff, homemade snacks and decoration.', items: ['Sweet tables and homemade snacks', 'Teepees and private play areas', 'Staff throughout the party'] },
    home: { title: 'Birthday at home', text: 'We bring entertainment, games and decoration to your home or venue.', items: ['Themed entertainment and workshops', 'Decoration and sweet table', 'No clean-up for you'] },
    pijama: { title: 'Pyjama Party', text: 'An evening of movies, games, dinner and plenty of magic in pyjamas.', items: ['Teepees and mats', 'Dinner and breakfast', 'Activities to sleep over like at home'] },
    ask: 'Request my party', msg: 'Hello, I would like information to organise a birthday party'
  },
  booking: {
    title: 'Online booking for workshops and birthdays | Mandarina Garden',
    desc: 'Check each centre’s workshop schedule and book via WhatsApp or form. Afternoon workshops, play area and birthdays.',
    h1: 'Book your workshop or birthday', lead: 'Choose your centre, filter by workshop type and book in two clicks.',
    formTitle: 'Prefer a call back?', name: 'Your name', phone: 'Phone', kids: 'Children’s ages', message: 'Tell us what you need', send: 'Send via WhatsApp',
    hint: 'WhatsApp will open with your message ready for the chosen centre.',
    category: { cocina: 'Cooking', arte: 'Art', fiesta: 'Party', ciencia: 'Science' }, all: 'All'
  },
  centersPage: {
    title: 'Mandarina Garden centres: where we are | Play area and SlowCafé',
    desc: 'Find your nearest Mandarina Garden: Alicante, Barakaldo, Castro Urdiales, Castellar del Vallès, Madrid, Parla, Xàtiva and Panama.',
    h1: 'Where we are', lead: 'North, south, east and west: find your nearest Mandarina Garden.'
  },
  centerPage: {
    title: c => `Mandarina Garden ${c}: play area, SlowCafé and birthdays`,
    desc: c => `Kids play area, SlowCafé, workshops and birthday parties at Mandarina Garden ${c}. Check the schedule and book on WhatsApp.`,
    h1: c => `Mandarina Garden ${c}`,
    lead: c => `Your family leisure space in ${c}: supervised play area, relaxed café, workshops and birthdays.`,
    h2Agenda: 'Workshop schedule', h2Services: 'What you can do here', h2Contact: 'Contact'
  },
  notFound: { title: 'Page not found | Mandarina Garden', text: 'We could not find this page, but you can find what you need from the home page.', back: 'Back to home' },
  services: {
    babyresort: { name: 'BabyResort & Play area', title: 'BabyResort kids play area with supervisors', desc: 'BabyResort®, the magical play area at Mandarina Garden: free and guided play, always supervised. Hourly rates and passes.', lead: 'Free and guided play, always with supervisors. Hourly rates and passes.', points: ['Safe space adapted by age', 'Supervisors present at all times', 'Hourly rates and flexible passes'] },
    cogrowing: { name: 'SlowCafé & Co-Growing', title: 'Co-Growing: coworking with a kids play area', desc: 'Work or relax in SlowCafé while your kids enjoy the play area at Mandarina Garden. Family coworking space.', lead: 'Your office in the morning or your relaxing corner while they have fun.', points: ['Wifi and quiet work area', 'Kids looked after in the play area', 'Homemade coffee and breakfasts'] },
    art: { name: 'Art Studio & Camps', title: 'Art Studio: art workshops for kids', desc: 'Mandarina Art Studio: art, painting and craft workshops for children at Mandarina Garden.', lead: 'Art and creativity workshops so kids can experiment with their hands.', points: ['Painting, ceramics and crafts', 'Small groups by age', 'Materials included'] },
    mornings: { name: 'Mornings Montessori', title: 'Montessori mornings: an alternative to nursery', desc: 'Montessori children’s space in the mornings at Mandarina Garden: an alternative to nursery while you work.', lead: 'An alternative to nursery school with a Montessori approach.', points: ['Prepared, respectful environment', 'Learning at their own pace', 'Flexible morning hours'] },
    camps: { name: 'Camps & school-free days', title: 'Urban camps and school-free days', desc: 'Urban camps and school-free days at Mandarina Garden: workshops, games and fun while you work.', lead: 'Workshops and plans for school holidays and days off.', points: ['Themed activities every day', 'Extended hours', 'Optional lunch and snack'] },
    workshops: { name: 'Workshops', title: 'Afternoon workshops and activities for kids', desc: 'Cooking, art, science and themed party workshops for kids at Mandarina Garden. Check your centre’s schedule.', lead: 'Cooking, art, science and parties: afternoon activities for all ages.', points: ['Daily workshops', 'Recommended age on each workshop', 'Limited spots: book early'] },
    printables: { name: 'Printables', title: 'Free printable kids crafts', desc: 'Download free printables and crafts from Mandarina Garden to enjoy at home.', lead: 'Downloads to keep creating at home.', points: ['Print-ready crafts', 'Birthday ideas', 'New resources every month'] },
    birthdays: { name: 'Birthdays', title: 'Kids’ birthday parties: at the centre or at home', desc: 'Celebrate your child’s birthday at Mandarina Garden: at the centre, at home or Pyjama Party. Sweet tables, homemade snacks and staff.', lead: 'Discover the new birthday themes, also available at home.', points: ['New themes every season', 'Homemade snacks and sweet table', 'Staff and entertainment included'] },
    homeparties: { name: 'Parties at home', title: 'Children’s entertainment at home for birthdays', desc: 'Birthday parties and kids’ entertainment at home with Mandarina Garden: games, workshops and decoration.', lead: 'We bring the party wherever you want to celebrate.', points: ['Professional entertainers and staff', 'Themed workshops', 'Decoration included'] },
    themed: { name: 'Themed parties', title: 'Themed and special parties for kids', desc: 'Themed and special parties: Halloween, Christmas, carnival and more at Mandarina Garden.', lead: 'Halloween, Christmas, Carnival... special parties for the whole family.', points: ['Themed decoration and games', 'Family tickets', 'Special dates all year round'] },
    pijama: { name: 'Pyjama Party', title: 'Kids’ Pyjama Party sleepover', desc: 'Kids’ Pyjama Party at Mandarina Garden: movie, dinner, games and breakfast. An unforgettable birthday night.', lead: 'A magical night with friends, movies, games and lots of imagination.', points: ['Dinner and breakfast included', 'Teepees and mats', 'Staff all night'] },
    sweet: { name: 'Sweet tables', title: 'Sweet tables and decoration for communions', desc: 'Sweet tables, decoration and baking for communions, christenings and birthdays at Mandarina Garden.', lead: 'Sweets, decoration and details for your celebrations.', points: ['Custom sweet tables', 'Communion and christening decoration', 'Homemade baking'] },
    corporate: { name: 'Corporate events', title: 'Kids’ events for companies and shopping centres', desc: 'Kids’ entertainment, workshops and events for companies and shopping centres with Mandarina Garden.', lead: 'Kids’ entertainment and workshops for your corporate events.', points: ['Tailored workshops and entertainment', 'Professional team', 'Events in shopping centres'] },
    slowcafe: { name: 'SlowCafé', title: 'SlowCafé: relaxed café with a kids area', desc: 'SlowCafé, the relaxed café lounge for parents at Mandarina Garden: coffee, breakfasts and homemade snacks while kids play.', lead: 'A relaxed café lounge for grown-ups, with the kids playing close by.', points: ['Coffee and homemade baking', 'Menu with kid-friendly options', 'Relaxing area next to the play area'] },
    cakes: { name: 'Cakes', title: 'Custom decorated cakes', desc: 'Custom decorated cakes for birthdays and celebrations at Mandarina Garden.', lead: 'Personalised cakes to make your celebration magical.', points: ['Custom designs', 'Homemade ingredients', 'Order in advance'] },
    breakfasts: { name: 'Breakfasts', title: 'Gift a breakfast or snack delivered home', desc: 'Gift breakfasts and snacks delivered to the door with Mandarina Garden: the perfect surprise.', lead: 'Give Mandarina as a gift, or treat yourself: breakfasts and snacks delivered.', points: ['Breakfast and snack packs', 'Home delivery', 'Personal message'] },
    franchise: { name: 'Franchise', title: 'Kids café and play centre franchise: Plant your Mandarina', desc: 'Mandarina Garden kids café and play centre franchise: open your own centre with a proven model.', lead: 'Plant your Mandarina: a business model with identity and community.', points: ['Model proven in several centres', 'Training and support', 'Recognised brand in children’s leisure'] }
  }
}
