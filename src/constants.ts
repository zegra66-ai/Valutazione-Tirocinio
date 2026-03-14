import { Competence, Year } from './types';

export const COMPETENCES: Record<Year, Competence[]> = {
  1: [
    { id: '1-1', category: 'Assistenza di Base', description: 'Esegue correttamente l\'igiene parziale e totale del paziente' },
    { id: '1-2', category: 'Assistenza di Base', description: 'Rileva e registra correttamente i parametri vitali' },
    { id: '1-3', category: 'Assistenza di Base', description: 'Applica le procedure per il rifacimento del letto (occupato/libero)' },
    { id: '1-4', category: 'Sicurezza', description: 'Applica correttamente le precauzioni standard e il lavaggio delle mani' },
    { id: '1-5', category: 'Sicurezza', description: 'Identifica e previene i rischi ambientali (cadute, errori)' },
    { id: '1-6', category: 'Relazione', description: 'Stabilisce una comunicazione efficace e rispettosa con il paziente' },
    { id: '1-7', category: 'Etica', description: 'Rispetta la privacy e la dignità della persona assistita' },
    { id: '1-8', category: 'Organizzazione', description: 'Dimostra puntualità e rispetto delle regole del reparto' },
  ],
  2: [
    { id: '2-1', category: 'Area Clinica', description: 'Prepara e somministra la terapia farmacologica (orale, topica, IM, SC)' },
    { id: '2-2', category: 'Area Clinica', description: 'Gestisce correttamente gli accessi venosi periferici e le infusioni' },
    { id: '2-3', category: 'Area Clinica', description: 'Esegue medicazioni semplici e riconosce i segni di infezione' },
    { id: '2-4', category: 'Ragionamento Clinico', description: 'Identifica i problemi prioritari del paziente utilizzando il metodo scientifico' },
    { id: '2-5', category: 'Area Clinica', description: 'Esegue correttamente il cateterismo vescicale estemporaneo/permanente' },
    { id: '2-6', category: 'Relazione', description: 'Gestisce la relazione con i familiari in modo professionale' },
    { id: '2-7', category: 'Collaborazione', description: 'Collabora attivamente con l\'equipe multiprofessionale' },
    { id: '2-8', category: 'Etica', description: 'Applica i principi del Codice Deontologico nella pratica quotidiana' },
  ],
  3: [
    { id: '3-1', category: 'Area Critica/Complessa', description: 'Gestisce l\'assistenza in situazioni di emergenza/urgenza' },
    { id: '3-2', category: 'Area Clinica', description: 'Gestisce accessi venosi centrali e nutrizione parenterale' },
    { id: '3-3', category: 'Area Clinica', description: 'Esegue medicazioni complesse e gestione di drenaggi' },
    { id: '3-4', category: 'Leadership', description: 'Pianifica e coordina l\'assistenza per un gruppo di pazienti' },
    { id: '3-5', category: 'Educazione', description: 'Realizza interventi di educazione terapeutica al paziente e caregiver' },
    { id: '3-6', category: 'Ricerca', description: 'Utilizza le migliori evidenze scientifiche (EBN) nelle scelte assistenziali' },
    { id: '3-7', category: 'Etica', description: 'Affronta i dilemmi etici legati al fine vita e al consenso informato' },
    { id: '3-8', category: 'Professionalità', description: 'Dimostra autonomia decisionale e responsabilità professionale' },
  ],
};

