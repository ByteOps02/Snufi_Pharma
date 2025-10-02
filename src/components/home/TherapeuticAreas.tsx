import { Shield, Heart, Brain, Bone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ColoredIcon } from "@/components/ui/colored-icon";

const therapeuticAreas = [
  {
    name: "Cardiovascular",
    icon: Heart,
    description:
      "Advanced treatments for heart disease, hypertension, and other vascular conditions. Our focus is on developing innovative therapies that improve cardiovascular outcomes and enhance patient quality of life.",
    productCount: 12,
    keyProducts: ["CardioMax Pro", "CardioFlow", "VascularGuard"],
  },
  {
    name: "Neurological",
    icon: Brain,
    description:
      "Innovative solutions for a wide range of neurological disorders, including Alzheimer's, Parkinson's, and epilepsy. We are committed to advancing neuroscience and improving the lives of patients with brain and nervous system conditions.",
    productCount: 8,
    keyProducts: ["NeuroGuard", "NeuroBalance", "CogniMax"],
  },
  {
    name: "Orthology",
    icon: Bone,
    description:
      "Precision treatments for joint disorders, arthritis, and other orthopedic conditions. Our goal is to restore mobility, reduce pain, and improve the overall musculoskeletal health of our patients.",
    productCount: 15,
    keyProducts: ["OrthoJoint", "JointFlex", "CartilageCare"],
  },
  {
    name: "Immunology",
    icon: Shield,
    description:
      "Cutting-edge therapies for autoimmune diseases and immune system modulation. We are dedicated to developing treatments that restore immune balance and improve the lives of patients with complex immune-mediated conditions.",
    productCount: 6,
    keyProducts: ["ImmunoShield", "AutoImmune Pro", "ImmuneBalance"],
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const TherapeuticAreas = () => {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-12 bg-accent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Therapeutic Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We specialize in developing innovative treatments across multiple
            therapeutic areas, addressing critical healthcare needs worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {therapeuticAreas.map((area, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-6 text-center flex flex-col h-full">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <ColoredIcon
                    Icon={area.icon}
                    color={
                      area.name === "Cardiovascular"
                        ? "rose"
                        : area.name === "Neurological"
                        ? "indigo"
                        : area.name === "Orthology"
                        ? "amber"
                        : "emerald"
                    }
                    size={32}
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {area.name}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {area.description}
                </p>
                <div className="space-y-2 mt-auto">
                  <div className="text-2xl font-bold text-primary">
                    {area.productCount}+ Products
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Key: {area.keyProducts.join(", ")}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
