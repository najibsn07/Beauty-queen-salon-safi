import { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import {
  LANGUAGES,
  LanguageCode,
  TranslationContent,
  getWhatsAppUrl,
} from '../translations';

interface NavbarProps {
  lang: LanguageCode;
  onSelectLang: (lang: LanguageCode) => void;
  t: TranslationContent;
}

export function Navbar({ lang, onSelectLang, t }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const whatsappUrl = getWhatsAppUrl(lang);

  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#gallery', label: t.nav.gallery },
    { href: '#reviews', label: t.nav.reviews },
    { href: '#contact', label: t.nav.contact },
  ];

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFF9F5]/95 backdrop-blur-md border-b border-[#E8D8C8]/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4 lg:gap-8">
        {/* Zone 1: Single-element Brand Wordmark */}
        <a
          href="#"
          className="font-display text-lg sm:text-xl font-semibold tracking-wide text-[#702F45] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#702F45]"
        >
          {t.brandName}
        </a>

        {/* Zone 2: 5 Single-Line Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-6 text-sm font-medium text-[#2D1820]/80"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#702F45] transition-colors duration-150 whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#C58A91] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#702F45]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Language Selector + Primary CTA */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <div className="relative flex items-center">
            <Globe
              className="w-4 h-4 text-[#702F45] pointer-events-none shrink-0 me-1.5"
              aria-hidden="true"
            />
            <label htmlFor="desktop-lang-select" className="sr-only">
              {t.nav.languageLabel}
            </label>
            <select
              id="desktop-lang-select"
              value={lang}
              onChange={(e) => onSelectLang(e.target.value as LanguageCode)}
              aria-label={t.nav.languageLabel}
              className="bg-transparent text-xs font-medium text-[#2D1820] py-1.5 pe-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#702F45] rounded-md"
            >
              {LANGUAGES.map((item) => (
                <option key={item.code} value={item.code} className="bg-[#FFF9F5] text-[#2D1820]">
                  {item.nativeName}
                </option>
              ))}
            </select>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-[#702F45] text-white text-xs font-medium hover:bg-[#5A2436] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#702F45]"
          >
            {t.nav.bookNow}
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-2 shrink-0">
          <label htmlFor="mobile-lang-select" className="sr-only">
            {t.nav.languageLabel}
          </label>
          <select
            id="mobile-lang-select"
            value={lang}
            onChange={(e) => onSelectLang(e.target.value as LanguageCode)}
            aria-label={t.nav.languageLabel}
            className="bg-[#F8E5EA]/60 text-xs font-medium text-[#702F45] px-2.5 py-1.5 rounded-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#702F45]"
          >
            {LANGUAGES.map((item) => (
              <option key={item.code} value={item.code} className="bg-[#FFF9F5] text-[#2D1820]">
                {item.nativeName}
              </option>
            ))}
          </select>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? t.nav.menuClose : t.nav.menuOpen}
            className="p-2 rounded-lg text-[#702F45] hover:bg-[#F8E5EA]/60 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:outline-2 focus-visible:outline-[#702F45]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#FFF9F5] border-b border-[#E8D8C8] px-4 py-5 space-y-4">
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="text-base font-medium text-[#2D1820] hover:text-[#702F45] py-2 border-b border-[#E8D8C8]/40"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="block w-full text-center px-5 py-3 rounded-full bg-[#702F45] text-white text-sm font-medium hover:bg-[#5A2436] transition-colors"
            >
              {t.nav.bookNow}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
