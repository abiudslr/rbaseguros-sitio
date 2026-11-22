// Textos de la v5. Tono: la firma habla en plural ("te acompañamos").
// Solo lo que se refiere a Víctor en particular va en singular.

const es = {
  description:
    'RB y Asociados te acompaña al elegir tu seguro de gastos médicos mayores o tu plan de retiro, cuando necesitas usarlo y en cada renovación.',
  momentsKicker: 'Cómo te acompañamos',
  moments: [
    {
      key: 'antes',
      kicker: 'Antes de contratar',
      title: 'Entiendes lo que firmas',
      text: 'Platicamos de lo que quieres proteger y de lo que ya tienes. Te explicamos qué cubre cada opción, qué no, y cómo encaja en tu presupuesto. Sin prisa y con las condiciones a la vista.',
      detail: 'Deducible, coaseguro y suma asegurada, en lenguaje sencillo.',
    },
    {
      key: 'durante',
      kicker: 'Cuando lo necesitas',
      title: 'No pasas por el hospital solo',
      text: 'Si necesitas usar tu seguro médico por una hospitalización, te orientamos durante el proceso y damos seguimiento a tu trámite de reembolso.',
      detail: 'Una llamada o un mensaje, y sabes cuál es el siguiente paso.',
    },
    {
      key: 'renovacion',
      kicker: 'Cada año',
      title: 'Tu póliza crece contigo',
      text: 'Al renovar, revisamos contigo qué cubre tu póliza y cuánto estás pagando. Si tu vida cambió, tu protección también debería hacerlo.',
      detail: '¿Ya tienes una póliza? También la revisamos juntos.',
    },
  ],
  faq: [
    {
      q: '¿Cómo se usa un seguro médico?',
      a: 'Depende de si la atención es programada o una urgencia, y de si el hospital está en la red de tu aseguradora. En algunos casos la aseguradora paga directo al hospital y en otros pagas tú y solicitas un reembolso. Si te toca usarlo, te orientamos durante el proceso y damos seguimiento a tu trámite.',
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
      a: 'Basta con contarnos qué tema te interesa y si tienes o has tenido un seguro. Los detalles de tu póliza, salud o documentación los vemos después, por el canal adecuado.',
    },
  ],
};

const en: typeof es = {
  description:
    'RB y Asociados guides you as you choose your health insurance or retirement plan, when you need to use it, and at every renewal.',
  momentsKicker: 'How we guide you',
  moments: [
    {
      key: 'antes',
      kicker: 'Before you sign',
      title: 'You understand what you sign',
      text: 'We talk about what you want to protect and what you already have. We explain what each option covers, what it doesn’t, and how it fits your budget. No rush, with every condition in plain sight.',
      detail: 'Deductible, coinsurance and sum insured, in plain language.',
    },
    {
      key: 'durante',
      kicker: 'When you need it',
      title: 'You don’t go through the hospital alone',
      text: 'If you need to use your health insurance for a hospital stay, we guide you through the process and follow up on your reimbursement claim.',
      detail: 'One call or message, and you know the next step.',
    },
    {
      key: 'renovacion',
      kicker: 'Every year',
      title: 'Your policy grows with you',
      text: 'At renewal, we review with you what your policy covers and how much you’re paying. If your life has changed, your protection should too.',
      detail: 'Already have a policy? We can review it together.',
    },
  ],
  faq: [
    {
      q: 'How do I use health insurance?',
      a: 'It depends on whether the care is scheduled or an emergency, and whether the hospital is in your insurer’s network. Sometimes the insurer pays the hospital directly; other times you pay and request a reimbursement. If you need to use it, we guide you through the process and follow up on your claim.',
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
      a: 'Just tell us what you’re interested in and whether you have or have had insurance. We’ll go over policy, health or paperwork details later, through the right channel.',
    },
  ],
};

export const v5 = { es, en };
