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
import VideoShowcase from "@/components/home/VideoShowcase";
import InteractiveTimeline from "@/components/home/InteractiveTimeline";
import NewsletterSection from "@/components/home/NewsletterSection";
import PatientResources from "@/components/home/PatientResources";
import TrustedPartners from "@/components/home/TrustedPartners";

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
      <VideoShowcase />
      <Testimonials />
      <TrustedPartners />
      <LatestNews />
      <Awards />
      <Sustainability />
      <Community />
      <NewsletterSection />
    </motion.div>
  );
};

export default Home;
