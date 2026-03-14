import React from 'react';
import { Year } from '../types';
import { GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';

interface YearSelectorProps {
  onSelect: (year: Year) => void;
}

export const YearSelector: React.FC<YearSelectorProps> = ({ onSelect }) => {
  const years: { value: Year; label: string; icon: React.ReactNode }[] = [
    { value: 1, label: '1° Anno', icon: <GraduationCap className="w-8 h-8" /> },
    { value: 2, label: '2° Anno', icon: <GraduationCap className="w-8 h-8" /> },
    { value: 3, label: '3° Anno', icon: <GraduationCap className="w-8 h-8" /> },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-6">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-serif italic text-red-600 mb-12 text-center"
      >
        Seleziona l'Anno di Corso
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
        {years.map((year, index) => (
          <motion.button
            key={year.value}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelect(year.value)}
            className="flex flex-col items-center p-10 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-red-100 hover:border-red-300 hover:shadow-xl transition-all group"
          >
            <div className="mb-4 p-4 bg-slate-50 rounded-full group-hover:bg-red-50 transition-colors text-slate-600 group-hover:text-red-600">
              {year.icon}
            </div>
            <span className="text-xl font-medium text-slate-700 group-hover:text-red-700">{year.label}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};
