export const en = {
  // Nav
  nav: {
    home: 'Home',
    blog: 'Blog',
    vsOther: 'OneAsk vs other tools',
    vsSlido: 'OneAsk vs Slido',
    vsMentimeter: 'OneAsk vs Mentimeter',
    vsPollEverywhere: 'OneAsk vs Poll Everywhere',
    vsSlideLizard: 'OneAsk vs SlideLizard',
    login: 'Login',
    signup: 'Sign up',
  },
  // Hero
  hero: {
    badge: 'Are you joining an event?',
    headline: 'Where There\'s an Audience, There Should Be Participation',
    description: 'Everyone has a voice with OneAsk. We\'re a powerful tool that promotes live interaction between speakers and their audience.',
    cta: 'Get started for free',
    formPlaceholder: 'Enter event code',
    formButton: 'Join',
    signedUp: 'people joined an event in the last 24 hours',
  },
  // Features
  features: {
    section1: {
      tag: 'Interaction with the audience',
      headline: 'No voice left unheard',
      body: 'OneAsk gives power to the participants of your event through a voting system. The audience prioritises the questions they most want answered — so the best content always rises to the top.',
    },
    section2: {
      tag: 'Audience participation',
      headline: 'The audience chooses what they want to hear',
      body: 'With OneAsk, the audience chooses what they want to hear from the speakers. Questions can be submitted anonymously, keeping everyone comfortable to participate.',
    },
    section3: {
      tag: 'Seamless integration',
      headline: 'Integrate with YouTube or Zoom',
      body: 'OneAsk integrates with the best streaming software available. Connect your live event to YouTube Live or Zoom and let remote participants engage in real time.',
    },
  },
  // Testimonials
  testimonials: {
    headline: 'What our customers are saying',
    items: [
      {
        quote: 'Easy to use, understand, apply, and free. Real-time questions for your event.',
        author: 'Patrick Naufel',
        role: 'UX Coordinator, NDD',
        company: 'NDD Software Development Summit',
      },
      {
        quote: "OneAsk is sensational. We were able to filter only the proper questions to increase the quality of the event\u2019s content. We scaled to +1,700 people.",
        author: 'Marcell Almeida',
        role: 'Founder, Product Camp',
        company: 'Product Camp',
      },
      {
        quote: 'OneAsk is helping us collect and prioritise questions in our Product Review ceremony across distributed teams.',
        author: 'Involves Team',
        role: 'Head of Product, Involves',
        company: 'Involves',
      },
    ],
  },
  // Pricing
  pricing: {
    headline: 'Pricing',
    subheadline: 'Find the best plan for you',
    plans: [
      {
        name: 'Standard',
        price: 'FREE',
        period: '',
        features: [
          'Unlimited participants',
          'Streaming integration (YouTube & Zoom)',
          'Upvotes',
          'Multiple rooms',
          'Google SSO',
        ],
        cta: 'Use now',
        href: 'https://admin.oneask.app/signup',
        highlight: false,
      },
      {
        name: 'Advanced',
        price: '$9.99',
        period: '/mo',
        features: [
          'Everything in Standard',
          'Custom branding',
          'Remove OneAsk logo',
        ],
        cta: 'Buy now',
        href: 'https://gum.co/oRnwV',
        highlight: true,
      },
      {
        name: 'Premium',
        price: '$19.99',
        period: '/mo',
        features: [
          'Everything in Advanced',
          'Advanced support',
        ],
        cta: 'No spots available',
        href: '/newsletter-registration',
        highlight: false,
        unavailable: true,
      },
    ],
  },
  // Footer
  footer: {
    copyright: '© 2026 All rights reserved | OneAsk',
    compare: 'Compare',
    language: 'Language',
    english: 'English',
    portuguese: 'Português (BR)',
  },
} as const;
