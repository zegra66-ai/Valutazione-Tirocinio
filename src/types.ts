export type Year = 1 | 2 | 3;

export type Score = 'NV' | 1 | 2 | 3 | 4 | 5;

export interface Competence {
  id: string;
  category: string;
  description: string;
}

export interface EvaluationRow {
  competenceId: string;
  score: Score;
  notes: string;
}

export interface StudentInfo {
  name: string;
  tutor: string;
  ward: string;
  period: string;
}

export interface EvaluationState {
  studentInfo: StudentInfo;
  year: Year | null;
  evaluations: EvaluationRow[];
}
