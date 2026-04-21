export const ptBr = {
  // Nav
  nav: {
    home: 'Início',
    blog: 'Blog',
    vsOther: 'OneAsk vs outras ferramentas',
    vsSlido: 'OneAsk vs Slido - Qual o melhor Q&A app?',
    vsMentimeter: 'OneAsk vs Mentimeter',
    vsPollEverywhere: 'OneAsk vs Poll Everywhere',
    vsSlideLizard: 'OneAsk vs SlideLizard',
    login: 'Login',
    signup: 'Criar conta',
  },
  // Hero
  hero: {
    badge: 'Vai Entrar Em Um Evento?',
    headline: 'A melhor opção para Q&A',
    description: 'Todo mundo tem uma voz com o OneAsk. Somos uma ferramenta poderosa que promove a interação ao vivo entre o palestrante e o público.',
    cta: 'Crie seu evento de graça',
    formPlaceholder: 'Digite o código do evento',
    formButton: 'Entrar',
    signedUp: 'pessoas se cadastraram na última semana',
  },
  // Features
  features: {
    section1: {
      tag: 'Interação com o público',
      headline: 'Faça reuniões e eventos de qualidade',
      body: 'O OneAsk dá poder aos participantes do seu evento através de um sistema de votação. O público prioriza as perguntas que mais quer ver respondidas — o melhor conteúdo sempre sobe ao topo.',
    },
    section2: {
      tag: 'Participação da audiência',
      headline: 'A audiência pode escolher o que quer ouvir',
      body: 'Com o OneAsk, o público escolhe o que quer ouvir dos palestrantes. Perguntas podem ser enviadas anonimamente, deixando todos confortáveis para participar.',
    },
    section3: {
      tag: 'A integração perfeita',
      headline: 'Integre com Youtube ou Zoom',
      body: 'O OneAsk se integra aos melhores softwares de streaming disponíveis no mercado. Conecte seu evento ao YouTube Live ou Zoom e deixe participantes remotos interagir em tempo real.',
    },
  },
  // Testimonials
  testimonials: {
    headline: 'O que nossos clientes estão dizendo',
    items: [
      {
        quote: 'Fácil de usar, entender, aplicar e gratuito. Perguntas em tempo real para o seu evento.',
        author: 'Patrick Naufel',
        role: 'Coordenador de UX, NDD',
        company: 'NDD Software Development Summit',
      },
      {
        quote: 'O OneAsk é incrível. Conseguimos filtrar apenas as perguntas adequadas para aumentar a qualidade do conteúdo do evento. Escalamos para mais de 1.700 pessoas.',
        author: 'Marcell Almeida',
        role: 'Fundador, Product Camp',
        company: 'Product Camp',
      },
      {
        quote: 'O OneAsk está nos ajudando a coletar e priorizar perguntas na nossa cerimônia de Product Review em times distribuídos.',
        author: 'Time Involves',
        role: 'Head of Product, Involves',
        company: 'Involves',
      },
    ],
  },
  // Pricing
  pricing: {
    headline: 'Preço',
    subheadline: 'Encontre o melhor plano para você',
    plans: [
      {
        name: 'Standard',
        price: 'Grátis',
        period: '',
        features: [
          'Participantes ilimitados',
          'Integração com streaming (YouTube & Zoom)',
          'Upvotes',
          'Múltiplas salas',
          'Google SSO',
        ],
        cta: 'Usar agora',
        href: 'https://admin.oneask.app/signup',
        highlight: false,
      },
      {
        name: 'Premium',
        price: 'R$ 19,99',
        period: '/mês',
        features: [
          'Tudo do Standard',
          'Marca personalizada',
          'Suporte premium',
        ],
        cta: 'Comece agora',
        href: 'https://admin.oneask.app/signup',
        highlight: true,
      },
    ],
  },
  // Footer
  footer: {
    copyright: '© 2026 Todos os direitos reservados | OneAsk',
    compare: 'Comparar',
    language: 'Idioma',
    english: 'English',
    portuguese: 'Português (BR)',
  },
} as const;
