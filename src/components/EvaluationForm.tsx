import React, { useState, useMemo } from 'react';
import { EvaluationState, Score, Competence } from '../types';
import { SCORE_LABELS, STUDENTS_YEAR_1, STUDENTS_YEAR_2, STUDENTS_YEAR_3 } from '../constants';
import { FileText, ArrowLeft, Download } from 'lucide-react';
import { generatePDF } from '../utils/pdfGenerator';
import { motion } from 'motion/react';

interface EvaluationFormProps {
  state: EvaluationState;
  competences: Competence[];
  onUpdate: (newState: EvaluationState) => void;
  onBack: () => void;
}

export const EvaluationForm: React.FC<EvaluationFormProps> = ({ state, competences, onUpdate, onBack }) => {
  const handleInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onUpdate({
      ...state,
      studentInfo: { ...state.studentInfo, [name]: value }
    });
  };

  const handleScoreChange = (competenceId: string, score: Score) => {
    const newEvals = state.evaluations.map(ev => 
      ev.competenceId === competenceId ? { ...ev, score } : ev
    );
    onUpdate({ ...state, evaluations: newEvals });
  };

  const handleNoteChange = (competenceId: string, notes: string) => {
    const newEvals = state.evaluations.map(ev => 
      ev.competenceId === competenceId ? { ...ev, notes } : ev
    );
    onUpdate({ ...state, evaluations: newEvals });
  };

  const average = useMemo(() => {
    const validScores = state.evaluations
      .filter(ev => ev.score !== 'NV')
      .map(ev => ev.score as number);
    
    if (validScores.length === 0) return 'N/A';
    const sum = validScores.reduce((acc, curr) => acc + curr, 0);
    return (sum / validScores.length).toFixed(2);
  }, [state.evaluations]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto p-4 md:p-8"
    >
      <div className="flex items-center justify-between mb-8">
        <button 
          onClick={onBack}
          className="flex items-center text-slate-600 hover:text-red-600 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Torna alla selezione
        </button>
        <div className="text-right">
          <h2 className="text-2xl font-serif italic text-slate-800">Scheda di Valutazione</h2>
          <p className="text-slate-500">{state.year}° Anno di Corso</p>
        </div>
      </div>

      {/* Student Info Section */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Nome Studente</label>
          <input
            type="text"
            name="name"
            list="student-names"
            value={state.studentInfo.name}
            onChange={handleInfoChange}
            placeholder="Inserisci nome e cognome"
            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-red-100 focus:border-red-400 outline-none transition-all"
          />
          {state.year && (
            <datalist id="student-names">
              {(state.year === 1 ? STUDENTS_YEAR_1 : state.year === 2 ? STUDENTS_YEAR_2 : STUDENTS_YEAR_3).map(name => (
                <option key={name} value={name} />
              ))}
            </datalist>
          )}
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Tutor Clinico</label>
          <input
            type="text"
            name="tutor"
            value={state.studentInfo.tutor}
            onChange={handleInfoChange}
            placeholder="Nome del tutor"
            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-red-100 focus:border-red-400 outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Reparto</label>
          <input
            type="text"
            name="ward"
            value={state.studentInfo.ward}
            onChange={handleInfoChange}
            placeholder="Unità operativa"
            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-red-100 focus:border-red-400 outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Periodo Tirocinio</label>
          <input
            type="text"
            name="period"
            value={state.studentInfo.period}
            onChange={handleInfoChange}
            placeholder="es. Gennaio - Febbraio 2024"
            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-red-100 focus:border-red-400 outline-none transition-all"
          />
        </div>
      </div>

      {/* Competences Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-8">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-bottom border-slate-200">
                <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider w-1/4">Competenza</th>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider w-1/4">Valutazione</th>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider w-1/2">Note del Tutor</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {competences.map((comp) => {
                const evalRow = state.evaluations.find(e => e.competenceId === comp.id)!;
                return (
                  <tr key={comp.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-4">
                      <div className="text-xs font-serif italic text-slate-400 mb-1">{comp.category}</div>
                      <div className="text-sm font-medium text-slate-700 leading-relaxed">{comp.description}</div>
                    </td>
                    <td className="p-4">
                      <select
                        value={evalRow.score}
                        onChange={(e) => {
                          const val = e.target.value;
                          handleScoreChange(comp.id, val === 'NV' ? 'NV' : parseInt(val) as Score);
                        }}
                        className="w-full p-2 bg-white border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-red-100 focus:border-red-300 outline-none"
                      >
                        {Object.entries(SCORE_LABELS).map(([val, label]) => (
                          <option key={val} value={val}>{val} - {label}</option>
                        ))}
                      </select>
                    </td>
                    <td className="p-4">
                      <textarea
                        value={evalRow.notes}
                        onChange={(e) => handleNoteChange(comp.id, e.target.value)}
                        placeholder="Inserisci osservazioni..."
                        rows={2}
                        className="w-full p-2 bg-slate-50/50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-red-100 focus:border-red-300 outline-none resize-none"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer / Summary */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-slate-900 text-white p-8 rounded-2xl shadow-lg">
        <div className="mb-6 md:mb-0">
          <div className="text-slate-400 text-sm uppercase tracking-widest mb-1">Media Valutazione</div>
          <div className="text-5xl font-serif italic">{average}</div>
        </div>
        <button
          onClick={() => generatePDF(state, competences, average)}
          className="flex items-center px-8 py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-red-50 hover:text-red-700 hover:shadow-[0_0_20px_rgba(220,38,38,0.2)] transition-all shadow-md active:scale-95"
        >
          <Download className="w-5 h-5 mr-3" />
          Genera Report PDF
        </button>
      </div>
    </motion.div>
  );
};
