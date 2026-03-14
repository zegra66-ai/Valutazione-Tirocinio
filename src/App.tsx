import { useState } from 'react';
import { YearSelector } from './components/YearSelector';
import { EvaluationForm } from './components/EvaluationForm';
import { Year, EvaluationState, EvaluationRow } from './types';
import { COMPETENCES } from './constants';
import { Stethoscope } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const INITIAL_STATE: EvaluationState = {
  studentInfo: {
    name: '',
    tutor: '',
    ward: '',
    period: '',
  },
  year: null,
  evaluations: [],
};

export default function App() {
  const [state, setState] = useState<EvaluationState>(INITIAL_STATE);

  const handleYearSelect = (year: Year) => {
    const competences = COMPETENCES[year];
    const initialEvals: EvaluationRow[] = competences.map((c) => ({
      competenceId: c.id,
      score: 'NV',
      notes: '',
    }));

    setState({
      ...state,
      year,
      evaluations: initialEvals,
    });
  };

  const handleBack = () => {
    setState(INITIAL_STATE);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-slate-200">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 py-8 px-4 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-6">
            <div>
              <h1 className="text-lg md:text-xl font-serif font-bold tracking-tight text-slate-900 uppercase">
                Università del Salento
              </h1>
              <p className="text-xs md:text-sm text-slate-500 font-medium uppercase tracking-wide">
                Polo Didattico "Card. G. Panico" Tricase (LE)
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
            <div className="bg-slate-900 p-1.5 rounded-md">
              <Stethoscope className="w-4 h-4 text-white" />
            </div>
            <div className="text-right">
              <p className="text-[10px] uppercase tracking-[0.1em] text-slate-400 font-bold leading-none mb-1">
                Nursing Eval
              </p>
              <p className="text-[9px] text-slate-500 font-medium leading-none">
                Valutazione Tirocinio
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12">
        <AnimatePresence mode="wait">
          {!state.year ? (
            <YearSelector key="selector" onSelect={handleYearSelect} />
          ) : (
            <EvaluationForm
              key="form"
              state={state}
              competences={COMPETENCES[state.year]}
              onUpdate={setState}
              onBack={handleBack}
            />
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-slate-200 mt-auto">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-red-600 text-sm font-serif italic">
            "L'assistenza è un'arte; e se deve essere realizzata come un'arte, richiede una devozione totale e una dura preparazione."
          </p>
          <p className="text-slate-300 text-[10px] uppercase tracking-widest mt-4">
            &copy; 2026 UniEval Nursing - Sistema Esperto di Valutazione Clinica
          </p>
        </div>
      </footer>
    </div>
  );
}
