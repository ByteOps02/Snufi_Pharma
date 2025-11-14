import { useEffect, lazy, Suspense } from "react";
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

// Lazy load heavy components
const VideoShowcase = lazy(() => import("@/components/home/VideoShowcase"));
const InteractiveTimeline = lazy(() => import("@/components/home/InteractiveTimeline"));
const NewsletterSection = lazy(() => import("@/components/home/NewsletterSection"));
const PatientResources = lazy(() => import("@/components/home/PatientResources"));
const TrustedPartners = lazy(() => import("@/components/home/TrustedPartners"));

// Loading skeleton component
const SkeletonLoader = () => (
  <div className="w-full h-64 bg-muted animate-pulse rounded-lg" />
);

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
      <Suspense fallback={<SkeletonLoader />}>
        <VideoShowcase />
      </Suspense>
      <Testimonials />
      <Suspense fallback={<SkeletonLoader />}>
        <TrustedPartners />
      </Suspense>
      <LatestNews />
      <Awards />
      <Suspense fallback={<SkeletonLoader />}>
        <Sustainability />
      </Suspense>
      <Community />
      <Suspense fallback={<SkeletonLoader />}>
        <NewsletterSection />
      </Suspense>
    </motion.div>
  );
};

export default Home;
