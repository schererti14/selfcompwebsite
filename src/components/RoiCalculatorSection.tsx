import React, { useState } from 'react';
import { ArrowRight, Calculator, TrendingUp, Clock, DollarSign } from 'lucide-react';

interface RoiCalculatorSectionProps {
  onOpenDiagnostic: () => void;
}

export const RoiCalculatorSection: React.FC<RoiCalculatorSectionProps> = ({ onOpenDiagnostic }) => {
  const [teamSize, setTeamSize] = useState<number>(6);
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(10);
  const [hourlyRate, setHourlyRate] = useState<number>(45);

  // Math: 48 working weeks per year
  const totalManualHoursYear = teamSize * hoursPerWeek * 48;
  // Conservative estimate: 75% of manual repetitive tasks eliminated by Selfcomp automations/IA
  const hoursSavedYear = Math.round(totalManualHoursYear * 0.75);
  const annualSavings = hoursSavedYear * hourlyRate;

  return (
    <section className="py-20 md:py-24 border-t border-[#E5E7EB] dark:border-[#35373B] relative bg-[#F9FAFB]/50 dark:bg-[#18191A]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Context */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-[#E65616]" />
              <span className="text-xs font-bold tracking-widest text-[#E65616] uppercase font-mono">
                SIMULADOR DE RETORNO TANGÍVEL
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#18191A] dark:text-white tracking-tight mb-4">
              A tecnologia deve simplificar o trabalho e gerar retorno financeiro real.
            </h2>
            <p className="text-sm sm:text-base text-[#4B5563] dark:text-[#D1D5DB] leading-relaxed mb-6">
              Tarefas manuais e retrabalho silencioso custam caro para a folha de pagamento e travam o crescimento da sua empresa. Simule abaixo o potencial de economia gerado com a automação e software sob medida da Selfcomp.
            </p>

            <div className="space-y-3 pt-4 border-t border-[#E5E7EB] dark:border-[#35373B]">
              <div className="flex items-center gap-2 text-xs font-medium text-[#4B5563] dark:text-[#D1D5DB]">
                <span className="text-[#E65616] font-bold font-mono">✓</span>
                <span>Substituição de digitação duplicada por integrações automáticas</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-[#4B5563] dark:text-[#D1D5DB]">
                <span className="text-[#E65616] font-bold font-mono">✓</span>
                <span>Eliminação de conciliações em planilhas desconectadas</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-[#4B5563] dark:text-[#D1D5DB]">
                <span className="text-[#E65616] font-bold font-mono">✓</span>
                <span>Equipe focada em estratégia, vendas e relacionamento com clientes</span>
              </div>
            </div>
          </div>

          {/* Right Column: Calculator Box */}
          <div className="lg:col-span-6 bg-white dark:bg-[#222426] border border-[#E5E7EB] dark:border-[#35373B] rounded-lg p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-[#E5E7EB] dark:border-[#35373B] mb-6">
              <span className="text-xs font-mono uppercase tracking-wider text-[#6B7280] dark:text-[#8A8D93] font-bold flex items-center gap-2">
                <Calculator className="w-4 h-4 text-[#E65616]" />
                <span>Simulação de Eficiência Operacional</span>
              </span>
              <span className="text-xs font-mono text-[#E65616] font-semibold">
                Estimativa Conservadora
              </span>
            </div>

            {/* Slider 1: Team Size */}
            <div className="mb-5">
              <div className="flex justify-between items-center text-xs mb-2">
                <span className="font-semibold text-[#18191A] dark:text-white">
                  Colaboradores envolvidos em tarefas manuais
                </span>
                <span className="font-mono font-bold text-[#E65616] text-sm tabular-nums">
                  {teamSize} pessoas
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full h-1.5 bg-[#E5E7EB] dark:bg-[#35373B] rounded-lg appearance-none cursor-pointer accent-[#E65616]"
              />
            </div>

            {/* Slider 2: Hours Per Week */}
            <div className="mb-5">
              <div className="flex justify-between items-center text-xs mb-2">
                <span className="font-semibold text-[#18191A] dark:text-white">
                  Horas perdidas em rotinas manuais / semana (por pessoa)
                </span>
                <span className="font-mono font-bold text-[#E65616] text-sm tabular-nums">
                  {hoursPerWeek}h / semana
                </span>
              </div>
              <input
                type="range"
                min="2"
                max="30"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                className="w-full h-1.5 bg-[#E5E7EB] dark:bg-[#35373B] rounded-lg appearance-none cursor-pointer accent-[#E65616]"
              />
            </div>

            {/* Slider 3: Hourly Cost */}
            <div className="mb-6">
              <div className="flex justify-between items-center text-xs mb-2">
                <span className="font-semibold text-[#18191A] dark:text-white">
                  Custo médio estimado por hora (salário + encargos)
                </span>
                <span className="font-mono font-bold text-[#E65616] text-sm tabular-nums">
                  R$ {hourlyRate},00 / h
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="150"
                step="5"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="w-full h-1.5 bg-[#E5E7EB] dark:bg-[#35373B] rounded-lg appearance-none cursor-pointer accent-[#E65616]"
              />
            </div>

            {/* Computed Results */}
            <div className="grid grid-cols-2 gap-4 p-4 bg-[#F9FAFB] dark:bg-[#18191A] border border-[#E5E7EB] dark:border-[#35373B] rounded-md mb-6">
              <div>
                <div className="text-[11px] font-mono uppercase text-[#6B7280] dark:text-[#8A8D93] mb-1">
                  Horas Recuperadas / Ano
                </div>
                <div className="text-xl sm:text-2xl font-extrabold font-mono text-[#18191A] dark:text-white tabular-nums flex items-baseline gap-1">
                  <span>{hoursSavedYear.toLocaleString('pt-BR')}</span>
                  <span className="text-xs font-normal text-[#6B7280] dark:text-[#8A8D93]">h</span>
                </div>
              </div>

              <div>
                <div className="text-[11px] font-mono uppercase text-[#6B7280] dark:text-[#8A8D93] mb-1">
                  Economia Anual Estimada
                </div>
                <div className="text-xl sm:text-2xl font-extrabold font-mono text-[#E65616] tabular-nums">
                  R$ {annualSavings.toLocaleString('pt-BR')}
                </div>
              </div>
            </div>

            <button
              onClick={onOpenDiagnostic}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#E65616] hover:bg-[#C4470F] rounded-md transition-all shadow-sm cursor-pointer"
            >
              <span>Quero validar essa economia no meu diagnóstico</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
