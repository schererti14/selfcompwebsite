import React, { useState } from 'react';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';
import { DiagnosticFormData } from '../types';

interface DiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export const DiagnosticModal: React.FC<DiagnosticModalProps> = ({
  isOpen,
  onClose,
  initialTopic,
}) => {
  const [formData, setFormData] = useState<DiagnosticFormData>({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    primaryChallenge: initialTopic || 'Automação de Processos',
    teamSize: '5 a 20 colaboradores',
    currentBottleneck: '',
    preferredContact: 'whatsapp',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  const challenges = [
    'Automação de Processos',
    'Sistemas Sob Medida',
    'Integrações de Sistemas (ERP / WhatsApp / APIs)',
    'Inteligência Artificial Aplicada',
    'Painéis & Inteligência de Dados',
    'CRM + Marketing',
    'Chat IA Corporativo',
    'Outro Desafio Operacional',
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white dark:bg-[#18191A] border border-[#E5E7EB] dark:border-[#35373B] rounded-lg max-w-xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-md text-[#6B7280] dark:text-[#8A8D93] hover:text-[#18191A] dark:hover:text-white transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-12 h-12 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#18191A] dark:text-white mb-2">
              Diagnóstico Agendado!
            </h3>
            <p className="text-sm text-[#4B5563] dark:text-[#D1D5DB] mb-6">
              Nossa equipe de engenharia já recebeu sua solicitação para <strong>{formData.primaryChallenge}</strong>. Entraremos em contato em até 2 horas comerciais.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/5551998821400?text=${encodeURIComponent(
                  `Olá! Acabei de solicitar um diagnóstico na Selfcomp para ${formData.company || 'minha empresa'}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-700 rounded-md transition-all shadow-sm"
              >
                <span>Falar no WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={onClose}
                className="px-4 py-2.5 text-xs font-semibold text-[#6B7280] dark:text-[#8A8D93] hover:text-[#18191A] dark:hover:text-white border border-[#E5E7EB] dark:border-[#35373B] rounded-md"
              >
                Concluir
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6 pr-8">
              <div className="inline-flex items-center gap-2 mb-1.5">
                <span className="w-1.5 h-1.5 bg-[#E65616]" />
                <span className="text-[11px] font-mono font-bold text-[#E65616] uppercase tracking-wider">
                  Sessão Sem Custo
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#18191A] dark:text-white">
                Agendar Diagnóstico Técnico
              </h3>
              <p className="text-xs sm:text-sm text-[#6B7280] dark:text-[#8A8D93] mt-1">
                Mapeamos os processos da sua empresa e indicamos o caminho com maior retorno tangível.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-[#18191A] dark:text-white mb-1">
                  Nome completo *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Seu nome"
                  className="w-full px-3 py-2 bg-[#F9FAFB] dark:bg-[#222426] border border-[#E5E7EB] dark:border-[#35373B] rounded-md text-xs sm:text-sm text-[#18191A] dark:text-white focus:outline-none focus:border-[#E65616]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#18191A] dark:text-white mb-1">
                    E-mail corporativo *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@empresa.com"
                    className="w-full px-3 py-2 bg-[#F9FAFB] dark:bg-[#222426] border border-[#E5E7EB] dark:border-[#35373B] rounded-md text-xs sm:text-sm text-[#18191A] dark:text-white focus:outline-none focus:border-[#E65616]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#18191A] dark:text-white mb-1">
                    WhatsApp / Telefone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(51) 99999-9999"
                    className="w-full px-3 py-2 bg-[#F9FAFB] dark:bg-[#222426] border border-[#E5E7EB] dark:border-[#35373B] rounded-md text-xs sm:text-sm text-[#18191A] dark:text-white focus:outline-none focus:border-[#E65616]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#18191A] dark:text-white mb-1">
                    Empresa
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Nome da sua empresa"
                    className="w-full px-3 py-2 bg-[#F9FAFB] dark:bg-[#222426] border border-[#E5E7EB] dark:border-[#35373B] rounded-md text-xs sm:text-sm text-[#18191A] dark:text-white focus:outline-none focus:border-[#E65616]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#18191A] dark:text-white mb-1">
                    Frente de Interesse
                  </label>
                  <select
                    value={formData.primaryChallenge}
                    onChange={(e) => setFormData({ ...formData, primaryChallenge: e.target.value })}
                    className="w-full px-3 py-2 bg-[#F9FAFB] dark:bg-[#222426] border border-[#E5E7EB] dark:border-[#35373B] rounded-md text-xs sm:text-sm text-[#18191A] dark:text-white focus:outline-none focus:border-[#E65616] cursor-pointer"
                  >
                    {challenges.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#18191A] dark:text-white mb-1">
                  Breve descrição da operação ou gargalo
                </label>
                <textarea
                  rows={2}
                  value={formData.currentBottleneck}
                  onChange={(e) => setFormData({ ...formData, currentBottleneck: e.target.value })}
                  placeholder="Ex: Queremos integrar pedidos do WhatsApp ao nosso ERP..."
                  className="w-full px-3 py-2 bg-[#F9FAFB] dark:bg-[#222426] border border-[#E5E7EB] dark:border-[#35373B] rounded-md text-xs sm:text-sm text-[#18191A] dark:text-white focus:outline-none focus:border-[#E65616]"
                />
              </div>

              <div className="pt-4 border-t border-[#E5E7EB] dark:border-[#35373B] flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-[#6B7280] dark:text-[#8A8D93] hover:text-[#18191A] dark:hover:text-white"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#E65616] hover:bg-[#C4470F] rounded-md transition-all shadow-sm cursor-pointer disabled:opacity-50"
                >
                  <span>{submitting ? 'Agendando...' : 'Confirmar Diagnóstico'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
