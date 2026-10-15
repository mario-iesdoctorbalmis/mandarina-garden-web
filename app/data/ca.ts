import type { Copy } from './copy.types'

export const ca: Copy = {
  htmlLang: 'ca',
  brand: 'Mandarina Garden',
  nav: { experiences: 'Experiències', birthdays: 'Aniversaris', slowcafe: 'SlowCafé', centers: 'Centres', book: 'Reservar', menu: 'Menú', close: 'Tancar' },
  top: { yourCenter: 'El teu centre', whatsapp: 'WhatsApp directe', franchise: 'Franquícies', skip: 'Saltar al contingut' },
  home: {
    title: 'Ludoteca infantil, SlowCafé i aniversaris | Mandarina Garden',
    desc: 'Ludoteca amb monitores, cafeteria SlowCafé, tallers creatius i aniversaris infantils a Alacant, Madrid, Barakaldo, Castro Urdiales, Parla, Xàtiva i més. Reserva en dos clics.',
    eyebrow: 'On viu la imaginació',
    h1: 'L’espai on els menuts creen i els grans desconnecten',
    sub: 'Ludoteca amb monitores, SlowCafé, tallers creatius i aniversaris infantils màgics, a prop teu.',
    ctaWorkshops: 'Explorar tallers',
    ctaParty: 'Configurar aniversari',
    heroCaption: 'Grans al SlowCafé · Menuts al BabyResort',
    quick: { label: 'Reserva ràpida', what: 'Què busques?', center: 'Centre', go: 'Veure disponibilitat', options: { talleres: 'Tallers de vesprada', cumples: 'Aniversari', ludoteca: 'Ludoteca per hores', mornings: 'Matins Montessori' } },
    bentoTitle: 'Descobreix tots els grans de Mandarina',
    bentoSub: 'Cinc maneres de gaudir de Mandarina Garden, en un mateix lloc.',
    agendaTitle: 'Agenda d’aquest mes a',
    agendaAll: 'Veure calendari complet',
    partyTitle: 'Aniversaris i esdeveniments',
    partySub: 'Compara les modalitats sense recarregar la pàgina i demana cita.',
    centersTitle: 'Troba el teu Mandarina Garden',
    centersSub: 'Alacant, Madrid, País Basc, Cantàbria, Catalunya, València i Panamà.',
    b2bTitle: 'Vols plantar la teua Mandarina?',
    b2bSub: 'Franquícia de cafeteria i oci infantil, i esdeveniments per a empreses i centres comercials.',
    b2bCta: 'Informació per a franquiciats',
    faqTitle: 'Preguntes freqüents',
    faq: [
      { q: 'Què és Mandarina Garden?', a: 'Un espai d’oci infantil i familiar amb ludoteca BabyResort amb monitores, cafeteria SlowCafé per als grans, tallers diaris i aniversaris infantils.' },
      { q: 'On són els centres Mandarina Garden?', a: 'Tenim centres a Alacant (Platja de Sant Joan i PAU5), Barakaldo, Castro Urdiales, Castellar del Vallès, Madrid El Cañaveral, Parla, Xàtiva i Panamà.' },
      { q: 'Es poden celebrar aniversaris a domicili?', a: 'Sí. Pots celebrar-lo al centre, a domicili o amb una Festa de Pijames. Escriu-nos per WhatsApp al centre més proper.' },
      { q: 'Com reserve un taller?', a: 'Tria el teu centre, entra a l’agenda i prem Reservar. Et durà a WhatsApp amb el missatge preparat.' }
    ]
  },
  common: {
    book: 'Reservar', askWhatsapp: 'Demanar per WhatsApp', seeMore: 'Veure més', ages: 'anys', spots: 'places', lastSpots: 'Últimes places', free: 'Gratis',
    noWorkshops: 'Encara no hi ha tallers publicats en aquest centre. Pregunta’ns per WhatsApp.', otherCenters: 'Altres centres', allCenters: 'Veure tots els centres', openCenter: 'Veure centre',
    newBadge: 'Nou', whyTitle: 'Què trobaràs', nextStepTitle: 'Parlem?', nextStepText: 'Escriu-nos al centre més proper i et respondrem de seguida.',
    related: 'També et pot interessar', home: 'Inici',
    days: ['Dg', 'Dl', 'Dt', 'Dc', 'Dj', 'Dv', 'Ds'],
    whatsappText: 'Hola, he vist tot el que teniu al web i estava buscant...',
    english: 'School of English', legal: 'Avís legal i privacitat', rights: 'Tots els drets reservats.', footerTag: 'No voldran marxar, probablement tu tampoc.',
    selectCenter: 'Tria el teu centre', noWhatsapp: 'Aquest centre encara no té WhatsApp. Usa el formulari de reserva.'
  },
  party: {
    tabs: { center: 'Al centre', home: 'A domicili', pijama: 'Festa de pijames' },
    center: { title: 'Aniversari al centre', text: 'Ens ocupem de tot: espai, monitores, berenar casolà i decoració.', items: ['Taules dolces i berenars casolans', 'Tipis i zones de joc privades', 'Monitores durant tota la festa'] },
    home: { title: 'Aniversari a domicili', text: 'Portem l’animació, els jocs i la decoració a casa teua.', items: ['Animació i tallers temàtics', 'Decoració i taula dolça', 'Sense preocupar-te de recollir'] },
    pijama: { title: 'Festa de pijames', text: 'Una vesprada-nit de cine, jocs, sopar i molta màgia en pijama.', items: ['Tipis i matalassets', 'Sopar i esmorzar', 'Activitats per a dormir com a casa'] },
    ask: 'Demanar cita per al meu aniversari', msg: 'Hola, voldria informació per a organitzar un aniversari'
  },
  booking: {
    title: 'Reserva en línia de tallers i aniversaris | Mandarina Garden',
    desc: 'Consulta l’agenda de tallers per centre i reserva per WhatsApp o formulari. Tallers de vesprada, ludoteca i aniversaris.',
    h1: 'Reserva el teu taller o el teu aniversari', lead: 'Tria el centre, filtra per tipus de taller i reserva en dos clics.',
    formTitle: 'Prefereixes que et cridem?', name: 'El teu nom', phone: 'Telèfon', kids: 'Edat dels menuts', message: 'Conta’ns què necessites', send: 'Enviar per WhatsApp',
    hint: 'S’obrirà WhatsApp amb el missatge preparat per al centre triat.',
    category: { cocina: 'Cuina', arte: 'Art', fiesta: 'Festa', ciencia: 'Ciència' }, all: 'Tots'
  },
  centersPage: {
    title: 'Centres Mandarina Garden: on som | Ludoteca i SlowCafé',
    desc: 'Troba el teu Mandarina Garden més proper: Alacant, Barakaldo, Castro Urdiales, Castellar del Vallès, Madrid, Parla, Xàtiva i Panamà.',
    h1: 'On som', lead: 'Nord, sud, est i oest: troba el teu Mandarina Garden més proper.'
  },
  centerPage: {
    title: c => `Mandarina Garden ${c}: ludoteca, SlowCafé i aniversaris`,
    desc: c => `Ludoteca infantil, cafeteria SlowCafé, tallers i aniversaris a Mandarina Garden ${c}. Consulta l’agenda i reserva per WhatsApp.`,
    h1: c => `Mandarina Garden ${c}`,
    lead: c => `El teu espai d’oci infantil i familiar a ${c}: ludoteca amb monitores, cafeteria relax, tallers i aniversaris.`,
    h2Agenda: 'Agenda de tallers', h2Services: 'Què pots fer ací', h2Contact: 'Contacte'
  },
  notFound: { title: 'Pàgina no trobada | Mandarina Garden', text: 'No trobem aquesta pàgina, però pots trobar el que busques des de l’inici.', back: 'Tornar a l’inici' },
  services: {
    babyresort: { name: 'BabyResort i Ludoteca', title: 'Ludoteca infantil BabyResort amb monitores', desc: 'BabyResort®, la ludoteca màgica de Mandarina Garden: joc lliure i guiat sempre amb monitores. Tarifes per hores i bons.', lead: 'Joc lliure i guiat sempre amb monitores. Tarifes per hores i bons.', points: ['Espai segur adaptat per edats', 'Monitores en tot moment', 'Tarifes per hores i bons flexibles'] },
    cogrowing: { name: 'SlowCafé i Co-Growing', title: 'Co-Growing: cowork amb ludoteca per als menuts', desc: 'Treballa o relaxa’t al SlowCafé mentre els teus fills gaudeixen a la ludoteca de Mandarina Garden.', lead: 'La teua oficina pel matí o el teu racó de relax mentre ells gaudeixen.', points: ['Wifi i zona de treball tranquil·la', 'Menuts amb monitores a la ludoteca', 'Cafè i esmorzars casolans'] },
    art: { name: 'Art Studio i Camps', title: 'Art Studio: tallers d’art per a xiquets', desc: 'Mandarina Art Studio: tallers d’art, pintura i manualitats per a xiquets a Mandarina Garden.', lead: 'Tallers d’art i creativitat perquè els menuts experimenten amb les mans.', points: ['Pintura, ceràmica i manualitats', 'Grups reduïts per edats', 'Materials inclosos'] },
    mornings: { name: 'Mornings Montessori', title: 'Matins Montessori: alternativa a l’escola infantil', desc: 'Espai infantil Montessori pels matins a Mandarina Garden: una alternativa a l’escola infantil.', lead: 'Una alternativa a l’escola infantil amb metodologia Montessori.', points: ['Ambient preparat i respectuós', 'Aprenentatge al seu ritme', 'Horaris flexibles de matí'] },
    camps: { name: 'Camps i dies sense cole', title: 'Campus urbans i dies sense cole', desc: 'Campus urbans i dies sense cole a Mandarina Garden: tallers, jocs i diversió per a conciliar.', lead: 'Tallers i plans per als dies sense cole i les vacances.', points: ['Activitats temàtiques cada dia', 'Horari ampliat', 'Dinar i berenar opcionals'] },
    workshops: { name: 'Tallers', title: 'Tallers i activitats infantils de vesprada', desc: 'Tallers de cuina, art, ciència i festes temàtiques per a xiquets a Mandarina Garden.', lead: 'Cuina, art, ciència i festes: activitats de vesprada per a totes les edats.', points: ['Tallers diaris', 'Edat recomanada a cada taller', 'Places limitades: reserva amb temps'] },
    printables: { name: 'Printables', title: 'Printables i manualitats infantils descarregables', desc: 'Descarrega printables i manualitats gratuïtes de Mandarina Garden per a gaudir a casa.', lead: 'Descarregables per a continuar creant a casa.', points: ['Manualitats llestes per a imprimir', 'Idees per a aniversaris', 'Nous recursos cada mes'] },
    birthdays: { name: 'Aniversaris', title: 'Aniversaris infantils: al centre o a domicili', desc: 'Celebra l’aniversari infantil a Mandarina Garden: al centre, a domicili o Festa de Pijames.', lead: 'Descobreix les noves temàtiques d’aniversari, també a domicili.', points: ['Temàtiques noves cada temporada', 'Berenar casolà i taula dolça', 'Monitores i animació inclosos'] },
    homeparties: { name: 'Aniversaris a domicili', title: 'Animació infantil a domicili per a aniversaris', desc: 'Animació i aniversaris infantils a domicili amb Mandarina Garden: jocs, tallers i decoració a casa teua.', lead: 'Portem la festa allà on vulgues celebrar-la.', points: ['Animadors i monitores professionals', 'Tallers temàtics', 'Decoració inclosa'] },
    themed: { name: 'Festes temàtiques', title: 'Festes temàtiques i especials per a xiquets', desc: 'Festes temàtiques i especials: Halloween, Nadal, carnaval i més a Mandarina Garden.', lead: 'Halloween, Nadal, Carnestoltes... festes especials per a tota la família.', points: ['Decoració i jocs temàtics', 'Entrades familiars', 'Dates especials tot l’any'] },
    pijama: { name: 'Festa de pijames', title: 'Festes de pijames infantils', desc: 'Festa de pijames infantil a Mandarina Garden: cine, sopar, jocs i esmorzar.', lead: 'Una nit màgica amb amics, cine, jocs i molta imaginació.', points: ['Sopar i esmorzar inclosos', 'Tipis i matalassets', 'Monitores tota la nit'] },
    sweet: { name: 'Taules dolces', title: 'Taules dolces i decoració per a comunions', desc: 'Taules dolces, decoració i rebosteria per a comunions, bateigs i aniversaris a Mandarina Garden.', lead: 'Dolços, decoració i detalls per a les teues celebracions.', points: ['Taules dolces personalitzades', 'Decoració per a comunions i bateigs', 'Rebosteria casolana'] },
    corporate: { name: 'Esdeveniments per a empreses', title: 'Esdeveniments infantils per a empreses i centres comercials', desc: 'Animació infantil, tallers i esdeveniments per a empreses i centres comercials amb Mandarina Garden.', lead: 'Animació i tallers infantils per als teus esdeveniments corporatius.', points: ['Tallers i animació a mida', 'Equip professional de monitores', 'Esdeveniments en centres comercials'] },
    slowcafe: { name: 'SlowCafé', title: 'SlowCafé: cafeteria relax amb espai infantil', desc: 'SlowCafé, el saló cafè relax per a mares i pares a Mandarina Garden: cafè, esmorzars i berenars casolans.', lead: 'Un saló cafè relax per als grans, amb els menuts jugant ben a prop.', points: ['Cafè i rebosteria casolana', 'Carta amb opcions per als menuts', 'Zona relax al costat de la ludoteca'] },
    cakes: { name: 'Pastissos', title: 'Pastissos decorats per encàrrec', desc: 'Pastissos decorats per encàrrec per a aniversaris i celebracions a Mandarina Garden.', lead: 'Pastissos personalitzats perquè la teua celebració siga de conte.', points: ['Dissenys personalitzats', 'Ingredients casolans', 'Encàrrecs amb antelació'] },
    breakfasts: { name: 'Esmorzars', title: 'Regala un esmorzar o berenar a domicili', desc: 'Regala esmorzars i berenars a domicili amb Mandarina Garden: el detall perfecte.', lead: 'Regala o regala’t Mandarina: esmorzars i berenars a domicili.', points: ['Packs d’esmorzar i berenar', 'Lliurament a domicili', 'Missatge personalitzat'] },
    franchise: { name: 'Franquícia', title: 'Franquícia de cafeteria i oci infantil: Planta la teua Mandarina', desc: 'Franquícia de cafeteria i oci infantil Mandarina Garden: obri el teu propi centre amb un model provat.', lead: 'Planta la teua Mandarina: un model de negoci amb identitat i comunitat.', points: ['Model provat en diversos centres', 'Formació i acompanyament', 'Marca reconeguda en oci infantil'] }
  }
}
