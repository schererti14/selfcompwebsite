import React from 'react';
import { ShieldCheck, Clock, RefreshCw, TrendingUp } from 'lucide-react';
import { MetricItem } from '../types';

export const CompanySection: React.FC = () => {
  const metrics: MetricItem[] = [
    {
      value: '20+',
      label: 'Anos de experiência sólida',
      subtext: 'Em engenharia de software, automação e arquitetura de sistemas corporativos.',
    },
    {
      value: '100%',
      label: 'Soluções sob medida',
      subtext: 'Adaptadas aos fluxos, regras e particularidades exclusivas de cada cliente.',
    },
    {
      value: 'Zero Retrabalho',
      label: 'Eliminação consistente',
      subtext: 'De tarefas mecânicas, conciliações duplicadas e digitação manual.',
    },
    {
      value: 'Foco em ROI',
      label: 'Retorno financeiro real',
      subtext: 'Tecnologia desenhada para redução mensurável de custos e ganho de escala.',
    },
  ];

  return (
    <section id="empresa" className="py-20 md:py-28 border-t border-[#E5E7EB] dark:border-[#35373B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Content */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-[#E65616]" />
              <span className="text-xs font-bold tracking-widest text-[#E65616] uppercase font-mono">
                SOBRE A SELFCOMP
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#18191A] dark:text-white tracking-tight mb-6">
              Solidez técnica e visão prática de negócios.
            </h2>

            <div className="space-y-4 text-base text-[#4B5563] dark:text-[#D1D5DB] leading-relaxed">
              <p>
                Ao longo de mais de duas décadas, acompanhamos a constante evolução da tecnologia corporativa. Não desenvolvemos sistemas complexos por capricho técnico; desenhamos soluções pragmáticas para resolver desafios concretos de escala, eficiência e gestão operacional.
              </p>
              <p>
                Aliamos boas práticas de engenharia de software e automação inteligente a uma orientação rigorosa para o retorno financeiro, permitindo que a liderança da sua empresa mantenha o foco na geração de receita.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E5E7EB] dark:border-[#35373B] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#6B7280] dark:text-[#8A8D93]">
              <div>
                <span className="font-semibold text-[#18191A] dark:text-white block">
                  Sede e Origem
                </span>
                <span>Porto Alegre — RS, Brasil</span>
              </div>
              <div>
                <span className="font-semibold text-[#18191A] dark:text-white block">
                  Alcance
                </span>
                <span>Atendimento nacional e internacional</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Authority & Metric Blocks */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {metrics.map((metric, idx) => (
              <div
                key={idx}
                className="bg-[#F9FAFB] dark:bg-[#222426] border border-[#E5E7EB] dark:border-[#35373B] rounded-lg p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[#E65616] tracking-tight mb-2 tabular-nums">
                    {metric.value}
                  </div>
                  <h3 className="text-sm font-bold text-[#18191A] dark:text-white mb-2">
                    {metric.label}
                  </h3>
                  <p className="text-xs text-[#4B5563] dark:text-[#D1D5DB] leading-relaxed">
                    {metric.subtext}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
