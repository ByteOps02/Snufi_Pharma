import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ColoredIcon } from "@/components/ui/colored-icon";
import { Users, Award, Globe, TrendingUp, FlaskConical, CalendarDays, MapPin, Stethoscope, ChevronDown } from "lucide-react";
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
      color: "emerald" as const
    },
    {
      icon: Award,
      value: "50+",
      label: "Active Studies",
      description: "Currently recruiting participants",
      color: "amber" as const
    },
    {
      icon: Globe,
      value: "25",
      label: "Countries",
      description: "Global research network",
      color: "sky" as const
    },
    {
      icon: TrendingUp,
      value: "95%",
      label: "Success Rate",
      description: "Trial completion rate",
      color: "violet" as const
    }
  ];

  const currentTrials = [
    {
      id: 1,
      title: "Phase 3 Study for Novel Oncology Treatment",
      description: "A randomized, double-blind, placebo-controlled study to evaluate the efficacy and safety of SNF-001 in patients with advanced solid tumors.",
      status: "Recruiting",
      therapeuticArea: "Oncology",
      location: "Multiple Sites Worldwide",
      startDate: "2024-03-15",
    },
    {
      id: 2,
      title: "Phase 2 Trial for Autoimmune Disease",
      description: "Investigating the safety and preliminary efficacy of SNF-002 in adults with moderate to severe rheumatoid arthritis.",
      status: "Active, Not Recruiting",
      therapeuticArea: "Immunology",
      location: "North America, Europe",
      startDate: "2023-09-01",
    },
    {
      id: 3,
      title: "Phase 1 Study on Rare Neurological Disorder",
      description: "First-in-human study to assess the safety, tolerability, and pharmacokinetics of SNF-003 in healthy volunteers and patients with a rare neurological condition.",
      status: "Completed",
      therapeuticArea: "Neurology",
      location: "United States",
      startDate: "2023-01-10",
    },
  ];

  const faqs = [
    {
      question: "What is a clinical trial?",
      answer: "A clinical trial is a research study conducted in people to evaluate a medical, surgical, or behavioral intervention. It is the primary way that researchers find out if a new treatment, like a new drug, diet, or medical device, is safe and effective in people."
    },
    {
      question: "Who can participate in a clinical trial?",
      answer: "Each clinical trial has specific eligibility criteria based on factors such as age, gender, type and stage of disease, previous treatment history, and other medical conditions. These criteria help ensure the safety of participants and the validity of the research results."
    },
    {
      question: "What are the potential benefits of participating?",
      answer: "Participants may gain access to new research treatments before they are widely available, receive expert medical care for their condition, and help others by contributing to medical research."
    },
    {
      question: "What are the potential risks?",
      answer: "Clinical trials do carry risks, including potential side effects from the treatment, the treatment not being effective, or the need for more frequent medical procedures. These risks are explained in detail during the informed consent process."
    },
    {
      question: "Is my participation confidential?",
      answer: "Yes, participant confidentiality is strictly maintained. Your personal information will be protected, and research results are typically reported in a way that does not identify individual participants."
    }
  ];

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
              Clinical Trials
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Advancing medical science through rigorous clinical research. Find trials that may be right for you.
            </motion.p>
          </div>
        </div>
      </motion.section>

      <div className="container mx-auto px-4 py-16">
        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm ${
                  stat.color === "emerald"
                    ? "bg-emerald-100 dark:bg-emerald-900/20"
                    : stat.color === "amber"
                    ? "bg-amber-100 dark:bg-amber-900/20"
                    : stat.color === "sky"
                    ? "bg-sky-100 dark:bg-sky-900/20"
                    : "bg-violet-100 dark:bg-violet-900/20"
                }`}>
                  <ColoredIcon
                    Icon={stat.icon}
                    color={stat.color}
                    size={24}
                  />
                </div>
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </Card>
          ))}
        </motion.div>

        {/* Current Clinical Trials Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-primary mb-10">Our Current Clinical Trials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentTrials.map((trial) => (
              <Card key={trial.id} className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold mb-2">{trial.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground flex items-center"><FlaskConical className="w-4 h-4 mr-2" />{trial.therapeuticArea}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-foreground mb-4">{trial.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center"><Badge variant="secondary" className="mr-2"><CalendarDays className="w-3 h-3 mr-1" /> Start Date:</Badge> {trial.startDate}</div>
                    <div className="flex items-center"><Badge variant="secondary" className="mr-2"><MapPin className="w-3 h-3 mr-1" /> Location:</Badge> {trial.location}</div>
                    <div className="flex items-center"><Badge variant="secondary" className="mr-2"><Stethoscope className="w-3 h-3 mr-1" /> Status:</Badge> <Badge variant={trial.status === "Recruiting" ? "default" : "outline"}>{trial.status}</Badge></div>
                  </div>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button className="w-full">Learn More</Button>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" size="lg">View All Trials</Button>
          </div>
        </motion.section>

        {/* How to Participate Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-primary mb-10">How to Participate</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <CardHeader>
                <ColoredIcon Icon={Users} color="sky" size={48} className="mx-auto mb-4" />
                <CardTitle>1. Understand Eligibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Review the specific criteria for each trial to see if you qualify.</p>
              </CardContent>
            </Card>
            <Card className="p-6 text-center">
              <CardHeader>
                <ColoredIcon Icon={Stethoscope} color="emerald" size={48} className="mx-auto mb-4" />
                <CardTitle>2. Consult Your Doctor</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Discuss clinical trial participation with your healthcare provider.</p>
              </CardContent>
            </Card>
            <Card className="p-6 text-center">
              <CardHeader>
                <ColoredIcon Icon={MapPin} color="amber" size={48} className="mx-auto mb-4" />
                <CardTitle>3. Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Reach out to our research team for more information or to express interest.</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-10">
            <Button size="lg">Contact Our Research Team</Button>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-primary mb-10">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-4">
                <div
                  className="flex justify-between items-center cursor-pointer font-semibold text-lg"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  {faq.question}
                  <ChevronDown
                    className={cn("h-5 w-5 transition-transform", openFaq === index ? "rotate-180" : "")}
                  />
                </div>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="mt-2 text-muted-foreground"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Original Additional Information (Why Participate) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-16"
        >
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-secondary/5">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Why Participate in Clinical Trials?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="space-y-2">
                  <h3 className="font-semibold">Access to New Treatments</h3>
                  <p className="text-sm text-muted-foreground">
                    Get early access to potentially breakthrough therapies before they're widely available.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Expert Medical Care</h3>
                  <p className="text-sm text-muted-foreground">
                    Receive close monitoring and care from leading medical professionals and research teams.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Advance Medical Science</h3>
                  <p className="text-sm text-muted-foreground">
                    Contribute to medical research that may help future patients with similar conditions.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ClinicalTrials;