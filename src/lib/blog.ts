export interface Post {
  id: string;
  title: string;
  date: string;
  category: string;
  tags: string[];
  excerpt: string;
  readTime: string;
  content: string;
}

export const blogPosts: Post[] = [
  {
    id: "rebranding-announcement",
    title: "Sunfi Pharmaceuticals Rebrands to Snufi Pharma",
    date: "2025-09-16",
    category: "Company News",
    tags: ["Branding", "Corporate"],
    excerpt:
      "We are excited to announce our strategic rebranding from Sunfi Pharmaceuticals to Snufi Pharma, reflecting our evolution and commitment to innovation in the pharmaceutical industry.",
    readTime: "2 min read",
    content: `
<p>We are thrilled to announce a significant milestone in our journey. Sunfi Pharmaceuticals is now Snufi Pharma. This rebranding is not just a change of name but a reaffirmation of our commitment to pioneering pharmaceutical solutions that enhance the quality of life for patients worldwide.</p>

<p>Our new identity, Snufi Pharma, represents our core values of innovation, integrity, and patient-centricity. It reflects our evolution from a promising startup to a leading player in the pharmaceutical industry, known for our cutting-edge research and high-quality products.</p>

<h2>Why the Change?</h2>
<p>The decision to rebrand was driven by our desire to create a stronger, more unified brand that resonates with our national audience. The name Snufi is inspired by our mission to bring comfort and relief to patients, embodying the warmth and care that are at the heart of everything we do.</p>

<h2>What's Next?</h2>
<p>As Snufi Pharma, we will continue to push the boundaries of medical science. Our focus remains on developing innovative treatments for a wide range of diseases, with a particular emphasis on cardiovascular, neurological, and orthopedic conditions. We are investing heavily in our research and development capabilities to bring new, life-changing medications to market.</p>

<p>We are grateful to our partners, healthcare professionals, and patients for their unwavering support. We look forward to continuing our journey together as Snufi Pharma, a name that will be synonymous with trust, quality, and innovation.</p>
`,
  },
  {
    id: "cdsco-approval-cardiomax",
    title:
      "Snufi Pharmaceutical Receives CDSCO Approval for New Cardiovascular Drug",
    date: "2025-09-15",
    category: "Regulatory",
    tags: ["CDSCO", "Cardiology", "Product"],
    excerpt:
      "CardioMax Pro receives CDSCO approval for treating hypertension, marking a significant milestone in cardiovascular care.",
    readTime: "3 min read",
    content: `
<p>We are proud to announce that our new cardiovascular drug, CardioMax Pro, has received CDSCO approval for the treatment of hypertension. This is a landmark achievement for Snufi Pharma and a testament to our relentless pursuit of innovation in cardiovascular medicine.</p>

<p>CardioMax Pro is a next-generation medication that offers a novel approach to managing high blood pressure. In clinical trials, it has demonstrated superior efficacy and a favorable safety profile compared to existing treatments. We believe that CardioMax Pro has the potential to transform the lives of millions of patients suffering from hypertension.</p>

<h2>A New Hope for Patients</h2>
<p>Hypertension, or high blood pressure, is a leading cause of cardiovascular disease, including heart attacks and strokes. With the approval of CardioMax Pro, we are providing healthcare professionals with a powerful new tool to help their patients achieve better blood pressure control and reduce their risk of cardiovascular events.</p>

<p>We are committed to making CardioMax Pro accessible to patients who need it most. We are working closely with healthcare providers and payers to ensure a smooth and successful launch. We are confident that CardioMax Pro will become a cornerstone of hypertension management and a symbol of our commitment to improving global health.</p>
`,
  },
  {
    id: "alzheimers-research-partnership",
    title:
      "Partnership with Leading Research Institute for Alzheimer's Treatment",
    date: "2025-08-21",
    category: "Partnership",
    tags: ["R&D", "Neurology", "Partnership"],
    excerpt:
      "Collaborative research initiative aims to develop breakthrough treatments for neurodegenerative diseases.",
    readTime: "5 min read",
    content: `
<p>Snufi Pharma is excited to announce a strategic partnership with a leading research institute to accelerate the development of new treatments for Alzheimer's disease. This collaboration brings together our expertise in drug development with the institute's deep knowledge of neuroscience and neurodegenerative diseases.</p>

<p>Alzheimer's disease is a devastating condition that affects millions of people worldwide. There is a critical need for new therapies that can slow down or halt the progression of the disease. Through this partnership, we aim to make significant strides in the fight against Alzheimer's and bring hope to patients and their families.</p>

<h2>A Collaborative Approach to Innovation</h2>
<p>Our joint research team will focus on identifying and validating new drug targets, developing novel therapeutic approaches, and conducting clinical trials to evaluate the safety and efficacy of new treatments. We are confident that this collaborative model will foster innovation and accelerate the translation of scientific discoveries into life-changing medicines.</p>

<p>This partnership is a reflection of our long-term commitment to tackling the world's most pressing health challenges. We believe that by working together, we can make a meaningful difference in the lives of patients with Alzheimer's disease and other neurodegenerative conditions.</p>
`,
  },
  {
    id: "carbon-neutral-manufacturing-2027",
    title: "Sustainability Initiative: Carbon-Neutral Manufacturing by 2027",
    date: "2025-08-05",
    category: "Sustainability",
    tags: ["Sustainability", "Corporate"],
    excerpt:
      "Snufi commits to achieving carbon-neutral manufacturing operations across all facilities worldwide.",
    readTime: "4 min read",
    content: `
<p>At Snufi Pharma, we are deeply committed to protecting the environment and operating in a sustainable manner. We are proud to announce our ambitious goal of achieving carbon-neutral manufacturing operations across all our facilities by 2027.</p>

<p>This initiative is a key component of our corporate social responsibility strategy. We believe that it is our duty to minimize our environmental impact and contribute to a healthier planet for future generations. We are investing in renewable energy, energy efficiency, and other green technologies to achieve our carbon-neutral goal.</p>

<h2>Our Path to Sustainability</h2>
<p>Our sustainability roadmap includes a range of measures, such as:</p>
<ul>
  <li>Transitioning to 100% renewable electricity</li>
  <li>Improving energy efficiency in our manufacturing processes</li>
  <li>Reducing water consumption and waste generation</li>
  <li>Implementing a circular economy approach to our supply chain</li>
</ul>

<p>We are confident that through these efforts, we can achieve our goal of carbon-neutral manufacturing by 2027. We are committed to being a leader in sustainability in the pharmaceutical industry and to creating a positive impact on the environment and society.</p>
`,
  },
];