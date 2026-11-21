// Textos de la landing v2 en español e inglés.
// Para editar un texto, cámbialo en ambos idiomas.

export type Lang = 'es' | 'en';
export const langs: Lang[] = ['es', 'en'];
export const langPath: Record<Lang, string> = { es: '/', en: '/en/' };

const phone = '525531403341';
const wa = (text: string) => `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

export const shared = {
  phoneDisplay: '55 3140 3341',
  email: 'victorrobles@rbaseguros.com.mx',
  cities: ['CDMX', 'Puebla', 'Guadalajara', 'Monterrey'],
  // Redes de Víctor: completar las URLs. Vacías = ícono "pendiente".
  socials: [
    { name: 'LinkedIn', icon: 'linkedin', url: '' },
    { name: 'Facebook', icon: 'facebook', url: '' },
    { name: 'Instagram', icon: 'instagram', url: '' },
  ],
  // Confirmar relaciones vigentes y permiso para usar logotipos.
  insurers: ['GNP Seguros', 'MetLife', 'Seguros Monterrey New York Life', 'Insignia Life'],
};

const es = {
  htmlLang: 'es-MX',
  ogLocale: 'es_MX',
  title: 'RB y Asociados · Te acompaño antes, durante y después de contratar',
  description:
    'Víctor Robles te acompaña al elegir tu seguro de gastos médicos mayores o tu plan de retiro, cuando necesitas usarlo y en cada renovación.',
  skip: 'Saltar al contenido',
  homeLabel: 'RB y Asociados, inicio',
  menuOpen: 'Abrir menú',
  navLabel: 'Principal',
  langLabel: 'Idioma',
  nav: [
    { href: '#acompanamiento', label: 'Acompañamiento' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#victor', label: 'Sobre Víctor' },
    { href: '#preguntas', label: 'Preguntas' },
  ],
  writeMe: 'Escríbeme',
  whatsapp: wa(
    'Hola, Víctor. Me gustaría recibir orientación sobre [gastos médicos mayores / ahorro para el retiro / otro tema]. Actualmente [tengo / he tenido / nunca he contratado] un seguro.'
  ),
  waFor: (tema: string) => wa(`Hola, Víctor. Me gustaría recibir orientación sobre ${tema}.`),

  hero: {
    kicker: 'Seguros médicos y ahorro para el retiro',
    lines: ['Tu seguro,', 'con alguien', 'a tu lado.'],
    lead: 'Te explico antes de contratar, te oriento cuando lo usas y reviso contigo cada renovación. Asesoría directa, de persona a persona.',
    cta: 'Platiquemos por WhatsApp',
    secondary: 'Cómo te acompaño',
    imgAlt: 'Madre e hija abrazadas, sonriendo',
    note: 'Desde 1984 acompañando familias',
  },
  statement: {
    label: 'Nuestra forma de trabajar',
    before: 'Contratar es solo el principio. Lo que importa es ',
    em: 'quién está contigo',
    after: ' cuando lo necesitas.',
  },
  moments: {
    kicker: 'Cómo te acompaño',
    title: 'Tres momentos en los que estoy contigo',
    items: [
      {
        key: 'antes',
        kicker: 'Antes de contratar',
        title: 'Entiendes lo que firmas',
        text: 'Platicamos de lo que quieres proteger y de lo que ya tienes. Te explico qué cubre cada opción, qué no, y cómo encaja en tu presupuesto. Sin prisa y con las condiciones a la vista.',
        detail: 'Deducible, coaseguro y suma asegurada, en lenguaje sencillo.',
        alt: 'Pareja revisando documentos juntos en la cocina de su casa',
      },
      {
        key: 'durante',
        kicker: 'Cuando lo necesitas',
        title: 'No pasas por el hospital solo',
        text: 'Si necesitas usar tu seguro médico por una hospitalización, te oriento durante el proceso y doy seguimiento a tu trámite de reembolso.',
        detail: 'Una llamada o un mensaje, y sabes cuál es el siguiente paso.',
        alt: 'Una mano sostiene la de una persona en cama de hospital',
      },
      {
        key: 'renovacion',
        kicker: 'Cada año',
        title: 'Tu póliza crece contigo',
        text: 'Al renovar, reviso contigo qué cubre tu póliza y cuánto estás pagando. Si tu vida cambió, tu protección también debería hacerlo.',
        detail: '¿Ya tienes una póliza? También la revisamos juntos.',
        alt: 'Pareja de adultos mayores revisando papeles en su sala',
      },
    ],
  },
  services: {
    kicker: 'En qué te ayudo',
    title: 'Dos decisiones que cambian tu tranquilidad',
    medical: {
      kicker: 'Gastos médicos mayores',
      title: 'Un seguro médico que entiendes y sabes usar',
      cta: 'Hablar de mi seguro médico',
      tema: 'gastos médicos mayores',
      alt: 'Abuelo cargando a su nieto con una sonrisa',
    },
    retirement: {
      kicker: 'Ahorro para el retiro',
      title: 'Un plan de retiro que puedes sostener',
      cta: 'Hablar de mi retiro',
      tema: 'ahorro para el retiro',
      alt: 'Mujer mayor y su hija riendo juntas en el jardín',
    },
    alsoPrefix: 'También:',
    also: [
      { label: 'seguro de vida', tema: 'seguro de vida' },
      { label: 'ahorro para la educación', tema: 'ahorro para la educación' },
      { label: 'empresas', tema: 'seguros para mi empresa' },
    ],
    and: 'y',
  },
  victor: {
    kicker: 'Quién te acompaña',
    title: 'Hola, soy Víctor Robles',
    lead: 'Asesor y socio de RB y Asociados. Te ayudo a entender tus opciones de gastos médicos mayores y a planear tu ahorro para el retiro según tus metas y presupuesto. Y cuando toca usar tu seguro, sigo ahí.',
    photo: 'Foto de Víctor',
    facts: [
      { label: 'Agente desde', value: '1984' },
      { label: 'RB y Asociados', value: '2003' },
      { label: 'Asegurados', value: '400+' },
    ],
    cred: 'LUTC Fellow (primera generación) · F.S.S. American College e IMESFAC',
    socialsLabel: 'Redes de Víctor',
    emailLabel: 'Correo',
  },
  insurersTitle: 'Trabajo con aseguradoras sólidas para encontrar la opción que te conviene',
  faq: {
    kicker: 'Preguntas frecuentes',
    title: 'Lo que más me preguntan',
    items: [
      {
        q: '¿Cómo se usa un seguro médico?',
        a: 'Depende de si la atención es programada o una urgencia, y de si el hospital está en la red de tu aseguradora. En algunos casos la aseguradora paga directo al hospital y en otros pagas tú y solicitas un reembolso. Si te toca usarlo, te oriento durante el proceso y doy seguimiento a tu trámite.',
      },
      {
        q: '¿Qué influye en el precio de un seguro médico?',
        a: 'La prima (el precio del seguro) cambia según tu edad, la suma asegurada, el deducible, el coaseguro y las coberturas que elijas. El deducible es el monto a tu cargo antes de que la póliza empiece a cubrir, y el coaseguro es la proporción de los gastos cubiertos que te corresponde pagar cuando aplica.',
      },
      {
        q: 'Ya tengo una póliza. ¿Qué conviene revisar?',
        a: 'Qué cubre hoy, cuánto pagas, cuál es tu deducible y coaseguro, y si la suma asegurada sigue correspondiendo a tus necesidades. Al renovar lo revisamos juntos para que decidas con información.',
      },
      {
        q: '¿Qué necesito para una primera asesoría?',
        a: 'Basta con contarme qué tema te interesa y si tienes o has tenido un seguro. Los detalles de tu póliza, salud o documentación los vemos después, por el canal adecuado.',
      },
    ],
  },
  closing: {
    title: '¿Platicamos?',
    text: 'Cuéntame qué te interesa y si tienes o has tenido un seguro. Con eso empezamos.',
  },
  footer:
    'RB y Asociados. La emisión de pólizas y la resolución de reembolsos corresponden a cada aseguradora conforme a las condiciones de la póliza.',
  waFloat: 'Escribir a Víctor por WhatsApp',
};

export type Content = typeof es;

const en: Content = {
  htmlLang: 'en',
  ogLocale: 'en_US',
  title: 'RB y Asociados · By your side before, during and after you sign',
  description:
    'Víctor Robles helps you choose your major medical insurance or retirement plan, guides you when you need to use it, and reviews it with you at every renewal.',
  skip: 'Skip to content',
  homeLabel: 'RB y Asociados, home',
  menuOpen: 'Open menu',
  navLabel: 'Main',
  langLabel: 'Language',
  nav: [
    { href: '#acompanamiento', label: 'How I help' },
    { href: '#servicios', label: 'Services' },
    { href: '#victor', label: 'About Víctor' },
    { href: '#preguntas', label: 'FAQ' },
  ],
  writeMe: 'Message me',
  whatsapp: wa(
    'Hi Víctor. I would like some guidance on [major medical insurance / retirement savings / other]. I currently [have / have had / have never had] insurance.'
  ),
  waFor: (topic: string) => wa(`Hi Víctor. I would like some guidance on ${topic}.`),

  hero: {
    kicker: 'Health insurance and retirement savings',
    lines: ['Insurance,', 'with someone', 'by your side.'],
    lead: 'I explain your options before you sign, guide you when you need to use your policy, and review it with you at every renewal. Personal, one-on-one advice.',
    cta: "Let's talk on WhatsApp",
    secondary: 'How I help',
    imgAlt: 'Mother and daughter hugging and smiling',
    note: 'Supporting families since 1984',
  },
  statement: {
    label: 'How we work',
    before: 'Signing up is only the beginning. What matters is ',
    em: 'who is with you',
    after: ' when you need it.',
  },
  moments: {
    kicker: 'How I help',
    title: 'Three moments when I’m with you',
    items: [
      {
        key: 'antes',
        kicker: 'Before you sign',
        title: 'You understand what you sign',
        text: 'We talk about what you want to protect and what you already have. I explain what each option covers, what it doesn’t, and how it fits your budget. No rush, with every condition in plain sight.',
        detail: 'Deductible, coinsurance and sum insured, in plain language.',
        alt: 'Couple reviewing documents together in their kitchen',
      },
      {
        key: 'durante',
        kicker: 'When you need it',
        title: 'You don’t go through the hospital alone',
        text: 'If you need to use your health insurance for a hospital stay, I guide you through the process and follow up on your reimbursement claim.',
        detail: 'One call or message, and you know the next step.',
        alt: 'A hand holding the hand of a person in a hospital bed',
      },
      {
        key: 'renovacion',
        kicker: 'Every year',
        title: 'Your policy grows with you',
        text: 'At renewal, I review with you what your policy covers and how much you’re paying. If your life has changed, your protection should too.',
        detail: 'Already have a policy? We can review it together.',
        alt: 'Older couple reviewing paperwork in their living room',
      },
    ],
  },
  services: {
    kicker: 'What I help with',
    title: 'Two decisions that shape your peace of mind',
    medical: {
      kicker: 'Major medical insurance',
      title: 'Health insurance you understand and know how to use',
      cta: 'Talk about health insurance',
      tema: 'major medical insurance',
      alt: 'Grandfather smiling while holding his grandson',
    },
    retirement: {
      kicker: 'Retirement savings',
      title: 'A retirement plan you can keep up with',
      cta: 'Talk about my retirement',
      tema: 'retirement savings',
      alt: 'Older woman and her daughter laughing together in the garden',
    },
    alsoPrefix: 'Also:',
    also: [
      { label: 'life insurance', tema: 'life insurance' },
      { label: 'education savings', tema: 'education savings' },
      { label: 'businesses', tema: 'insurance for my business' },
    ],
    and: 'and',
  },
  victor: {
    kicker: 'Who’s by your side',
    title: 'Hi, I’m Víctor Robles',
    lead: 'Advisor and partner at RB y Asociados. I help you understand your major medical insurance options and plan your retirement savings around your goals and budget. And when it’s time to use your insurance, I’m still there.',
    photo: 'Photo of Víctor',
    facts: [
      { label: 'Agent since', value: '1984' },
      { label: 'RB y Asociados', value: '2003' },
      { label: 'Clients insured', value: '400+' },
    ],
    cred: 'LUTC Fellow (first class) · F.S.S. American College and IMESFAC',
    socialsLabel: 'Víctor’s social profiles',
    emailLabel: 'Email',
  },
  insurersTitle: 'I work with solid insurers to find the option that suits you',
  faq: {
    kicker: 'Frequently asked questions',
    title: 'What people ask me most',
    items: [
      {
        q: 'How do I use health insurance?',
        a: 'It depends on whether the care is scheduled or an emergency, and whether the hospital is in your insurer’s network. Sometimes the insurer pays the hospital directly; other times you pay and request a reimbursement. If you need to use it, I guide you through the process and follow up on your claim.',
      },
      {
        q: 'What affects the price of health insurance?',
        a: 'The premium (the price of the insurance) depends on your age, the sum insured, the deductible, the coinsurance and the coverages you choose. The deductible is the amount you pay before the policy starts covering, and coinsurance is the share of covered expenses you pay when it applies.',
      },
      {
        q: 'I already have a policy. What should I review?',
        a: 'What it covers today, how much you pay, your deductible and coinsurance, and whether the sum insured still fits your needs. At renewal we review it together so you can decide with full information.',
      },
      {
        q: 'What do I need for a first consultation?',
        a: 'Just tell me what you’re interested in and whether you have or have had insurance. We’ll go over policy, health or paperwork details later, through the right channel.',
      },
    ],
  },
  closing: {
    title: 'Shall we talk?',
    text: 'Tell me what you’re interested in and whether you have or have had insurance. That’s all we need to start.',
  },
  footer:
    'RB y Asociados. Policies are issued and reimbursements resolved by each insurer according to the policy terms.',
  waFloat: 'Message Víctor on WhatsApp',
};

export const content: Record<Lang, Content> = { es, en };
