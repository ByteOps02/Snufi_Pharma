import { ChevronRight } from "lucide-react";
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

export const CTA = () => {
  const navigate = useNavigate();

  const handleContactUs = () => {
    navigate("/contact");
  };

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="py-12 bg-gradient-subtle"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
          Ready to Partner With Us?
        </h2>
        <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
          Join thousands of healthcare professionals who trust Snufi
          Pharmaceutical for quality medicines and innovative solutions.
        </p>
        <Button
          size="lg"
          className="text-lg px-8 py-4"
          onClick={handleContactUs}
        >
          Contact Us Today
          <ChevronRight className="ml-2" size={20} />
        </Button>
      </div>
    </motion.section>
  );
};
