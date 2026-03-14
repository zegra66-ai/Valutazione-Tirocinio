import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { EvaluationState, Competence } from '../types';
import { SCORE_LABELS } from '../constants';

export const generatePDF = (state: EvaluationState, competences: Competence[], average: string) => {
  const doc = new jsPDF();
  const { studentInfo, year } = state;

  // Header
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('UNIVERSITA\' DEL SALENTO', 105, 15, { align: 'center' });
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.text('POLO DIDATTICO "CARD. G. PANICO" TRICASE (LE)', 105, 22, { align: 'center' });
  
  doc.setLineWidth(0.5);
  doc.line(14, 28, 196, 28);

  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('Report Valutazione Tirocinio Clinico', 105, 40, { align: 'center' });
  
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.text(`Studente: ${studentInfo.name}`, 14, 55);
  doc.text(`Tutor: ${studentInfo.tutor}`, 14, 62);
  doc.text(`Reparto: ${studentInfo.ward}`, 14, 69);
  doc.text(`Periodo: ${studentInfo.period}`, 14, 76);
  doc.text(`Anno di Corso: ${year}° Anno`, 14, 83);
  doc.text(`Media Finale: ${average}`, 14, 90);

  // Table
  const tableData = state.evaluations.map((evalRow) => {
    const comp = competences.find(c => c.id === evalRow.competenceId);
    return [
      comp?.category || '',
      comp?.description || '',
      evalRow.score === 'NV' ? 'NV' : evalRow.score.toString(),
      evalRow.notes || ''
    ];
  });

  autoTable(doc, {
    startY: 100,
    head: [['Categoria', 'Competenza', 'Punteggio', 'Note']],
    body: tableData,
    theme: 'grid',
    headStyles: { fillColor: [44, 62, 80] },
    columnStyles: {
      0: { cellWidth: 30 },
      1: { cellWidth: 70 },
      2: { cellWidth: 25 },
      3: { cellWidth: 60 },
    },
  });

  // Footer
  const finalY = (doc as any).lastAutoTable.finalY + 20;
  doc.text('Firma Tutor: _________________________', 14, finalY);
  doc.text('Firma Studente: ______________________', 120, finalY);

  doc.save(`Valutazione_${studentInfo.name.replace(/\s+/g, '_')}_Anno${year}.pdf`);
};
