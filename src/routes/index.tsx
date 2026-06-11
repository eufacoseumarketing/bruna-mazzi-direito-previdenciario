import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Scale,
  Search,
  Laptop,
  ArrowRight,
  Check,
  ChevronDown,
  CalendarClock,
  FileSearch,
  ShieldCheck,
  Bell,
  Quote,
  Star,
  Menu,
  X
} from "lucide-react";
import { Spotlight } from "@/components/landing/Spotlight";
import { WA_URL } from "@/components/landing/WhatsAppFab"; 

// --- IMPORTAÇÃO DE TODAS AS IMAGENS ---
import brunaPhoto from "@/assets/Bruna.webp";
import bannerImage from "@/assets/banner.png";
import logoImg from "@/assets/logo.jpg";
import pdpImg from "@/assets/pdp.webp";
import predioImg from "@/assets/predio.webp";
import balancaImg from "@/assets/balanca.webp";
import mobileImg from "@/assets/mobile.png";
import idososImg from "@/assets/idosos.webp";
import negadoImg from "@/assets/negado.webp";
import zapImg from "@/assets/whatsapp.png";
import NegadaImg from "@/assets/negada.webp";
import TempoImg from "@/assets/tempo.webp";

// URLs DIRETAS DA INTERNET PARA TODOS OS FUNDOS (Unsplash)
const BG_OFFICE_LIGHT = "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop";
const BG_BUILDING_1 = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"; 
const BG_BUILDING_2 = "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=2010&auto=format&fit=crop"; 
const BG_BUILDING_3 = "https://images.unsplash.com/photo-1413809088667-46323a63b366?q=80&w=2000&auto=format&fit=crop";
const BG_TEXTURE_LIGHT = "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop"; 

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bruna Mazieri Advocacia — Direito Previdenciário em Sorocaba/SP" },
      {
        name: "description",
        content:
          "Reverta seu benefício negado pelo INSS com a Dra. Bruna Mazieri. Análise técnica, honesta e sem complicações.",
      },
    ],
  }),
  component: LandingPage,
});

