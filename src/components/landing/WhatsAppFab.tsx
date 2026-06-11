import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WA_URL =
  "https://wa.me/5515999999999?text=Ol%C3%A1%20Dra.%20Bruna%2C%20gostaria%20de%20analisar%20meu%20benef%C3%ADcio";

export function WhatsAppFab() {
  return (
    <motion.a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid place-items-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white shadow-lg"
      whileHover={{ scale: 1.15, rotate: 10 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
      </motion.div>
    </motion.a>
  );
}

export { WA_URL };
