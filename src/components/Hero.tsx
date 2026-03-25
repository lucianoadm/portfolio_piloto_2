import { motion } from 'framer-motion';
import { ArrowDown, Database } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-[#FAF9F6] pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#BC6C25] to-[#283618] rounded-2xl mb-6 shadow-xl">
              <Database className="text-white" size={40} />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#283618] mb-6 leading-tight"
          >
            Inteligência de Dados
            <br />
            <span className="text-[#BC6C25]">no Almoxarifado</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl text-[#283618]/70 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Da gestão manual baseada em percepção para um sistema automatizado,
            orientado por dados e estruturado em Excel/Power BI.
            <br />
            <span className="font-semibold text-[#BC6C25]">
              Redução de rupturas, otimização de custos e decisões estratégicas.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              onClick={() => scrollToSection('solucao')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  '0 0 0 0 rgba(188, 108, 37, 0.4)',
                  '0 0 0 20px rgba(188, 108, 37, 0)',
                  '0 0 0 0 rgba(188, 108, 37, 0)',
                ],
              }}
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
              className="bg-gradient-to-r from-[#BC6C25] to-[#283618] text-white px-12 py-4 rounded-2xl text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-3"
            >
              Explorar Solução
              <ArrowDown size={20} />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { label: 'Redução de Rupturas', value: '75%' },
              { label: 'Economia de Tempo', value: '60%' },
              { label: 'Precisão em Decisões', value: '95%' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg"
              >
                <div className="text-4xl font-bold text-[#BC6C25] mb-2">{stat.value}</div>
                <div className="text-[#283618] font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
