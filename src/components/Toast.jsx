import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
export const Toast = ({ message, onClose }) => {
    React.useEffect(() => {
        if (message) {
            const timer = setTimeout(onClose, 2800);
            return () => clearTimeout(timer);
        }
    }, [message, onClose]);
    return (<AnimatePresence>
      {message && (<motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.95 }} transition={{ duration: 0.2 }} className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#131722] text-white px-4 py-3 rounded-xl shadow-2xl border border-[#C45D38]/40">
          <CheckCircle2 className="w-5 h-5 text-[#C45D38] shrink-0"/>
          <span className="text-sm font-medium text-slate-100 font-mono text-xs">{message}</span>
        </motion.div>)}
    </AnimatePresence>);
};
