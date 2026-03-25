import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Package, AlertCircle, TrendingDown, Clock } from 'lucide-react';

const performanceData = [
  { mes: 'Jan', antes: 28, depois: 8 },
  { mes: 'Fev', antes: 32, depois: 7 },
  { mes: 'Mar', antes: 29, depois: 6 },
  { mes: 'Abr', antes: 35, depois: 5 },
  { mes: 'Mai', antes: 31, depois: 4 },
  { mes: 'Jun', antes: 30, depois: 3 },
];

interface KPICardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  subtitle: string;
  trend?: string;
  delay: number;
}

function KPICard({ icon, title, value, subtitle, trend, delay }: KPICardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-white rounded-2xl shadow-lg p-6 border-2 border-transparent hover:border-[#BC6C25]/30 transition-all"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-[#BC6C25]/20 to-[#BC6C25]/5 rounded-xl flex items-center justify-center">
          {icon}
        </div>
        {trend && (
          <div className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
            {trend}
          </div>
        )}
      </div>
      <h3 className="text-sm font-medium text-[#283618]/60 mb-2">{title}</h3>
      <div className="text-3xl font-bold text-[#283618] mb-1">{value}</div>
      <p className="text-sm text-[#283618]/50">{subtitle}</p>
    </motion.div>
  );
}

export default function Dashboard() {
  const kpis = [
    {
      icon: <Package className="text-[#BC6C25]" size={24} />,
      title: 'Total de Itens',
      value: '2.847',
      subtitle: 'Itens cadastrados',
      trend: '+12%',
    },
    {
      icon: <AlertCircle className="text-[#BC6C25]" size={24} />,
      title: '% Ruptura',
      value: '3.2%',
      subtitle: 'Antes: 28%',
      trend: '-89%',
    },
    {
      icon: <TrendingDown className="text-[#BC6C25]" size={24} />,
      title: 'Giro de Estoque',
      value: '8.3x',
      subtitle: 'Ano',
      trend: '+45%',
    },
    {
      icon: <Clock className="text-[#BC6C25]" size={24} />,
      title: 'Lead Time Médio',
      value: '12 dias',
      subtitle: 'Antes: 18 dias',
      trend: '-33%',
    },
  ];

  return (
    <section id="resultados" className="py-20 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#283618] mb-4">
            Resultados <span className="text-[#BC6C25]">Mensuráveis</span>
          </h2>
          <p className="text-xl text-[#283618]/70 max-w-3xl mx-auto">
            Indicadores de performance demonstrando o impacto da transformação digital
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {kpis.map((kpi, index) => (
            <KPICard key={index} {...kpi} delay={index * 0.1} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <h3 className="text-2xl font-bold text-[#283618] mb-2">
            Evolução da Taxa de Ruptura
          </h3>
          <p className="text-[#283618]/60 mb-8">
            Comparativo antes e depois da implementação do sistema
          </p>

          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={performanceData}>
              <defs>
                <linearGradient id="colorAntes" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#BC6C25" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#BC6C25" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorDepois" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#283618" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#283618" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="mes" stroke="#283618" />
              <YAxis stroke="#283618" label={{ value: '% Ruptura', angle: -90, position: 'insideLeft' }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #BC6C25',
                  borderRadius: '12px',
                  padding: '12px',
                }}
              />
              <Area
                type="monotone"
                dataKey="antes"
                stroke="#BC6C25"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorAntes)"
                name="Antes"
              />
              <Area
                type="monotone"
                dataKey="depois"
                stroke="#283618"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorDepois)"
                name="Depois"
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </section>
  );
}
