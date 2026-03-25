import { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, TrendingUp, Database, CheckCircle, BarChart3, FolderTree } from 'lucide-react';

interface FlipCardProps {
  frontIcon: React.ReactNode;
  frontTitle: string;
  frontDescription: string;
  backIcon: React.ReactNode;
  backTitle: string;
  backDescription: string;
  delay: number;
}

function FlipCard({ frontIcon, frontTitle, frontDescription, backIcon, backTitle, backDescription, delay }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="h-96 cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div
          className="absolute inset-0 bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center text-center"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="w-16 h-16 bg-gradient-to-br from-[#BC6C25]/20 to-[#BC6C25]/5 rounded-2xl flex items-center justify-center mb-6">
            {frontIcon}
          </div>
          <h3 className="text-2xl font-bold text-[#283618] mb-4">{frontTitle}</h3>
          <p className="text-[#283618]/70 leading-relaxed">{frontDescription}</p>
          <div className="mt-6 text-sm text-[#BC6C25] font-semibold">Clique para ver a solução</div>
        </div>

        <div
          className="absolute inset-0 bg-gradient-to-br from-[#BC6C25] to-[#283618] rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center text-center"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
            {backIcon}
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">{backTitle}</h3>
          <p className="text-white/90 leading-relaxed">{backDescription}</p>
          <div className="mt-6 text-sm text-white/70 font-semibold">Clique para voltar</div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function FlipCards() {
  const cards = [
    {
      frontIcon: <AlertTriangle className="text-[#BC6C25]" size={32} />,
      frontTitle: 'Rupturas de Estoque',
      frontDescription: 'Falta de materiais críticos comprometia operações e gerava custos de emergência.',
      backIcon: <CheckCircle className="text-white" size={32} />,
      backTitle: 'Estoque Mínimo Parametrizado',
      backDescription: 'Sistema de reposição automática baseado em histórico de consumo e lead time dos fornecedores.',
    },
    {
      frontIcon: <TrendingUp className="text-[#BC6C25]" size={32} />,
      frontTitle: 'Decisão por Percepção',
      frontDescription: 'Compras baseadas em intuição resultavam em excesso de itens de baixo giro e falta de essenciais.',
      backIcon: <BarChart3 className="text-white" size={32} />,
      backTitle: 'Curva ABC Automática',
      backDescription: 'Classificação inteligente de itens por valor e criticidade, priorizando recursos nos materiais mais importantes.',
    },
    {
      frontIcon: <Database className="text-[#BC6C25]" size={32} />,
      frontTitle: 'Dados Descentralizados',
      frontDescription: 'Informações dispersas em planilhas diferentes dificultavam análises e tomada de decisão.',
      backIcon: <FolderTree className="text-white" size={32} />,
      backTitle: 'Estrutura Única de Dados',
      backDescription: 'Base de dados consolidada com relacionamentos estruturados, permitindo análises multidimensionais em Power BI.',
    },
  ];

  return (
    <section id="solucao" className="py-20 bg-gradient-to-b from-[#FAF9F6] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#283618] mb-4">
            Do Problema à <span className="text-[#BC6C25]">Solução</span>
          </h2>
          <p className="text-xl text-[#283618]/70 max-w-3xl mx-auto">
            Transformação completa do processo de gestão de almoxarifado através de inteligência de dados
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <FlipCard key={index} {...card} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
}
