export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  strength: string;
  form: string;
  indication: string;
  status: string;
  approvalDate: string;
  patients: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "CardioMax Pro",
    category: "cardiovascular",
    description: "Advanced cardiovascular medication for hypertension management with proven efficacy and minimal side effects.",
    strength: "10mg, 20mg, 40mg",
    form: "Tablets",
    indication: "Hypertension, Heart Failure",
    status: "Available",
    approvalDate: "2023-03-15",
    patients: "50,000+"
  },
  {
    id: 2,
    name: "NeuroGuard",
    category: "neurological",
    description: "Innovative neurological treatment for cognitive enhancement and neuroprotection in aging populations.",
    strength: "5mg, 10mg",
    form: "Capsules",
    indication: "Cognitive Decline, Dementia",
    status: "Available",
    approvalDate: "2023-01-20",
    patients: "25,000+"
  },
  {
    id: 3,
    name: "ImmunoShield",
    category: "immunology",
    description: "Cutting-edge immunomodulator designed to enhance immune system response and autoimmune condition management.",
    strength: "25mg, 50mg",
    form: "Injection",
    indication: "Autoimmune Disorders",
    status: "Clinical Trial",
    approvalDate: "Expected 2024",
    patients: "1,200+"
  },
  {
    id: 4,
    name: "OrthoJoint",
    category: "orthology",
    description: "Precision orthology medication targeting specific joint pathways with a personalized treatment approach.",
    strength: "100mg, 200mg",
    form: "Tablets",
    indication: "Various Joint Disorders",
    status: "Available",
    approvalDate: "2022-11-10",
    patients: "35,000+"
  },
  {
    id: 5,
    name: "CardioFlow",
    category: "cardiovascular",
    description: "Next-generation anticoagulant with improved safety profile and reduced bleeding risk.",
    strength: "2.5mg, 5mg",
    form: "Tablets",
    indication: "Atrial Fibrillation, DVT",
    status: "Available",
    approvalDate: "2023-06-05",
    patients: "40,000+"
  },
  {
    id: 6,
    name: "NeuroBalance",
    category: "neurological",
    description: "Advanced treatment for movement disorders with enhanced patient quality of life outcomes.",
    strength: "0.5mg, 1mg, 2mg",
    form: "Extended Release Tablets",
    indication: "Parkinson's Disease",
    status: "Available",
    approvalDate: "2023-04-12",
    patients: "15,000+"
  },
  {
    id: 7,
    name: "DermaClear",
    category: "dermatology",
    description: "Advanced topical formulation for treating severe acne and inflammatory skin conditions.",
    strength: "1% w/w",
    form: "Gel",
    indication: "Acne Vulgaris",
    status: "Available",
    approvalDate: "2023-08-10",
    patients: "60,000+"
  },
  {
    id: 8,
    name: "Gastrolife",
    category: "gastroenterology",
    description: "Proton pump inhibitor for effective relief of acid reflux and peptic ulcers.",
    strength: "40mg",
    form: "Tablets",
    indication: "GERD, Peptic Ulcer",
    status: "Available",
    approvalDate: "2022-05-15",
    patients: "100,000+"
  },
  {
    id: 9,
    name: "FlexiJoint",
    category: "pain management",
    description: "Non-steroidal anti-inflammatory drug (NSAID) for rapid pain relief in arthritis.",
    strength: "50mg, 100mg",
    form: "Capsules",
    indication: "Osteoarthritis, Rheumatoid Arthritis",
    status: "Available",
    approvalDate: "2023-02-28",
    patients: "80,000+"
  },
  {
    id: 10,
    name: "BreathEasy",
    category: "respiratory",
    description: "Bronchodilator syrup for relief of bronchospasm in asthma and COPD.",
    strength: "2mg/5ml",
    form: "Syrup",
    indication: "Asthma, COPD",
    status: "Available",
    approvalDate: "2023-09-01",
    patients: "45,000+"
  },
  {
    id: 11,
    name: "GlucoControl",
    category: "anti-diabetic",
    description: "Oral anti-diabetic agent for effective blood sugar management in Type 2 Diabetes.",
    strength: "500mg, 850mg",
    form: "Tablets",
    indication: "Type 2 Diabetes Mellitus",
    status: "Available",
    approvalDate: "2022-12-10",
    patients: "120,000+"
  },
  {
    id: 12,
    name: "NeuroCalm",
    category: "neurological",
    description: "Anxiolytic medication for short-term relief of anxiety symptoms.",
    strength: "0.25mg, 0.5mg",
    form: "Tablets",
    indication: "Anxiety Disorders",
    status: "Available",
    approvalDate: "2023-11-05",
    patients: "30,000+"
  },
  {
    id: 14,
    name: "NeuroRegen",
    category: "neurological",
    description: "Investigational drug for neural repair in neurodegenerative disorders.",
    strength: "10mg",
    form: "Capsules",
    indication: "Alzheimer's Disease",
    status: "Clinical Trial",
    approvalDate: "Expected 2027",
    patients: "200+"
  },
  {
    id: 15,
    name: "GastroRelief-XR",
    category: "gastroenterology",
    description: "Extended-release formulation for refractory IBS management.",
    strength: "N/A",
    form: "Tablets",
    indication: "IBS-D",
    status: "Clinical Trial",
    approvalDate: "Expected 2025",
    patients: "800+"
  },
  {
    id: 16,
    name: "Doloflam-P",
    category: "pain management",
    description: "Combined Aceclofenac and Paracetamol tablets for relief from pain and inflammation.",
    strength: "100mg + 325mg",
    form: "Tablets",
    indication: "Pain, Inflammation, Fever",
    status: "Available",
    approvalDate: "2023-05-20",
    patients: "200,000+"
  },
  {
    id: 17,
    name: "AirClear-M",
    category: "respiratory",
    description: "Levocetirizine and Montelukast combination for effective management of allergic rhinitis and asthma.",
    strength: "5mg + 10mg",
    form: "Tablets",
    indication: "Allergic Rhinitis, Asthma",
    status: "Available",
    approvalDate: "2023-01-15",
    patients: "150,000+"
  },
  {
    id: 18,
    name: "OrthoGel",
    category: "pain management",
    description: "Topical pain relief gel containing Diclofenac, Linseed Oil, Methyl Salicylate, and Menthol.",
    strength: "30g Tube",
    form: "Gel",
    indication: "Musculoskeletal Pain, Sprains",
    status: "Available",
    approvalDate: "2022-11-30",
    patients: "300,000+"
  },
  {
    id: 19,
    name: "KofRest-D",
    category: "respiratory",
    description: "Cough suppressant syrup with Dextromethorphan, Phenylephrine, and Chlorpheniramine.",
    strength: "100ml",
    form: "Syrup",
    indication: "Dry Cough, Cold",
    status: "Available",
    approvalDate: "2023-08-05",
    patients: "250,000+"
  }
];
