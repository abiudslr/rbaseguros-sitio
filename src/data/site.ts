// Contenido de la landing. Editar aquí para iterar textos sin tocar el diseño.
// Fuente: rb-y-asociados-identidad-de-marca.md

const phone = '525531403341';
const waText =
  'Hola, Víctor. Me gustaría recibir orientación sobre [gastos médicos mayores / ahorro para el retiro / otro tema]. Actualmente [tengo / he tenido / nunca he contratado] un seguro.';

export const contact = {
  phoneDisplay: '55 3140 3341',
  email: 'victorrobles@rbaseguros.com.mx',
  whatsapp: `https://wa.me/${phone}?text=${encodeURIComponent(waText)}`,
  whatsappFor: (tema: string) =>
    `https://wa.me/${phone}?text=${encodeURIComponent(`Hola, Víctor. Me gustaría recibir orientación sobre ${tema}.`)}`,
  cities: ['CDMX', 'Puebla', 'Guadalajara', 'Monterrey'],
};

export const nav = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#acompanamiento', label: 'Cómo te acompaño' },
  { href: '#sobre-victor', label: 'Sobre Víctor' },
  { href: '#preguntas', label: 'Preguntas' },
];

export const specialties = [
  {
    id: 'retiro',
    icon: 'sunrise',
    eyebrow: 'Ahorro para el retiro',
    title: 'Convierte tu meta de retiro en un plan que puedas sostener',
    lead: 'Definimos tu meta de retiro y revisamos qué aportación puedes sostener.',
    forWho: 'Para ti si quieres empezar a ahorrar y no sabes cuánto ni por cuánto tiempo.',
    points: [
      'Tu meta, tu horizonte y tu presupuesto',
      'Aportaciones y plazos explicados con claridad',
      'Qué es aportación, qué es proyección y qué garantiza el contrato',
      'Opciones como el Plan Personal de Retiro (PPR)',
    ],
    cta: 'Hablar de mi retiro',
    tema: 'ahorro para el retiro',
  },
  {
    id: 'medico',
    icon: 'heart',
    eyebrow: 'Gastos médicos mayores',
    title: 'Un seguro médico que entiendes antes de contratarlo',
    lead: 'Revisamos qué cubre cada opción y cuál encaja con tus necesidades y tu presupuesto.',
    forWho: 'Para ti si vas a contratar tu primer seguro médico o quieres revisar el que ya tienes.',
    points: [
      'Deducible, coaseguro y suma asegurada, en lenguaje sencillo',
      'Comparación de opciones con los mismos criterios',
      'Revisión de tu póliza actual y tu renovación',
      'Orientación si necesitas usar tu seguro',
    ],
    cta: 'Hablar de mi seguro médico',
    tema: 'gastos médicos mayores',
  },
];

export const steps = [
  { title: 'Entender tu situación', text: 'Primero platicamos de lo que quieres proteger y de la cobertura que ya tienes.' },
  { title: 'Priorizar', text: 'Ordenamos tus necesidades para que sepas por dónde empezar.' },
  { title: 'Comparar opciones', text: 'Revisamos qué incluye cada plan, sus límites y cómo encaja en tu presupuesto.' },
  { title: 'Ajustar y tramitar', text: 'Si decides avanzar, te explico qué necesitas para hacer la solicitud.' },
  { title: 'Acompañarte', text: 'Te ayudo a entender qué sigue cuando toca renovar o usar tu seguro.' },
];

export const followUp = [
  {
    icon: 'refresh',
    title: 'Cuando toca renovar',
    text: 'Al renovar, reviso contigo qué cubre tu póliza y cuánto estás pagando, para que decidas si sigue teniendo sentido o conviene revisar opciones.',
  },
  {
    icon: 'hospital',
    title: 'Hospitalización y reembolsos',
    text: 'Si necesitas usar tu seguro médico por una hospitalización, te oriento durante el proceso y doy seguimiento a tu trámite de reembolso.',
  },
];

export const others = [
  {
    icon: 'shield',
    title: 'Seguro de vida',
    text: 'Revisamos cuánta protección necesita tu familia según tus dependientes, compromisos y horizonte.',
    tema: 'seguro de vida',
  },
  {
    icon: 'cap',
    title: 'Ahorro para la educación',
    text: 'Partimos de cuándo necesitarás el dinero y del monto objetivo para la educación de tus hijos.',
    tema: 'ahorro para la educación',
  },
  {
    icon: 'briefcase',
    title: 'Empresas',
    text: 'Si tienes un negocio, platicamos cómo la salud, la vida o la ausencia del dueño pueden afectar a tu familia y a tu empresa.',
    tema: 'seguros para mi empresa',
  },
];

export const facts = [
  { value: '1984', label: 'Agente de seguros desde' },
  { value: '2003', label: 'Se constituye RB y Asociados' },
  { value: '400+', label: 'Asegurados' }, // Por confirmar con Víctor
];

export const faqs = [
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
  {
    q: '¿Cuánto debo ahorrar para mi retiro?',
    a: 'Depende de tu meta, de cuántos años faltan y de lo que puedes aportar sin descuidar tu presupuesto. Lo traducimos a un monto de aportación y un plazo, y te explico qué parte es proyección y qué garantiza el contrato.',
  },
];

// ---------- v2 ----------

// Redes de Víctor: completar las URLs. Si una URL queda vacía, el ícono se muestra como "pendiente".
export const socials = [
  { name: 'LinkedIn', icon: 'linkedin', url: '' },
  { name: 'Facebook', icon: 'facebook', url: '' },
  { name: 'Instagram', icon: 'instagram', url: '' },
];

// Aseguradoras: confirmar relaciones vigentes y permiso para usar logotipos.
// Cuando haya logos, agregar `logo: '/aseguradoras/archivo.svg'`.
export const insurers = [
  { name: 'GNP Seguros' },
  { name: 'MetLife' },
  { name: 'Seguros Monterrey New York Life' },
  { name: 'Insignia Life' },
];

export const moments = [
  {
    key: 'antes',
    kicker: 'Antes de contratar',
    title: 'Entiendes lo que firmas',
    text: 'Platicamos de lo que quieres proteger y de lo que ya tienes. Te explico qué cubre cada opción, qué no, y cómo encaja en tu presupuesto. Sin prisa y con las condiciones a la vista.',
    detail: 'Deducible, coaseguro y suma asegurada, en lenguaje sencillo.',
  },
  {
    key: 'durante',
    kicker: 'Cuando lo necesitas',
    title: 'No pasas por el hospital solo',
    text: 'Si necesitas usar tu seguro médico por una hospitalización, te oriento durante el proceso y doy seguimiento a tu trámite de reembolso.',
    detail: 'Una llamada o un mensaje, y sabes cuál es el siguiente paso.',
  },
  {
    key: 'renovacion',
    kicker: 'Cada año',
    title: 'Tu póliza crece contigo',
    text: 'Al renovar, reviso contigo qué cubre tu póliza y cuánto estás pagando. Si tu vida cambió, tu protección también debería hacerlo.',
    detail: '¿Ya tienes una póliza? También la revisamos juntos.',
  },
];
