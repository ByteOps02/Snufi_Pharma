import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Hero,
  Stats,
  Features,
  TherapeuticAreas,
  Testimonials,
  LatestNews,
  Awards,
  Sustainability,
  Community,
} from "@/components/home";

const Home = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col"
    >
      <Hero />
      <Stats />
      <Features />
      <TherapeuticAreas />
      <Testimonials />
      <LatestNews />
      <Awards />
      <Sustainability />
      <Community />

    </motion.div>
  );
};

export default Home;
