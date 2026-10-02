/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { HowWeWorkSection } from './components/HowWeWorkSection';
import { ProductsSection } from './components/ProductsSection';
import { RoiCalculatorSection } from './components/RoiCalculatorSection';
import { CompanySection } from './components/CompanySection';
import { ContactSection } from './components/ContactSection';
import { DiagnosticModal } from './components/DiagnosticModal';
import { Footer } from './components/Footer';

export default function App() {
  const [diagnosticModalOpen, setDiagnosticModalOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string>('Automação de Processos');

  const handleOpenDiagnostic = (topic?: string) => {
    if (topic) {
      setSelectedTopic(topic);
    }
    setDiagnosticModalOpen(true);
  };

  const handleExploreSolutions = () => {
    const el = document.querySelector('#servicos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#18191A] text-[#18191A] dark:text-[#D1D5DB] transition-colors duration-200 selection:bg-[#E65616] selection:text-white">
        {/* Navigation Bar with Sol-Lua toggle */}
        <Navbar onOpenDiagnostic={() => handleOpenDiagnostic()} />

        {/* Main Content Area */}
        <main>
          {/* Section 04: Hero */}
          <Hero
            onOpenDiagnostic={() => handleOpenDiagnostic()}
            onExploreSolutions={handleExploreSolutions}
          />

          {/* Section 05: Serviços (Grid 3x2) */}
          <ServicesSection
            onSelectServiceForDiagnostic={(serviceTitle) =>
              handleOpenDiagnostic(`Serviço: ${serviceTitle}`)
            }
          />

          {/* Section 06: Como Trabalhamos (#1 a #5) */}
          <HowWeWorkSection
            onOpenDiagnostic={() => handleOpenDiagnostic('Diagnóstico Técnico #1')}
          />

          {/* Section 07: Produtos (SaaS / Soluções Prontas) */}
          <ProductsSection
            onOpenDiagnosticWithTopic={(productName) =>
              handleOpenDiagnostic(`Produto: ${productName}`)
            }
          />

          {/* Interactive Value-Add: ROI & Operational Efficiency Calculator */}
          <RoiCalculatorSection
            onOpenDiagnostic={() => handleOpenDiagnostic('Validação de ROI Operacional')}
          />

          {/* Section 08: Empresa */}
          <CompanySection />

          {/* Section 09: CTA Final + Contato */}
          <ContactSection prefilledTopic={selectedTopic} />
        </main>

        {/* Section 10: Footer */}
        <Footer
          onSelectService={(serviceName) => handleOpenDiagnostic(`Serviço: ${serviceName}`)}
          onSelectProduct={(productName) => handleOpenDiagnostic(`Produto: ${productName}`)}
        />

        {/* Global Diagnostic Scheduler Modal */}
        <DiagnosticModal
          isOpen={diagnosticModalOpen}
          onClose={() => setDiagnosticModalOpen(false)}
          initialTopic={selectedTopic}
        />
      </div>
    </ThemeProvider>
  );
}
