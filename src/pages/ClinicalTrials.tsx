import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ColoredIcon } from "@/components/ui/colored-icon";
import {
  Users,
  Award,
  Globe,
  TrendingUp,
  FlaskConical,
  CalendarDays,
  MapPin,
  Stethoscope,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ClinicalTrials = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const stats = [
    {
      icon: Users,
      value: "15,000+",
      label: "Patients Enrolled",
      description: "Across all our clinical trials",
      color: "emerald" as const,
    },
    {
      icon: Award,
      value: "50+",
      label: "Active Studies",
      description: "Currently recruiting participants",
      color: "amber" as const,
    },
    {
      icon: Globe,
      value: "25",
      label: "Countries",
      description: "Global research network",
      color: "sky" as const,
    },
    {
      icon: TrendingUp,
      value: "95%",
      label: "Success Rate",
      description: "Trial completion rate",
      color: "violet" as const,
    },
  ];

  const currentTrials = [
    {
      id: 1,
      title: "Phase 3 Study for Novel Oncology Treatment",
      description:
        "A randomized, double-blind, placebo-controlled study to evaluate the efficacy and safety of SNF-001 in patients with advanced solid tumors.",
      status: "Recruiting",
      therapeuticArea: "Oncology",
      location: "Multiple Sites Worldwide",
      startDate: "2024-03-15",
    },
    {
      id: 2,
      title: "Phase 2 Trial for Autoimmune Disease",
      description:
        "Investigating the safety and preliminary efficacy of SNF-002 in adults with moderate to severe rheumatoid arthritis.",
      status: "Active, Not Recruiting",
      therapeuticArea: "Immunology",
      location: "North America, Europe",
      startDate: "2023-09-01",
    },
    {
      id: 3,
      title: "Phase 1 Study on Rare Neurological Disorder",
      description:
        "First-in-human study to assess the safety, tolerability, and pharmacokinetics of SNF-003 in healthy volunteers and patients with a rare neurological condition.",
      status: "Completed",
      therapeuticArea: "Neurology",
      location: "United States",
      startDate: "2023-01-10",
    },
  ];

  const faqs = [
    {
      question: "What is a clinical trial?",
      answer:
        "A clinical trial is a research study conducted in people to evaluate a medical, surgical, or behavioral intervention. It is the primary way that researchers find out if a new treatment, like a new drug, diet, or medical device, is safe and effective in people.",
    },
    {
      question: "Who can participate in a clinical trial?",
      answer:
        "Each clinical trial has specific eligibility criteria based on factors such as age, gender, type and stage of disease, previous treatment history, and other medical conditions. These criteria help ensure the safety of participants and the validity of the research results.",
    },
    {
      question: "What are the potential benefits of participating?",
      answer:
        "Participants may gain access to new research treatments before they are widely available, receive expert medical care for their condition, and help others by contributing to medical research.",
    },
    {
      question: "What are the potential risks?",
      answer:
        "Clinical trials do carry risks, including potential side effects from the treatment, the treatment not being effective, or the need for more frequent medical procedures. These risks are explained in detail during the informed consent process.",
    },
    {
      question: "Is my participation confidential?",
      answer:
        "Yes, participant confidentiality is strictly maintained. Your personal information will be protected, and research results are typically reported in a way that does not identify individual participants.",
    },
  ];

  // ✅ FIX: Explicitly typed as Variants
  const sectionVariants: Variants = {
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-background to-muted/20"
    >
      {/* Hero Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        className="py-12 bg-gradient-subtle"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-primary mb-4"
          >
            Clinical Trials
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Advancing medical science through rigorous clinical research. Find
            trials that may be right for you.
          </motion.p>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow h-full"
              >
                <div className="flex justify-center mb-4">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm ${
                      stat.color === "emerald"
                        ? "bg-emerald-100 dark:bg-emerald-900/20"
                        : stat.color === "amber"
                        ? "bg-amber-100 dark:bg-amber-900/20"
                        : stat.color === "sky"
                        ? "bg-sky-100 dark:bg-sky-900/20"
                        : "bg-violet-100 dark:bg-violet-900/20"
                    }`}
                  >
                    <ColoredIcon Icon={stat.icon} color={stat.color} size={24} />
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Trials Section */}
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
              Our Current Clinical Trials
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our ongoing research initiatives driving medical innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {currentTrials.map((trial) => (
              <motion.div
                key={trial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6}}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <Card className="flex flex-col h-full p-8">
                  <div className="flex-grow">
                    <Badge
                      variant={trial.status === "Recruiting" ? "default" : "secondary"}
                      className="mb-4"
                    >
                      {trial.status}
                    </Badge>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {trial.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {trial.description}
                    </p>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <FlaskConical className="w-4 h-4 mr-2 text-primary" />
                        <span className="font-medium text-foreground mr-2">Therapeutic Area:</span>
                        {trial.therapeuticArea}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-2 text-primary" />
                        <span className="font-medium text-foreground mr-2">Location:</span>
                        {trial.location}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <CalendarDays className="w-4 h-4 mr-2 text-primary" />
                        <span className="font-medium text-foreground mr-2">Start Date:</span>
                        {trial.startDate}
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-border">
                    <Button className="w-full" size="lg">
                      Learn More & View Eligibility
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Trials
            </Button>
          </div>
        </div>
      </motion.section>

      {/* How to Participate Section */}
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
              How to Participate
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Joining a clinical trial is a significant decision. Here’s how you can start.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <ColoredIcon
                Icon={Users}
                color="sky"
                size={48}
                className="mx-auto mb-6"
              />
              <h3 className="text-xl font-bold mb-2">1. Understand Eligibility</h3>
              <p className="text-muted-foreground">
                Review the specific criteria for each trial to see if you qualify.
              </p>
            </Card>
            <Card className="p-8 text-center">
              <ColoredIcon
                Icon={Stethoscope}
                color="emerald"
                size={48}
                className="mx-auto mb-6"
              />
              <h3 className="text-xl font-bold mb-2">2. Consult Your Doctor</h3>
              <p className="text-muted-foreground">
                Discuss clinical trial participation with your healthcare provider.
              </p>
            </Card>
            <Card className="p-8 text-center">
              <ColoredIcon
                Icon={MapPin}
                color="amber"
                size={48}
                className="mx-auto mb-6"
              />
              <h3 className="text-xl font-bold mb-2">3. Contact Us</h3>
              <p className="text-muted-foreground">
                Reach out to our research team for more information.
              </p>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button size="lg">Contact Our Research Team</Button>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 bg-muted/30"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-4">
                <div
                  className="flex justify-between items-center cursor-pointer font-semibold text-lg"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  {faq.question}
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 transition-transform",
                      openFaq === index ? "rotate-180" : ""
                    )}
                  />
                </div>
                <AnimatePresence>
                  {openFaq === index && (
                                      <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                        className="overflow-hidden"
                                      >
                                        <div className="pt-4 mt-4 border-t text-muted-foreground">
                                          {faq.answer}
                                        </div>
                                      </motion.div>                  )}
                </AnimatePresence>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Participate Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-secondary/5">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground">
                Why Participate in Clinical Trials?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Your participation can make a significant impact on the future of medicine.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">Access to New Treatments</h3>
                  <p className="text-muted-foreground">
                    Get early access to potentially breakthrough therapies.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">Expert Medical Care</h3>
                  <p className="text-muted-foreground">
                    Receive close monitoring from leading medical professionals.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">Advance Medical Science</h3>
                  <p className="text-muted-foreground">
                    Contribute to research that may help future patients.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default ClinicalTrials;
