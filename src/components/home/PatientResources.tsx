import { motion } from "framer-motion";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, Video, HelpCircle, Download, ArrowRight } from "lucide-react";
import { ColoredIcon } from "@/components/ui/colored-icon";

const PatientResources = () => {
  const resources = [
    {
      icon: BookOpen,
      title: "Patient Education",
      description: "Comprehensive guides about conditions, treatments, and medications",
      count: "50+ Articles",
      color: "sky" as const,
      bgColor: "bg-sky-100 dark:bg-sky-900/20",
    },
    {
      icon: Video,
      title: "Video Library",
      description: "Educational videos explaining medical procedures and medication usage",
      count: "20+ Videos",
      color: "emerald" as const,
      bgColor: "bg-emerald-100 dark:bg-emerald-900/20",
    },
    {
      icon: FileText,
      title: "Medication Guides",
      description: "Detailed information about proper medication use and side effects",
      count: "30+ Guides",
      color: "violet" as const,
      bgColor: "bg-violet-100 dark:bg-violet-900/20",
    },
    {
      icon: HelpCircle,
      title: "FAQs",
      description: "Answers to commonly asked questions about our products and services",
      count: "100+ Questions",
      color: "amber" as const,
      bgColor: "bg-amber-100 dark:bg-amber-900/20",
    },
  ];

  const popularTopics = [
    "Understanding Clinical Trials",
    "Managing Chronic Conditions",
    "Medication Safety Tips",
    "Treatment Options Overview",
    "Side Effects Management",
    "Patient Support Programs",
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Patient Resources & Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empowering patients with knowledge and support for better health outcomes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full cursor-pointer group">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-sm ${resource.bgColor} group-hover:scale-110 transition-transform`}>
                  <ColoredIcon Icon={resource.icon} color={resource.color} size={24} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{resource.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  {resource.description}
                </p>
                <div className="text-sm font-medium text-primary">{resource.count}</div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 h-full">
              <h3 className="text-2xl font-bold mb-4">Popular Topics</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {popularTopics.map((topic, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-2 text-sm text-left p-3 rounded-lg hover:bg-muted transition-colors group"
                  >
                    <ArrowRight className="h-4 w-4 text-primary flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                    <span className="text-muted-foreground group-hover:text-foreground">{topic}</span>
                  </motion.button>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 h-full bg-gradient-to-br from-primary/5 to-secondary/5">
              <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
              <p className="text-muted-foreground mb-6">
                Our patient support team is available to answer your questions
                and provide personalized assistance.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Patient Support Line</div>
                    <div className="text-sm text-muted-foreground">1-800-SNUFI-HELP</div>
                    <div className="text-xs text-muted-foreground">Mon-Fri: 8AM - 8PM EST</div>
                  </div>
                </div>
                <Button className="w-full" size="lg">
                  Contact Patient Support
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  <Download className="h-4 w-4 mr-2" />
                  Download Resource Guide
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PatientResources;