/* ---------- Header Integrado ---------- */
function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
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
        className="fixed top-0 inset-x-0 z-50 flex justify-center pt-4 px-4 md:px-8"
      >
        <div className="w-full max-w-6xl flex items-center justify-between px-4 md:px-8 py-2.5 bg-transparent md:bg-white/95 md:backdrop-blur-xl md:shadow-[0_0_25px_rgba(193,158,114,0.15)] border border-transparent md:border-[#C19E72]/20 rounded-full transition-all duration-500">
          
          {/* Logo Imagem */}
          <motion.a
            href="#top"
            className="flex items-center flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="relative rounded-full overflow-hidden shadow-[0_0_15px_rgba(193,158,114,0.3)] border border-[#C19E72]/30 transition-all duration-500 w-10 h-10 md:w-11 md:h-11">
              <img 
                src={logoImg} 
                alt="Bruna Mazieri Advocacia" 
                className="w-full h-full object-cover" 
              />
            </div>
          </motion.a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-10">
            {menuItems.map((item, i) => (
              <motion.a
                key={i}
                href={item === "Início" ? "#top" : `#${item.toLowerCase()}`}
                className="text-[13px] font-bold tracking-wide text-[#17202D]/90 hover:text-[#C19E72] transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-[#C19E72] transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(193,158,114,0.8)]" />
              </motion.a>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex-shrink-0 p-2 text-[#17202D] bg-white/60 backdrop-blur-md rounded-full shadow-sm border border-white/40"
            whileTap={{ scale: 0.95 }}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>

          {/* CTA Desktop */}
          <motion.a
            href="#cta-final"
            className="hidden md:flex flex-shrink-0 bg-[#C19E72] hover:bg-[#A8875B] text-white shadow-[0_0_20px_rgba(193,158,114,0.4)] hover:shadow-[0_0_30px_rgba(193,158,114,0.8)] px-6 py-2.5 rounded-full text-xs font-bold transition-all border border-[#C19E72]/50"
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
              className="md:hidden absolute top-[110%] left-4 right-4 bg-white/95 backdrop-blur-xl rounded-2xl border border-[#C19E72]/30 shadow-[0_0_40px_rgba(193,158,114,0.2)] p-5 z-50"
            >
              <nav className="flex flex-col gap-2">
                {menuItems.map((item, i) => (
                  <motion.a
                    key={i}
                    href={item === "Início" ? "#top" : `#${item.toLowerCase()}`}
                    className="px-4 py-3 text-[#17202D] hover:text-[#C19E72] hover:bg-[#C19E72]/10 rounded-xl transition-all font-bold text-base"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </motion.a>
                ))}
                <div className="pt-4 mt-2 border-t border-[#17202D]/10">
                  <motion.a
                    href="#cta-final"
                    className="w-full flex justify-center py-3.5 bg-[#C19E72] text-white rounded-xl font-bold shadow-[0_0_20px_rgba(193,158,114,0.5)] border border-[#C19E72]/50"
                    onClick={() => setMobileMenuOpen(false)}
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

/* ---------- Efeito de "Risco de Caneta" Neon ---------- */
function HighlightMarker({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  return (
    <span className="relative inline-block whitespace-nowrap">
      <span className="relative z-10">{children}</span>
      <motion.svg
        className="absolute z-0 w-[140%] h-[160%] -top-[30%] -left-[20%] pointer-events-none drop-shadow-[0_0_10px_rgba(193,158,114,0.7)]"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M10,50 C10,5 90,5 90,50 C90,95 10,95 10,50 C10,35 30,15 50,15"
          fill="none"
          stroke="#C19E72"
          strokeWidth="4"
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: [0, 1, 0], opacity: 1 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ 
            pathLength: { duration: 3, ease: "easeInOut", repeat: Infinity, delay },
            opacity: { duration: 0.3, delay }
          }}
        />
      </motion.svg>
    </span>
  );
}

/* ---------- Kinetic headline ---------- */
function KineticHeadline({ text, className = "" }: { text: string; className?: string }) {
  const words = text.split(" ");
  return (
    <h1 className={className}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-2 mr-[0.25em] align-top">
          <motion.span
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ delay: 0.08 * i, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block"
          >
            {w}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}

/* ---------- Hero Section ---------- */
function HeroSection() {
  return (
    <section id="top" className="relative bg-[#F5F5F0] min-h-[100dvh] flex flex-col justify-end lg:flex-row lg:items-center pt-[35vh] lg:pt-32 pb-16 lg:pb-32 overflow-hidden">
      
      {/* 1. Imagem de Fundo Mobile */}
      <div className="absolute top-0 left-0 w-full h-[55vh] z-0 lg:hidden">
        <motion.img 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          src={mobileImg} 
          alt="Dra. Bruna Mazieri" 
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F5F5F0]/30 to-[#F5F5F0]" />
      </div>

      {/* 2. Elementos flutuantes (Balança da Justiça) Desktop */}
      <motion.div
        className="absolute top-[15%] left-[5%] text-[#C19E72]/20 z-10 pointer-events-none hidden lg:block"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Scale size={140} strokeWidth={0.5} />
      </motion.div>
      <motion.div
        className="absolute bottom-[15%] left-[35%] text-[#C19E72]/15 z-10 pointer-events-none hidden lg:block"
        animate={{ y: [0, 25, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Scale size={200} strokeWidth={0.5} />
      </motion.div>

      {/* 3. Banner Image Absolute (Exclusivo Desktop) */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[50%] z-0 hidden lg:block">
        <motion.img
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          className="w-full h-full object-cover object-center"
          src={bannerImage}
          alt="Banner - Advocacia Previdenciária"
        />
      </div>

      {/* Lado Esquerdo: Fundo Branco Curvado (Exclusivo Desktop) */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-y-0 left-0 w-full lg:w-[60%] xl:w-[55%] bg-white z-0 lg:rounded-br-[100px] lg:rounded-tr-[20px] shadow-[20px_0_60px_rgba(193,158,114,0.1)] hidden lg:block border-r border-[#C19E72]/10"
      />

      {/* Conteúdo Principal */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-6 md:px-8 flex">
        <div className="w-full lg:w-[55%] xl:w-[50%] flex flex-col items-start text-left lg:pr-12">
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white lg:bg-white border border-[#C19E72]/40 shadow-[0_0_15px_rgba(193,158,114,0.2)] text-[10px] font-bold tracking-widest uppercase text-[#C19E72] mb-4 md:mb-6 mt-4 md:mt-0"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C19E72] animate-pulse shadow-[0_0_5px_#C19E72]" />
            Direito Previdenciário
          </motion.div>
          
          <KineticHeadline
            text="Você trabalhou a vida inteira por este momento."
            className="font-display text-4xl md:text-5xl lg:text-[3.2rem] leading-[1.05] text-[#17202D] font-bold mb-4 md:mb-5 tracking-tight text-left"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mb-6 lg:mb-6"
          >
            <p className="font-display italic text-2xl md:text-3xl leading-[1.25] text-[#C19E72] text-left drop-shadow-sm pr-4">
              Não deixe que as travas do <HighlightMarker delay={1}>INSS</HighlightMarker> tirem o que é seu por direito.
            </p>
          </motion.div>

          {/* AJUSTE: Oculto no Mobile (hidden md:block) */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="hidden md:block text-base text-[#17202D]/70 leading-relaxed mb-10 text-left font-medium max-w-sm"
          >
            Reverta seu benefício negado após uma análise técnica, honesta e sem complicações.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="flex items-center mt-2 w-full sm:w-auto"
          >
            <a 
              href={WA_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group w-full sm:w-auto relative inline-flex items-center justify-center gap-2 bg-[#17202D] hover:bg-[#202C3D] text-[#C19E72] px-4 py-4 rounded-full text-sm font-bold transition-all shadow-[0_0_20px_rgba(193,158,114,0.3)] hover:shadow-[0_0_35px_rgba(193,158,114,0.6)] border border-[#C19E72]/40 hover:-translate-y-0.5"
            >
              Quero falar com a Dra. Bruna <ArrowRight className="w-2 h-2 transition-transform group-hover:translate-x-1" />
            </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Diferenciais ---------- */
function Diferenciais() {
  const items = [
    { icon: Star, title: "+15 Anos", text: "de experiência defendendo." },
    { icon: Search, title: "Análise Prévia", text: "Viabilidade real antes de contratar." },
    { icon: Laptop, title: "Remoto ou Presencial.", text: "Resposta técnica em até 24 horas." },
    { icon: CalendarClock, title: "Agilidade", text: "Resposta técnica em até 1 hora." },
  ];

  return (
    <section className="relative z-30 bg-transparent -mt-8 md:-mt-12 lg:-mt-24 mb-12 lg:mb-0">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-[0_0_30px_rgba(193,158,114,0.15)] hover:shadow-[0_0_50px_rgba(193,158,114,0.3)] border border-[#C19E72]/20 hover:border-[#C19E72]/50 transition-all duration-500 py-6 px-4 lg:px-8 flex flex-col md:flex-row justify-between divide-y md:divide-y-0 md:divide-x divide-[#C19E72]/10"
        >
          {items.map((it, i) => (
            <div key={i} className="flex flex-col items-center text-center px-2 py-5 md:py-3 flex-1 group">
              <div className="w-10 h-10 rounded-full bg-[#17202D] shadow-[0_0_15px_rgba(193,158,114,0.4)] flex items-center justify-center mb-3 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(193,158,114,0.8)] transition-all duration-300">
                <it.icon className="w-4 h-4 text-[#C19E72]" strokeWidth={2} />
              </div>
              <h3 className="text-base font-bold text-[#17202D] mb-1">{it.title}</h3>
              <p className="text-[12px] text-[#17202D]/60 font-medium max-w-[160px]">{it.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- 1. Serviços (CARROSSEL INTERATIVO NATIVO) ---------- */
function Servicos() {
  const cards = [
    { t: "Planejamento Previdenciário", d: "Estudo seu tempo de contribuição para descobrir o melhor benefício.", img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop" },
    { t: "Reversão de Benefício Negado", d: 'Análise do motivo do "Não" do INSS e viabilidade das ações para reverter o indeferimento.', img: negadoImg },
    { t: "Auxílio-Doença e Invalidez", d: "Analisamos, detalhadamente, seu caso para garantir seus direitos.", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop" },
    { t: "BPC/LOAS (Amparo Social)", d: "Suporte completo para idosos e pessoas com deficiência que comprovem baixa renda familiar.", img: idososImg },
    { t: "Benefícios para Autismo (TEA)", d: "Pedido inicial e revisão de BPC/LOAS para pessoas com Transtorno do Espectro Autista.", img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=800&auto=format&fit=crop" },
    { t: "Tempo de serviço que não consta no INSS", d: "Se parte da sua trajetória profissional não consta no INSS, ajudo a reunir provas e regularizar a situação.", img: TempoImg },
    { t: "Perícia Negada ou Demora no Agendamento", d: "Atuação em casos de negativas e atrasos na perícia do INSS, buscando agilizar a análise e proteger seu benefício.", img: NegadaImg },
  ];

  const carouselRef = useRef<HTMLDivElement>(null);

  // Rolagem manual (Setas)
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -330, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 330, behavior: "smooth" });
    }
  };

  // Auto-play lento (6 segundos)
  useEffect(() => {
    const timer = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        // Se chegou no fim, volta pro começo suavemente
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          carouselRef.current.scrollBy({ left: 330, behavior: "smooth" });
        }
      }
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="servicos" className="relative pt-14 md:pt-10 pb-14 md:pb-20 border-b border-[#17202D]/5 overflow-hidden">
      
      <div className="absolute inset-0 z-0 pointer-events-none bg-[#F5F5F0]">
        <img 
          src={BG_TEXTURE_LIGHT} 
          alt="Textura de Fundo" 
          className="w-full h-full object-cover opacity-[0.25] mix-blend-multiply grayscale" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5F5F0]/95 via-[#F5F5F0]/70 to-[#F5F5F0]/95" />
      </div>

      <div className="w-full mx-auto relative z-10">
        <div className="max-w-2xl mb-6 text-center mx-auto mt-6 px-6">
          <div className="inline-block text-[#17202D] text-[10px] tracking-[0.35em] uppercase font-bold mb-4 bg-white/70 backdrop-blur-sm px-4 py-1.5 rounded-full border border-[#C19E72]/40 shadow-[0_0_15px_rgba(193,158,114,0.2)]">Serviços</div>
          <h2 className="font-display text-3xl md:text-4xl text-[#17202D] mb-3 font-bold tracking-tight drop-shadow-sm">
            Como posso <span className="text-[#C19E72] font-serif italic font-light drop-shadow-[0_0_10px_rgba(193,158,114,0.4)]">te ajudar?</span>
          </h2>
          <p className="text-[#17202D]/70 text-sm leading-relaxed font-medium">
            Para vencer a complexidade do INSS, o segredo é a estratégia. Analisamos minuciosamente o seu caso para entregar a melhor solução jurídica possível.
          </p>
        </div>

        {/* Contêiner do Carrossel Arrastável */}
        <div className="relative w-full group mt-10 md:px-12">
          
          {/* Botões - Visíveis apenas no Desktop */}
          <button 
            onClick={scrollLeft} 
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 h-14 w-14 items-center justify-center rounded-full bg-white shadow-[0_0_20px_rgba(193,158,114,0.3)] border border-[#C19E72]/30 text-[#C19E72] hover:bg-[#C19E72] hover:text-white hover:scale-105 transition-all"
            aria-label="Anterior"
          >
            <ArrowRight className="w-6 h-6 rotate-180" />
          </button>
          <button 
            onClick={scrollRight} 
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 h-14 w-14 items-center justify-center rounded-full bg-white shadow-[0_0_20px_rgba(193,158,114,0.3)] border border-[#C19E72]/30 text-[#C19E72] hover:bg-[#C19E72] hover:text-white hover:scale-105 transition-all"
            aria-label="Próximo"
          >
            <ArrowRight className="w-6 h-6" />
          </button>

          {/* Sombras laterais (Ocultam o recorte reto) */}
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-r from-[#F5F5F0] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-l from-[#F5F5F0] to-transparent z-20 pointer-events-none" />

          {/* Trilha do Carrossel (Nativo com snap) */}
          <div 
            ref={carouselRef} 
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar py-8 px-6 md:px-32"
          >
            {cards.map((c, i) => (
              <div
                key={i}
                className="snap-center shrink-0 w-[280px] md:w-[320px] relative bg-white rounded-[1.25rem] border border-[#C19E72]/10 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_15px_30px_-10px_rgba(23,32,45,0.1)] flex flex-col overflow-hidden group"
              >
                <div className="relative w-full h-32 md:h-40 overflow-hidden shrink-0">
                  <img 
                    src={c.img} 
                    alt={c.t} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[15%]" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17202D]/80 via-[#17202D]/10 to-transparent" />
                </div>

                <div className="p-5 flex flex-col flex-1 bg-white relative z-10">
                  <h3 className="text-[15px] md:text-[17px] text-[#17202D] font-bold mb-2 leading-tight group-hover:text-[#C19E72] transition-colors">
                    {c.t}
                  </h3>
                  <p className="text-[#17202D]/70 text-[13px] leading-relaxed font-medium mb-5">
                    {c.d}
                  </p>
                  
                  <div className="mt-auto pt-3 border-t border-[#C19E72]/10 flex items-center justify-between transition-colors duration-300">
                    <span className="text-[#17202D]/50 text-[10px] font-bold tracking-widest uppercase group-hover:text-[#C19E72]">Detalhes</span>
                    <div className="w-6 h-6 rounded-full bg-[#17202D] shadow-[0_0_10px_rgba(193,158,114,0)] flex items-center justify-center transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:shadow-[0_0_15px_rgba(193,158,114,0.6)] transition-all duration-300">
                      <ArrowRight className="w-3 h-3 text-[#C19E72]" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex justify-center px-6">
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#17202D] text-[#C19E72] px-7 py-3 rounded-full text-xs font-bold transition-all shadow-[0_0_20px_rgba(193,158,114,0.2)] hover:shadow-[0_0_30px_rgba(193,158,114,0.6)] border border-[#C19E72]/30 hover:-translate-y-0.5 mx-auto">
            Analisar meu caso agora <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- 2. Depoimentos ---------- */
function Depoimentos() {
  const depoimentos = [
    {
      id: 1,
      texto: "O INSS negou meu auxílio-doença três vezes mesmo eu estando incapacitado. A Dra. Bruna pegou meu caso, fez a análise certa e em pouco tempo a Justiça mandou o INSS pagar tudo o que me deviam.",
      nome: "Marcos R.",
      cidade: "Sorocaba/SP"
    },
    {
      id: 2,
      texto: "Fiz meu planejamento previdenciário e foi a melhor decisão. Eu ia pedir a aposentadoria no escuro e perderia muito dinheiro. A transparência e o atendimento impecável me passaram muita segurança.",
      nome: "Sônia M.",
      cidade: "Votorantim/SP"
    },
    {
      id: 3,
      texto: "Lutei meses sozinho tentando o BPC para o meu filho autista e só recebia negativas. Com a assessoria do escritório, o processo andou rápido e hoje temos esse amparo garantido e paz de espírito.",
      nome: "Juliana T.",
      cidade: "Sorocaba/SP"
    }
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={BG_BUILDING_1} alt="Prédio Corporativo" className="w-full h-full object-cover opacity-30 grayscale" />
        <div className="absolute inset-0 bg-[#17202D]/95 mix-blend-multiply" />
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-8 text-center relative z-10">
        <div className="text-[#C19E72] text-[10px] tracking-[0.35em] uppercase font-bold mb-4 drop-shadow-[0_0_10px_rgba(193,158,114,0.5)]">Depoimentos</div>
        <h2 className="font-display text-3xl md:text-4xl text-white mb-12 font-bold drop-shadow-md">
          O que falam sobre <span className="text-[#C19E72] italic font-serif font-light drop-shadow-[0_0_15px_rgba(193,158,114,0.5)]">meu trabalho</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-6">
          {depoimentos.map((dep, i) => (
            <motion.div
              key={dep.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative bg-[#17202D]/60 backdrop-blur-xl rounded-[1.5rem] p-6 md:p-8 border border-[#C19E72]/10 flex flex-col text-left group transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(193,158,114,0.25)] hover:border-[#C19E72]/40"
            >
              <Quote className="w-6 h-6 text-[#C19E72] fill-current mb-5 opacity-40 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_10px_rgba(193,158,114,0.5)]" />
              
              <p className="text-white/80 text-sm md:text-[15px] font-light leading-relaxed flex-1 mb-6">
                "{dep.texto}"
              </p>
              
              <div className="mt-auto border-t border-[#C19E72]/10 pt-4">
                <div className="flex gap-1 text-[#C19E72] mb-2 drop-shadow-[0_0_8px_rgba(193,158,114,0.6)]">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-3 h-3 fill-current" />
                  ))}
                </div>
                <div className="flex items-center gap-2 text-[9px] md:text-[10px] font-bold tracking-[0.1em] uppercase text-white/50 group-hover:text-white/80 transition-colors">
                  <span>{dep.nome}</span>
                  <span className="w-1 h-1 rounded-full bg-[#C19E72] shadow-[0_0_5px_#C19E72]" />
                  <span>{dep.cidade}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 3. Timeline ---------- */
function Timeline() {
  const steps = [
    { icon: FileSearch, t: "Análise Documental Digital", d: "Envio de extrato do Meu INSS pelo WhatsApp de forma totalmente segura." },
    { icon: Search, t: "Estudo de Viabilidade", d: "Investigação das peculiaridades do caso para traçar o caminho seguro." },
    { icon: ShieldCheck, t: "Protocolo e Proteção", d: "Entrada no requerimento, recurso ou ajuizamento da ação judicial cabível." },
    { icon: Bell, t: "Acompanhamento", d: "Mantenho você informado em cada fase do processo até o final definitivo." },
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <section className="relative py-16 md:py-24 bg-white border-t border-[#17202D]/5" ref={containerRef}>
      
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute bottom-0 left-0 w-[50%] lg:w-[60%] max-w-[900px] hidden md:block z-0 pointer-events-none"
      >
        <img src={pdpImg} alt="Decoração" className="w-full h-auto object-contain object-bottom opacity-90" />
      </motion.div>

      <div className="max-w-5xl mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block text-[#17202D] text-[10px] tracking-[0.35em] uppercase font-bold mb-4 bg-white px-4 py-1.5 rounded-full border border-[#C19E72]/40 shadow-[0_0_15px_rgba(193,158,114,0.15)]">Processo</div>
          <h2 className="font-display text-3xl md:text-4xl text-[#17202D] font-bold tracking-tight">
            Como funciona <span className="text-[#C19E72] italic font-serif font-light drop-shadow-[0_0_10px_rgba(193,158,114,0.3)]">meu atendimento</span>
          </h2>
        </div>
        
        <div className="relative">
          <div aria-hidden className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[1px] bg-[#C19E72]/10 -translate-x-1/2" />
          <motion.div 
            style={{ scaleY: scrollYProgress, transformOrigin: 'top' }}
            aria-hidden 
            className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#C19E72] to-[#A8875B] -translate-x-1/2 z-0 shadow-[0_0_15px_rgba(193,158,114,0.6)]" 
          />
          
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`relative z-10 grid md:grid-cols-2 gap-6 md:gap-12 mb-12 md:mb-16 ${
                i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className={`pl-16 md:pl-0 ${i % 2 === 1 ? "md:pl-0 md:text-left" : "md:text-right"}`}>
                <div className="bg-white rounded-[1.5rem] p-6 border border-[#C19E72]/10 hover:border-[#C19E72]/50 shadow-sm hover:shadow-[0_0_30px_rgba(193,158,114,0.2)] transition-all duration-500 group">
                  <div className="inline-block px-2 py-1 bg-[#17202D] text-[#C19E72] rounded-md text-[9px] font-bold tracking-[0.2em] uppercase mb-3 shadow-[0_0_10px_rgba(193,158,114,0.2)] group-hover:shadow-[0_0_15px_rgba(193,158,114,0.6)] transition-all">Passo {i + 1}</div>
                  <h3 className="text-lg text-[#17202D] font-bold mb-2">{s.t}</h3>
                  <p className="text-[#17202D]/70 text-sm leading-relaxed font-medium">{s.d}</p>
                </div>
              </div>
              <div aria-hidden className="absolute left-[28px] md:left-1/2 top-8 -translate-x-1/2 w-3 h-3 rounded-full bg-[#17202D] border-[2px] border-[#C19E72] shadow-[0_0_15px_rgba(193,158,114,0.8)] z-10" />
              <div className={`hidden md:flex ${i % 2 === 1 ? "justify-end pr-12" : "justify-start pl-12"}`}>
                <div className="w-12 h-12 rounded-2xl grid place-items-center bg-[#17202D] border border-[#C19E72]/40 mt-4 shadow-[0_0_20px_rgba(193,158,114,0.3)]">
                  <s.icon className="w-5 h-5 text-[#C19E72]" strokeWidth={2} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" 
            className="inline-flex items-center gap-3 rounded-full bg-[#C19E72] hover:bg-[#A8875B] text-white px-8 py-4 text-sm font-bold transition-all shadow-[0_0_20px_rgba(193,158,114,0.3)] hover:shadow-[0_0_35px_rgba(193,158,114,0.6)] hover:-translate-y-0.5">
            Falar com a Dra. Bruna <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- 4. Sobre ---------- */
function Sobre() {
  const highlights = [
    "Mais de 15 anos combatendo erros do INSS",
    "Especialista em planejamento e reversão de benefícios",
    "Estrutura digital e presencial ágil na região de Sorocaba",
  ];
  return (
    <section id="sobre" className="relative py-16 md:py-24 overflow-hidden border-t border-[#17202D]/5">
      <div className="absolute inset-0 z-0">
        <img src={BG_BUILDING_2} alt="Arquitetura Corporativa" className="w-full h-full object-cover opacity-20 grayscale" />
        <div className="absolute inset-0 bg-[#F5F5F0]/95" />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block text-[#17202D] text-[10px] tracking-[0.35em] uppercase font-bold mb-4 bg-white/70 backdrop-blur-sm px-4 py-1.5 rounded-full border border-[#C19E72]/40 shadow-[0_0_15px_rgba(193,158,114,0.2)]">Sobre</div>
            <h2 className="font-display text-3xl md:text-4xl text-[#17202D] mb-6 font-bold tracking-tight">
              Dra. <span className="text-[#C19E72] italic font-serif font-light drop-shadow-[0_0_10px_rgba(193,158,114,0.3)]">Bruna Mazieri</span>
            </h2>
            <div className="text-[#17202D]/80 text-sm leading-relaxed space-y-4 mb-8 font-medium max-w-lg mx-auto text-center md:text-left">
              <p>
                Com mais de uma década e meia de prática consolidada na área previdenciária, atuo na defesa de direitos e no restabelecimento de benefícios ilegalmente negados pelo sistema público de previdência.
              </p>
              <p>
                Com uma estrutura jurídica nativa digital, oferecemos a Sorocaba e região uma advocacia célere, transparente e pautada no diálogo claro e compreensível.
              </p>
            </div>
            
            <div className="space-y-4 mb-10 bg-white/70 backdrop-blur-md p-5 rounded-[1.5rem] text-left md:text-left mx-auto border border-[#C19E72]/20 shadow-[0_0_30px_rgba(193,158,114,0.1)] hover:shadow-[0_0_40px_rgba(193,158,114,0.2)] transition-shadow duration-500">
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="flex items-start gap-3 text-[#17202D]/90 font-bold text-sm"
                >
                  <span className="mt-0.5 w-5 h-5 rounded-full grid place-items-center bg-[#17202D] shadow-[0_0_10px_rgba(193,158,114,0.4)] flex-shrink-0">
                    <Check className="w-3 h-3 text-[#C19E72]" strokeWidth={3} />
                  </span>
                  <span>{h}</span>
                </motion.div>
              ))}
            </div>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#17202D] hover:bg-[#202C3D] text-[#C19E72] px-7 py-3 rounded-full text-xs font-bold transition-all shadow-[0_0_20px_rgba(193,158,114,0.3)] hover:shadow-[0_0_35px_rgba(193,158,114,0.6)] border border-[#C19E72]/40 hover:-translate-y-0.5 mx-auto block w-fit">
              Falar com a Dra. Bruna <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(23,32,45,0.2)] h-[450px] md:h-[600px] border border-[#C19E72]/20">
              <img src={brunaPhoto} alt="Dra. Bruna Mazieri" className="w-full h-full object-cover object-top" loading="lazy" />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[2rem]" />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-6 -left-6 md:-left-10 bg-[#17202D]/95 backdrop-blur-xl rounded-[1.5rem] p-6 border border-[#C19E72]/40 shadow-[0_0_40px_rgba(193,158,114,0.4)]"
            >
              <div className="text-4xl font-display font-bold text-[#C19E72] drop-shadow-[0_0_15px_rgba(193,158,114,0.8)]">+15</div>
              <div className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/80 mt-1">Anos de atuação</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 5. Por que Escolher ---------- */
function PorQue() {
  const cards = [
    { n: "01", t: "Experiência", d: "Conhecimento técnico refinado para proteger o seu benefício contra erros do sistema." },
    { n: "02", t: "Atendimento Personalizado", d: "Dedico atenção individual a cada cliente, garantindo que suas necessidades sejam ouvidas." },
    { n: "03", t: "Transparência Total", d: "Você sempre saberá o andamento do seu caso e as chances reais — sem promessas vazias." },
    { n: "04", t: "Compromisso", d: "Meu sucesso é medido pelo seu. Faço tudo o que está ao meu alcance técnico." },
  ];
  return (
    <section className="relative py-16 md:py-24 bg-[#17202D] text-white overflow-hidden">
      
      <div className="absolute inset-0 z-0 bg-[#17202D]">
        <img src={predioImg} className="w-full h-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-[#17202D]/70" /> 
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-[#C19E72] text-[10px] tracking-[0.35em] uppercase font-bold mb-4 drop-shadow-[0_0_10px_rgba(193,158,114,0.5)]">Por que me escolher</div>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4 leading-[1.1] font-light drop-shadow-lg">
            Do primeiro contato até o resultado — <span className="font-serif italic text-[#C19E72] drop-shadow-[0_0_15px_rgba(193,158,114,0.6)]"><HighlightMarker delay={0.5}>estou com você.</HighlightMarker></span>
          </h2>
          <p className="text-white/80 text-sm md:text-base font-light max-w-lg">
            Experiência comprovada, atendimento personalizado e compromisso real.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white/5 border border-[#C19E72]/20 rounded-[1.5rem] p-6 hover:bg-[#17202D]/90 hover:border-[#C19E72]/60 transition-all duration-500 backdrop-blur-md hover:shadow-[0_0_40px_rgba(193,158,114,0.4)]"
            >
              <div className="font-display text-3xl font-bold text-[#C19E72] mb-4 drop-shadow-[0_0_10px_rgba(193,158,114,0.6)]">{c.n}</div>
              <h3 className="text-lg text-white font-bold mb-3">{c.t}</h3>
              <p className="text-white/80 leading-relaxed font-light text-sm">{c.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 6. FAQ ---------- */
function FAQ() {
  const faqs = [
    { q: "O INSS negou meu benefício. O que fazer?", a: "Não se desespere. Verificamos as peculiaridades para um recurso administrativo ou ação judicial para reverter a negativa. Me procure para uma análise." },
    { q: "Preciso ir até um escritório físico para contratar?", a: "Não. Hoje o INSS e a Justiça são quase 100% digitais. Atendemos com a mesma segurança via WhatsApp." },
    { q: "O que é o Planejamento Previdenciário?", a: "É um estudo que mostra exatamente quando e como se aposentar para ganhar o maior valor possível, evitando perdas financeiras irreversíveis." },
    { q: "Quem tem direito ao BPC/LOAS?", a: "Não precisa ter contribuído. O BPC é um amparo de um salário mínimo para idosos acima de 65 anos ou pessoas com deficiência de baixa renda." },
    { q: "O que é necessário para aprovar o Auxílio-Doença?", a: "Ter qualidade de segurado, carência e, principalmente, laudos médicos atualizados comprovando a incapacidade." },
    { q: "Você cobra para fazer a análise inicial?", a: "Faço um Estudo Prévio de Viabilidade sem compromisso. Explico tudo com transparência antes de firmarmos qualquer contrato." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  
  return (
    <section id="faq" className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={BG_BUILDING_3} alt="Prédio Espelhado" className="w-full h-full object-cover opacity-15 grayscale" />
        <div className="absolute inset-0 bg-[#F5F5F0]/95" />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block text-[#17202D] text-[10px] tracking-[0.35em] uppercase font-bold mb-4 bg-white/70 backdrop-blur-sm px-4 py-1.5 rounded-full border border-[#C19E72]/40 shadow-[0_0_15px_rgba(193,158,114,0.2)]">FAQ</div>
          <h2 className="font-display text-3xl md:text-4xl text-[#17202D] font-bold">
            Dúvidas <span className="text-[#C19E72] font-serif italic font-light drop-shadow-[0_0_10px_rgba(193,158,114,0.3)]">Frequentes</span>
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                data-state={isOpen ? "open" : "closed"}
                className={`rounded-[1.25rem] overflow-hidden transition-all duration-500 ease-out border ${
                  isOpen 
                    ? "bg-white border-[#C19E72]/60 shadow-[0_0_30px_rgba(193,158,114,0.2)]" 
                    : "bg-white/60 backdrop-blur-md border-[#17202D]/10 hover:border-[#C19E72]/40 hover:shadow-[0_0_20px_rgba(193,158,114,0.1)]"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left cursor-pointer outline-none"
                >
                  <span className={`text-sm md:text-base font-bold transition-colors ${isOpen ? "text-[#C19E72]" : "text-[#17202D]"}`}>{f.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-500 ${
                      isOpen ? "text-[#C19E72] rotate-180" : "text-[#17202D]/50"
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 md:px-6 pb-6 text-[#17202D]/70 leading-relaxed text-sm font-medium">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- 7. CTA Final ---------- */
function CTAFinal() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  
  return (
    <section id="cta-final" ref={ref} className="relative py-24 md:py-32 overflow-hidden bg-[#17202D]">
      <div className="absolute inset-0 z-0">
        <img src={BG_OFFICE_LIGHT} alt="Office" className="w-full h-full object-cover opacity-10 grayscale" />
        <div className="absolute inset-0 bg-[#17202D]/90 mix-blend-multiply" />
      </div>

      <motion.div style={{ y }} aria-hidden className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#C19E72]/20 to-transparent blur-[100px]" />
      </motion.div>
      
      {/* IMAGEM BALANCA.PNG NA ESQUERDA DO CTA (DIMINUIDA PELA METADE) */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute bottom-0 left-0 w-[15%] md:w-[18%] lg:w-[20%] max-w-[300px] hidden md:block z-0 pointer-events-none"
      >
        <img src={balancaImg} alt="Balança Esquerda" className="w-full h-auto object-contain object-bottom opacity-90" />
      </motion.div>

      {/* IMAGEM BALANCA.PNG NA DIREITA DO CTA (ESPELHADA E DIMINUIDA PELA METADE) */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="absolute bottom-0 right-0 w-[15%] md:w-[18%] lg:w-[20%] max-w-[300px] hidden md:block z-0 pointer-events-none"
      >
        <img src={balancaImg} alt="Balança Direita" className="w-full h-auto object-contain object-bottom opacity-90 scale-x-[-1]" />
      </motion.div>

      <div className="max-w-3xl mx-auto px-6 md:px-8 text-center relative z-10">
        <div className="w-16 h-16 mx-auto rounded-full bg-[#17202D] border border-[#C19E72]/40 grid place-items-center mb-6 shadow-[0_0_40px_rgba(193,158,114,0.6)]">
          <Scale className="w-6 h-6 text-[#C19E72]" strokeWidth={1.5} />
        </div>
        <h2 className="font-display text-3xl md:text-5xl text-white font-bold leading-[1.1] mb-5">
          Não deixe de correr atrás dos <span className="text-[#C19E72] italic font-serif font-light block mt-1 drop-shadow-[0_0_15px_rgba(193,158,114,0.5)]">seus direitos.</span>
        </h2>
        <p className="text-white/70 text-sm md:text-lg max-w-xl mx-auto mb-10 font-light">
          Agende agora sua consulta e descubra as viabilidades para concessão do seu benefício.
        </p>
        <motion.a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center gap-3 bg-[#C19E72] hover:bg-[#A8875B] text-white text-sm font-bold px-10 py-4 rounded-full shadow-[0_0_30px_rgba(193,158,114,0.4)] hover:shadow-[0_0_50px_rgba(193,158,114,0.8)] border border-white/10"
        >
          Agendar agora a consulta <ArrowRight className="w-4 h-4" />
        </motion.a>
      </div>
    </section>
  );
}

/* ---------- Footer — Curtain ---------- */
function Footer() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);
  
  return (
    <footer ref={ref} className="relative bg-[#0A0E14] text-white overflow-hidden rounded-t-[2.5rem] mt-[-2.5rem] z-20 shadow-[0_-30px_50px_rgba(0,0,0,0.5)] border-t border-[#C19E72]/20">
      <motion.div style={{ y, opacity }} className="relative pt-20 pb-10">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-3 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-[#C19E72]/40 shadow-[0_0_20px_rgba(193,158,114,0.3)]">
                  <img src={logoImg} alt="Bruna Mazieri Advocacia" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-display text-lg text-white font-bold tracking-wide">Bruna Mazieri</div>
                  <div className="text-[9px] font-bold tracking-[0.4em] text-[#C19E72] uppercase mt-0.5">Advocacia</div>
                </div>
              </div>
              <p className="text-white/50 text-sm leading-relaxed max-w-xs font-light">
                Advocacia previdenciária técnica, transparente e humana. Defendendo seus direitos com precisão e clareza.
              </p>
            </div>
            
            <div className="text-sm text-white/60 space-y-2.5 font-light">
              <div className="text-[#C19E72] text-[10px] font-bold tracking-[0.35em] uppercase mb-4">Contato</div>
              <a href="mailto:contato@brunamazieri.adv.br" className="hover:text-white transition-colors">contato@brunamazieri.adv.br</a>
              <div>Sorocaba/SP</div>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-[#C19E72] font-medium hover:text-white transition-colors">
                Falar no WhatsApp →
              </a>
            </div>
            
            <div className="text-sm text-white/60 space-y-2.5 font-light">
              <div className="text-[#C19E72] text-[10px] font-bold tracking-[0.35em] uppercase mb-4">Navegação</div>
              <div><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></div>
              <div><a href="#sobre" className="hover:text-white transition-colors">Sobre</a></div>
              <div><a href="#faq" className="hover:text-white transition-colors">FAQ</a></div>
              <div>
                <a href="/politica-de-privacidade" className="hover:text-white transition-colors">
                  Política de Privacidade
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row gap-4 justify-between items-center text-[11px] text-white/40 font-light">
            <div>© {new Date().getFullYear()} Bruna Mazieri Advocacia. Todos os direitos reservados.</div>
            <div>
              Desenvolvido por{" "}
              <a href="https://lp.eufacoseu.marketing" target="_blank" rel="noopener noreferrer" className="text-[#C19E72] hover:text-white transition-colors font-medium">
                EFSM
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}

/* ---------- WhatsApp Flutuante Personalizado ---------- */
function CustomWhatsAppFab() {
  return (
    <motion.a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full shadow-[0_0_30px_rgba(37,211,102,0.5)] hover:shadow-[0_0_40px_rgba(37,211,102,0.7)] transition-shadow duration-300 border border-white/20 overflow-hidden"
    >
      <img src={zapImg} alt="WhatsApp" className="w-full h-full object-cover" />
    </motion.a>
  );
}

/* ---------- Page (NÃO EXPORTAR DIRETAMENTE) ---------- */
function LandingPage() {
  return (
    <div className="relative min-h-screen bg-[#F5F5F0] text-[#17202D] overflow-x-hidden selection:bg-[#C19E72]/30">
      {/* CSS para esconder a barra de rolagem (necessário para o Carrossel) */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        ::-webkit-scrollbar { width: 10px; }
        ::-webkit-scrollbar-track { background: #17202D; }
        ::-webkit-scrollbar-thumb { background: #C19E72; border-radius: 5px; border: 2px solid #17202D; }
        ::-webkit-scrollbar-thumb:hover { background: #A8875B; }
      `}</style>
      
      <Spotlight />
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <Diferenciais />
        <Servicos />
        <Depoimentos />
        <Timeline />
        <Sobre />
        <PorQue />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <CustomWhatsAppFab />
    </div>
  );
}

export default LandingPage;