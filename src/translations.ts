export type LanguageCode = 'en' | 'fr' | 'ar' | 'it' | 'de' | 'zh' | 'es';

export interface LanguageOption {
  code: LanguageCode;
  label: string;
  nativeName: string;
  dir: 'ltr' | 'rtl';
}

export const LANGUAGES: LanguageOption[] = [
  { code: 'en', label: 'English', nativeName: 'English', dir: 'ltr' },
  { code: 'fr', label: 'French', nativeName: 'Français', dir: 'ltr' },
  { code: 'ar', label: 'Arabic', nativeName: 'العربية', dir: 'rtl' },
  { code: 'it', label: 'Italian', nativeName: 'Italiano', dir: 'ltr' },
  { code: 'de', label: 'German', nativeName: 'Deutsch', dir: 'ltr' },
  { code: 'zh', label: 'Chinese', nativeName: '中文', dir: 'ltr' },
  { code: 'es', label: 'Spanish', nativeName: 'Español', dir: 'ltr' },
];

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  priceNote: string;
  image: string;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'haircuts' | 'coloring' | 'blowouts' | 'occasions';
  categoryLabel: string;
  image: string;
}

export interface TranslationContent {
  brandName: string;
  nav: {
    about: string;
    services: string;
    gallery: string;
    reviews: string;
    contact: string;
    bookNow: string;
    menuOpen: string;
    menuClose: string;
    languageLabel: string;
  };
  hero: {
    locationLine: string;
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    ratingSummary: string;
  };
  about: {
    kicker: string;
    title: string;
    paragraph1: string;
    paragraph2: string;
    pillars: {
      title: string;
      description: string;
    }[];
  };
  services: {
    kicker: string;
    title: string;
    subtitle: string;
    items: ServiceItem[];
  };
  gallery: {
    kicker: string;
    title: string;
    subtitle: string;
    filters: {
      all: string;
      haircuts: string;
      coloring: string;
      blowouts: string;
      occasions: string;
    };
    items: GalleryItem[];
  };
  whyChoose: {
    kicker: string;
    title: string;
    subtitle: string;
    items: WhyChooseItem[];
  };
  reviews: {
    kicker: string;
    title: string;
    ratingValue: string;
    outOf: string;
    reviewCountText: string;
    verifiedNote: string;
    ctaText: string;
  };
  instagram: {
    kicker: string;
    title: string;
    description: string;
    buttonText: string;
  };
  contact: {
    kicker: string;
    title: string;
    subtitle: string;
    salonName: string;
    addressLabel: string;
    addressValue: string;
    phoneLabel: string;
    phoneValue: string;
    hoursLabel: string;
    hoursOpen: string;
    hoursClosed: string;
    whatsappCta: string;
    callCta: string;
    directionsCta: string;
    bookingNote: string;
  };
  footer: {
    tagline: string;
    quickLinksTitle: string;
    contactTitle: string;
    hoursTitle: string;
    copyright: string;
  };
  whatsappMessage: string;
}

const IMAGES = {
  hero: '/src/assets/images/hero_beauty_queen_1793916711346.jpg',
  haircut: '/src/assets/images/service_haircut_styling_1793916711809.jpg',
  coloring: '/src/assets/images/service_coloring_balayage_1793916711455.jpg',
  blowdry: '/src/assets/images/service_blowdry_treatments_1793916712224.jpg',
  occasion: '/src/assets/images/service_bridal_occasion_1793916712546.jpg',
  nails: '/assets/aistudio/ongle_f3b0d28e.jpg',
};

