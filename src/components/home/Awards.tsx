import { Trophy, Medal, Ribbon, Gem } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ColoredIcon } from "@/components/ui/colored-icon";

const awards = [
  {
    title: "Pharmaceutical Excellence Award 2023",
    organization: "International Pharma Association",
    year: "2023",
    description:
      "Recognized for our outstanding contributions to the pharmaceutical industry and our commitment to innovation and excellence.",
    icon: Trophy,
  },
  {
    title: "Innovation in Medicine 2023",
    organization: "Global Health Foundation",
    year: "2023",
    description:
      "Awarded for our groundbreaking research and development of new therapies that address unmet medical needs.",
    icon: Medal,
  },
  {
    title: "Best Manufacturing Practices 2022",
    organization: "Quality Assurance Council",
    year: "2022",
    description:
      "Honored for our state-of-the-art manufacturing facilities and our adherence to the highest quality standards.",
    icon: Ribbon,
  },
  {
    title: "Sustainability Leadership 2022",
    organization: "Green Pharma Initiative",
    year: "2022",
    description:
      "Acknowledged for our commitment to environmental sustainability and our efforts to reduce our carbon footprint.",
    icon: Gem,
  },
];

import { cardVariants, sectionVariants } from "@/lib/animations";

export const Awards = () => {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-20 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Awards & Recognition
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our commitment to excellence has been recognized by leading
            industry organizations worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-6 text-center h-full flex flex-col">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm ${index === 0
                    ? "bg-amber-100 dark:bg-amber-900/20"
                    : index === 1
                      ? "bg-sky-100 dark:bg-sky-900/20"
                      : index === 2
                        ? "bg-emerald-100 dark:bg-emerald-900/20"
                        : "bg-green-100 dark:bg-green-900/20"
                    }`}
                >
                  <ColoredIcon
                    Icon={award.icon}
                    color={
                      index === 0
                        ? "amber"
                        : index === 1
                          ? "sky"
                          : index === 2
                            ? "emerald"
                            : "emerald"
                    }
                    size={24}
                  />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {award.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {award.organization}
                </p>
                <p className="text-xs text-muted-foreground mb-2 flex-grow">
                  {award.description}
                </p>
                <span className="text-primary font-semibold">{award.year}</span>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
