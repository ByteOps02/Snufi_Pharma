import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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

export const Careers = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="py-12 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
          Join Our Team
        </h2>
        <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
          We are always looking for passionate and talented individuals to join
          our team. Explore our open positions and start your career at Snufi
          Pharmaceutical.
        </p>
        <Button
          size="lg"
          className="text-lg px-8 py-4"
          onClick={() => navigate("/careers")}
        >
          Explore Careers
          <ArrowRight className="ml-2" size={20} />
        </Button>
      </div>
    </motion.section>
  );
};
