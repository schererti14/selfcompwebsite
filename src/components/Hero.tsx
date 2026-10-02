import React, { useState } from 'react';
import { ArrowRight, ArrowDown, CheckCircle2, Cpu, Database, MessageSquare, Layers, ShieldCheck, Zap } from 'lucide-react';

interface HeroProps {
  onOpenDiagnostic: () => void;
  onExploreSolutions: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDiagnostic, onExploreSolutions }) => {
  const [activePipeline, setActivePipeline] = useState<'sales' | 'finance' | 'portal'>('sales');

  const pipelineModes = [
    { id: 'sales', label: 'Comercial & WhatsApp' },
    { id: 'finance', label: 'Automação Financeira & ERP' },
    { id: 'portal', label: 'Sistema Sob Medida & BI' },
  ] as const;

  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #888 1px, transparent 1px), linear-gradient(to bottom, #888 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-none bg-[#E65616]" />
              <span className="text-xs font-bold tracking-widest text-[#E65616] uppercase font-mono">
                TECNOLOGIA QUE GERA RESULTADOS
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#18191A] dark:text-white tracking-tight leading-[1.15] mb-6 text-balance">
              Software sob medida, IA e automação para empresas que buscam alta eficiência.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#4B5563] dark:text-[#D1D5DB] leading-relaxed mb-8 max-w-2xl">
              Elimine gargalos manuais, conecte ferramentas isoladas e construa sistemas perfeitamente alinhados ao seu modelo de negócio.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenDiagnostic}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[#E65616] hover:bg-[#C4470F] rounded-md transition-all duration-150 shadow-sm active:scale-[0.98] cursor-pointer"
              >
                <span>Agendar um diagnóstico</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreSolutions}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-wide text-[#18191A] dark:text-[#D1D5DB] hover:text-[#E65616] dark:hover:text-white bg-transparent hover:bg-[#F3F4F6] dark:hover:bg-[#222426] border border-[#E5E7EB] dark:border-[#35373B] rounded-md transition-all duration-150 cursor-pointer"
              >
                <span>Conhecer as nossas soluções</span>
                <ArrowDown className="w-4 h-4 text-[#E65616]" />
              </button>
            </div>

            {/* Highlights / Value Props (Clean typography, no pill boxes) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 pt-6 border-t border-[#E5E7EB] dark:border-[#35373B] w-full">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#4B5563] dark:text-[#D1D5DB]">
                <CheckCircle2 className="w-4 h-4 text-[#E65616] shrink-0" />
                <span>Software desenhado para a sua operação</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#4B5563] dark:text-[#D1D5DB]">
                <CheckCircle2 className="w-4 h-4 text-[#E65616] shrink-0" />
                <span>Processos 100% automatizados</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#4B5563] dark:text-[#D1D5DB]">
                <CheckCircle2 className="w-4 h-4 text-[#E65616] shrink-0" />
                <span>Sistemas e dados integrados</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#4B5563] dark:text-[#D1D5DB]">
                <CheckCircle2 className="w-4 h-4 text-[#E65616] shrink-0" />
                <span>Decisões ágeis com IA</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Architecture Blueprint */}
          <div className="lg:col-span-5">
            <div className="bg-[#F9FAFB] dark:bg-[#222426] border border-[#E5E7EB] dark:border-[#35373B] rounded-lg p-5 sm:p-6 shadow-sm transition-colors">
              {/* Header with mode tabs */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E5E7EB] dark:border-[#35373B] mb-5">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#6B7280] dark:text-[#8A8D93] block">
                    ARQUITETURA OPERACIONAL
                  </span>
                  <span className="text-sm font-semibold text-[#18191A] dark:text-white">
                    Integração em Ação
                  </span>
                </div>
                <span className="text-xs font-mono text-[#E65616] font-semibold bg-[#E65616]/10 px-2 py-0.5 rounded">
                  Tempo Real
                </span>
              </div>

              {/* Flow Selector */}
              <div className="flex items-center gap-1.5 p-1 bg-[#F3F4F6] dark:bg-[#18191A] rounded-md mb-6">
                {pipelineModes.map((mode) => (
                  <button
                    key={mode.id}
                    onClick={() => setActivePipeline(mode.id)}
                    className={`flex-1 py-1.5 px-2 text-[11px] font-medium rounded transition-all truncate cursor-pointer ${
                      activePipeline === mode.id
                        ? 'bg-white dark:bg-[#2C2E31] text-[#18191A] dark:text-white shadow-xs font-semibold'
                        : 'text-[#6B7280] dark:text-[#8A8D93] hover:text-[#18191A] dark:hover:text-white'
                    }`}
                  >
                    {mode.label}
                  </button>
                ))}
              </div>

              {/* Dynamic Pipeline Nodes Visual */}
              <div className="space-y-3.5">
                {/* Stage 1: Input source */}
                <div className="p-3.5 bg-white dark:bg-[#18191A] border border-[#E5E7EB] dark:border-[#35373B] rounded-md flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-[#E65616]/10 flex items-center justify-center text-[#E65616]">
                      {activePipeline === 'sales' ? (
                        <MessageSquare className="w-4 h-4" />
                      ) : activePipeline === 'finance' ? (
                        <Database className="w-4 h-4" />
                      ) : (
                        <Layers className="w-4 h-4" />
                      )}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#18191A] dark:text-white">
                        {activePipeline === 'sales' && 'Canais de Entrada: WhatsApp & Web'}
                        {activePipeline === 'finance' && 'Origem: NFe, Faturas & Extratos'}
                        {activePipeline === 'portal' && 'Regras de Negócio & ERP Legado'}
                      </div>
                      <div className="text-[11px] text-[#6B7280] dark:text-[#8A8D93]">
                        {activePipeline === 'sales' && 'Captação contínua 24/7 sem fila de espera'}
                        {activePipeline === 'finance' && 'Monitoramento de caixa postal e ERP bancário'}
                        {activePipeline === 'portal' && 'Mapeamento de permissões e fluxos operacionais'}
                      </div>
                    </div>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                {/* Connecting arrow indicator */}
                <div className="flex justify-center -my-1">
                  <div className="w-[1px] h-4 bg-[#E65616]/60" />
                </div>

                {/* Stage 2: Selfcomp Processing Engine */}
                <div className="p-3.5 bg-white dark:bg-[#18191A] border-2 border-[#E65616]/40 dark:border-[#E65616]/40 rounded-md flex items-center justify-between relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#E65616]" />
                  <div className="flex items-center gap-3 pl-1">
                    <div className="w-8 h-8 rounded bg-[#E65616] text-white flex items-center justify-center">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#18191A] dark:text-white flex items-center gap-2">
                        <span>Selfcomp Motor IA & Automação</span>
                      </div>
                      <div className="text-[11px] text-[#6B7280] dark:text-[#8A8D93]">
                        {activePipeline === 'sales' && 'Qualificação cognitiva, extração de intenção e scoring'}
                        {activePipeline === 'finance' && 'Leitura OCR inteligente, conferência e conciliação'}
                        {activePipeline === 'portal' && 'Arquitetura resiliente sob medida com validações nativas'}
                      </div>
                    </div>
                  </div>
                  <Zap className="w-4 h-4 text-[#E65616] shrink-0" />
                </div>

                {/* Connecting arrow indicator */}
                <div className="flex justify-center -my-1">
                  <div className="w-[1px] h-4 bg-[#E65616]/60" />
                </div>

                {/* Stage 3: Operational Result */}
                <div className="p-3.5 bg-white dark:bg-[#18191A] border border-[#E5E7EB] dark:border-[#35373B] rounded-md flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#18191A] dark:text-white">
                        {activePipeline === 'sales' && 'Resultado: Lead Qualificado no CRM'}
                        {activePipeline === 'finance' && 'Resultado: 100% Conciliado Sem Retrabalho'}
                        {activePipeline === 'portal' && 'Resultado: Visão Executiva em Tempo Real'}
                      </div>
                      <div className="text-[11px] text-[#6B7280] dark:text-[#8A8D93]">
                        {activePipeline === 'sales' && 'Reunião agendada na agenda do vendedor com contexto'}
                        {activePipeline === 'finance' && 'Zero intervenção manual e auditoria fiscal completa'}
                        {activePipeline === 'portal' && 'Decisões rápidas sem planilhas paralelas'}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-500">
                    OK
                  </span>
                </div>
              </div>

              {/* Bottom live stats */}
              <div className="mt-5 pt-4 border-t border-[#E5E7EB] dark:border-[#35373B] grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="text-sm font-bold font-mono tabular-nums text-[#18191A] dark:text-white">
                    0.2s
                  </div>
                  <div className="text-[10px] text-[#6B7280] dark:text-[#8A8D93] uppercase font-mono">
                    Latência Média
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold font-mono tabular-nums text-[#E65616]">
                    100%
                  </div>
                  <div className="text-[10px] text-[#6B7280] dark:text-[#8A8D93] uppercase font-mono">
                    Precisão
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold font-mono tabular-nums text-[#18191A] dark:text-white">
                    24/7
                  </div>
                  <div className="text-[10px] text-[#6B7280] dark:text-[#8A8D93] uppercase font-mono">
                    Disponibilidade
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
