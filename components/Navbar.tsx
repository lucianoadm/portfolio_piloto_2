import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold text-[#283618] cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            Luciano Paiva
          </motion.div>

          <div className="hidden md:flex space-x-8">
            {['hero', 'solucao', 'resultados', 'timeline', 'contato'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-[#283618] hover:text-[#BC6C25] transition-colors duration-200 capitalize font-medium"
              >
                {item === 'hero' ? 'Início' : item === 'solucao' ? 'Solução' : item}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-[#283618]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200"
        >
          <div className="px-4 py-4 space-y-3">
            {['hero', 'solucao', 'resultados', 'timeline', 'contato'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-4 py-2 text-[#283618] hover:text-[#BC6C25] hover:bg-[#BC6C25]/10 rounded-lg transition-all capitalize font-medium"
              >
                {item === 'hero' ? 'Início' : item === 'solucao' ? 'Solução' : item}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
