import { Heart, Users, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ColoredIcon } from "@/components/ui/colored-icon";

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

export const Community = () => {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-12 bg-accent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Community Engagement
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are committed to improving the health and well-being of the
            communities we serve through various health programs and initiatives.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="p-6">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
                <ColoredIcon Icon={Heart} color="rose" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Health Check-up Camps
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We regularly organize free health check-up camps in rural and
                underserved areas to provide access to basic healthcare services.
              </p>
            </Card>
          </motion.div>
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="p-6">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
                <ColoredIcon Icon={Users} color="violet" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Disease Awareness Programs
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We conduct awareness programs to educate people about various
                diseases, their prevention, and treatment options.
              </p>
            </Card>
          </motion.div>
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="p-6">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
                <ColoredIcon Icon={Globe} color="sky" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Global Health Initiatives
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We partner with global health organizations to support
                initiatives that aim to improve health outcomes in developing
                countries.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
