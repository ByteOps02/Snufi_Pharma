import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import heroImage from "@/assets/hero-pharmaceutical.jpg";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export const Hero = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const handleExploreProducts = () => {
    navigate("/products");
  };

  const handleLearnMore = () => {
    navigate("/about");
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0"
      >
        <img
          src={heroImage}
          alt="Modern pharmaceutical laboratory"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </motion.div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <motion.div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-secondary-light" />
            <span className="text-sm text-white/90">Pioneering Pharmaceutical Excellence Since 2016</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Advancing
            <span className="block text-secondary-light">Healthcare</span>
            Innovation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"
          >
            Snufi Pharmaceutical is dedicated to developing innovative
            medicines that improve lives worldwide. With over a decade of
            excellence, we continue to push the boundaries of medical science.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-4 shadow-xl hover:shadow-2xl transition-shadow"
              onClick={handleExploreProducts}
            >
              Explore Products
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary hover:border-white bg-transparent backdrop-blur-sm"
              onClick={handleLearnMore}
            >
              Learn More
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-lg px-8 py-4 text-white hover:bg-white/20"
            >
              <Play className="mr-2" size={20} />
              Watch Video
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center gap-8 mt-12 flex-wrap"
          >
            <div className="text-white/90">
              <div className="text-3xl font-bold">2M+</div>
              <div className="text-sm">Lives Improved</div>
            </div>
            <div className="text-white/90">
              <div className="text-3xl font-bold">25+</div>
              <div className="text-sm">Products</div>
            </div>
            <div className="text-white/90">
              <div className="text-3xl font-bold">3+</div>
              <div className="text-sm">Countries</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
