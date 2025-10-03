import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FileText, Calendar, FlaskConical, Heart, Brain, Shield } from "lucide-react";

const HealthcareProfessionals = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const resources = [
    {
      id: 1,
      title: "Product Monograph: SNF-001",
      description: "Detailed information on SNF-001, including indications, dosage, and safety.",
      icon: FileText,
      link: "#",
    },
    {
      id: 2,
      title: "Clinical Study Report: SNF-002 Phase 2",
      description: "Comprehensive report on the efficacy and safety findings from the SNF-002 Phase 2 trial.",
      icon: FileText,
      link: "#",
    },
    {
      id: 3,
      title: "Prescribing Information: All Products",
      description: "Access prescribing information for our full portfolio of pharmaceutical products.",
      icon: FileText,
      link: "#",
    },
  ];

  const events = [
    {
      id: 1,
      title: "Webinar: Advances in Oncology Treatment",
      date: "October 26, 2024",
      description: "Join our experts to discuss the latest breakthroughs in oncology and SNF-001.",
      icon: Calendar,
      link: "#",
    },
    {
      id: 2,
      title: "CME Symposium: Managing Autoimmune Diseases",
      date: "November 15, 2024",
      description: "A comprehensive symposium on new strategies for managing rheumatoid arthritis.",
      icon: Calendar,
      link: "#",
    },
  ];

  const therapeuticAreas = [
    {
      name: "Oncology",
      description: "Dedicated to developing innovative treatments for various cancers.",
      icon: FlaskConical,
    },
    {
      name: "Cardiology",
      description: "Pioneering solutions for cardiovascular health and disease prevention.",
      icon: Heart,
    },
    {
      name: "Neurology",
      description: "Advancing therapies for neurological disorders, including rare conditions.",
      icon: Brain,
    },
    {
      name: "Immunology",
      description: "Researching novel approaches to treat autoimmune and inflammatory diseases.",
      icon: Shield,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-background to-muted/20"
    >
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        className="py-12 bg-gradient-subtle"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold text-primary mb-4"
            >
              Information for Healthcare Professionals
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Access exclusive medical resources, clinical data, and continuing education programs to support your practice.
            </motion.p>
          </div>
        </div>
      </motion.section>

      <div className="container mx-auto px-4 py-16">
        {/* Resources Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-primary mb-10">Resources for Healthcare Professionals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => (
              <Card key={resource.id} className="flex flex-col h-full p-6">
                <CardHeader className="flex-row items-center space-x-4 p-0 mb-4">
                  <resource.icon className="w-8 h-8 text-primary" />
                  <CardTitle className="text-xl font-semibold">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow p-0 mb-4">
                  <p className="text-sm text-muted-foreground">{resource.description}</p>
                </CardContent>
                <Button asChild className="w-full">
                  <a href={resource.link} target="_blank" rel="noopener noreferrer">Download</a>
                </Button>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Medical Information Request Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-primary mb-10">Medical Information Request</h2>
          <Card className="max-w-3xl mx-auto p-8">
            <p className="text-muted-foreground mb-6 text-center">
              Our medical information team is available to answer your specific questions about our products.
              Please fill out the form below or contact us directly.
            </p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" />
                </div>
              </div>
              <div>
                <Label htmlFor="profession">Profession</Label>
                <Input id="profession" placeholder="e.g., Physician, Pharmacist" />
              </div>
              <div>
                <Label htmlFor="question">Your Question</Label>
                <Textarea id="question" placeholder="Type your question here..." rows={5} />
              </div>
              <Button type="submit" className="w-full">Submit Request</Button>
            </form>
          </Card>
        </motion.section>

        {/* CME & Events Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-primary mb-10">CME & Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event) => (
              <Card key={event.id} className="flex flex-col h-full p-6">
                <CardHeader className="flex-row items-center space-x-4 p-0 mb-4">
                  <event.icon className="w-8 h-8 text-primary" />
                  <CardTitle className="text-xl font-semibold">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow p-0 mb-4">
                  <p className="text-sm text-muted-foreground mb-2">{event.description}</p>
                  <p className="text-sm font-medium text-primary"><Calendar className="inline-block w-4 h-4 mr-1" /> {event.date}</p>
                </CardContent>
                <Button asChild variant="outline" className="w-full">
                  <a href={event.link} target="_blank" rel="noopener noreferrer">Learn More</a>
                </Button>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Our Therapeutic Areas Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-primary mb-10">Our Therapeutic Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {therapeuticAreas.map((area, index) => (
              <Card key={index} className="p-6 text-center">
                <area.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl font-semibold mb-2">{area.name}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">{area.description}</CardDescription>
              </Card>
            ))}
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default HealthcareProfessionals;