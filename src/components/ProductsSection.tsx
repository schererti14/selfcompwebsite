import React, { useState } from 'react';
import { ArrowRight, MessageSquare, Users, Sparkles, CheckCircle, Send, Check, Phone, DollarSign } from 'lucide-react';
import { ProductItem } from '../types';

interface ProductsSectionProps {
  onOpenDiagnosticWithTopic: (topic: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onOpenDiagnosticWithTopic }) => {
  const [activeModal, setActiveModal] = useState<'crm' | 'chat-ia' | null>(null);

  // CRM Demo Simulator State
  const [pipelineDeals, setPipelineDeals] = useState([
    { id: '1', title: 'Distribuidora Alvorada', value: 'R$ 48.000', stage: 'Proposta' },
    { id: '2', title: 'Grupo Mantiqueira', value: 'R$ 95.000', stage: 'Qualificação' },
    { id: '3', title: 'Logística Sul Express', value: 'R$ 32.000', stage: 'Negociação' },
    { id: '4', title: 'Indústria MetalSul', value: 'R$ 120.000', stage: 'Fechamento' },
  ]);

  // Chat IA Interactive Demo State
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'user' | 'ia'; text: string; time: string }>>([
    {
      sender: 'ia',
      text: 'Olá! Sou o assistente inteligente da Selfcomp. Como posso ajudar a sua empresa a automatizar processos ou estruturar software sob medida hoje?',
      time: '14:20',
    },
    {
      sender: 'user',
      text: 'Temos 8 pessoas no financeiro que perdem 4 horas diárias lançando notas e conciliando extratos no ERP.',
      time: '14:21',
    },
    {
      sender: 'ia',
      text: 'Entendido perfeitamente. Esse é um gargalo clássico que resolvemos com Automação de Processos + OCR Inteligente. Conseguimos reduzir esse tempo em mais de 85% integrando diretamente a leitura de NF-e ao seu ERP com conciliação automática. Deseja agendar um diagnóstico técnico de 45 minutos?',
      time: '14:21',
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userText = inputMessage;
    setInputMessage('');
    setChatMessages((prev) => [
      ...prev,
      { sender: 'user', text: userText, time: 'Agora' },
    ]);

    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          sender: 'ia',
          text: `Excelente ponto. Nossos engenheiros mapeiam exatamente essa regra e conectam diretamente ao WhatsApp e ERP. Vamos incluir esse caso no seu diagnóstico técnico gratuito!`,
          time: 'Agora',
        },
      ]);
    }, 700);
  };

  const products: ProductItem[] = [
    {
      id: 'crm',
      name: 'CRM + Marketing',
      subtitle: 'Relacionamento, pipeline comercial e atendimento num ecossistema único.',
      description: 'Centralize oportunidades, monitorize funis de vendas, integre canais de contato e automatize réguas comerciais com conexão direta ao WhatsApp.',
      ctaText: 'Conhecer o CRM →',
      features: [
        'Funil visual de vendas em formato Kanban com movimentação rápida',
        'Conexão oficial ao WhatsApp Cloud API para atendimento multi-usuário',
        'Disparo automatizado de mensagens de follow-up e pós-venda',
        'Relatórios de conversão, tempo de resposta e faturamento por consultor',
      ],
      metricsPreview: [
        { label: 'Tempo de Resposta', value: '-72%' },
        { label: 'Taxa de Follow-up', value: '100%' },
        { label: 'Visibilidade de Pipeline', value: 'Tempo Real' },
      ],
    },
    {
      id: 'chat-ia',
      name: 'Chat IA',
      subtitle: 'A sua equipe atende melhor. A IA atende primeiro.',
      description: 'Assistente inteligente alimentado com as regras e produtos da sua empresa para qualificar leads, tirar dúvidas e agendar reuniões 24 horas por dia, transferindo com contexto para humanos.',
      ctaText: 'Conhecer o Chat IA →',
      features: [
        'Treinamento exclusivo na base de manuais, catálogos e regras da sua empresa',
        'Triagem automática com pontuação de intenção de compra do lead',
        'Agendamento automático de chamadas diretamente na agenda da equipe',
        'Transbordo contextualizado para atendentes humanos no WhatsApp',
      ],
      metricsPreview: [
        { label: 'Disponibilidade', value: '24/7/365' },
        { label: 'Tempo de Espera', value: '< 2 seg' },
        { label: 'Qualificação Prévia', value: '100%' },
      ],
    },
  ];

  return (
    <section id="produtos" className="py-20 md:py-28 border-t border-[#E5E7EB] dark:border-[#35373B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-[#E65616]" />
            <span className="text-xs font-bold tracking-widest text-[#E65616] uppercase font-mono">
              SOLUÇÕES SAAS PRONTAS
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#18191A] dark:text-white tracking-tight mb-4">
            Software pronto para acelerar a sua empresa.
          </h2>
          <p className="text-base text-[#4B5563] dark:text-[#D1D5DB] leading-relaxed">
            Além de projetos sob medida, disponibilizamos plataformas proprietárias concebidas para implementação e configuração imediata na sua estrutura.
          </p>
        </div>

        {/* 2 Marquee Product Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product 1: CRM + Marketing */}
          <div className="bg-[#F9FAFB] dark:bg-[#222426] border border-[#E5E7EB] dark:border-[#35373B] rounded-lg p-6 sm:p-8 flex flex-col justify-between hover:border-[#E65616]/60 dark:hover:border-[#E65616]/60 transition-all duration-200">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded bg-[#E65616]/10 text-[#E65616] flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-bold text-[#E65616] uppercase tracking-wider">
                  SaaS Proprietário
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#18191A] dark:text-white mb-2">
                CRM + Marketing
              </h3>
              <p className="text-sm font-medium text-[#E65616] italic mb-4">
                Relacionamento, pipeline comercial e atendimento num ecossistema único.
              </p>
              <p className="text-sm text-[#4B5563] dark:text-[#D1D5DB] leading-relaxed mb-6">
                Centralize oportunidades, monitorize funis de vendas, integre canais de contato e automatize réguas comerciais com conexão direta ao WhatsApp.
              </p>

              {/* Key Features */}
              <div className="space-y-2.5 mb-8">
                {products[0].features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#4B5563] dark:text-[#D1D5DB]">
                    <CheckCircle className="w-4 h-4 text-[#E65616] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Unboxed Metrics Preview */}
              <div className="grid grid-cols-3 gap-3 p-3 bg-white dark:bg-[#18191A] border border-[#E5E7EB] dark:border-[#35373B] rounded-md mb-6">
                {products[0].metricsPreview.map((m, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-sm font-bold font-mono text-[#18191A] dark:text-white tabular-nums">
                      {m.value}
                    </div>
                    <div className="text-[10px] text-[#6B7280] dark:text-[#8A8D93] uppercase font-mono">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#E5E7EB] dark:border-[#35373B]">
              <button
                onClick={() => setActiveModal('crm')}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#E65616] hover:bg-[#C4470F] rounded-md transition-all shadow-sm cursor-pointer"
              >
                <span>Conhecer o CRM →</span>
              </button>
            </div>
          </div>

          {/* Product 2: Chat IA */}
          <div className="bg-[#F9FAFB] dark:bg-[#222426] border border-[#E5E7EB] dark:border-[#35373B] rounded-lg p-6 sm:p-8 flex flex-col justify-between hover:border-[#E65616]/60 dark:hover:border-[#E65616]/60 transition-all duration-200">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded bg-[#E65616]/10 text-[#E65616] flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-bold text-[#E65616] uppercase tracking-wider">
                  Inteligência Corporativa
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#18191A] dark:text-white mb-2">
                Chat IA
              </h3>
              <p className="text-sm font-medium text-[#E65616] italic mb-4">
                A sua equipe atende melhor. A IA atende primeiro.
              </p>
              <p className="text-sm text-[#4B5563] dark:text-[#D1D5DB] leading-relaxed mb-6">
                Assistente inteligente alimentado com as regras e produtos da sua empresa para qualificar leads, tirar dúvidas e agendar reuniões 24 horas por dia, transferindo com contexto para humanos.
              </p>

              {/* Key Features */}
              <div className="space-y-2.5 mb-8">
                {products[1].features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#4B5563] dark:text-[#D1D5DB]">
                    <CheckCircle className="w-4 h-4 text-[#E65616] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Unboxed Metrics Preview */}
              <div className="grid grid-cols-3 gap-3 p-3 bg-white dark:bg-[#18191A] border border-[#E5E7EB] dark:border-[#35373B] rounded-md mb-6">
                {products[1].metricsPreview.map((m, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-sm font-bold font-mono text-[#18191A] dark:text-white tabular-nums">
                      {m.value}
                    </div>
                    <div className="text-[10px] text-[#6B7280] dark:text-[#8A8D93] uppercase font-mono">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#E5E7EB] dark:border-[#35373B]">
              <button
                onClick={() => setActiveModal('chat-ia')}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#E65616] hover:bg-[#C4470F] rounded-md transition-all shadow-sm cursor-pointer"
              >
                <span>Conhecer o Chat IA →</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CRM Interactive Demo Modal */}
      {activeModal === 'crm' && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white dark:bg-[#18191A] border border-[#E5E7EB] dark:border-[#35373B] rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-[#E5E7EB] dark:border-[#35373B] mb-6">
              <div>
                <span className="text-xs font-mono font-bold text-[#E65616] uppercase">
                  SIMULADOR DE FLUXO COMERCIAL
                </span>
                <h3 className="text-xl font-bold text-[#18191A] dark:text-white">
                  CRM + Marketing Selfcomp
                </h3>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="text-xs font-semibold text-[#6B7280] dark:text-[#8A8D93] hover:text-[#18191A] dark:hover:text-white px-3 py-1.5 rounded border border-[#E5E7EB] dark:border-[#35373B]"
              >
                Fechar
              </button>
            </div>

            {/* Kanban Preview */}
            <div className="mb-6">
              <div className="text-xs font-mono uppercase tracking-wider text-[#6B7280] dark:text-[#8A8D93] font-bold mb-3">
                Pipeline Visual Integrado ao WhatsApp
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                {['Qualificação', 'Proposta', 'Negociação', 'Fechamento'].map((stage) => {
                  const dealsInStage = pipelineDeals.filter((d) => d.stage === stage);
                  return (
                    <div key={stage} className="bg-[#F9FAFB] dark:bg-[#222426] border border-[#E5E7EB] dark:border-[#35373B] rounded p-3">
                      <div className="flex items-center justify-between text-xs font-semibold text-[#18191A] dark:text-white mb-2">
                        <span>{stage}</span>
                        <span className="text-[10px] font-mono text-[#E65616]">
                          {dealsInStage.length}
                        </span>
                      </div>
                      <div className="space-y-2">
                        {dealsInStage.map((deal) => (
                          <div key={deal.id} className="p-2.5 bg-white dark:bg-[#18191A] border border-[#E5E7EB] dark:border-[#35373B] rounded text-xs">
                            <div className="font-bold text-[#18191A] dark:text-white truncate">
                              {deal.title}
                            </div>
                            <div className="text-[#E65616] font-mono font-semibold mt-1">
                              {deal.value}
                            </div>
                            <div className="flex items-center gap-1 text-[10px] text-emerald-500 mt-1">
                              <Phone className="w-3 h-3" />
                              <span>WhatsApp Conectado</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-[#F3F4F6] dark:bg-[#222426] p-4 rounded-md mb-6 text-xs text-[#4B5563] dark:text-[#D1D5DB] leading-relaxed">
              <strong>Como funciona na prática:</strong> O lead manda mensagem no WhatsApp oficial da sua empresa. O sistema cria a oportunidade automaticamente, agenda tarefas para os consultores e executa réguas de reengajamento sem que ninguém precise preencher planilhas.
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#E5E7EB] dark:border-[#35373B]">
              <span className="text-xs text-[#6B7280] dark:text-[#8A8D93]">
                Setup rápido em até 72 horas com migração de dados.
              </span>
              <button
                onClick={() => {
                  setActiveModal(null);
                  onOpenDiagnosticWithTopic('CRM + Marketing');
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#E65616] hover:bg-[#C4470F] rounded-md transition-all shadow-sm"
              >
                <span>Solicitar Demonstração do CRM</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chat IA Interactive Demo Modal */}
      {activeModal === 'chat-ia' && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white dark:bg-[#18191A] border border-[#E5E7EB] dark:border-[#35373B] rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl flex flex-col">
            <div className="flex items-center justify-between pb-4 border-b border-[#E5E7EB] dark:border-[#35373B] mb-4">
              <div>
                <span className="text-xs font-mono font-bold text-[#E65616] uppercase">
                  SIMULADOR INTERATIVO
                </span>
                <h3 className="text-xl font-bold text-[#18191A] dark:text-white">
                  Chat IA Corporativo
                </h3>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="text-xs font-semibold text-[#6B7280] dark:text-[#8A8D93] hover:text-[#18191A] dark:hover:text-white px-3 py-1.5 rounded border border-[#E5E7EB] dark:border-[#35373B]"
              >
                Fechar
              </button>
            </div>

            {/* Simulated Chat Feed */}
            <div className="bg-[#F9FAFB] dark:bg-[#111213] border border-[#E5E7EB] dark:border-[#35373B] rounded-lg p-4 h-64 overflow-y-auto space-y-3 mb-4">
              {chatMessages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-lg p-3 text-xs leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-[#E65616] text-white'
                        : 'bg-white dark:bg-[#222426] text-[#18191A] dark:text-[#D1D5DB] border border-[#E5E7EB] dark:border-[#35373B]'
                    }`}
                  >
                    <div className="font-semibold text-[10px] opacity-75 mb-1">
                      {msg.sender === 'user' ? 'Você (Lead)' : 'Agente IA Selfcomp'}
                    </div>
                    <div>{msg.text}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Input Message Form */}
            <form onSubmit={handleSendMessage} className="flex gap-2 mb-6">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Teste uma pergunta sobre regras de negócio..."
                className="flex-1 bg-[#F9FAFB] dark:bg-[#222426] border border-[#E5E7EB] dark:border-[#35373B] rounded-md px-3.5 py-2 text-xs text-[#18191A] dark:text-white focus:outline-none focus:border-[#E65616]"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#E65616] hover:bg-[#C4470F] text-white rounded-md text-xs font-semibold cursor-pointer"
              >
                Enviar
              </button>
            </form>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#E5E7EB] dark:border-[#35373B]">
              <span className="text-xs text-[#6B7280] dark:text-[#8A8D93]">
                Treinamento fechado e seguro com dados confidenciais da sua empresa.
              </span>
              <button
                onClick={() => {
                  setActiveModal(null);
                  onOpenDiagnosticWithTopic('Chat IA');
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#E65616] hover:bg-[#C4470F] rounded-md transition-all shadow-sm"
              >
                <span>Implantar Chat IA na Empresa</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