export const STUDENTS_YEAR_1: string[] = [
  "BRANCA FRANCESCA", "CALO' GIACOMO", "CALÒ MIRELLA PIA", "CAPUTO MARIA STELLA", "CAPUTO ASIA",
  "CARBONE VERONICA", "CARLUCCIO CRISTIAN", "CHIRIATTI GIADA", "CINO FRANCESCA", "CIRIOLO VITTORIA",
  "COIA DONATO", "COLUCCI CARLOTTA", "CONGEDO AURORA", "CONTE ALESSIA", "CORDELLA LAURA",
  "COSI ROBERTA", "CUCINELLI ADRIANA", "CUPPONE AURORA", "CURSANO CHRISTIAN", "DANILUC IRINA",
  "DE PAOLIS BENEDETTA", "DE ROSA CLAUDIA", "DE SIENA CHIARA FRANCESCA", "DE VINCENZIS ILENIA",
  "DEI MONTEDURI DE NIGRIS FATIMA", "DELL'ANNA ALICE", "DI MURO GIORGIA", "ELIA MARIKA", "ERROI MANUELA",
  "FERNANDEZ SUSEL", "FIORITO BEATRICE", "GALATI DALILA", "GATTO ELEONORA", "GIANGRECO SARA",
  "GIANNONE NICOLE", "GIANNOTTA MARTA", "GIARACUNI LORENZO", "INVIDIA MARIA CHIARA", "IOLE SARA",
  "LECCI GIULIA", "LEO GIANMARCO", "LIVIELLO SARA", "LONGO FEDERICA", "MADAGHIELE MARIA",
  "MADARO RAFFAELLA", "MAGLIE ANDREA", "MARIANO ELISA MARIA", "MARRA ALICE FRANCESCA", "MARTELLA ANTONIO",
  "MASELLI VALERIA", "MASTROLEO MARTINA", "MAURO DONATO", "MELE AURORA ALESSANDRA", "MIGLIETTA FRANCESCA",
  "MISCIALI ALESSIA MARIA", "MORLEO MARIA LUCIA", "MOSCAGIURI MAURO", "MOSCARA BENEDETTA", "MUSCELLA ANDREA",
  "MY GIULIO", "NAZZARIO MARTINA", "NEGRO MARTINA", "NICOLARDI MATTEO", "NUZZACHI DAVIDE", "NUZZO SOPHIA",
  "ORUMA GLORIA NANJALA", "PALADINI ELISA", "PALADINI CATERINA", "PALMA GIULIA", "PARROTTO CARLOTTA",
  "PASTORE MARTINA", "PRIMICERI GIACOMO", "QUARANTA CARLOTTA", "ROLLO AURORA", "RUSSO ANDREA",
  "SALZANO AURORA", "SCARASCIA FRANCESCO", "SCHIRINZI ALBERTO", "SERIO ALESSANDRO",
  "SPEDICATO LUDOVICA ANTONIA", "TENUZZO GRETA", "VADRUCCI ILARIA GRAZIA", "VALENTE SOFIA",
  "VALGUARNERA SARA MARIA", "VANTAGGIATO SERENA", "VANTAGGIATO GIULIA", "ZAMINGA ALESSIA", "SERRA MARTA",
  "VALENTINO SILVIA", "TONDO MARTINA", "AMALANATHAN MARY AMALA NIROJINI", "CONSO CIRO ALESSIO",
  "MITA GRETA", "RIZZO LARA", "PUCE DESIREE", "ESPOSITO MICHELA PIA"
];

export const STUDENTS_YEAR_2: string[] = [
  "ALEMANNO CLELIA", "ARDITO MATTIA", "BIANCO ROSA", "BUFFO EMANUELA", "CALDARARO SALVATORE",
  "CARBONE MARIAPIA", "CARROZZO REBECCA", "CARROZZO LAURA", "CAZZATO SIMONE", "CICCARDI MARIA GRAZIA",
  "COLACI MARTINA", "COLACI FEDERICO", "COLÌ GRETA", "COLUCCIA SILVIA", "COLUCCIA FRANCESCA",
  "CONTE VALENTINA", "CORCIULO FEDERICA", "CUCURACHI MARINA", "D'AMATO DAVIDE", "D'ARIA GIULIA",
  "D'AURELIO ALICE", "DE CATALDIS CHIARA G.", "DE FRANCESCO BIANCA TERESA", "DI GLORIA ILARIA",
  "DINOI NOEMI", "DITO VERONICA", "FANIGLIULO GIULIA", "GHERASIM OANA ANAREEA", "GIANNICO SERENA",
  "GIANNONE FRANCESCO", "GIANNOTTA MARIA N.", "GRECO SIMONA", "GRECO GIORGIA", "HYSA ALBANA",
  "INGROSSO ELISA", "INGROSSO AURORA", "KWITCHEU NDJONDJI", "SANDIE GERALDINE", "LIGUORI GABRIEL",
  "LONGO ALESSIA", "LONGO SERENA", "LUCATELLI VALENTINA", "MACRÌ EUGENIO", "MALAGNINO MATTEO",
  "MALERBA GIULIA", "MANNARA BEATRICE M.", "MARIANO REBECCA RITA", "MARTELLA ALBERTO",
  "MARTIRE ALESSIA", "MARTIRE DANIELE", "MARZO NOEMI", "MELE RAFFAELE", "MELELEO NICOLE",
  "MELLONE SWAMI", "MERICO MATTEO", "MEROLA GIUSEPPE", "MIGLIACCIO MICHELA", "MIGLIETTA CHIARA",
  "MILANESE ANDREA", "MILELLO LETIZIA", "MONTAGNA ANNA LUCIA", "MONTINARO GIULIA", "MUSARAJ MAJRA",
  "NORMANNO ELENA", "ORTIS MARCO", "PALMA ALESSIA", "PALMA COSIMO GIOVANNI", "PANICO MARTA",
  "PAPADIA GIULIA", "PELLEGRINO FEDERICA", "PERROTTA DANIEL A.", "PIERRI MARCO S.",
  "PIZZOLANTE HELENA", "PONZETTA VITO", "QUARTA CATERINA", "RAGGIO BENEDETTA", "RAMBALDI STELLA",
  "RIZZO STEFANIA", "RIZZO ALESSIA", "ROMANO REBECCA", "ROSA RICCARDO", "RUGGERI NICCOLO'",
  "RUGGIERO CLARISSA", "RUSSO REBECCA", "SCARCELLA LORENZO", "STEFANIZZI FABRIZIO",
  "STEFANO SOFIA", "STELLA CHIARA", "STRAFELLA SIMONA", "SUDOSI JUANA", "TOMA MICHELE",
  "TOMA MARTINA", "TRANE SARA", "TUNNO ANNALISA", "TURCO MARTA", "VIVA NICOLE", "DE IACO BENEDETTA"
];

