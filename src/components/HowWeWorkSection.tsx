import React from 'react';

interface HowWeWorkSectionProps {
  onOpenDiagnostic?: () => void;
}

export const HowWeWorkSection: React.FC<HowWeWorkSectionProps> = () => {
  const steps = [
    {
      number: '#1',
      title: 'Diagnóstico',
      summary: 'Mapeamos o seu modelo de negócio, identificando gargalos, processos manuais e pontos de perda.',
    },
    {
      number: '#2',
      title: 'Estratégia Técnica',
      summary: 'Definimos o formato ideal da solução: automação, integração, produto pronto ou software sob medida.',
    },
    {
      number: '#3',
      title: 'Engenharia & Desenvolvimento',
      summary: 'Desenvolvemos com foco em escalabilidade, arquitetura limpa, segurança e desempenho.',
    },
    {
      number: '#4',
      title: 'Implementação & Formação',
      summary: 'Colocamos em produção, validamos fluxos em ambiente real e capacitamos a sua equipe.',
    },
    {
      number: '#5',
      title: 'Evolução & Sustentação',
      summary: 'Acompanhamos métricas de eficiência e implementamos novas capacidades conforme as exigências do mercado.',
    },
  ];

  return (
    <section id="metodologia" className="py-20 md:py-28 border-t border-[#E5E7EB] dark:border-[#35373B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-[#E65616]" />
            <span className="text-xs font-bold tracking-widest text-[#E65616] uppercase font-mono">
              COMO TRABALHAMOS
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#18191A] dark:text-white tracking-tight mb-4">
            Simples para você. Robusto nos bastidores.
          </h2>
          <p className="text-base text-[#4B5563] dark:text-[#D1D5DB] leading-relaxed">
            Uma abordagem disciplinada em 5 etapas para transformar gargalos em processos ágeis, com segurança técnica e garantia de retorno.
          </p>
        </div>

        {/* 5-Step Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-[#F9FAFB] dark:bg-[#222426] border border-[#E5E7EB] dark:border-[#35373B] rounded-lg p-5 sm:p-6 flex flex-col justify-between hover:border-[#E65616]/60 dark:hover:border-[#E65616]/60 transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-mono font-bold text-[#E65616]">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-[#18191A] dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-[#4B5563] dark:text-[#D1D5DB] leading-relaxed">
                  {step.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
