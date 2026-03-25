import { motion } from 'framer-motion';
import { Search, Layers, Trophy } from 'lucide-react';

interface TimelineItemProps {
  icon: React.ReactNode;
  phase: string;
  title: string;
  description: string;
  details: string[];
  index: number;
}

function TimelineItem({ icon, phase, title, description, details, index }: TimelineItemProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative flex items-center mb-16 last:mb-0"
    >
      <div className={`flex-1 ${isEven ? 'text-right pr-8' : 'order-2 pl-8'}`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-2xl shadow-xl p-6 border-2 border-transparent hover:border-[#BC6C25]/30 transition-all"
        >
          <div className="text-sm font-bold text-[#BC6C25] mb-2">{phase}</div>
          <h3 className="text-2xl font-bold text-[#283618] mb-3">{title}</h3>
          <p className="text-[#283618]/70 mb-4 leading-relaxed">{description}</p>
          <ul className={`space-y-2 ${isEven ? 'text-right' : 'text-left'}`}>
            {details.map((detail, idx) => (
              <li key={idx} className="text-sm text-[#283618]/60 flex items-start gap-2">
                <span className={`inline-block w-1.5 h-1.5 rounded-full bg-[#BC6C25] mt-1.5 ${isEven ? 'order-2' : ''}`} />
                <span className="flex-1">{detail}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-[#BC6C25] to-[#283618] rounded-2xl shadow-xl flex items-center justify-center z-10">
        {icon}
      </div>

      <div className={`flex-1 ${isEven ? 'order-2' : ''}`} />
    </motion.div>
  );
}

export default function Timeline() {
  const timelineData = [
    {
      icon: <Search className="text-white" size={28} />,
      phase: 'Fase 1',
      title: 'Diagnóstico e Mapeamento',
      description: 'Análise profunda dos processos existentes e identificação de pontos críticos',
      details: [
        'Levantamento de 100% dos itens em estoque',
        'Mapeamento de fluxos de requisição e compra',
        'Entrevistas com equipes operacionais',
        'Identificação de gargalos e desperdícios',
      ],
    },
    {
      icon: <Layers className="text-white" size={28} />,
      phase: 'Fase 2',
      title: 'Arquitetura da Base de Dados',
      description: 'Estruturação de dados consolidados e relacionamentos inteligentes',
      details: [
        'Modelagem de tabelas relacionais em Excel',
        'Criação de campos calculados e fórmulas dinâmicas',
        'Implementação de curva ABC automática',
        'Parametrização de estoques mínimo e máximo',
      ],
    },
    {
      icon: <Trophy className="text-white" size={28} />,
      phase: 'Fase 3',
      title: 'Resultados e Dashboards',
      description: 'Entrega de painéis executivos e indicadores em tempo real',
      details: [
        'Dashboards Power BI para gestão visual',
        'Alertas automáticos de ruptura iminente',
        'Redução de 89% nas rupturas de estoque',
        'Economia de 60% no tempo de gestão',
      ],
    },
  ];

  return (
    <section id="timeline" className="py-20 bg-gradient-to-b from-white to-[#FAF9F6]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#283618] mb-4">
            Jornada da <span className="text-[#BC6C25]">Transformação</span>
          </h2>
          <p className="text-xl text-[#283618]/70 max-w-3xl mx-auto">
            Do diagnóstico à implementação: etapas estruturadas para resultados sustentáveis
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#BC6C25] to-[#283618] transform -translate-x-1/2" />

          {timelineData.map((item, index) => (
            <TimelineItem key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
