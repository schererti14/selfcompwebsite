import React, { useState } from 'react';
import { ArrowRight, Code2, Cpu, Database, Network, LineChart, Wrench, X, CheckCircle } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForDiagnostic: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForDiagnostic }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const services: ServiceItem[] = [
    // Linha 1 — Engenharia e Automação
    {
      id: 'custom-software',
      tag: 'SOB DEMANDA',
      category: 'Engenharia e Automação',
      title: 'Sistemas Sob Medida',
      description: 'Plataformas web, portais corporativos e dashboards desenhados para as regras exclusivas da sua operação, sem o engessamento de softwares genéricos de prateleira.',
      fullDescription: 'Desenvolvemos soluções tecnológicas sob medida a partir de uma imersão profunda nos processos da sua empresa. Criamos aplicações web escaláveis, sistemas internos, portais de parceiros e ferramentas operacionais personalizadas com alta performance, segurança de nível bancário e UX intuitiva para o seu time.',
      benefits: [
        'Aderência total aos processos operacionais exclusivos do seu negócio',
        'Eliminação de custos com licenças caras por usuário de softwares legados',
        'Controle total sobre o código-fonte, dados e evolução técnica',
        'Arquitetura moderna (React, Node, Cloud Serverless, APIs REST/GraphQL)',
      ],
      deliverables: [
        'Arquitetura de software e modelagem de dados',
        'Desenvolvimento front-end e back-end responsivo',
        'Painel de controle com controle de permissões por perfil (RBAC)',
        'Documentação técnica, testes automatizados e deploy em nuvem',
      ],
      technologies: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS / Google Cloud'],
    },
    {
      id: 'process-automation',
      tag: 'EFICIÊNCIA',
      category: 'Engenharia e Automação',
      title: 'Automação de Processos',
      description: 'Elimine rotinas repetitivas, conciliações manuais e retrabalho entre setores com fluxos 100% autônomos e gatilhos inteligentes.',
      fullDescription: 'Transformamos rotinas operacionais manuais em fluxos autônomos contínuos. Da emissão de documentos fiscais à conciliação financeira, atualizações de estoque e notificações entre departamentos, a informação flui instantaneamente sem risco de erro humano.',
      benefits: [
        'Economia de até centenas de horas humanas mensais em rotinas manuais',
        'Redução a zero de erros de digitação, retrabalho e esquecimentos',
        'Gatilhos instantâneos baseados em eventos de negócio',
        'Auditoria completa de logs de execução e tratamento de exceções',
      ],
      deliverables: [
        'Mapeamento completo dos fluxos e gargalos atuais',
        'Implementação de microsserviços e workers de background',
        'Fila de processamento com retry inteligente e alertas em falhas',
        'Painel de telemetria e acompanhamento de execuções',
      ],
      technologies: ['Background Workers', 'Webhooks', 'Queues / PubSub', 'APIs Corporativas', 'Cron Pipelines'],
    },
    {
      id: 'system-integrations',
      tag: 'CONEXÃO',
      category: 'Engenharia e Automação',
      title: 'Integrações de Sistemas',
      description: 'Unifique ERPs, CRMs, WhatsApp, ferramentas em nuvem e APIs bancárias para que dados transitem sozinhos, com integridade e em tempo real.',
      fullDescription: 'Conectamos sistemas legados, softwares em nuvem e ferramentas periféricas. Seja unindo seu ERP existente ao WhatsApp oficial, conectando gateways bancários para baixa automática ou sincronizando o CRM comercial em tempo real, criamos pontes seguras e consistentes.',
      benefits: [
        'Fim das ilhas de dados e das planilhas paralelas intermediárias',
        'Sincronização bidirecional em tempo real com garantia de entrega',
        'Integração oficial de canais de mensageria (WhatsApp Cloud API)',
        'Segurança com autenticação OAuth, criptografia em repouso e trânsito',
      ],
      deliverables: [
        'Mapeamento e engenharia reversa de APIs e bancos legados',
        'Camada de middleware de integração e transformação de dados',
        'Conectores para ERPs (Totvs, SAP, Sankhya, Bling, Omie, ContaAzul)',
        'Monitoramento de integridade e auditoria de transações',
      ],
      technologies: ['REST APIs', 'GraphQL', 'Webhooks', 'OAuth 2.0', 'WhatsApp Cloud API', 'Bancos SQL'],
    },

    // Linha 2 — Inteligência, Dados e Continuidade
    {
      id: 'applied-ai',
      tag: 'COGNITIVO',
      category: 'Inteligência, Dados e Continuidade',
      title: 'Inteligência Artificial Aplicada',
      description: 'Agentes inteligentes para atendimento 24/7, qualificação comercial e extração automatizada de informações de documentos, contratos e faturas.',
      fullDescription: 'Aplicamos Inteligência Artificial generativa e preditiva diretamente nos pontos de dor operacional. Criamos agentes corporativos que entendem as regras de negócio da sua empresa, qualificam potenciais clientes no WhatsApp sem fila de espera e extraem dados de documentos em segundos.',
      benefits: [
        'Atendimento e qualificação instantâneos 24 horas por dia, 7 dias por semana',
        'Extração automática de campos estruturados de faturas, contratos e PDFs',
        'Transbordo contextualizado para a equipe humana quando necessário',
        'Treinamento em base de conhecimento própria sem risco de alucinação',
      ],
      deliverables: [
        'Curadoria e estruturação da base de conhecimento da sua empresa',
        'Arquitetura RAG (Retrieval-Augmented Generation) com alta precisão',
        'Agentes com execução de funções (agendar reuniões, consultar pedidos)',
        'Dashboard de auditoria de conversas e satisfação do usuário',
      ],
      technologies: ['Large Language Models', 'Embeddings & Vector DBs', 'OCR Inteligente', 'Function Calling', 'RAG'],
    },
    {
      id: 'data-intelligence',
      tag: 'VISÃO EXECUTIVA',
      category: 'Inteligência, Dados e Continuidade',
      title: 'Painéis & Inteligência de Dados',
      description: 'Centralização de métricas críticas e consolidação de bases dispersas em dashboards executivos para tomada de decisão ágil e sem planilhas paralelas.',
      fullDescription: 'Transformamos dados brutos dispersos em relatórios claros e dinâmicos para a diretoria e lideranças. Criamos dashboards que consolidam faturamento, gargalos de produção, taxa de conversão comercial e custos em uma única tela atualizada em tempo real.',
      benefits: [
        'Visão panorâmica e fidedigna da saúde operacional em um único painel',
        'Eliminação do tempo gasto gerando planilhas manuais no fim do mês',
        'Alertas preditivos automáticos para metas e desvios de rota',
        'Acesso seguro e segmentado por diretoria, gerência e filiais',
      ],
      deliverables: [
        'Modelagem de Data Warehouses ou Data Marts operacionais',
        'Pipelines ETL/ELT para extração e consolidação contínua de dados',
        'Painéis executivos interativos de alta velocidade',
        'Configuração de alertas automáticos via WhatsApp e E-mail',
      ],
      technologies: ['Business Intelligence', 'Data Modeling', 'Pipelines ETL', 'Time-series Analytics', 'PostgreSQL'],
    },
    {
      id: 'support-evolution',
      tag: 'SUSTENTAÇÃO',
      category: 'Inteligência, Dados e Continuidade',
      title: 'Suporte & Evolução Contínua',
      description: 'Acompanhamento pós-lançamento com sustentação técnica, manutenção preventiva, resposta rápida e desenvolvimento contínuo de novas funcionalidades.',
      fullDescription: 'O lançamento é apenas o começo da vida útil de uma solução corporativa. Oferecemos pacotes contínuos de sustentação técnica (SLA), garantindo monitoramento preventivo de servidores, atualização de segurança de bibliotecas e sprints de melhorias baseadas nas necessidades dos usuários.',
      benefits: [
        'Garantia de estabilidade, uptime e resposta técnica prioritária',
        'Evolução funcional contínua acompanhando o crescimento da empresa',
        'Monitoramento 24/7 com alertas automáticos de infraestrutura',
        'Tranquilidade para a liderança focar no core business',
      ],
      deliverables: [
        'Acordo de Nível de Serviço (SLA) com tempo de resposta garantido',
        'Backlog contínuo de melhorias e novas funcionalidades',
        'Backups automatizados e plano de contingência (Disaster Recovery)',
        'Relatórios mensais de desempenho técnico e horas investidas',
      ],
      technologies: ['SLA Dedicado', 'Monitoramento Cloud', 'CI/CD Pipelines', 'Patching de Segurança', 'Suporte Dev'],
    },
  ];

  const getServiceIcon = (tag: string) => {
    switch (tag) {
      case 'SOB DEMANDA':
        return <Code2 className="w-5 h-5" />;
      case 'EFICIÊNCIA':
        return <Cpu className="w-5 h-5" />;
      case 'CONEXÃO':
        return <Network className="w-5 h-5" />;
      case 'COGNITIVO':
        return <Database className="w-5 h-5" />;
      case 'VISÃO EXECUTIVA':
        return <LineChart className="w-5 h-5" />;
      case 'SUSTENTAÇÃO':
        return <Wrench className="w-5 h-5" />;
      default:
        return <Code2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="servicos" className="py-20 md:py-28 border-t border-[#E5E7EB] dark:border-[#35373B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-[#E65616]" />
            <span className="text-xs font-bold tracking-widest text-[#E65616] uppercase font-mono">
              SOLUÇÕES & CAPACIDADES
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#18191A] dark:text-white tracking-tight mb-4">
            Da ideia à operação em funcionamento.
          </h2>
          <p className="text-base text-[#4B5563] dark:text-[#D1D5DB] leading-relaxed">
            Identificamos gargalos nos seus fluxos, desenhamos a arquitetura ideal, implementamos a solução sob medida e garantimos a evolução contínua da sua operação.
          </p>
        </div>

        {/* 3x2 Grid (3 cards per line) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="group bg-[#F9FAFB] dark:bg-[#222426] hover:bg-[#F3F4F6] dark:hover:bg-[#2C2E31] border border-[#E5E7EB] dark:border-[#35373B] rounded-lg p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 cursor-pointer hover:border-[#E65616]/60 dark:hover:border-[#E65616]/60 hover:shadow-md relative"
            >
              <div>
                {/* Eyebrow & Number */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold tracking-wider text-[#E65616] uppercase">
                    {service.tag}
                  </span>
                  <span className="text-xs font-mono text-[#6B7280] dark:text-[#8A8D93] tabular-nums">
                    0{index + 1}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-lg font-bold text-[#18191A] dark:text-white mb-3 group-hover:text-[#E65616] dark:group-hover:text-[#E65616] transition-colors flex items-center gap-2">
                  <span>{service.title}</span>
                </h3>

                {/* Card Description */}
                <p className="text-sm text-[#4B5563] dark:text-[#D1D5DB] leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Card Footer Action */}
              <div className="pt-4 border-t border-[#E5E7EB] dark:border-[#35373B] flex items-center justify-between text-xs font-semibold text-[#18191A] dark:text-white">
                <span className="group-hover:text-[#E65616] transition-colors">
                  Ver detalhes técnicos
                </span>
                <ArrowRight className="w-4 h-4 text-[#E65616] transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-150"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white dark:bg-[#18191A] border border-[#E5E7EB] dark:border-[#35373B] rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-md text-[#6B7280] dark:text-[#8A8D93] hover:text-[#18191A] dark:hover:text-white hover:bg-[#F3F4F6] dark:hover:bg-[#222426] transition-colors"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-6 pr-8">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="text-xs font-mono font-bold text-[#E65616] uppercase">
                  {selectedService.tag}
                </span>
                <span className="text-xs text-[#6B7280] dark:text-[#8A8D93]">·</span>
                <span className="text-xs text-[#6B7280] dark:text-[#8A8D93]">
                  {selectedService.category}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#18191A] dark:text-white">
                {selectedService.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#4B5563] dark:text-[#D1D5DB] leading-relaxed mb-6">
              {selectedService.fullDescription}
            </p>

            {/* Key Benefits */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#6B7280] dark:text-[#8A8D93] font-bold mb-3">
                Ganhos Operacionais & Diferenciais
              </h4>
              <div className="space-y-2">
                {selectedService.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4B5563] dark:text-[#D1D5DB]">
                    <CheckCircle className="w-4 h-4 text-[#E65616] shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#6B7280] dark:text-[#8A8D93] font-bold mb-3">
                Entregas Técnicas Típicas
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedService.deliverables.map((item, i) => (
                  <div key={i} className="p-2.5 bg-[#F9FAFB] dark:bg-[#222426] border border-[#E5E7EB] dark:border-[#35373B] rounded text-xs text-[#18191A] dark:text-[#D1D5DB]">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Stack Tags (Unboxed text with dots per zero-pill discipline) */}
            <div className="mb-8 pt-4 border-t border-[#E5E7EB] dark:border-[#35373B]">
              <span className="text-xs text-[#6B7280] dark:text-[#8A8D93] font-mono mr-2">
                Tecnologias:
              </span>
              <span className="text-xs font-medium text-[#18191A] dark:text-[#D1D5DB]">
                {selectedService.technologies.join(' · ')}
              </span>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-[#E5E7EB] dark:border-[#35373B]">
              <button
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-[#4B5563] dark:text-[#D1D5DB] hover:text-[#18191A] dark:hover:text-white transition-colors"
              >
                Voltar
              </button>
              <button
                onClick={() => {
                  const title = selectedService.title;
                  setSelectedService(null);
                  onSelectServiceForDiagnostic(title);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#E65616] hover:bg-[#C4470F] rounded-md transition-all shadow-sm"
              >
                <span>Solicitar diagnóstico desta solução</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
