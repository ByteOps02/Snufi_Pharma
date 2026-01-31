import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ColoredIcon } from "@/components/ui/colored-icon";
import { FileText, Calendar, FlaskConical, Heart, Brain, Shield } from "lucide-react";
import { cardVariants, sectionVariants } from "@/lib/animations";

const HealthcareProfessionals = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Using centralized sectionVariants from @/lib/animations for consistency

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
      color: "sky" as const,
    },
    {
      name: "Cardiology",
      description: "Pioneering solutions for cardiovascular health and disease prevention.",
      icon: Heart,
      color: "rose" as const,
    },
    {
      name: "Neurology",
      description: "Advancing therapies for neurological disorders, including rare conditions.",
      icon: Brain,
      color: "indigo" as const,
    },
    {
      name: "Immunology",
      description: "Researching novel approaches to treat autoimmune and inflammatory diseases.",
      icon: Shield,
      color: "emerald" as const,
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

      {/* Resources Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Clinical & Scientific Resources
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Access our library of clinical data, publications, and product information.
            </p>
          </div>
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
                <Button asChild className="w-full mt-auto">
                  <a href={resource.link} target="_blank" rel="noopener noreferrer">Download</a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Medical Information Request Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 bg-muted/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="pr-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Medical Information Request
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                Our dedicated medical information team is available to answer your specific questions about our products, clinical data, and research.
              </p>
              <p className="text-muted-foreground">
                Please fill out the form to submit your inquiry, and one of our specialists will get back to you promptly. For urgent requests, please contact us directly.
              </p>
            </div>
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-center mb-6">Submit Your Inquiry</h3>
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
                <Button type="submit" className="w-full" size="lg">Submit Request</Button>
              </form>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* CME & Events Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Continuing Medical Education & Events
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay informed with our latest webinars, symposiums, and educational events.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                <Button asChild variant="outline" className="w-full mt-auto">
                  <a href={event.link} target="_blank" rel="noopener noreferrer">Learn More</a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Our Therapeutic Areas Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 bg-muted/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Focus on Therapeutic Areas
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our research and development efforts are concentrated in key areas of unmet medical need.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {therapeuticAreas.map((area, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm ${area.color === "sky"
                        ? "bg-sky-100 dark:bg-sky-900/20"
                        : area.color === "rose"
                          ? "bg-rose-100 dark:bg-rose-900/20"
                          : area.color === "indigo"
                            ? "bg-indigo-100 dark:bg-indigo-900/20"
                            : "bg-emerald-100 dark:bg-emerald-900/20"
                      }`}
                  >
                    <ColoredIcon Icon={area.icon} color={area.color} size={32} />
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold mb-2">{area.name}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">{area.description}</CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default HealthcareProfessionals;