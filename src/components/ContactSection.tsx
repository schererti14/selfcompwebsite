import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, MapPin, Mail, Phone, Calendar, Send } from 'lucide-react';
import { DiagnosticFormData } from '../types';

interface ContactSectionProps {
  prefilledTopic?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledTopic }) => {
  const [formData, setFormData] = useState<DiagnosticFormData>({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    primaryChallenge: prefilledTopic || 'Automação de Processos',
    teamSize: '5 a 20 colaboradores',
    currentBottleneck: '',
    preferredContact: 'whatsapp',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const challenges = [
    'Automação de Processos Manuais',
    'Desenvolvimento de Software Sob Medida',
    'Integração de ERPs e Sistemas (WhatsApp, APIs)',
    'Inteligência Artificial & Atendimento 24/7',
    'Painéis & Dashboards Executivos de Dados',
    'CRM + Marketing & Gestão de Leads',
    'Outro Desafio Operacional',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate instantaneous business intake
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contato" className="py-20 md:py-28 border-t border-[#E5E7EB] dark:border-[#35373B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context & Details */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-[#E65616]" />
              <span className="text-xs font-bold tracking-widest text-[#E65616] uppercase font-mono">
                DIAGNÓSTICO TÉCNICO ESTRATÉGICO
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#18191A] dark:text-white tracking-tight mb-4 text-balance">
              Onde sua empresa pode faturar mais e perder menos tempo?
            </h2>

            <p className="text-sm sm:text-base text-[#4B5563] dark:text-[#D1D5DB] leading-relaxed mb-8">
              Agende uma sessão técnica de diagnóstico sem compromisso para mapear processos e identificar onde a automação, a IA ou um sistema sob medida trarão retorno imediato.
            </p>

            {/* Frentes de atuação (Unboxed list per zero-pill discipline) */}
            <div className="mb-8 pt-6 border-t border-[#E5E7EB] dark:border-[#35373B]">
              <span className="text-xs font-mono uppercase tracking-wider text-[#6B7280] dark:text-[#8A8D93] font-bold block mb-3">
                Frentes de Atuação
              </span>
              <div className="text-xs sm:text-sm text-[#18191A] dark:text-white font-medium leading-relaxed">
                Software Sob Medida · Inteligência Artificial · Automação de Processos · Integrações de Sistemas · Produtos SaaS
              </div>
            </div>

            {/* Base & Direct Contact info */}
            <div className="space-y-3 pt-6 border-t border-[#E5E7EB] dark:border-[#35373B] text-xs text-[#4B5563] dark:text-[#D1D5DB]">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#E65616] shrink-0" />
                <span>
                  <strong>Porto Alegre — RS, Brasil</strong> | Atendimento nacional e internacional
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#E65616] shrink-0" />
                <span>contato@selfcomp.com.br</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#E65616] shrink-0" />
                <span>+55 (51) 99882-1400</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Diagnostic Form */}
          <div className="lg:col-span-7 bg-[#F9FAFB] dark:bg-[#222426] border border-[#E5E7EB] dark:border-[#35373B] rounded-lg p-6 sm:p-8 shadow-sm">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-12 h-12 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#18191A] dark:text-white mb-2">
                  Diagnóstico Solicitado com Sucesso!
                </h3>
                <p className="text-sm text-[#4B5563] dark:text-[#D1D5DB] max-w-md mx-auto mb-6">
                  Recebemos seus dados para o desafio de <strong>{formData.primaryChallenge}</strong>. Um dos nossos líderes técnicos entrará em contato em até 2 horas úteis pelo {formData.preferredContact === 'whatsapp' ? 'WhatsApp' : 'E-mail'}.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/5551998821400?text=${encodeURIComponent(
                      `Olá! Acabei de solicitar um diagnóstico técnico na Selfcomp sobre ${formData.primaryChallenge} para a empresa ${formData.company || 'minha empresa'}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-700 rounded-md transition-all shadow-sm"
                  >
                    <span>Falar agora no WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2.5 text-xs font-semibold text-[#6B7280] dark:text-[#8A8D93] hover:text-[#18191A] dark:hover:text-white"
                  >
                    Enviar nova solicitação
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#E5E7EB] dark:border-[#35373B] mb-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#6B7280] dark:text-[#8A8D93] font-bold">
                    Formulário de Solicitação
                  </span>
                  <span className="text-xs font-mono text-[#E65616]">
                    Sem compromisso
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#18191A] dark:text-white mb-1.5">
                      Nome completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Ex: Roberto Silva"
                      className="w-full px-3.5 py-2.5 bg-white dark:bg-[#18191A] border border-[#E5E7EB] dark:border-[#35373B] rounded-md text-xs sm:text-sm text-[#18191A] dark:text-white focus:outline-none focus:border-[#E65616]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#18191A] dark:text-white mb-1.5">
                      E-mail corporativo *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="roberto@suaempresa.com.br"
                      className="w-full px-3.5 py-2.5 bg-white dark:bg-[#18191A] border border-[#E5E7EB] dark:border-[#35373B] rounded-md text-xs sm:text-sm text-[#18191A] dark:text-white focus:outline-none focus:border-[#E65616]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#18191A] dark:text-white mb-1.5">
                      WhatsApp / Telefone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(51) 99999-9999"
                      className="w-full px-3.5 py-2.5 bg-white dark:bg-[#18191A] border border-[#E5E7EB] dark:border-[#35373B] rounded-md text-xs sm:text-sm text-[#18191A] dark:text-white focus:outline-none focus:border-[#E65616]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#18191A] dark:text-white mb-1.5">
                      Empresa & Cargo
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Empresa - Ex: Diretor de Operações"
                      className="w-full px-3.5 py-2.5 bg-white dark:bg-[#18191A] border border-[#E5E7EB] dark:border-[#35373B] rounded-md text-xs sm:text-sm text-[#18191A] dark:text-white focus:outline-none focus:border-[#E65616]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#18191A] dark:text-white mb-1.5">
                    Principal objetivo ou desafio atual *
                  </label>
                  <select
                    value={formData.primaryChallenge}
                    onChange={(e) => setFormData({ ...formData, primaryChallenge: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white dark:bg-[#18191A] border border-[#E5E7EB] dark:border-[#35373B] rounded-md text-xs sm:text-sm text-[#18191A] dark:text-white focus:outline-none focus:border-[#E65616] cursor-pointer"
                  >
                    {challenges.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#18191A] dark:text-white mb-1.5">
                    Descreva resumidamente o gargalo ou processo atual (opcional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.currentBottleneck}
                    onChange={(e) => setFormData({ ...formData, currentBottleneck: e.target.value })}
                    placeholder="Ex: Temos 5 pessoas preenchendo planilhas manuais para lançar pedidos no ERP e queremos automatizar via WhatsApp..."
                    className="w-full px-3.5 py-2.5 bg-white dark:bg-[#18191A] border border-[#E5E7EB] dark:border-[#35373B] rounded-md text-xs sm:text-sm text-[#18191A] dark:text-white focus:outline-none focus:border-[#E65616]"
                  />
                </div>

                {/* Preferred Contact Method */}
                <div className="flex items-center gap-6 pt-1">
                  <span className="text-xs text-[#6B7280] dark:text-[#8A8D93]">
                    Prefiro contato por:
                  </span>
                  <label className="inline-flex items-center gap-1.5 text-xs text-[#18191A] dark:text-white cursor-pointer">
                    <input
                      type="radio"
                      name="contactPref"
                      checked={formData.preferredContact === 'whatsapp'}
                      onChange={() => setFormData({ ...formData, preferredContact: 'whatsapp' })}
                      className="accent-[#E65616]"
                    />
                    <span>WhatsApp</span>
                  </label>
                  <label className="inline-flex items-center gap-1.5 text-xs text-[#18191A] dark:text-white cursor-pointer">
                    <input
                      type="radio"
                      name="contactPref"
                      checked={formData.preferredContact === 'email'}
                      onChange={() => setFormData({ ...formData, preferredContact: 'email' })}
                      className="accent-[#E65616]"
                    />
                    <span>E-mail</span>
                  </label>
                  <label className="inline-flex items-center gap-1.5 text-xs text-[#18191A] dark:text-white cursor-pointer">
                    <input
                      type="radio"
                      name="contactPref"
                      checked={formData.preferredContact === 'call'}
                      onChange={() => setFormData({ ...formData, preferredContact: 'call' })}
                      className="accent-[#E65616]"
                    />
                    <span>Ligação</span>
                  </label>
                </div>

                <div className="pt-4 border-t border-[#E5E7EB] dark:border-[#35373B]">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[#E65616] hover:bg-[#C4470F] rounded-md transition-all shadow-sm active:scale-[0.98] cursor-pointer disabled:opacity-50"
                  >
                    <span>{submitting ? 'Enviando...' : 'Agendar um diagnóstico'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-[#6B7280] dark:text-[#8A8D93] text-center mt-2.5">
                    Sessão estritamente confidencial. Não realizamos spam nem compartilhamos seus dados.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
