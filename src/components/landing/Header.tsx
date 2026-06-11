import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/logo.jpg";
// Certifique-se de que WA_URL está sendo exportado do caminho correto
import { WA_URL } from "@/components/landing/WhatsAppFab"; 

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  const menuItems = ["Início", "Serviços", "Sobre", "FAQ"];

  return (
    <AnimatePresence mode="wait">
      <motion.header
        key="header"
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
        className="fixed top-0 inset-x-0 z-50 transition-all duration-500 flex justify-center"
      >
        <div
          className={`w-full max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 ${
            scrolled
              ? "mt-4 mx-4 px-6 md:px-8 py-3 bg-white/95 backdrop-blur-xl shadow-[0_15px_40px_-10px_rgba(23,32,45,0.1)] border border-[#17202D]/5 rounded-full"
              : "mt-0 px-6 md:px-8 py-6 md:py-8 bg-transparent"
          }`}
        >
          {/* Logo Imagem */}
          <motion.a
            href="#top"
            className="flex items-center flex-shrink-0"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <img 
              src={logoImg} 
              alt="Bruna Mazieri Advocacia" 
              className={`object-contain mix-blend-multiply transition-all duration-500 ${
                scrolled ? "h-8 md:h-10" : "h-10 md:h-12"
              }`} 
            />
          </motion.a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            {menuItems.map((item, i) => (
              <motion.a
                key={i}
                href={item === "Início" ? "#top" : `#${item.toLowerCase()}`}
                className="text-sm font-semibold text-[#17202D]/80 hover:text-[#C19E72] transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#C19E72] transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex-shrink-0 p-2 text-[#17202D]"
            whileTap={{ scale: 0.95 }}
          >
            {mobileMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </motion.button>

          {/* CTA Desktop */}
          <motion.a
            href="#cta-final"
            // FIX DESKTOP:items-center REMOVIDO, adicionado pt e pb assimétricos (pb maior) para subir o texto
            className="hidden md:flex flex-shrink-0 justify-center bg-[#C19E72] hover:bg-[#A8875B] text-white shadow-[0_10px_20px_-10px_rgba(193,158,114,0.6)] hover:shadow-[0_15px_30px_-10px_rgba(193,158,114,0.8)] px-7 h-11 rounded-full text-sm font-bold leading-normal pt-2 pb-3.5 transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Analisar Benefício
          </motion.a>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="md:hidden absolute top-[110%] left-4 right-4 bg-white/95 backdrop-blur-xl rounded-2xl border border-[#17202D]/5 shadow-[0_20px_50px_-10px_rgba(23,32,45,0.15)] p-5 z-50"
            >
              <nav className="flex flex-col gap-2">
                {menuItems.map((item, i) => (
                  <motion.a
                    key={i}
                    href={item === "Início" ? "#top" : `#${item.toLowerCase()}`}
                    className="px-4 py-3 text-[#17202D] hover:text-[#C19E72] hover:bg-[#C19E72]/5 rounded-xl transition-all font-bold text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                    whileHover={{ x: 6 }}
                  >
                    {item}
                  </motion.a>
                ))}
                <div className="pt-4 mt-2 border-t border-[#17202D]/5">
                  <motion.a
                    href="#cta-final"
                    // FIX MOBILE: items-center REMOVIDO, adicionado pt-3 e pb-5 para centralizar o texto visualmente subindo-o
                    className="w-full flex items-center justify-center h-14 bg-[#C19E72] text-white rounded-xl font-bold text-base shadow-lg"
                    onClick={() => setMobileMenuOpen(false)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Analisar Benefício
                  </motion.a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </AnimatePresence>
  );
}