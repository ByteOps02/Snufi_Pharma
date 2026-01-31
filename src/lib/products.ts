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
  }
];
