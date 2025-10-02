import { Shield, Heart, Brain, Users, Bone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ColoredIcon } from "@/components/ui/colored-icon";

const features = [
  {
    icon: Shield,
    title: "Quality Assurance",
    description:
      "Rigorous testing and quality control processes ensure the highest standards of pharmaceutical excellence.",
  },
  {
    icon: Bone,
    title: "Research & Innovation",
    description:
      "Cutting-edge research facilities and innovative approaches to developing life-changing medications.",
  },
  {
    icon: Heart,
    title: "Patient-Centric",
    description:
      "Every decision we make is guided by our commitment to improving patient outcomes and quality of life.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "World-class scientists, researchers, and healthcare professionals dedicated to pharmaceutical excellence.",
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

export const Features = () => {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Why Choose Snufi Pharmaceutical
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our commitment to excellence, innovation, and patient care sets us
            apart in the pharmaceutical industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-6">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
                  <ColoredIcon
                    Icon={feature.icon}
                    color={
                      index === 0
                        ? "sky"
                        : index === 1
                        ? "emerald"
                        : index === 2
                        ? "rose"
                        : "violet"
                    }
                    size={24}
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
