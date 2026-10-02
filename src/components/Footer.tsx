import React, { useState } from 'react';
import { SelfcompLogo } from './SelfcompLogo';
import { ArrowUp, X } from 'lucide-react';

interface FooterProps {
  onSelectService: (serviceName: string) => void;
  onSelectProduct: (productName: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectService, onSelectProduct }) => {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    'Sistemas Sob Demanda',
    'Automação de Processos',
    'Integrações de Sistemas',
    'Inteligência Artificial Aplicada',
    'Painéis & Inteligência de Dados',
    'Suporte e Evolução Contínua',
  ];

  const products = [
    'CRM + Marketing',
    'Chat IA',
  ];

  const institutionalLinks = [
    { label: 'Sobre a Empresa', href: '#empresa' },
    { label: 'Como Trabalhamos', href: '#metodologia' },
    { label: 'Fale Conosco', href: '#contato' },
    { label: 'Política de Privacidade', action: () => setPrivacyModalOpen(true) },
  ];

  return (
    <footer className="bg-[#111213] text-[#8A8D93] border-t border-[#35373B] pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Column 1: Brand & Slogan */}
          <div className="lg:col-span-5">
            <div className="mb-4">
              <SelfcompLogo variant="orange" size="md" />
            </div>
            <p className="text-sm italic font-medium text-white mb-2">
              Tecnologia que gera resultados.
            </p>
            <p className="text-xs text-[#8A8D93] leading-relaxed max-w-sm mb-6">
              Software sob medida, Inteligência Artificial e automação para operações de alta eficiência. Desenhamos soluções pragmáticas para empresas que buscam retorno tangível.
            </p>
            <div className="text-[11px] text-[#6B7280]">
              Base: Porto Alegre — RS, Brasil · Atendimento global
            </div>
          </div>

          {/* Column 2: Soluções & Serviços */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              Soluções & Serviços
            </h4>
            <ul className="space-y-2 text-xs">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => {
                      const target = document.querySelector('#servicos');
                      if (target) target.scrollIntoView({ behavior: 'smooth' });
                      onSelectService(service);
                    }}
                    className="hover:text-[#E65616] text-left transition-colors cursor-pointer"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Produtos */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              Produtos SaaS
            </h4>
            <ul className="space-y-2 text-xs">
              {products.map((product) => (
                <li key={product}>
                  <button
                    onClick={() => {
                      const target = document.querySelector('#produtos');
                      if (target) target.scrollIntoView({ behavior: 'smooth' });
                      onSelectProduct(product);
                    }}
                    className="hover:text-[#E65616] text-left transition-colors cursor-pointer"
                  >
                    {product}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Institucional */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              Institucional
            </h4>
            <ul className="space-y-2 text-xs">
              {institutionalLinks.map((link) => (
                <li key={link.label}>
                  {link.action ? (
                    <button
                      onClick={link.action}
                      className="hover:text-[#E65616] transition-colors cursor-pointer"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="hover:text-[#E65616] transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 border-t border-[#222426] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © Self Tecnologia. Todos os direitos reservados.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-[#8A8D93] hover:text-white transition-colors cursor-pointer"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#E65616]" />
          </button>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {privacyModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-[#18191A] border border-[#35373B] rounded-lg max-w-lg w-full p-6 text-white text-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#35373B]">
              <h3 className="font-bold text-sm">Política de Privacidade & Sigilo</h3>
              <button
                onClick={() => setPrivacyModalOpen(false)}
                className="p-1 text-[#8A8D93] hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[#D1D5DB] leading-relaxed">
              A Self Tecnologia (Selfcomp) preza pelo sigilo corporativo absoluto de todos os clientes e parceiros. Dados de processos, credenciais de APIs e informações comerciais mapeadas durante diagnósticos ou contratos ativos são protegidos por cláusulas rigorosas de confidencialidade (NDA) e nunca são comercializados ou expostos.
            </p>
            <p className="text-[#8A8D93] leading-relaxed">
              Em conformidade com a LGPD (Lei Geral de Proteção de Dados Pessoais - Lei nº 13.709/2018), os dados fornecidos em nossos formulários são usados exclusivamente para contato comercial legítimo e agendamento de reuniões técnicas.
            </p>
            <div className="pt-3 border-t border-[#35373B] text-right">
              <button
                onClick={() => setPrivacyModalOpen(false)}
                className="px-4 py-2 bg-[#222426] hover:bg-[#2C2E31] text-white rounded text-xs"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
