import { useEffect, useState } from 'react';
import {
  Calendar,
  Clock,
  Edit3,
  ExternalLink,
  Heart,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  Scissors,
  Sparkles,
  Star,
  UserCheck,
  X,
} from 'lucide-react';
import { Navbar } from './components/Navbar';
import { SalonImage } from './components/SalonImage';
import { CustomSiteData, SiteEditorModal } from './components/SiteEditorModal';
import { SmoothReveal } from './components/SmoothReveal';
import {
  GOOGLE_MAPS_DIRECTIONS_URL,
  GalleryItem,
  INSTAGRAM_URL,
  LANGUAGES,
  LanguageCode,
  PHONE_URL,
  TRANSLATIONS,
  getWhatsAppUrl,
} from './translations';

const STORAGE_KEY = 'beauty_queen_safi_lang';
const CUSTOM_DATA_KEY = 'beauty_queen_safi_custom_v1';

function getInitialLanguage(): LanguageCode {
  try {
    const saved = localStorage.getItem(STORAGE_KEY) as LanguageCode | null;
    if (saved && TRANSLATIONS[saved]) {
      return saved;
    }
  } catch {
    // Ignore storage access errors
  }
  return 'en';
}

function getInitialCustomData(): CustomSiteData {
  try {
    const raw = localStorage.getItem(CUSTOM_DATA_KEY);
    if (raw) {
      return JSON.parse(raw) as CustomSiteData;
    }
  } catch {
    // Ignore storage access errors
  }
  return {};
}

