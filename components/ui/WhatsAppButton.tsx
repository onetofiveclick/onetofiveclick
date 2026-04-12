'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappNumber = "+966575806733"; // Change this to the actual number
  const message = "مرحباً، أود الاستفسار عن خدمات التسويق الرقمي لشركتي في السعودية.";
  const encodedMessage = encodeURIComponent(message);
  
  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}?text=${encodedMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 left-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center gap-3 group"
    >
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold whitespace-nowrap text-sm">
        تحدث معنا الآن
      </span>
      <MessageCircle className="w-8 h-8 fill-current" />
    </motion.a>
  );
}
