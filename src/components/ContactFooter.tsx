import { motion } from 'framer-motion';
import { Linkedin, Mail, MessageCircle, Github } from 'lucide-react';

export default function ContactFooter() {
  const contactInfo = [
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: 'linkedin.com',
      link: 'https://linkedin.com',
      color: 'from-blue-600 to-blue-800',
    },
    {
      icon: <Mail size={24} />,
      label: 'E-mail',
      value: 'lucianopaivaadm@gmail.com',
      link: 'mailto:lucianopaivaadm@gmail.com',
      color: 'from-red-500 to-orange-600',
    },
    {
      icon: <MessageCircle size={24} />,
      label: 'WhatsApp',
      value: '(12) 99735-7033',
      link: 'https://wa.me/5512997357033',
      color: 'from-green-500 to-green-700',
    },
  ];

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-[#283618] to-[#BC6C25]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Vamos Conversar?
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Entre em contato para discutir como posso ajudar na transformação digital do seu negócio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20 hover:border-white/40 transition-all group"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${contact.color} rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform`}>
                {contact.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">{contact.label}</h3>
              <p className="text-white/80 text-sm">{contact.value}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Luciano Paiva</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              Especialista em Business Intelligence e Gestão de Operações com foco em transformação digital
              e otimização de processos através de análise de dados.
            </p>
            <div className="flex justify-center gap-4">
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white hover:bg-white/30 transition-all"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="mailto:lucianopaivaadm@gmail.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white hover:bg-white/30 transition-all"
              >
                <Mail size={20} />
              </motion.a>
              <motion.a
                href="https://wa.me/5512997357033"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white hover:bg-white/30 transition-all"
              >
                <MessageCircle size={20} />
              </motion.a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12 text-white/60 text-sm"
        >
          <p>2024 Luciano Paiva - Portfólio de Estudo de Caso Técnico</p>
        </motion.div>
      </div>
    </section>
  );
}