export const TRANSLATIONS: Record<LanguageCode, TranslationContent> = {
  en: {
    brandName: 'BEAUTY QUEEN SALON',
    nav: {
      about: 'About',
      services: 'Services',
      gallery: 'Gallery',
      reviews: 'Reviews',
      contact: 'Contact',
      bookNow: 'Book an Appointment',
      menuOpen: 'Open navigation menu',
      menuClose: 'Close navigation menu',
      languageLabel: 'Select language',
    },
    hero: {
      locationLine: 'Safi, Morocco · Women’s Hair & Beauty Salon',
      headline: 'Discover Your Beauty, Define Your Style.',
      subheadline:
        'Experience professional hair styling and beauty services at Beauty Queen Salon Safi. Because every woman deserves to feel beautiful and confident.',
      primaryCta: 'Book an Appointment',
      secondaryCta: 'Explore Our Services',
      ratingSummary: '4.4 / 5 · 28 customer reviews',
    },
    about: {
      kicker: 'Our Philosophy',
      title: 'Welcome to Beauty Queen Salon Safi',
      paragraph1:
        'Located in the heart of Safi, Beauty Queen Salon Safi is a dedicated women’s hair salon designed around comfort, elegance, and personal attention. From the moment you step in, our focus is on creating a calm, welcoming atmosphere where you can relax and feel cared for.',
      paragraph2:
        'Every woman has her own natural beauty and personal rhythm. We take the time to listen to your wishes and craft a hairstyle that harmonizes with your features, your hair texture, and your everyday lifestyle.',
      pillars: [
        {
          title: 'Personal Attention',
          description: 'Tailored consultations to understand your hair type and desired look.',
        },
        {
          title: 'Refined Styling',
          description: 'Modern and classic techniques for effortless, lasting elegance.',
        },
        {
          title: 'Welcoming Space',
          description: 'A serene, women-focused environment in central Safi.',
        },
      ],
    },
    services: {
      kicker: 'What We Offer',
      title: 'Our Hair & Beauty Services',
      subtitle:
        'Thoughtfully delivered hair care and styling services tailored to your individual beauty.',
      items: [
        {
          id: 'haircuts',
          number: '01',
          title: "Women's Haircuts",
          description: 'Modern, classic, and personalized haircuts.',
          priceNote: 'Contact us for pricing.',
          image: IMAGES.haircut,
        },
        {
          id: 'styling',
          number: '02',
          title: 'Hair Styling',
          description: 'Elegant hairstyles for everyday occasions.',
          priceNote: 'Contact us for pricing.',
          image: IMAGES.hero,
        },
        {
          id: 'blowdry',
          number: '03',
          title: 'Blow Dry & Brushing',
          description: 'Beautiful volume and smooth finishes.',
          priceNote: 'Contact us for pricing.',
          image: IMAGES.blowdry,
        },
        {
          id: 'coloring',
          number: '04',
          title: 'Hair Coloring',
          description: 'Fresh colors and personalized looks.',
          priceNote: 'Contact us for pricing.',
          image: IMAGES.coloring,
        },
        {
          id: 'treatments',
          number: '05',
          title: 'Hair Treatments',
          description: 'Hair care and nourishing treatments.',
          priceNote: 'Contact us for pricing.',
          image: IMAGES.blowdry,
        },
        {
          id: 'occasions',
          number: '06',
          title: 'Special Occasion Hairstyles',
          description: 'Elegant hairstyles for celebrations and special events.',
          priceNote: 'Contact us for pricing.',
          image: IMAGES.occasion,
        },
      ],
    },
    gallery: {
      kicker: 'Lookbook',
      title: 'Our Gallery',
      subtitle:
        'Explore inspiration across women’s haircuts, luminous hair coloring, smooth blowouts, and special occasion updos.',
      filters: {
        all: 'All Styles',
        haircuts: 'Haircuts',
        coloring: 'Hair Coloring',
        blowouts: 'Blowouts',
        occasions: 'Special Occasions',
      },
      items: [
        {
          id: 'g1',
          title: 'Soft Chestnut Waves',
          category: 'blowouts',
          categoryLabel: 'Blowouts',
          image: IMAGES.hero,
        },
        {
          id: 'g2',
          title: 'Modern Layered Bob',
          category: 'haircuts',
          categoryLabel: 'Haircuts',
          image: IMAGES.haircut,
        },
        {
          id: 'g3',
          title: 'Warm Caramel & Rose Balayage',
          category: 'coloring',
          categoryLabel: 'Hair Coloring',
          image: IMAGES.coloring,
        },
        {
          id: 'g4',
          title: 'Silky Volume Brushing',
          category: 'blowouts',
          categoryLabel: 'Blowouts',
          image: IMAGES.blowdry,
        },
        {
          id: 'g5',
          title: 'Pearl-Accented Chignon',
          category: 'occasions',
          categoryLabel: 'Special Occasions',
          image: IMAGES.occasion,
        },
        {
          id: 'g6',
          title: 'French & Milky Nail Care',
          category: 'occasions',
          categoryLabel: 'Beauty & Nail Care',
          image: IMAGES.nails,
        },
      ],
    },
    whyChoose: {
      kicker: 'The Experience',
      title: 'Why Choose Beauty Queen Salon Safi',
      subtitle:
        'Every detail of our salon is designed to give you a comfortable, confident, and memorable visit.',
      items: [
        {
          id: 'attention',
          title: 'Personalized Attention',
          description: 'We listen carefully to your preferences so every cut and style feels uniquely yours.',
        },
        {
          id: 'atmosphere',
          title: 'Welcoming Atmosphere',
          description: 'A warm, calm, and respectful space where women can relax and enjoy their beauty time.',
        },
        {
          id: 'modern',
          title: 'Stylish & Modern Looks',
          description: 'From timeless classics to contemporary trends, we craft looks that flatter your features.',
        },
        {
          id: 'location',
          title: 'Convenient Location in Safi',
          description: 'Easily accessible on Avenue John Kennedy in the heart of Safi.',
        },
        {
          id: 'contact',
          title: 'Easy Appointment Contact',
          description: 'Reach us directly by WhatsApp or phone to arrange your visit at your convenience.',
        },
        {
          id: 'satisfaction',
          title: 'Customer Satisfaction',
          description: 'Dedicated to consistent care, healthy hair, and results that make you feel confident.',
        },
      ],
    },
    reviews: {
      kicker: 'Client Trust',
      title: 'Customer Reviews',
      ratingValue: '4.4',
      outOf: '/ 5',
      reviewCountText: 'Based on 28 customer reviews',
      verifiedNote: 'Rated by our valued clients in Safi, Morocco.',
      ctaText: 'Book Your Visit',
    },
    instagram: {
      kicker: 'Social',
      title: 'Follow Our Beauty Journey',
      description:
        'Discover our latest hair transformations, styling inspiration, and salon moments on Instagram.',
      buttonText: 'Follow Us on Instagram',
    },
    contact: {
      kicker: 'Visit Us',
      title: 'Visit Beauty Queen Salon Safi',
      subtitle:
        'We would love to welcome you. Contact us via WhatsApp or phone to schedule your appointment.',
      salonName: 'Beauty Queen Salon Safi',
      addressLabel: 'Address',
      addressValue: '2e étage, numéro 12, immeuble ZALAGH, Av. John Kennedy, Safi 46000, Morocco.',
      phoneLabel: 'Phone',
      phoneValue: '+212664400033',
      hoursLabel: 'Opening Hours',
      hoursOpen: 'Tuesday – Sunday: 10:00 AM – 08:00 PM',
      hoursClosed: 'Monday: Closed',
      whatsappCta: 'Book via WhatsApp',
      callCta: 'Call +212664400033',
      directionsCta: 'Get Directions on Google Maps',
      bookingNote: 'Appointments are arranged directly with our team via WhatsApp or phone.',
    },
    footer: {
      tagline: 'Women’s Hair & Beauty Salon in Safi, Morocco.',
      quickLinksTitle: 'Navigation',
      contactTitle: 'Contact',
      hoursTitle: 'Opening Hours',
      copyright: '© 2026 Beauty Queen Salon Safi. All Rights Reserved.',
    },
    whatsappMessage:
      'Hello Beauty Queen Salon Safi, I would like to book an appointment. Could you please share your available times?',
  },

  fr: {
    brandName: 'BEAUTY QUEEN SALON',
    nav: {
      about: 'À propos',
      services: 'Services',
      gallery: 'Galerie',
      reviews: 'Avis',
      contact: 'Contact',
      bookNow: 'Prendre Rendez-vous',
      menuOpen: 'Ouvrir le menu',
      menuClose: 'Fermer le menu',
      languageLabel: 'Choisir la langue',
    },
    hero: {
      locationLine: 'Safi, Maroc · Salon de Coiffure & Beauté Femme',
      headline: 'Révélez Votre Beauté, Affirmez Votre Style.',
      subheadline:
        'Découvrez des services professionnels de coiffure et de beauté chez Beauty Queen Salon Safi. Parce que chaque femme mérite de se sentir belle et confiante.',
      primaryCta: 'Prendre Rendez-vous',
      secondaryCta: 'Découvrir Nos Services',
      ratingSummary: '4,4 / 5 · 28 avis clients',
    },
    about: {
      kicker: 'Notre Philosophie',
      title: 'Bienvenue chez Beauty Queen Salon Safi',
      paragraph1:
        'Situé au cœur de Safi, Beauty Queen Salon Safi est un salon de coiffure dédié aux femmes, pensé pour offrir confort, élégance et attention personnalisée. Dès votre arrivée, nous veillons à créer une atmosphère calme et chaleureuse.',
      paragraph2:
        'Chaque femme possède une beauté naturelle et un style unique. Nous prenons le temps d’écouter vos envies afin de réaliser une coiffure qui met en valeur vos traits, la nature de vos cheveux et votre quotidien.',
      pillars: [
        {
          title: 'Attention Personnalisée',
          description: 'Une écoute attentive pour adapter chaque coupe et soin à vos cheveux.',
        },
        {
          title: 'Coiffure Raffinée',
          description: 'Des techniques modernes et classiques pour une élégance durable.',
        },
        {
          title: 'Cadre Accueillant',
          description: 'Un espace serein et féminin au centre de Safi.',
        },
      ],
    },
    services: {
      kicker: 'Nos Prestations',
      title: 'Nos Services de Coiffure & Beauté',
      subtitle:
        'Des soins capillaires et des coiffures réalisés avec soin pour sublimer votre beauté.',
      items: [
        {
          id: 'haircuts',
          number: '01',
          title: 'Coupes Femme',
          description: 'Coupes modernes, classiques et personnalisées.',
          priceNote: 'Contactez-nous pour les tarifs.',
          image: IMAGES.haircut,
        },
        {
          id: 'styling',
          number: '02',
          title: 'Coiffure & Mise en Forme',
          description: 'Coiffures élégantes pour toutes les occasions du quotidien.',
          priceNote: 'Contactez-nous pour les tarifs.',
          image: IMAGES.hero,
        },
        {
          id: 'blowdry',
          number: '03',
          title: 'Brushing & Séchage',
          description: 'Beau volume et finition lisse et soyeuse.',
          priceNote: 'Contactez-nous pour les tarifs.',
          image: IMAGES.blowdry,
        },
        {
          id: 'coloring',
          number: '04',
          title: 'Coloration',
          description: 'Couleurs lumineuses et looks personnalisés.',
          priceNote: 'Contactez-nous pour les tarifs.',
          image: IMAGES.coloring,
        },
        {
          id: 'treatments',
          number: '05',
          title: 'Soins Capillaires',
          description: 'Soins nourrissants et revitalisants pour vos cheveux.',
          priceNote: 'Contactez-nous pour les tarifs.',
          image: IMAGES.blowdry,
        },
        {
          id: 'occasions',
          number: '06',
          title: 'Coiffures de Cérémonie',
          description: 'Coiffures raffinées pour vos fêtes et événements spéciaux.',
          priceNote: 'Contactez-nous pour les tarifs.',
          image: IMAGES.occasion,
        },
      ],
    },
    gallery: {
      kicker: 'Inspiration',
      title: 'Notre Galerie',
      subtitle:
        'Découvrez nos inspirations : coupes femme, colorations lumineuses, brushings soyeux et coiffures de cérémonie.',
      filters: {
        all: 'Tout Voir',
        haircuts: 'Coupes',
        coloring: 'Coloration',
        blowouts: 'Brushing',
        occasions: 'Cérémonies',
      },
      items: [
        {
          id: 'g1',
          title: 'Ondulations Châtain Doux',
          category: 'blowouts',
          categoryLabel: 'Brushing',
          image: IMAGES.hero,
        },
        {
          id: 'g2',
          title: 'Carré Dégradé Moderne',
          category: 'haircuts',
          categoryLabel: 'Coupes',
          image: IMAGES.haircut,
        },
        {
          id: 'g3',
          title: 'Balayage Caramel & Or Rose',
          category: 'coloring',
          categoryLabel: 'Coloration',
          image: IMAGES.coloring,
        },
        {
          id: 'g4',
          title: 'Brushing Volume Soyeux',
          category: 'blowouts',
          categoryLabel: 'Brushing',
          image: IMAGES.blowdry,
        },
        {
          id: 'g5',
          title: 'Chignon Orné de Perles',
          category: 'occasions',
          categoryLabel: 'Cérémonies',
          image: IMAGES.occasion,
        },
        {
          id: 'g6',
          title: 'Soin des Ongles & French',
          category: 'occasions',
          categoryLabel: 'Beauté & Ongles',
          image: IMAGES.nails,
        },
      ],
    },
    whyChoose: {
      kicker: 'L’Expérience',
      title: 'Pourquoi Choisir Beauty Queen Salon Safi',
      subtitle:
        'Chaque détail de notre salon est pensé pour vous offrir un moment de détente et de confiance.',
      items: [
        {
          id: 'attention',
          title: 'Attention Personnalisée',
          description: 'Nous écoutons vos envies pour que chaque coupe et coiffure vous ressemble.',
        },
        {
          id: 'atmosphere',
          title: 'Atmosphère Chaleureuse',
          description: 'Un espace calme, accueillant et respectueux dédié au bien-être des femmes.',
        },
        {
          id: 'modern',
          title: 'Styles Modernes & Élégants',
          description: 'Des coupes intemporelles aux tendances actuelles, adaptées à votre visage.',
        },
        {
          id: 'location',
          title: 'Emplacement Idéal à Safi',
          description: 'Facilement accessible sur l’Avenue John Kennedy au cœur de Safi.',
        },
        {
          id: 'contact',
          title: 'Prise de Rendez-vous Facile',
          description: 'Contactez-nous directement par WhatsApp ou téléphone selon vos disponibilités.',
        },
        {
          id: 'satisfaction',
          title: 'Satisfaction Cliente',
          description: 'Un soin constant pour des cheveux sains et un résultat à la hauteur de vos attentes.',
        },
      ],
    },
    reviews: {
      kicker: 'Confiance',
      title: 'Avis Clients',
      ratingValue: '4.4',
      outOf: '/ 5',
      reviewCountText: 'Basé sur 28 avis clients',
      verifiedNote: 'Évalué par nos clientes à Safi, Maroc.',
      ctaText: 'Réserver Votre Visite',
    },
    instagram: {
      kicker: 'Réseaux Sociaux',
      title: 'Suivez Notre Parcours Beauté',
      description:
        'Retrouvez nos dernières transformations capillaires, inspirations coiffure et moments au salon sur Instagram.',
      buttonText: 'Suivez-nous sur Instagram',
    },
    contact: {
      kicker: 'Nous Visiter',
      title: 'Visitez Beauty Queen Salon Safi',
      subtitle:
        'Nous serons ravies de vous accueillir. Contactez-nous sur WhatsApp ou par téléphone pour fixer votre rendez-vous.',
      salonName: 'Beauty Queen Salon Safi',
      addressLabel: 'Adresse',
      addressValue: '2e étage, numéro 12, immeuble ZALAGH, Av. John Kennedy, Safi 46000, Maroc.',
      phoneLabel: 'Téléphone',
      phoneValue: '+212664400033',
      hoursLabel: 'Horaires d’Ouverture',
      hoursOpen: 'Mardi – Dimanche : 10h00 – 20h00',
      hoursClosed: 'Lundi : Fermé',
      whatsappCta: 'Réserver sur WhatsApp',
      callCta: 'Appeler +212664400033',
      directionsCta: 'Itinéraire sur Google Maps',
      bookingNote: 'Les rendez-vous sont organisés directement avec notre équipe par WhatsApp ou téléphone.',
    },
    footer: {
      tagline: 'Salon de Coiffure & Beauté Femme à Safi, Maroc.',
      quickLinksTitle: 'Navigation',
      contactTitle: 'Contact',
      hoursTitle: 'Horaires',
      copyright: '© 2026 Beauty Queen Salon Safi. Tous droits réservés.',
    },
    whatsappMessage:
      'Bonjour Beauty Queen Salon Safi, je souhaite prendre un rendez-vous. Pourriez-vous m’indiquer vos disponibilités ?',
  },

  ar: {
    brandName: 'BEAUTY QUEEN SALON',
    nav: {
      about: 'من نحن',
      services: 'خدماتنا',
      gallery: 'المعرض',
      reviews: 'التقييمات',
      contact: 'تواصل معنا',
      bookNow: 'احجزي موعدك',
      menuOpen: 'فتح القائمة',
      menuClose: 'إغلاق القائمة',
      languageLabel: 'اختيار اللغة',
    },
    hero: {
      locationLine: 'آسفي، المغرب · صالون حلاقة وتجميل للنساء',
      headline: 'اكتشفي جمالك، وحددي أسلوبك.',
      subheadline:
        'استمتعي بخدمات تصفيف الشعر والتجميل الاحترافية في صالون بيوتي كوين آسفي. لأن كل امرأة تستحق أن تشعر بالجمال والثقة.',
      primaryCta: 'احجزي موعدك',
      secondaryCta: 'استكشفي خدماتنا',
      ratingSummary: '4.4 / 5 · 28 تقييمًا من العميلات',
    },
    about: {
      kicker: 'فلسفتنا',
      title: 'مرحبًا بك في صالون بيوتي كوين آسفي',
      paragraph1:
        'يقع صالون بيوتي كوين آسفي في قلب مدينة آسفي، وهو صالون نسائي متخصص صُمم ليمنحك الراحة والأناقة والاهتمام الشخصي. منذ لحظة دخولك، نحرص على توفير أجواء هادئة ومرحبة تشعرك بالراحة والاهتمام.',
      paragraph2:
        'لكل امرأة جمالها الطبيعي وأسلوبها الخاص. نحن نستمع بعناية لرغباتك لنبتكر لك تسريحة تناسب ملامحك وطبيعة شعرك وأسلوب حياتك اليومي.',
      pillars: [
        {
          title: 'اهتمام شخصي',
          description: 'استشارة خاصة لفهم نوع شعرك والإطلالة التي تبحثين عنها.',
        },
        {
          title: 'تصفيف راقٍ',
          description: 'تقنيات عصرية وكلاسيكية لأناقة طبيعية تدوم طويلاً.',
        },
        {
          title: 'مساحة مرحبة',
          description: 'بيئة هادئة ومخصصة للنساء في وسط مدينة آسفي.',
        },
      ],
    },
    services: {
      kicker: 'ما نقدمه',
      title: 'خدمات الشعر والتجميل',
      subtitle: 'خدمات عناية وتصفيف شعر متكاملة مصممة لإبراز جمالك الخاص.',
      items: [
        {
          id: 'haircuts',
          number: '01',
          title: 'قصات الشعر النسائية',
          description: 'قصات عصرية وكلاسيكية ومخصصة تناسب ملامحك.',
          priceNote: 'تواصلي معنا لمعرفة الأسعار.',
          image: IMAGES.haircut,
        },
        {
          id: 'styling',
          number: '02',
          title: 'تصفيف الشعر',
          description: 'تسريحات أنيقة لمختلف المناسبات اليومية.',
          priceNote: 'تواصلي معنا لمعرفة الأسعار.',
          image: IMAGES.hero,
        },
        {
          id: 'blowdry',
          number: '03',
          title: 'السيشوار والتمشيط',
          description: 'حجم جميل ولمسة نهائية ناعمة وحريرية.',
          priceNote: 'تواصلي معنا لمعرفة الأسعار.',
          image: IMAGES.blowdry,
        },
        {
          id: 'coloring',
          number: '04',
          title: 'صبغة الشعر',
          description: 'ألوان مشرقة وإطلالات مخصصة تناسب بشرتك.',
          priceNote: 'تواصلي معنا لمعرفة الأسعار.',
          image: IMAGES.coloring,
        },
        {
          id: 'treatments',
          number: '05',
          title: 'علاجات الشعر',
          description: 'عناية متكاملة وعلاجات مغذية لصحة ولمعان الشعر.',
          priceNote: 'تواصلي معنا لمعرفة الأسعار.',
          image: IMAGES.blowdry,
        },
        {
          id: 'occasions',
          number: '06',
          title: 'تسريحات المناسبات الخاصة',
          description: 'تسريحات راقية للأعراس والاحتفالات والمناسبات الخاصة.',
          priceNote: 'تواصلي معنا لمعرفة الأسعار.',
          image: IMAGES.occasion,
        },
      ],
    },
    gallery: {
      kicker: 'معرض الصور',
      title: 'معرض أعمالنا',
      subtitle:
        'استلهمي إطلالتك من قصات الشعر النسائية، الصبغات المشرقة، السيشوار الناعم، وتسريحات المناسبات.',
      filters: {
        all: 'الكل',
        haircuts: 'قصات الشعر',
        coloring: 'صبغة الشعر',
        blowouts: 'السيشوار',
        occasions: 'المناسبات',
      },
      items: [
        {
          id: 'g1',
          title: 'تموجات كستنائية ناعمة',
          category: 'blowouts',
          categoryLabel: 'السيشوار',
          image: IMAGES.hero,
        },
        {
          id: 'g2',
          title: 'قصة بوب متدرجة عصرية',
          category: 'haircuts',
          categoryLabel: 'قصات الشعر',
          image: IMAGES.haircut,
        },
        {
          id: 'g3',
          title: 'بالياج كراميل وذهبي وردي',
          category: 'coloring',
          categoryLabel: 'صبغة الشعر',
          image: IMAGES.coloring,
        },
        {
          id: 'g4',
          title: 'سيشوار كثيف وناعم',
          category: 'blowouts',
          categoryLabel: 'السيشوار',
          image: IMAGES.blowdry,
        },
        {
          id: 'g5',
          title: 'شينيون مزين باللؤلؤ',
          category: 'occasions',
          categoryLabel: 'المناسبات',
          image: IMAGES.occasion,
        },
        {
          id: 'g6',
          title: 'العناية بالأظافر والفرنش',
          category: 'occasions',
          categoryLabel: 'الجمال والعناية بالأظافر',
          image: IMAGES.nails,
        },
      ],
    },
    whyChoose: {
      kicker: 'تجربتك معنا',
      title: 'لماذا تختارين صالون بيوتي كوين آسفي',
      subtitle: 'كل تفصيل في صالوننا مصمم ليمنحك زيارة مريحة وتجربة مليئة بالثقة.',
      items: [
        {
          id: 'attention',
          title: 'اهتمام شخصي',
          description: 'نستمع بعناية لتفضيلاتك لتكون كل قصة وتسريحة معبرة عنك.',
        },
        {
          id: 'atmosphere',
          title: 'أجواء مرحبة',
          description: 'مساحة دافئة وهادئة تمنحك الراحة والخصوصية.',
        },
        {
          id: 'modern',
          title: 'إطلالات عصرية وأنيقة',
          description: 'من القصات الكلاسيكية إلى أحدث الصيحات، نختار ما يبرز جمالك.',
        },
        {
          id: 'location',
          title: 'موقع مريح في آسفي',
          description: 'موقع يسهل الوصول إليه في شارع جون كينيدي بقلب مدينة آسفي.',
        },
        {
          id: 'contact',
          title: 'سهولة حجز المواعيد',
          description: 'تواصلي معنا مباشرة عبر واتساب أو الهاتف لتحديد موعدك بكل سهولة.',
        },
        {
          id: 'satisfaction',
          title: 'رضا العميلات',
          description: 'نحرص على جودة العناية وصحة الشعر لتحقيق نتائج تمنحك الثقة.',
        },
      ],
    },
    reviews: {
      kicker: 'ثقة عميلاتنا',
      title: 'تقييمات العميلات',
      ratingValue: '4.4',
      outOf: '/ 5',
      reviewCountText: 'بناءً على 28 تقييمًا',
      verifiedNote: 'تقييم عميلاتنا في مدينة آسفي، المغرب.',
      ctaText: 'احجزي زيارتك الآن',
    },
    instagram: {
      kicker: 'إنستغرام',
      title: 'تابعي رحلة الجمال معنا',
      description: 'اكتشفي أحدث إطلالات الشعر، أفكار التصفيف، وأجواء الصالون على إنستغرام.',
      buttonText: 'تابعينا على إنستغرام',
    },
    contact: {
      kicker: 'زورينا',
      title: 'زيارة صالون بيوتي كوين آسفي',
      subtitle: 'يسعدنا الترحيب بك. تواصلي معنا عبر واتساب أو الهاتف لحجز موعدك.',
      salonName: 'صالون بيوتي كوين آسفي',
      addressLabel: 'العنوان',
      addressValue: 'الطابق الثاني، رقم 12، عمارة زلاغ، شارع جون كينيدي، آسفي 46000، المغرب.',
      phoneLabel: 'الهاتف',
      phoneValue: '+212664400033',
      hoursLabel: 'ساعات العمل',
      hoursOpen: 'الثلاثاء – الأحد: 10:00 صباحًا – 08:00 مساءً',
      hoursClosed: 'الإثنين: مغلق',
      whatsappCta: 'احجزي عبر واتساب',
      callCta: 'اتصلي على +212664400033',
      directionsCta: 'الاتجاهات على خرائط جوجل',
      bookingNote: 'يتم تنسيق المواعيد مباشرة مع فريقنا عبر واتساب أو الهاتف.',
    },
    footer: {
      tagline: 'صالون حلاقة وتجميل للنساء في آسفي، المغرب.',
      quickLinksTitle: 'روابط سريعة',
      contactTitle: 'تواصل معنا',
      hoursTitle: 'ساعات العمل',
      copyright: '© 2026 صالون بيوتي كوين آسفي. جميع الحقوق محفوظة.',
    },
    whatsappMessage:
      'مرحبًا صالون بيوتي كوين آسفي، أود حجز موعد. هل يمكنكم إخباري بالأوقات المتاحة؟',
  },

  it: {
    brandName: 'BEAUTY QUEEN SALON',
    nav: {
      about: 'Chi Siamo',
      services: 'Servizi',
      gallery: 'Galleria',
      reviews: 'Recensioni',
      contact: 'Contatti',
      bookNow: 'Prenota un Appuntamento',
      menuOpen: 'Apri menu',
      menuClose: 'Chiudi menu',
      languageLabel: 'Seleziona lingua',
    },
    hero: {
      locationLine: 'Safi, Marocco · Salone di Parrucchiere & Bellezza Donna',
      headline: 'Scopri la Tua Bellezza, Definisci il Tuo Stile.',
      subheadline:
        'Vivi servizi professionali di hair styling e bellezza al Beauty Queen Salon Safi. Perché ogni donna merita di sentirsi bella e sicura di sé.',
      primaryCta: 'Prenota un Appuntamento',
      secondaryCta: 'Esplora i Nostri Servizi',
      ratingSummary: '4,4 / 5 · 28 recensioni clienti',
    },
    about: {
      kicker: 'La Nostra Filosofia',
      title: 'Benvenuti al Beauty Queen Salon Safi',
      paragraph1:
        'Situato nel cuore di Safi, il Beauty Queen Salon Safi è un salone dedicato alle donne, progettato per offrire comfort, eleganza e attenzione personale. Dal momento in cui entri, creiamo un’atmosfera calma e accogliente.',
      paragraph2:
        'Ogni donna ha la propria bellezza naturale e il proprio stile. Ascoltiamo con attenzione i tuoi desideri per creare un’acconciatura che valorizzi i tuoi lineamenti e la tua quotidianità.',
      pillars: [
        {
          title: 'Attenzione Personale',
          description: 'Consulenze su misura per comprendere il tuo tipo di capello e il look desiderato.',
        },
        {
          title: 'Styling Raffinato',
          description: 'Tecniche moderne e classiche per un’eleganza naturale e duratura.',
        },
        {
          title: 'Spazio Accogliente',
          description: 'Un ambiente sereno e dedicato alle donne nel centro di Safi.',
        },
      ],
    },
    services: {
      kicker: 'Cosa Offriamo',
      title: 'I Nostri Servizi di Hair & Beauty',
      subtitle: 'Servizi di cura e styling dei capelli pensati per esaltare la tua bellezza.',
      items: [
        {
          id: 'haircuts',
          number: '01',
          title: 'Tagli Donna',
          description: 'Tagli moderni, classici e personalizzati.',
          priceNote: 'Contattaci per i prezzi.',
          image: IMAGES.haircut,
        },
        {
          id: 'styling',
          number: '02',
          title: 'Hair Styling',
          description: 'Acconciature eleganti per ogni occasione quotidiana.',
          priceNote: 'Contattaci per i prezzi.',
          image: IMAGES.hero,
        },
        {
          id: 'blowdry',
          number: '03',
          title: 'Piega & Brushing',
          description: 'Volume naturale e finitura liscia e setosa.',
          priceNote: 'Contattaci per i prezzi.',
          image: IMAGES.blowdry,
        },
        {
          id: 'coloring',
          number: '04',
          title: 'Colorazione',
          description: 'Colori luminosi e look personalizzati.',
          priceNote: 'Contattaci per i prezzi.',
          image: IMAGES.coloring,
        },
        {
          id: 'treatments',
          number: '05',
          title: 'Trattamenti Capelli',
          description: 'Cura dei capelli e trattamenti nutrienti.',
          priceNote: 'Contattaci per i prezzi.',
          image: IMAGES.blowdry,
        },
        {
          id: 'occasions',
          number: '06',
          title: 'Acconciature Occasioni Speciali',
          description: 'Acconciature eleganti per feste ed eventi speciali.',
          priceNote: 'Contattaci per i prezzi.',
          image: IMAGES.occasion,
        },
      ],
    },
    gallery: {
      kicker: 'Lookbook',
      title: 'La Nostra Galleria',
      subtitle:
        'Esplora le nostre ispirazioni: tagli donna, colorazioni luminose, pieghe morbide e raccolti per eventi.',
      filters: {
        all: 'Tutti',
        haircuts: 'Tagli',
        coloring: 'Colorazione',
        blowouts: 'Piega',
        occasions: 'Occasioni Speciali',
      },
      items: [
        {
          id: 'g1',
          title: 'Onde Castane Morbide',
          category: 'blowouts',
          categoryLabel: 'Piega',
          image: IMAGES.hero,
        },
        {
          id: 'g2',
          title: 'Bob Scalato Moderno',
          category: 'haircuts',
          categoryLabel: 'Tagli',
          image: IMAGES.haircut,
        },
        {
          id: 'g3',
          title: 'Balayage Caramello & Oro Rosa',
          category: 'coloring',
          categoryLabel: 'Colorazione',
          image: IMAGES.coloring,
        },
        {
          id: 'g4',
          title: 'Brushing Volume Setoso',
          category: 'blowouts',
          categoryLabel: 'Piega',
          image: IMAGES.blowdry,
        },
        {
          id: 'g5',
          title: 'Chignon con Perle',
          category: 'occasions',
          categoryLabel: 'Occasioni Speciali',
          image: IMAGES.occasion,
        },
        {
          id: 'g6',
          title: 'Cura delle Unghie & French',
          category: 'occasions',
          categoryLabel: 'Bellezza & Unghie',
          image: IMAGES.nails,
        },
      ],
    },
    whyChoose: {
      kicker: 'L’Esperienza',
      title: 'Perché Scegliere Beauty Queen Salon Safi',
      subtitle: 'Ogni dettaglio del nostro salone è pensato per offrirti una visita piacevole e rilassante.',
      items: [
        {
          id: 'attention',
          title: 'Attenzione Personalizzata',
          description: 'Ascoltiamo le tue preferenze affinché ogni taglio e stile sia davvero tuo.',
        },
        {
          id: 'atmosphere',
          title: 'Atmosfera Accogliente',
          description: 'Uno spazio caldo, tranquillo e rispettoso dedicato al benessere femminile.',
        },
        {
          id: 'modern',
          title: 'Look Moderni ed Eleganti',
          description: 'Dai grandi classici alle tendenze attuali, creiamo look che valorizzano il viso.',
        },
        {
          id: 'location',
          title: 'Posizione Comoda a Safi',
          description: 'Facilmente raggiungibile su Avenue John Kennedy nel cuore di Safi.',
        },
        {
          id: 'contact',
          title: 'Contatto Facile per Appuntamenti',
          description: 'Scrivici su WhatsApp o chiamaci per organizzare la tua visita.',
        },
        {
          id: 'satisfaction',
          title: 'Soddisfazione delle Clienti',
          description: 'Impegno costante per capelli sani e risultati che donano sicurezza.',
        },
      ],
    },
    reviews: {
      kicker: 'Fiducia',
      title: 'Recensioni Clienti',
      ratingValue: '4.4',
      outOf: '/ 5',
      reviewCountText: 'Basato su 28 recensioni clienti',
      verifiedNote: 'Valutato dalle nostre clienti a Safi, Marocco.',
      ctaText: 'Prenota la Tua Visita',
    },
    instagram: {
      kicker: 'Social',
      title: 'Segui il Nostro Viaggio di Bellezza',
      description: 'Scopri le nostre ultime trasformazioni, idee di styling e momenti in salone su Instagram.',
      buttonText: 'Seguici su Instagram',
    },
    contact: {
      kicker: 'Visitaci',
      title: 'Visita Beauty Queen Salon Safi',
      subtitle: 'Saremo felici di accoglierti. Contattaci su WhatsApp o telefonicamente per prenotare.',
      salonName: 'Beauty Queen Salon Safi',
      addressLabel: 'Indirizzo',
      addressValue: '2e étage, numéro 12, immeuble ZALAGH, Av. John Kennedy, Safi 46000, Marocco.',
      phoneLabel: 'Telefono',
      phoneValue: '+212664400033',
      hoursLabel: 'Orari di Apertura',
      hoursOpen: 'Martedì – Domenica: 10:00 – 20:00',
      hoursClosed: 'Lunedì: Chiuso',
      whatsappCta: 'Prenota su WhatsApp',
      callCta: 'Chiama +212664400033',
      directionsCta: 'Indicazioni su Google Maps',
      bookingNote: 'Gli appuntamenti vengono concordati direttamente con il nostro team tramite WhatsApp o telefono.',
    },
    footer: {
      tagline: 'Salone di Parrucchiere & Bellezza Donna a Safi, Marocco.',
      quickLinksTitle: 'Navigazione',
      contactTitle: 'Contatti',
      hoursTitle: 'Orari',
      copyright: '© 2026 Beauty Queen Salon Safi. Tutti i diritti riservati.',
    },
    whatsappMessage:
      'Ciao Beauty Queen Salon Safi, vorrei prenotare un appuntamento. Potreste indicarmi gli orari disponibili?',
  },

  de: {
    brandName: 'BEAUTY QUEEN SALON',
    nav: {
      about: 'Über Uns',
      services: 'Leistungen',
      gallery: 'Galerie',
      reviews: 'Bewertungen',
      contact: 'Kontakt',
      bookNow: 'Termin Vereinbaren',
      menuOpen: 'Menü öffnen',
      menuClose: 'Menü schließen',
      languageLabel: 'Sprache wählen',
    },
    hero: {
      locationLine: 'Safi, Marokko · Damenfriseur & Schönheitssalon',
      headline: 'Entdecken Sie Ihre Schönheit, Definieren Sie Ihren Stil.',
      subheadline:
        'Erleben Sie professionelles Haarstyling und Beauty-Services im Beauty Queen Salon Safi. Denn jede Frau verdient es, sich schön und selbstbewusst zu fühlen.',
      primaryCta: 'Termin Vereinbaren',
      secondaryCta: 'Unsere Leistungen',
      ratingSummary: '4,4 / 5 · 28 Kundenbewertungen',
    },
    about: {
      kicker: 'Unsere Philosophie',
      title: 'Willkommen im Beauty Queen Salon Safi',
      paragraph1:
        'Im Herzen von Safi gelegen, ist der Beauty Queen Salon Safi ein Damenfriseursalon, der ganz auf Komfort, Eleganz und persönliche Betreuung ausgerichtet ist. Vom ersten Moment an schaffen wir eine ruhige, einladende Atmosphäre.',
      paragraph2:
        'Jede Frau hat ihre eigene natürliche Schönheit. Wir nehmen uns Zeit für Ihre Wünsche und kreieren ein Styling, das perfekt zu Ihren Gesichtszügen, Ihrer Haarstruktur und Ihrem Alltag passt.',
      pillars: [
        {
          title: 'Persönliche Betreuung',
          description: 'Individuelle Beratung für Ihren Haartyp und Ihren Wunschlook.',
        },
        {
          title: 'Stilvolles Styling',
          description: 'Moderne und klassische Techniken für mühelose, langanhaltende Eleganz.',
        },
        {
          title: 'Einladendes Ambiente',
          description: 'Ein ruhiger, geschützter Raum für Frauen im Zentrum von Safi.',
        },
      ],
    },
    services: {
      kicker: 'Unser Angebot',
      title: 'Unsere Haar- & Beauty-Leistungen',
      subtitle: 'Sorgfältig ausgeführte Haarpflege und Stylings, abgestimmt auf Ihre individuelle Schönheit.',
      items: [
        {
          id: 'haircuts',
          number: '01',
          title: 'Damenhaarschnitte',
          description: 'Moderne, klassische und individuell abgestimmte Haarschnitte.',
          priceNote: 'Kontaktieren Sie uns für Preise.',
          image: IMAGES.haircut,
        },
        {
          id: 'styling',
          number: '02',
          title: 'Haarstyling',
          description: 'Elegante Frisuren für jeden Anlass im Alltag.',
          priceNote: 'Kontaktieren Sie uns für Preise.',
          image: IMAGES.hero,
        },
        {
          id: 'blowdry',
          number: '03',
          title: 'Föhnen & Brushing',
          description: 'Schönes Volumen und geschmeidige, glänzende Ergebnisse.',
          priceNote: 'Kontaktieren Sie uns für Preise.',
          image: IMAGES.blowdry,
        },
        {
          id: 'coloring',
          number: '04',
          title: 'Haarcoloration',
          description: 'Frische Farben und individuell abgestimmte Looks.',
          priceNote: 'Kontaktieren Sie uns für Preise.',
          image: IMAGES.coloring,
        },
        {
          id: 'treatments',
          number: '05',
          title: 'Haarpflege & Kuren',
          description: 'Nährende Pflegebehandlungen für gesundes, kräftiges Haar.',
          priceNote: 'Kontaktieren Sie uns für Preise.',
          image: IMAGES.blowdry,
        },
        {
          id: 'occasions',
          number: '06',
          title: 'Frisuren für Besondere Anlässe',
          description: 'Elegante Hochsteck- und Festfrisuren für Feiern und Events.',
          priceNote: 'Kontaktieren Sie uns für Preise.',
          image: IMAGES.occasion,
        },
      ],
    },
    gallery: {
      kicker: 'Lookbook',
      title: 'Unsere Galerie',
      subtitle:
        'Entdecken Sie Inspirationen für Damenhaarschnitte, strahlende Haarfarben, geschmeidige Blowouts und Festfrisuren.',
      filters: {
        all: 'Alle',
        haircuts: 'Haarschnitte',
        coloring: 'Coloration',
        blowouts: 'Föhnen',
        occasions: 'Besondere Anlässe',
      },
      items: [
        {
          id: 'g1',
          title: 'Weiche Kastanien-Wellen',
          category: 'blowouts',
          categoryLabel: 'Föhnen',
          image: IMAGES.hero,
        },
        {
          id: 'g2',
          title: 'Moderner Stufen-Bob',
          category: 'haircuts',
          categoryLabel: 'Haarschnitte',
          image: IMAGES.haircut,
        },
        {
          id: 'g3',
          title: 'Karamell & Roségold Balayage',
          category: 'coloring',
          categoryLabel: 'Coloration',
          image: IMAGES.coloring,
        },
        {
          id: 'g4',
          title: 'Seidiges Volumen-Brushing',
          category: 'blowouts',
          categoryLabel: 'Föhnen',
          image: IMAGES.blowdry,
        },
        {
          id: 'g5',
          title: 'Chignon mit Perlenakzenten',
          category: 'occasions',
          categoryLabel: 'Besondere Anlässe',
          image: IMAGES.occasion,
        },
        {
          id: 'g6',
          title: 'Nagelpflege & French',
          category: 'occasions',
          categoryLabel: 'Beauty & Nagelpflege',
          image: IMAGES.nails,
        },
      ],
    },
    whyChoose: {
      kicker: 'Das Erlebnis',
      title: 'Warum Beauty Queen Salon Safi',
      subtitle: 'Jedes Detail unseres Salons ist darauf ausgerichtet, Ihnen einen angenehmen Besuch zu bieten.',
      items: [
        {
          id: 'attention',
          title: 'Persönliche Aufmerksamkeit',
          description: 'Wir hören Ihnen aufmerksam zu, damit Schnitt und Styling perfekt zu Ihnen passen.',
        },
        {
          id: 'atmosphere',
          title: 'Einladende Atmosphäre',
          description: 'Ein warmer, ruhiger Ort, an dem Frauen entspannen und sich wohlfühlen können.',
        },
        {
          id: 'modern',
          title: 'Stilvolle & Moderne Looks',
          description: 'Von zeitlosen Klassikern bis zu modernen Trends, passend zu Ihrem Typ.',
        },
        {
          id: 'location',
          title: 'Zentrale Lage in Safi',
          description: 'Bequem erreichbar in der Avenue John Kennedy im Herzen von Safi.',
        },
        {
          id: 'contact',
          title: 'Einfache Terminvereinbarung',
          description: 'Kontaktieren Sie uns direkt per WhatsApp oder Telefon für Ihren Wunschtermin.',
        },
        {
          id: 'satisfaction',
          title: 'Kundenzufriedenheit',
          description: 'Sorgfältige Pflege und Ergebnisse, mit denen Sie sich rundum wohlfühlen.',
        },
      ],
    },
    reviews: {
      kicker: 'Kundenvertrauen',
      title: 'Kundenbewertungen',
      ratingValue: '4.4',
      outOf: '/ 5',
      reviewCountText: 'Basierend auf 28 Kundenbewertungen',
      verifiedNote: 'Bewertet von unseren Kundinnen in Safi, Marokko.',
      ctaText: 'Termin Vereinbaren',
    },
    instagram: {
      kicker: 'Instagram',
      title: 'Folgen Sie Unserer Beauty-Reise',
      description: 'Entdecken Sie unsere neuesten Haar-Transformationen und Styling-Ideen auf Instagram.',
      buttonText: 'Folgen Sie uns auf Instagram',
    },
    contact: {
      kicker: 'Besuchen Sie Uns',
      title: 'Besuchen Sie Beauty Queen Salon Safi',
      subtitle: 'Wir freuen uns auf Sie. Kontaktieren Sie uns per WhatsApp oder Telefon zur Terminvereinbarung.',
      salonName: 'Beauty Queen Salon Safi',
      addressLabel: 'Adresse',
      addressValue: '2e étage, numéro 12, immeuble ZALAGH, Av. John Kennedy, Safi 46000, Marokko.',
      phoneLabel: 'Telefon',
      phoneValue: '+212664400033',
      hoursLabel: 'Öffnungszeiten',
      hoursOpen: 'Dienstag – Sonntag: 10:00 – 20:00 Uhr',
      hoursClosed: 'Montag: Geschlossen',
      whatsappCta: 'Über WhatsApp buchen',
      callCta: 'Anrufen +212664400033',
      directionsCta: 'Route auf Google Maps',
      bookingNote: 'Termine werden direkt mit unserem Team per WhatsApp oder Telefon vereinbart.',
    },
    footer: {
      tagline: 'Damenfriseur & Schönheitssalon in Safi, Marokko.',
      quickLinksTitle: 'Navigation',
      contactTitle: 'Kontakt',
      hoursTitle: 'Öffnungszeiten',
      copyright: '© 2026 Beauty Queen Salon Safi. Alle Rechte vorbehalten.',
    },
    whatsappMessage:
      'Hallo Beauty Queen Salon Safi, ich möchte gerne einen Termin vereinbaren. Welche Zeiten sind verfügbar?',
  },

  zh: {
    brandName: 'BEAUTY QUEEN SALON',
    nav: {
      about: '关于我们',
      services: '服务项目',
      gallery: '作品展示',
      reviews: '顾客评价',
      contact: '联系我们',
      bookNow: '预约服务',
      menuOpen: '打开菜单',
      menuClose: '关闭菜单',
      languageLabel: '选择语言',
    },
    hero: {
      locationLine: '摩洛哥萨菲 · 女士美发与美容沙龙',
      headline: '发现您的美，定义您的风格。',
      subheadline:
        '在萨菲 Beauty Queen 沙龙体验专业的美发造型与美容服务。因为每位女性都值得拥有美丽与自信。',
      primaryCta: '预约服务',
      secondaryCta: '探索服务项目',
      ratingSummary: '4.4 / 5 · 28 条顾客评价',
    },
    about: {
      kicker: '我们的理念',
      title: '欢迎来到萨菲 Beauty Queen 沙龙',
      paragraph1:
        '萨菲 Beauty Queen 沙龙位于萨菲市中心，是一家专为女性打造的舒适、优雅且注重个性化服务的沙龙。从您踏入沙龙的那一刻起，我们致力于营造宁静温馨的氛围，让您放松身心。',
      paragraph2:
        '每位女性都有独特的自然之美。我们用心倾听您的需求，结合您的脸型、发质与日常生活方式，为您打造专属的迷人造型。',
      pillars: [
        {
          title: '贴心一对一服务',
          description: '细致沟通，深入了解您的发质与理想造型。',
        },
        {
          title: '精致造型技艺',
          description: '融合现代与经典手法，呈现自然持久的优雅。',
        },
        {
          title: '舒适私密空间',
          description: '位于萨菲市中心的宁静女性专属美发空间。',
        },
      ],
    },
    services: {
      kicker: '专业服务',
      title: '美发与造型服务',
      subtitle: '用心呵护每一缕秀发，为您量身定制专属美丽方案。',
      items: [
        {
          id: 'haircuts',
          number: '01',
          title: '女士剪发',
          description: '现代、经典及个性化定制剪发。',
          priceNote: '请联系我们咨询价格。',
          image: IMAGES.haircut,
        },
        {
          id: 'styling',
          number: '02',
          title: '日常造型',
          description: '适合各种日常场合的优雅发型。',
          priceNote: '请联系我们咨询价格。',
          image: IMAGES.hero,
        },
        {
          id: 'blowdry',
          number: '03',
          title: '吹风与蓬松造型',
          description: '打造自然丰盈感与柔顺光泽。',
          priceNote: '请联系我们咨询价格。',
          image: IMAGES.blowdry,
        },
        {
          id: 'coloring',
          number: '04',
          title: '染发服务',
          description: '清新发色与个性化定制染发。',
          priceNote: '请联系我们咨询价格。',
          image: IMAGES.coloring,
        },
        {
          id: 'treatments',
          number: '05',
          title: '秀发护理',
          description: '深层滋养与修护，令秀发健康亮泽。',
          priceNote: '请联系我们咨询价格。',
          image: IMAGES.blowdry,
        },
        {
          id: 'occasions',
          number: '06',
          title: '特别场合盘发',
          description: '专为庆典与重要活动打造的优雅盘发。',
          priceNote: '请联系我们咨询价格。',
          image: IMAGES.occasion,
        },
      ],
    },
    gallery: {
      kicker: '造型灵感',
      title: '作品展示',
      subtitle: '浏览我们的女士剪发、光泽染发、柔顺吹风及特别场合盘发作品。',
      filters: {
        all: '全部',
        haircuts: '剪发',
        coloring: '染发',
        blowouts: '吹风造型',
        occasions: '特别场合',
      },
      items: [
        {
          id: 'g1',
          title: '柔美栗色大波浪',
          category: 'blowouts',
          categoryLabel: '吹风造型',
          image: IMAGES.hero,
        },
        {
          id: 'g2',
          title: '现代层次感波波头',
          category: 'haircuts',
          categoryLabel: '剪发',
          image: IMAGES.haircut,
        },
        {
          id: 'g3',
          title: '焦糖玫瑰金挑染',
          category: 'coloring',
          categoryLabel: '染发',
          image: IMAGES.coloring,
        },
        {
          id: 'g4',
          title: '丝滑丰盈吹风造型',
          category: 'blowouts',
          categoryLabel: '吹风造型',
          image: IMAGES.blowdry,
        },
        {
          id: 'g5',
          title: '珍珠点缀优雅盘发',
          category: 'occasions',
          categoryLabel: '特别场合',
          image: IMAGES.occasion,
        },
        {
          id: 'g6',
          title: '法式美甲与手足护理',
          category: 'occasions',
          categoryLabel: '美容与美甲',
          image: IMAGES.nails,
        },
      ],
    },
    whyChoose: {
      kicker: '沙龙体验',
      title: '为什么选择萨菲 Beauty Queen 沙龙',
      subtitle: '我们注重每一个细节，只为给您带来舒适、自信的沙龙体验。',
      items: [
        {
          id: 'attention',
          title: '个性化关注',
          description: '我们认真倾听您的需求，让每一次剪裁与造型都契合您的气质。',
        },
        {
          id: 'atmosphere',
          title: '温馨舒适氛围',
          description: '宁静、优雅的女性专属空间，让您尽情享受美发时光。',
        },
        {
          id: 'modern',
          title: '时尚现代造型',
          description: '从经典款式到流行趋势，为您打造衬托脸型的理想发型。',
        },
        {
          id: 'location',
          title: '萨菲市中心便利位置',
          description: '位于萨菲约翰·肯尼迪大道，交通便利，轻松抵达。',
        },
        {
          id: 'contact',
          title: '便捷预约联系',
          description: '通过 WhatsApp 或电话即可直接联系我们安排预约时间。',
        },
        {
          id: 'satisfaction',
          title: '顾客至上',
          description: '用心呵护秀发健康，为您带来满意且充满自信的造型效果。',
        },
      ],
    },
    reviews: {
      kicker: '顾客口碑',
      title: '顾客评价',
      ratingValue: '4.4',
      outOf: '/ 5',
      reviewCountText: '基于 28 条顾客评价',
      verifiedNote: '来自摩洛哥萨菲顾客的真实评分。',
      ctaText: '立即预约',
    },
    instagram: {
      kicker: '社交媒体',
      title: '关注我们的美丽旅程',
      description: '在 Instagram 上查看我们的最新发型作品、造型灵感与沙龙日常。',
      buttonText: '在 Instagram 上关注我们',
    },
    contact: {
      kicker: '到店拜访',
      title: '欢迎光临萨菲 Beauty Queen 沙龙',
      subtitle: '期待您的到来。请通过 WhatsApp 或电话联系我们预约时间。',
      salonName: 'Beauty Queen Salon Safi',
      addressLabel: '地址',
      addressValue: '2e étage, numéro 12, immeuble ZALAGH, Av. John Kennedy, Safi 46000, Morocco.',
      phoneLabel: '电话',
      phoneValue: '+212664400033',
      hoursLabel: '营业时间',
      hoursOpen: '周二至周日：10:00 – 20:00',
      hoursClosed: '周一：休息',
      whatsappCta: '通过 WhatsApp 预约',
      callCta: '拨打电话 +212664400033',
      directionsCta: '在 Google 地图中查看路线',
      bookingNote: '所有预约均通过 WhatsApp 或电话与我们的团队直接确认。',
    },
    footer: {
      tagline: '摩洛哥萨菲女士美发与美容沙龙。',
      quickLinksTitle: '快速导航',
      contactTitle: '联系方式',
      hoursTitle: '营业时间',
      copyright: '© 2026 Beauty Queen Salon Safi. 保留所有权利。',
    },
    whatsappMessage:
      '您好，萨菲 Beauty Queen 沙龙！我想预约美发服务，请问近期有哪些可预约的时间？',
  },

  es: {
    brandName: 'BEAUTY QUEEN SALON',
    nav: {
      about: 'Nosotros',
      services: 'Servicios',
      gallery: 'Galería',
      reviews: 'Reseñas',
      contact: 'Contacto',
      bookNow: 'Reservar Cita',
      menuOpen: 'Abrir menú',
      menuClose: 'Cerrar menú',
      languageLabel: 'Seleccionar idioma',
    },
    hero: {
      locationLine: 'Safi, Marruecos · Peluquería y Salón de Belleza Femenino',
      headline: 'Descubre Tu Belleza, Define Tu Estilo.',
      subheadline:
        'Disfruta de servicios profesionales de peluquería y belleza en Beauty Queen Salon Safi. Porque cada mujer merece sentirse hermosa y segura.',
      primaryCta: 'Reservar Cita',
      secondaryCta: 'Explorar Servicios',
      ratingSummary: '4,4 / 5 · 28 reseñas de clientas',
    },
    about: {
      kicker: 'Nuestra Filosofía',
      title: 'Bienvenida a Beauty Queen Salon Safi',
      paragraph1:
        'Ubicado en el corazón de Safi, Beauty Queen Salon Safi es un salón dedicado a la mujer, diseñado para ofrecer comodidad, elegancia y atención personalizada. Desde el primer momento, creamos un ambiente tranquilo y acogedor.',
      paragraph2:
        'Cada mujer tiene su propia belleza natural. Nos tomamos el tiempo de escuchar tus deseos para crear un estilo que armonice con tus rasgos, tu tipo de cabello y tu día a día.',
      pillars: [
        {
          title: 'Atención Personalizada',
          description: 'Asesoramiento a medida para entender tu cabello y el estilo que buscas.',
        },
        {
          title: 'Estilismo Refinado',
          description: 'Técnicas modernas y clásicas para una elegancia natural y duradera.',
        },
        {
          title: 'Espacio Acogedor',
          description: 'Un entorno sereno y femenino en el centro de Safi.',
        },
      ],
    },
    services: {
      kicker: 'Lo Que Ofrecemos',
      title: 'Nuestros Servicios de Peluquería y Belleza',
      subtitle: 'Servicios de cuidado y estilismo capilar pensados para realzar tu belleza.',
      items: [
        {
          id: 'haircuts',
          number: '01',
          title: 'Cortes de Mujer',
          description: 'Cortes modernos, clásicos y personalizados.',
          priceNote: 'Contáctanos para consultar precios.',
          image: IMAGES.haircut,
        },
        {
          id: 'styling',
          number: '02',
          title: 'Peinados y Estilismo',
          description: 'Peinados elegantes para ocasiones cotidianas.',
          priceNote: 'Contáctanos para consultar precios.',
          image: IMAGES.hero,
        },
        {
          id: 'blowdry',
          number: '03',
          title: 'Secado y Brushing',
          description: 'Hermoso volumen y acabados suaves y sedosos.',
          priceNote: 'Contáctanos para consultar precios.',
          image: IMAGES.blowdry,
        },
        {
          id: 'coloring',
          number: '04',
          title: 'Coloración',
          description: 'Colores luminosos y estilos personalizados.',
          priceNote: 'Contáctanos para consultar precios.',
          image: IMAGES.coloring,
        },
        {
          id: 'treatments',
          number: '05',
          title: 'Tratamientos Capilares',
          description: 'Cuidado del cabello y tratamientos nutritivos.',
          priceNote: 'Contáctanos para consultar precios.',
          image: IMAGES.blowdry,
        },
        {
          id: 'occasions',
          number: '06',
          title: 'Peinados para Ocasiones Especiales',
          description: 'Peinados elegantes para celebraciones y eventos especiales.',
          priceNote: 'Contáctanos para consultar precios.',
          image: IMAGES.occasion,
        },
      ],
    },
    gallery: {
      kicker: 'Lookbook',
      title: 'Nuestra Galería',
      subtitle:
        'Explora nuestra inspiración en cortes de mujer, coloraciones luminosas, secados suaves y recogidos de fiesta.',
      filters: {
        all: 'Todos',
        haircuts: 'Cortes',
        coloring: 'Coloración',
        blowouts: 'Secado',
        occasions: 'Ocasiones Especiales',
      },
      items: [
        {
          id: 'g1',
          title: 'Ondas Castañas Suaves',
          category: 'blowouts',
          categoryLabel: 'Secado',
          image: IMAGES.hero,
        },
        {
          id: 'g2',
          title: 'Bob en Capas Moderno',
          category: 'haircuts',
          categoryLabel: 'Cortes',
          image: IMAGES.haircut,
        },
        {
          id: 'g3',
          title: 'Balayage Caramelo y Oro Rosa',
          category: 'coloring',
          categoryLabel: 'Coloración',
          image: IMAGES.coloring,
        },
        {
          id: 'g4',
          title: 'Brushing de Volumen Sedoso',
          category: 'blowouts',
          categoryLabel: 'Secado',
          image: IMAGES.blowdry,
        },
        {
          id: 'g5',
          title: 'Moño con Detalles de Perlas',
          category: 'occasions',
          categoryLabel: 'Ocasiones Especiales',
          image: IMAGES.occasion,
        },
        {
          id: 'g6',
          title: 'Cuidado de Uñas y Francesa',
          category: 'occasions',
          categoryLabel: 'Belleza y Uñas',
          image: IMAGES.nails,
        },
      ],
    },
    whyChoose: {
      kicker: 'La Experiencia',
      title: 'Por Qué Elegir Beauty Queen Salon Safi',
      subtitle: 'Cada detalle de nuestro salón está pensado para brindarte una visita cómoda y especial.',
      items: [
        {
          id: 'attention',
          title: 'Atención Personalizada',
          description: 'Escuchamos tus preferencias para que cada corte y peinado sea único para ti.',
        },
        {
          id: 'atmosphere',
          title: 'Ambiente Acogedor',
          description: 'Un espacio cálido, tranquilo y respetuoso dedicado al bienestar femenino.',
        },
        {
          id: 'modern',
          title: 'Estilos Modernos y Elegantes',
          description: 'Desde clásicos atemporales hasta tendencias actuales que favorecen tus rasgos.',
        },
        {
          id: 'location',
          title: 'Ubicación Cómoda en Safi',
          description: 'Fácilmente accesible en la Avenida John Kennedy, en el corazón de Safi.',
        },
        {
          id: 'contact',
          title: 'Contacto Fácil para Citas',
          description: 'Escríbenos por WhatsApp o llámanos para coordinar tu visita.',
        },
        {
          id: 'satisfaction',
          title: 'Satisfacción de Nuestras Clientas',
          description: 'Compromiso constante con el cuidado del cabello y resultados que te hagan sentir segura.',
        },
      ],
    },
    reviews: {
      kicker: 'Confianza',
      title: 'Reseñas de Clientas',
      ratingValue: '4.4',
      outOf: '/ 5',
      reviewCountText: 'Basado en 28 reseñas de clientas',
      verifiedNote: 'Valorado por nuestras clientas en Safi, Marruecos.',
      ctaText: 'Reserva Tu Visita',
    },
    instagram: {
      kicker: 'Instagram',
      title: 'Sigue Nuestro Viaje de Belleza',
      description: 'Descubre nuestras últimas transformaciones, ideas de peinados y momentos en el salón.',
      buttonText: 'Síguenos en Instagram',
    },
    contact: {
      kicker: 'Visítanos',
      title: 'Visita Beauty Queen Salon Safi',
      subtitle: 'Estaremos encantadas de recibirte. Contáctanos por WhatsApp o teléfono para reservar tu cita.',
      salonName: 'Beauty Queen Salon Safi',
      addressLabel: 'Dirección',
      addressValue: '2e étage, numéro 12, immeuble ZALAGH, Av. John Kennedy, Safi 46000, Marruecos.',
      phoneLabel: 'Teléfono',
      phoneValue: '+212664400033',
      hoursLabel: 'Horario de Apertura',
      hoursOpen: 'Martes – Domingo: 10:00 – 20:00',
      hoursClosed: 'Lunes: Cerrado',
      whatsappCta: 'Reservar por WhatsApp',
      callCta: 'Llamar +212664400033',
      directionsCta: 'Cómo llegar en Google Maps',
      bookingNote: 'Las citas se coordinan directamente con nuestro equipo por WhatsApp o teléfono.',
    },
    footer: {
      tagline: 'Peluquería y Salón de Belleza Femenino en Safi, Marruecos.',
      quickLinksTitle: 'Navegación',
      contactTitle: 'Contacto',
      hoursTitle: 'Horario',
      copyright: '© 2026 Beauty Queen Salon Safi. Todos los derechos reservados.',
    },
    whatsappMessage:
      'Hola Beauty Queen Salon Safi, me gustaría reservar una cita. ¿Podrían indicarme sus horarios disponibles?',
  },
};

export function getWhatsAppUrl(lang: LanguageCode): string {
  const message = encodeURIComponent(TRANSLATIONS[lang].whatsappMessage);
  return `https://wa.me/212664400033?text=${message}`;
}

export const INSTAGRAM_URL =
  'https://www.instagram.com/reel/DWU7OvyCB7D/?utm_source=ig_web_copy_link&obrf=NTc4MTIwNjQ2YQ==';

export const PHONE_URL = 'tel:+212664400033';

export const GOOGLE_MAPS_DIRECTIONS_URL =
  'https://www.google.com/maps/search/?api=1&query=2e+%C3%A9tage,+num%C3%A9ro+12,+immeuble+ZALAGH,+Av.+John+Kennedy,+Safi+46000,+Morocco';
