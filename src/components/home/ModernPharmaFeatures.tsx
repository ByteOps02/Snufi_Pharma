import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Stethoscope, 
  Users, 
  Search, 
  ArrowRight,
  Sparkles
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export const ModernPharmaFeatures = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Search,
      title: "Drug Interaction Checker",
      description: "Advanced tool to check for potential drug interactions and ensure patient safety.",
      badge: "Patient Safety",
      color: "bg-blue-500/10 text-blue-600",
      path: "/products"
    },
    {
      icon: Users,
      title: "Clinical Trial Finder",
      description: "Find clinical trials that may be right for you with our comprehensive database.",
      badge: "Research",
      color: "bg-green-500/10 text-green-600",
      path: "/clinical-trials"
    },
    {
      icon: Stethoscope,
      title: "Healthcare Professional Portal",
      description: "Exclusive access to medical resources, clinical data, and continuing education.",
      badge: "Medical Resources",
      color: "bg-purple-500/10 text-purple-600",
      path: "/healthcare-professionals"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-primary" />
            <Badge variant="secondary" className="text-sm">
              New Features
            </Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Modern Pharmaceutical Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the future of pharmaceutical services with our cutting-edge digital tools 
            designed for patients, healthcare professionals, and researchers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                    onClick={() => navigate(feature.path)}>
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  
                  <div className="space-y-2">
                    <Badge variant="outline" className="text-xs">
                      {feature.badge}
                    </Badge>
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                    <span>Explore</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">
                Transforming Healthcare Through Innovation
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our digital-first approach combines cutting-edge technology with pharmaceutical expertise 
                to deliver personalized, accessible, and effective healthcare solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => navigate("/products")}
                  className="group"
                >
                  Explore Our Products
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => navigate("/clinical-trials")}
                >
                  View Clinical Trials
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