export default function App() {
  const [lang, setLang] = useState<LanguageCode>(getInitialLanguage);
  const [customData, setCustomData] = useState<CustomSiteData>(getInitialCustomData);
  const [editorOpen, setEditorOpen] = useState(false);
  const [galleryFilter, setGalleryFilter] = useState<
    'all' | 'haircuts' | 'coloring' | 'blowouts' | 'occasions'
  >('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const t = TRANSLATIONS[lang];
  const whatsappUrl = getWhatsAppUrl(lang);

  useEffect(() => {
    const langObj = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];
    document.documentElement.lang = lang;
    document.documentElement.dir = langObj.dir;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Ignore storage access errors
    }
  }, [lang]);

  const handleUpdateCustomData = (next: CustomSiteData) => {
    setCustomData(next);
    try {
      localStorage.setItem(CUSTOM_DATA_KEY, JSON.stringify(next));
    } catch {
      // Ignore storage access errors
    }
  };

  const handleResetCustomData = () => {
    setCustomData({});
    try {
      localStorage.removeItem(CUSTOM_DATA_KEY);
    } catch {
      // Ignore storage access errors
    }
  };

  const activeGallery = customData.galleryItems ?? t.gallery.items;
  const filteredGallery =
    galleryFilter === 'all'
      ? activeGallery
      : activeGallery.filter((item) => item.category === galleryFilter);

  const whyChooseIcons = [
    UserCheck,
    Heart,
    Sparkles,
    MapPin,
    MessageCircle,
    Star,
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9F5] text-[#2D1820]">
      <Navbar lang={lang} onSelectLang={setLang} t={t} />

      <main className="flex-1">
        {/* B. HERO SECTION */}
        <section className="relative overflow-hidden border-b border-[#E8D8C8]/60">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
              <div className="lg:col-span-6 flex flex-col justify-center">
                <p className="text-xs sm:text-sm font-medium tracking-wider uppercase text-[#702F45] mb-4">
                  {t.hero.locationLine}
                </p>

                <h1
                  className="font-display font-semibold text-[#2D1820] leading-[1.12] tracking-tight mb-6"
                  style={{
                    fontSize: 'clamp(2.25rem, 4vw, 3.75rem)',
                    textWrap: 'balance',
                  }}
                >
                  {customData.heroHeadline ?? t.hero.headline}
                </h1>

                <p className="text-base sm:text-lg text-[#2D1820]/80 leading-relaxed max-w-xl mb-8">
                  {customData.heroSubheadline ?? t.hero.subheadline}
                </p>

                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#702F45] text-white text-sm font-medium hover:bg-[#5A2436] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#702F45]"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>{t.hero.primaryCta}</span>
                  </a>

                  <a
                    href="#services"
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-full border border-[#C58A91] text-[#702F45] text-sm font-medium hover:bg-[#F8E5EA]/60 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#702F45]"
                  >
                    {t.hero.secondaryCta}
                  </a>
                </div>

                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#2D1820]/70 pt-4 border-t border-[#E8D8C8]/70">
                  <div className="flex items-center text-[#C58A91]" aria-hidden="true">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current opacity-50" />
                  </div>
                  <span className="tabular-nums font-medium">{t.hero.ratingSummary}</span>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative h-full min-h-[300px] sm:min-h-[380px] lg:min-h-[460px] rounded-2xl overflow-hidden border border-[#E8D8C8]">
                  <SalonImage
                    src="/src/assets/images/hero_beauty_queen_1793916711346.jpg"
                    alt="Beauty Queen Salon Safi - Women's Hair Styling"
                    priority
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* C. ABOUT US & SALON REEL */}
        <section id="about" className="py-16 sm:py-24 bg-white border-b border-[#E8D8C8]/60">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-7">
                <SmoothReveal>
                  <p className="text-xs sm:text-sm font-medium tracking-wider uppercase text-[#C58A91] mb-3">
                    {t.about.kicker}
                  </p>
                  <h2
                    className="font-display text-3xl sm:text-4xl font-semibold text-[#2D1820] mb-6"
                    style={{ textWrap: 'balance' }}
                  >
                    {customData.aboutTitle ?? t.about.title}
                  </h2>
                  <div className="space-y-4 text-base sm:text-lg text-[#2D1820]/80 leading-relaxed">
                    <p>{customData.aboutParagraph1 ?? t.about.paragraph1}</p>
                    <p>{customData.aboutParagraph2 ?? t.about.paragraph2}</p>
                  </div>
                </SmoothReveal>
              </div>

              {/* Editorial Framed Short Video Reel */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <SmoothReveal delay={0.1}>
                  <div className="w-full max-w-[300px] bg-[#FFF9F5] p-3 rounded-3xl border border-[#E8D8C8]">
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Watch Beauty Queen Salon Safi Instagram Reel"
                      className="group relative block aspect-[9/16] w-full rounded-2xl overflow-hidden bg-[#2D1820]"
                    >
                      <SalonImage
                        src="/src/assets/images/service_coloring_balayage_1793916711455.jpg"
                        alt="Beauty Queen Salon Safi Short Video Reel"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col items-center justify-center p-6 text-center">
                        <span className="w-14 h-14 rounded-full bg-white/95 text-[#702F45] flex items-center justify-center shadow-md transition-transform duration-200 group-hover:scale-110 mb-3">
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6 ms-0.5"
                            aria-hidden="true"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </span>
                        <span className="text-xs font-medium tracking-wider uppercase text-white/90">
                          Instagram Reel
                        </span>
                      </div>
                    </a>
                    <div className="pt-3 px-1 flex items-center justify-between text-xs text-[#702F45]">
                      <span className="font-display text-sm font-semibold">
                        {t.brandName}
                      </span>
                      <a
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-medium hover:underline"
                      >
                        <span>Instagram</span>
                        <ExternalLink className="w-3 h-3" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </SmoothReveal>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14 pt-10 border-t border-[#E8D8C8]">
              {t.about.pillars.map((pillar, idx) => (
                <SmoothReveal key={pillar.title} delay={idx * 0.08}>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-[#702F45] mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#2D1820]/75 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </SmoothReveal>
              ))}
            </div>
          </div>
        </section>

        {/* D. OUR SERVICES */}
        <section id="services" className="py-16 sm:py-24 bg-[#FFF9F5] border-b border-[#E8D8C8]/60">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SmoothReveal>
              <div className="max-w-2xl mb-12">
                <p className="text-xs sm:text-sm font-medium tracking-wider uppercase text-[#C58A91] mb-3">
                  {t.services.kicker}
                </p>
                <h2
                  className="font-display text-3xl sm:text-4xl font-semibold text-[#2D1820] mb-4"
                  style={{ textWrap: 'balance' }}
                >
                  {t.services.title}
                </h2>
                <p className="text-base text-[#2D1820]/75 leading-relaxed">
                  {t.services.subtitle}
                </p>
              </div>
            </SmoothReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.services.items.map((service, idx) => (
                <SmoothReveal key={service.id} delay={idx * 0.06}>
                  <article className="group h-full flex flex-col bg-white rounded-2xl overflow-hidden border border-[#E8D8C8] transition-transform duration-200 hover:-translate-y-1">
                    <div className="aspect-[4/3] w-full overflow-hidden bg-[#F8E5EA]/40">
                      <SalonImage
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between text-xs text-[#C58A91] font-medium mb-2">
                          <span className="tabular-nums">{service.number}</span>
                          <Scissors className="w-3.5 h-3.5" aria-hidden="true" />
                        </div>
                        <h3 className="font-display text-2xl font-semibold text-[#2D1820] mb-2">
                          {service.title}
                        </h3>
                        <p className="text-sm text-[#2D1820]/75 leading-relaxed mb-4">
                          {service.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-[#E8D8C8]/60 flex items-center justify-between gap-2">
                        <span className="text-xs font-medium text-[#702F45]">
                          {service.priceNote}
                        </span>
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-medium text-[#702F45] underline underline-offset-4 hover:text-[#5A2436] whitespace-nowrap shrink-0"
                        >
                          {t.nav.bookNow}
                        </a>
                      </div>
                    </div>
                  </article>
                </SmoothReveal>
              ))}
            </div>
          </div>
        </section>

        {/* E. OUR GALLERY */}
        <section id="gallery" className="py-16 sm:py-24 bg-white border-b border-[#E8D8C8]/60">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SmoothReveal>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                <div className="max-w-xl">
                  <p className="text-xs sm:text-sm font-medium tracking-wider uppercase text-[#C58A91] mb-3">
                    {t.gallery.kicker}
                  </p>
                  <h2
                    className="font-display text-3xl sm:text-4xl font-semibold text-[#2D1820] mb-3"
                    style={{ textWrap: 'balance' }}
                  >
                    {t.gallery.title}
                  </h2>
                  <p className="text-base text-[#2D1820]/75 leading-relaxed">
                    {t.gallery.subtitle}
                  </p>
                </div>

                {/* Interactive Filter Tabs */}
                <div
                  role="tablist"
                  aria-label={t.gallery.title}
                  className="flex flex-wrap items-center gap-1.5 p-1 bg-[#FFF9F5] border border-[#E8D8C8] rounded-xl self-start"
                >
                  {(
                    [
                      ['all', t.gallery.filters.all],
                      ['haircuts', t.gallery.filters.haircuts],
                      ['coloring', t.gallery.filters.coloring],
                      ['blowouts', t.gallery.filters.blowouts],
                      ['occasions', t.gallery.filters.occasions],
                    ] as const
                  ).map(([key, label]) => {
                    const active = galleryFilter === key;
                    return (
                      <button
                        key={key}
                        type="button"
                        role="tab"
                        aria-selected={active}
                        onClick={() => setGalleryFilter(key)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                          active
                            ? 'bg-[#702F45] text-white'
                            : 'text-[#2D1820]/75 hover:text-[#702F45]'
                        }`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </SmoothReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGallery.map((item, idx) => (
                <SmoothReveal key={item.id} delay={idx * 0.05}>
                  <button
                    type="button"
                    onClick={() => setSelectedImage(item)}
                    className="group relative w-full text-start rounded-2xl overflow-hidden border border-[#E8D8C8] bg-[#FFF9F5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#702F45] cursor-pointer"
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <SalonImage
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4 bg-white border-t border-[#E8D8C8]/60">
                      <p className="text-xs text-[#C58A91] font-medium mb-0.5">
                        {item.categoryLabel}
                      </p>
                      <h3 className="font-display text-lg font-semibold text-[#2D1820]">
                        {item.title}
                      </h3>
                    </div>
                  </button>
                </SmoothReveal>
              ))}
            </div>
          </div>
        </section>

        {/* F. WHY CHOOSE US? */}
        <section className="py-16 sm:py-24 bg-[#F8E5EA]/45 border-b border-[#E8D8C8]/60">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SmoothReveal>
              <div className="max-w-2xl mb-12">
                <p className="text-xs sm:text-sm font-medium tracking-wider uppercase text-[#702F45] mb-3">
                  {t.whyChoose.kicker}
                </p>
                <h2
                  className="font-display text-3xl sm:text-4xl font-semibold text-[#2D1820] mb-4"
                  style={{ textWrap: 'balance' }}
                >
                  {t.whyChoose.title}
                </h2>
                <p className="text-base text-[#2D1820]/75 leading-relaxed">
                  {t.whyChoose.subtitle}
                </p>
              </div>
            </SmoothReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.whyChoose.items.map((item, idx) => {
                const IconComponent = whyChooseIcons[idx % whyChooseIcons.length];
                return (
                  <SmoothReveal key={item.id} delay={idx * 0.05}>
                    <div className="h-full p-6 rounded-2xl bg-white border border-[#E8D8C8]">
                      <div className="w-10 h-10 rounded-xl bg-[#F8E5EA] text-[#702F45] flex items-center justify-center mb-4">
                        <IconComponent className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <h3 className="font-display text-xl font-semibold text-[#2D1820] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#2D1820]/75 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </SmoothReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* G. CUSTOMER REVIEWS */}
        <section id="reviews" className="py-16 sm:py-24 bg-white border-b border-[#E8D8C8]/60">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <SmoothReveal>
              <p className="text-xs sm:text-sm font-medium tracking-wider uppercase text-[#C58A91] mb-3">
                {t.reviews.kicker}
              </p>
              <h2
                className="font-display text-3xl sm:text-4xl font-semibold text-[#2D1820] mb-8"
                style={{ textWrap: 'balance' }}
              >
                {t.reviews.title}
              </h2>

              <div className="p-8 sm:p-12 rounded-3xl bg-[#FFF9F5] border border-[#E8D8C8] max-w-xl mx-auto">
                <div className="flex items-center justify-center gap-1.5 text-[#C58A91] mb-4" aria-hidden="true">
                  <Star className="w-6 h-6 fill-current" />
                  <Star className="w-6 h-6 fill-current" />
                  <Star className="w-6 h-6 fill-current" />
                  <Star className="w-6 h-6 fill-current" />
                  <Star className="w-6 h-6 fill-current opacity-50" />
                </div>

                <div className="font-display text-5xl sm:text-6xl font-semibold text-[#702F45] tabular-nums mb-2">
                  {t.reviews.ratingValue}
                  <span className="text-2xl sm:text-3xl text-[#2D1820]/60 font-normal">
                    {' '}
                    {t.reviews.outOf}
                  </span>
                </div>

                <p className="text-base sm:text-lg font-medium text-[#2D1820] tabular-nums mb-2">
                  {t.reviews.reviewCountText}
                </p>
                <p className="text-sm text-[#2D1820]/70 mb-8">{t.reviews.verifiedNote}</p>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#702F45] text-white text-sm font-medium hover:bg-[#5A2436] transition-colors duration-150 whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span>{t.reviews.ctaText}</span>
                </a>
              </div>
            </SmoothReveal>
          </div>
        </section>

        {/* H. INSTAGRAM SECTION */}
        <section className="py-16 sm:py-20 bg-[#702F45] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <SmoothReveal>
              <p className="text-xs sm:text-sm font-medium tracking-wider uppercase text-[#F8E5EA] mb-3">
                {t.instagram.kicker}
              </p>
              <h2
                className="font-display text-3xl sm:text-4xl font-semibold text-white mb-4"
                style={{ textWrap: 'balance' }}
              >
                {t.instagram.title}
              </h2>
              <p className="text-base sm:text-lg text-[#F8E5EA]/90 max-w-xl mx-auto mb-8 leading-relaxed">
                {t.instagram.description}
              </p>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-[#702F45] text-sm font-semibold hover:bg-[#F8E5EA] transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Instagram className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>{t.instagram.buttonText}</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-75" aria-hidden="true" />
              </a>
            </SmoothReveal>
          </div>
        </section>

        {/* PUBLISHED ARTICLES SECTION (When articles exist) */}
        {customData.articles && customData.articles.length > 0 && (
          <section id="articles" className="py-16 sm:py-24 bg-white border-b border-[#E8D8C8]/60">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <SmoothReveal>
                <div className="max-w-2xl mb-12">
                  <p className="text-xs sm:text-sm font-medium tracking-wider uppercase text-[#C58A91] mb-3">
                    Beauty Journal
                  </p>
                  <h2
                    className="font-display text-3xl sm:text-4xl font-semibold text-[#2D1820]"
                    style={{ textWrap: 'balance' }}
                  >
                    Salon Articles &amp; Tips
                  </h2>
                </div>
              </SmoothReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {customData.articles.map((article, idx) => (
                  <SmoothReveal key={article.id} delay={idx * 0.06}>
                    <article className="h-full flex flex-col bg-[#FFF9F5] rounded-2xl overflow-hidden border border-[#E8D8C8]">
                      <div className="aspect-[16/9] w-full overflow-hidden bg-[#F8E5EA]/40">
                        <SalonImage
                          src={article.coverImage}
                          alt={article.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <p className="text-xs text-[#C58A91] font-medium mb-2">
                          {article.date}
                        </p>
                        <h3 className="font-display text-2xl font-semibold text-[#2D1820] mb-3">
                          {article.title}
                        </h3>
                        <p className="text-sm sm:text-base text-[#2D1820]/80 leading-relaxed whitespace-pre-line">
                          {article.content}
                        </p>
                      </div>
                    </article>
                  </SmoothReveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* I. CONTACT AND LOCATION */}
        <section id="contact" className="py-16 sm:py-24 bg-[#FFF9F5]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SmoothReveal>
              <div className="max-w-2xl mb-12">
                <p className="text-xs sm:text-sm font-medium tracking-wider uppercase text-[#C58A91] mb-3">
                  {t.contact.kicker}
                </p>
                <h2
                  className="font-display text-3xl sm:text-4xl font-semibold text-[#2D1820] mb-4"
                  style={{ textWrap: 'balance' }}
                >
                  {t.contact.title}
                </h2>
                <p className="text-base text-[#2D1820]/75 leading-relaxed">
                  {t.contact.subtitle}
                </p>
              </div>
            </SmoothReveal>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Contact Details Card */}
              <div className="lg:col-span-6 bg-white rounded-2xl border border-[#E8D8C8] p-6 sm:p-8 flex flex-col justify-between">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-[#702F45]">
                      {t.contact.salonName}
                    </h3>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <MapPin
                      className="w-5 h-5 text-[#C58A91] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#2D1820]/60 mb-1">
                        {t.contact.addressLabel}
                      </p>
                      <p className="text-sm sm:text-base text-[#2D1820] leading-relaxed">
                        {customData.addressValue ?? t.contact.addressValue}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Phone
                      className="w-5 h-5 text-[#C58A91] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#2D1820]/60 mb-1">
                        {t.contact.phoneLabel}
                      </p>
                      <a
                        href={PHONE_URL}
                        dir="ltr"
                        className="text-sm sm:text-base font-medium text-[#702F45] hover:underline tabular-nums inline-block"
                      >
                        {customData.phoneValue ?? t.contact.phoneValue}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Clock
                      className="w-5 h-5 text-[#C58A91] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#2D1820]/60 mb-1">
                        {t.contact.hoursLabel}
                      </p>
                      <p className="text-sm sm:text-base text-[#2D1820] tabular-nums">
                        {customData.hoursOpen ?? t.contact.hoursOpen}
                      </p>
                      <p className="text-sm text-[#702F45] font-medium mt-0.5">
                        {t.contact.hoursClosed}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#E8D8C8] space-y-3">
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[200px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#702F45] text-white text-sm font-medium hover:bg-[#5A2436] transition-colors whitespace-nowrap"
                    >
                      <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>{t.contact.whatsappCta}</span>
                    </a>

                    <a
                      href={PHONE_URL}
                      className="flex-1 min-w-[180px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-[#C58A91] text-[#702F45] text-sm font-medium hover:bg-[#F8E5EA]/60 transition-colors whitespace-nowrap"
                    >
                      <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span dir="ltr" className="tabular-nums">
                        {t.contact.callCta}
                      </span>
                    </a>
                  </div>
                  <p className="text-xs text-[#2D1820]/65">{t.contact.bookingNote}</p>
                </div>
              </div>

              {/* Google Maps Location Card */}
              <div className="lg:col-span-6 bg-white rounded-2xl border border-[#E8D8C8] overflow-hidden flex flex-col justify-between min-h-[340px]">
                <div className="relative flex-1 min-h-[260px] bg-[#F8E5EA]/30">
                  <iframe
                    title="Beauty Queen Salon Safi Location"
                    src="https://www.google.com/maps?q=Av.+John+Kennedy,+Safi+46000,+Morocco&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full min-h-[260px] border-0"
                  />
                </div>
                <div className="p-4 sm:p-5 bg-white border-t border-[#E8D8C8] flex items-center justify-between gap-4">
                  <span className="text-xs sm:text-sm text-[#2D1820]/75 truncate">
                    Av. John Kennedy, Safi 46000
                  </span>
                  <a
                    href={GOOGLE_MAPS_DIRECTIONS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#702F45] hover:underline whitespace-nowrap shrink-0"
                  >
                    <span>{t.contact.directionsCta}</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* J. FOOTER */}
      <footer className="bg-[#2D1820] text-[#FFF9F5] py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-white/15">
            <div>
              <p className="font-display text-xl font-semibold tracking-wide text-white mb-3">
                {t.brandName}
              </p>
              <p className="text-sm text-[#FFF9F5]/75 leading-relaxed mb-4">
                {t.footer.tagline}
              </p>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex items-center gap-2 text-xs font-medium text-[#F8E5EA] hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" aria-hidden="true" />
                <span>Instagram</span>
              </a>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#C58A91] mb-4">
                {t.footer.quickLinksTitle}
              </h3>
              <ul className="space-y-2.5 text-sm text-[#FFF9F5]/80">
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    {t.nav.about}
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    {t.nav.services}
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="hover:text-white transition-colors">
                    {t.nav.gallery}
                  </a>
                </li>
                <li>
                  <a href="#reviews" className="hover:text-white transition-colors">
                    {t.nav.reviews}
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    {t.nav.contact}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#C58A91] mb-4">
                {t.footer.contactTitle}
              </h3>
              <ul className="space-y-2.5 text-sm text-[#FFF9F5]/80">
                <li>{t.contact.addressValue}</li>
                <li>
                  <a
                    href={PHONE_URL}
                    dir="ltr"
                    className="hover:text-white transition-colors tabular-nums inline-block"
                  >
                    {t.contact.phoneValue}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#C58A91] mb-4">
                {t.footer.hoursTitle}
              </h3>
              <ul className="space-y-2 text-sm text-[#FFF9F5]/80">
                <li className="tabular-nums">{t.contact.hoursOpen}</li>
                <li className="text-[#F8E5EA]">{t.contact.hoursClosed}</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFF9F5]/65">
            <p>{t.footer.copyright}</p>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setEditorOpen(true)}
                className="inline-flex items-center gap-1.5 text-[#F8E5EA] hover:text-white transition-colors cursor-pointer"
              >
                <Edit3 className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Edit Site &amp; Articles</span>
              </button>
              <span aria-hidden="true">·</span>
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {t.nav.bookNow}
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Gallery Lightbox Modal */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full bg-white rounded-2xl overflow-hidden border border-[#E8D8C8]"
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              aria-label={t.nav.menuClose}
              className="absolute top-3 end-3 z-10 w-10 h-10 rounded-full bg-white/90 text-[#2D1820] flex items-center justify-center hover:bg-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-[4/3] w-full bg-[#FFF9F5]">
              <SalonImage
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs text-[#C58A91] font-medium">
                  {selectedImage.categoryLabel}
                </p>
                <h3 className="font-display text-xl font-semibold text-[#2D1820]">
                  {selectedImage.title}
                </h3>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-[#702F45] text-white text-xs font-medium hover:bg-[#5A2436] transition-colors whitespace-nowrap shrink-0"
              >
                {t.nav.bookNow}
              </a>
            </div>
          </div>
        </div>
      )}
      {/* Site & Article Editor Drawer */}
      <SiteEditorModal
        isOpen={editorOpen}
        onClose={() => setEditorOpen(false)}
        customData={customData}
        onUpdateData={handleUpdateCustomData}
        onReset={handleResetCustomData}
        defaultGallery={t.gallery.items}
        defaultTexts={{
          heroHeadline: t.hero.headline,
          heroSubheadline: t.hero.subheadline,
          aboutTitle: t.about.title,
          aboutParagraph1: t.about.paragraph1,
          aboutParagraph2: t.about.paragraph2,
          addressValue: t.contact.addressValue,
          phoneValue: t.contact.phoneValue,
          hoursOpen: t.contact.hoursOpen,
          hoursClosed: t.contact.hoursClosed,
        }}
      />
    </div>
  );
}
