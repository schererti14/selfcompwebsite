import React, { useState, useEffect } from 'react';
import { SelfcompLogo } from './SelfcompLogo';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenDiagnostic: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDiagnostic }) => {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Produtos', href: '#produtos' },
    { label: 'Empresa', href: '#empresa' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#18191A]/95 dark:bg-[#18191A]/95 light:bg-white/95 backdrop-blur-md border-b border-[#35373B] dark:border-[#35373B] light:border-[#E5E7EB] py-3.5 shadow-sm'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="Selfcomp Início"
          >
            <SelfcompLogo variant="orange" size="md" />
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navegação Principal">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-[#D1D5DB] dark:text-[#D1D5DB] light:text-[#4B5563] hover:text-white dark:hover:text-white light:hover:text-[#18191A] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#E65616] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions (Theme Toggle + CTA) */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button (Sol-Lua) */}
            <button
              onClick={toggleTheme}
              type="button"
              className="p-2 rounded-lg text-[#8A8D93] dark:text-[#8A8D93] light:text-[#6B7280] hover:text-[#FFFFFF] dark:hover:text-white light:hover:text-[#18191A] hover:bg-[#222426] dark:hover:bg-[#222426] light:hover:bg-[#F3F4F6] border border-[#35373B] dark:border-[#35373B] light:border-[#E5E7EB] transition-colors"
              aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
              title={isDark ? 'Mudar para Modo Claro' : 'Mudar para Modo Escuro'}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-[#E65616]" />
              ) : (
                <Moon className="w-4 h-4 text-[#18191A]" />
              )}
            </button>

            {/* CTA Button */}
            <button
              onClick={onOpenDiagnostic}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#E65616] hover:bg-[#C4470F] rounded-md transition-all duration-150 shadow-sm active:scale-[0.98] whitespace-nowrap cursor-pointer"
            >
              <span>Agendar um diagnóstico</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="md:hidden p-2 rounded-lg text-[#D1D5DB] dark:text-[#D1D5DB] light:text-[#18191A] hover:bg-[#222426] dark:hover:bg-[#222426] light:hover:bg-[#F3F4F6] border border-[#35373B] dark:border-[#35373B] light:border-[#E5E7EB]"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#18191A] dark:bg-[#18191A] light:bg-white border-b border-[#35373B] dark:border-[#35373B] light:border-[#E5E7EB] px-4 pt-4 pb-6 mt-3 shadow-xl">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-medium text-[#D1D5DB] dark:text-[#D1D5DB] light:text-[#4B5563] hover:text-white dark:hover:text-white light:hover:text-[#18191A] py-2 px-3 rounded-md hover:bg-[#222426] dark:hover:bg-[#222426] light:hover:bg-[#F3F4F6] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#35373B] dark:border-[#35373B] light:border-[#E5E7EB]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDiagnostic();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#E65616] hover:bg-[#C4470F] rounded-md transition-all shadow-sm"
              >
                <span>Agendar um diagnóstico</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
