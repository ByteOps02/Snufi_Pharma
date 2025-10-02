import { Leaf, Globe, Target, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ColoredIcon } from "@/components/ui/colored-icon";

const sustainabilityInitiatives = [
  {
    title: "Carbon Neutral Manufacturing",
    description:
      "Achieving net-zero carbon emissions across all production facilities",
    progress: 75,
    icon: Leaf,
  },
  {
    title: "Water Conservation",
    description:
      "Implementing advanced water recycling systems in manufacturing",
    progress: 90,
    icon: Globe,
  },
  {
    title: "Waste Reduction",
    description: "Zero waste to landfill initiative across all operations",
    progress: 85,
    icon: Target,
  },
  {
    title: "Renewable Energy",
    description: "Transitioning to 100% renewable energy sources",
    progress: 60,
    icon: Zap,
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

export const Sustainability = () => {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-12 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Sustainability & Corporate Responsibility
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Committed to environmental stewardship and social responsibility
            while advancing healthcare innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sustainabilityInitiatives.map((initiative, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-6 h-full flex flex-col">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <ColoredIcon
                    Icon={initiative.icon}
                    color={
                      index === 0
                        ? "emerald"
                        : index === 1
                        ? "sky"
                        : index === 2
                        ? "violet"
                        : "amber"
                    }
                    size={24}
                  />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {initiative.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                  {initiative.description}
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span className="font-semibold">
                      {initiative.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${initiative.progress}%` }}
                    ></div>
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