export const STUDENTS_YEAR_3: string[] = [
  "D'AMBLE MICHELA", "BALDASSARRE GIORGIA MA", "ANTONAZZO ILARIA", "CORNACCHIA FRANCESCA", "CASTRÌ DONATO",
  "CHITTANI MIRIAM", "BALDASSARRE MARIKA", "BERTOLINI LETIZIA", "COPPOLA DONATO", "CONOCI FRANCESCA ROMAI",
  "ANTONAZZO REBECCA", "CINO FABIANA", "BUFANO GIORGIA", "CAROPPO SERENA", "BARONE MARIA AURORA",
  "DANESE BENEDETTA", "CORTESE GIORGIA", "CARROZZO GAIA", "COTA SHIRLEY", "BAGLIVO MARIANGELA",
  "CORDELLA YLENIA", "CENZENTO MARIACRISTINA", "BISANTI ROCCO", "BRAMATO MATTEO", "BRANCA ANNA",
  "BLEVE ALESSANDRA", "BALDASSARRE GIORGIA M.", "D'ALESSANDRIS LUCIA A.", "D'AQUINO ROBERTA",
  "DE FRANCESCO ELISABETTA", "DE GIORGI ALESSANDRO", "DE LORENZIS ALESSIA", "DE MATTEIS GAIA MARIA",
  "DE NUCCIO ANTONIO", "DE SALVO VERONICA", "DE VITIS TATIANA", "DI DONFRANCESCO GIORGIA",
  "DONGIOVANNI GABRIELE", "FERSINO PASQUALE", "FRACASSO AURORA", "FRASCARO SILVIA", "GHERASIM OANA ANDREEA",
  "GIACOVAZZO ANGELICA", "GIANNATTASIO GIULIA", "GIANNETTA MAURO", "GRANDE ILARIA", "GUIDA REBECCA",
  "INVIDIA CHIARA", "ISACCO ELEONORA", "LIONETTO ALESSIO", "MANCO ALBERTO", "MARENACI PIETRO",
  "MARGARITO MARIKA", "MARGIOTTA EMANUELE", "MARIANO MARTINA MARIA", "MARIELLO CHIARA", "MARZO MARIA",
  "MAURO IRIDE", "MELLONE CHRISTIN", "MERICO GIADA", "MICELLO MATTEO", "MUCCIO CHIARA",
  "OLIVARES MARTINA ANTON", "PAGLIARA GIULIA", "PALOMBA GIORGIA GABRIE", "PALUMBO DE RAMUNDO TATIANA",
  "PALUMBO GLORIA", "PANICO CLAUDIA", "PAPERI ANTONIO G.", "PERDOMO YENYS", "PERRONE AURORA",
  "PICCI ANNA RITA", "PINTAUDI VALENTINA", "PREITE FRANCESCA", "PUSCIO LAVINIA", "QUARTA PIERPAOLO",
  "RIZZO ELISA", "RIZZO MARTINA", "SCARDIA VALENTINA", "SCARDINO SOFIA", "SCOLOZZI DILETTA",
  "SHIKHOUNI AGNESE", "SICILIANO CHIARA", "SPERTI EMANUELE", "SPORTA CAPUTI ANNA C.", "SURDO ANDREA",
  "TARANTINO MICHELE", "TUNDO SIMONA", "TURI ALICE", "URSO GIULIA", "URSO MARTINA",
  "VETERE FABIANA", "VETRUGNO NICOLE", "ZACHEO GIULIO"
];

export const SCORE_LABELS: Record<string, string> = {
  'NV': 'Non Valutabile',
  '1': 'Gravemente Insufficiente',
  '2': 'Parzialmente Adeguato',
  '3': 'Adeguato',
  '4': 'Buono',
  '5': 'Eccellente',
};
