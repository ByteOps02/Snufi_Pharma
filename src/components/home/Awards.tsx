import { Award, Star, CheckCircle, Leaf } from "lucide-react";
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
    icon: Award,
  },
  {
    title: "Innovation in Medicine 2023",
    organization: "Global Health Foundation",
    year: "2023",
    description:
      "Awarded for our groundbreaking research and development of new therapies that address unmet medical needs.",
    icon: Star,
  },
  {
    title: "Best Manufacturing Practices 2022",
    organization: "Quality Assurance Council",
    year: "2022",
    description:
      "Honored for our state-of-the-art manufacturing facilities and our adherence to the highest quality standards.",
    icon: CheckCircle,
  },
  {
    title: "Sustainability Leadership 2022",
    organization: "Green Pharma Initiative",
    year: "2022",
    description:
      "Acknowledged for our commitment to environmental sustainability and our efforts to reduce our carbon footprint.",
    icon: Leaf,
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

export const Awards = () => {
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
            Awards & Recognition
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our commitment to excellence has been recognized by leading
            industry organizations worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-6 text-center h-full flex flex-col">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <ColoredIcon
                    Icon={award.icon}
                    color={
                      index === 0
                        ? "amber"
                        : index === 1
                        ? "sky"
                        : index === 2
                        ? "emerald"
                        : "primary"
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
