import { useEffect } from "react";
import {
  TestTube,
  Truck,
  Users,
  Phone,
  FileText,
  Award,
  ArrowRight,
  Shield,
  Clock,
  CheckCircle,
  Factory,
  HeartHandshake,
  Target,
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ColoredIcon } from "@/components/ui/colored-icon";
import { motion } from "framer-motion";
import { sectionVariants } from "@/lib/animations";
import { SEOHead } from "@/components/common/SEOHead";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import GetStartedForm from "@/components/forms/GetStartedForm";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: TestTube,
      title: "Research & Development",
      description: "Comprehensive R&D services from drug discovery to clinical trials, leveraging cutting-edge technology and scientific expertise.",
      features: [
        "Drug Discovery & Design",
        "Preclinical Studies",
        "Clinical Trial Management",
        "Regulatory Submission Support",
        "Biomarker Development",
        "Pharmacokinetic Studies"
      ],
      color: "bg-blue-500/10 text-blue-600",
      stats: { value: "50+", label: "Active Programs" }
    },
    {
      icon: Factory,
      title: "Contract Manufacturing",
      description: "State-of-the-art manufacturing facilities providing high-quality production services for pharmaceutical companies worldwide.",
      features: [
        "API Manufacturing",
        "Finished Dosage Forms",
        "Quality Control Testing",
        "Regulatory Compliance",
        "Scale-up Services",
        "Packaging Solutions"
      ],
      color: "bg-green-500/10 text-green-600",
      stats: { value: "99.9%", label: "Quality Rate" }
    },
    {
      icon: FileText,
      title: "Regulatory Affairs",
      description: "Expert regulatory guidance and support to navigate complex global regulatory requirements and accelerate market access.",
      features: [
        "IND/NDA Submissions",
        "Global Registration",
        "Regulatory Strategy",
        "Compliance Auditing",
        "Post-Market Surveillance",
        "Regulatory Intelligence"
      ],
      color: "bg-purple-500/10 text-purple-600",
      stats: {
        value: "15+",
        label: "States Served",
        icon: MapPin,
        color: "text-blue-600"
      }
    },
    {
      icon: Truck,
      title: "Supply Chain Solutions",
      description: "End-to-end supply chain management ensuring reliable, efficient, and compliant distribution of pharmaceutical products.",
      features: [
        "Global Distribution",
        "Cold Chain Management",
        "Inventory Optimization",
        "Logistics Planning",
        "Track & Trace Systems",
        "Risk Management"
      ],
      color: "bg-orange-500/10 text-orange-600",
      stats: { value: "24/7", label: "Monitoring" }
    },
    {
      icon: HeartHandshake,
      title: "Medical Affairs",
      description: "Scientific communication and medical support services to bridge the gap between research and clinical practice.",
      features: [
        "Medical Information",
        "Scientific Publications",
        "KOL Engagement",
        "Medical Education",
        "Advisory Boards",
        "Real-World Evidence"
      ],
      color: "bg-red-500/10 text-red-600",
      stats: { value: "1000+", label: "HCPs Engaged" }
    },
    {
      icon: Shield,
      title: "Pharmacovigilance",
      description: "Comprehensive safety monitoring and risk management services to ensure patient safety throughout the product lifecycle.",
      features: [
        "Safety Database Management",
        "Adverse Event Reporting",
        "Risk Assessment",
        "Signal Detection",
        "REMS Programs",
        "Safety Communications"
      ],
      color: "bg-indigo-500/10 text-indigo-600",
      stats: { value: "100K+", label: "Safety Reports" }
    }
  ];

  const capabilities = [
    {
      icon: MapPin,
      title: "National Reach",
      description: "Operations across 15+ states with local expertise and international standards",
      bgColor: "bg-blue-100 dark:bg-blue-900/20",
      iconColor: "sky" as const // Changed from blue to sky
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "ISO 9001:2015 certified with 99.9% quality assurance rate",
      bgColor: "bg-green-100 dark:bg-green-900/20",
      iconColor: "emerald" as const // Changed from green to emerald
    },
    {
      icon: Clock,
      title: "Rapid Delivery",
      description: "Accelerated timelines with 30% faster development cycles",
      bgColor: "bg-purple-100 dark:bg-purple-900/20",
      iconColor: "violet" as const // Changed from purple to violet
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "500+ scientists and regulatory experts with decades of experience",
      bgColor: "bg-orange-100 dark:bg-orange-900/20",
      iconColor: "amber" as const // Changed from orange to amber
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description: "Initial assessment of your needs and project requirements",
      icon: Phone
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Custom strategy and timeline development for your project",
      icon: Target
    },
    {
      step: "03",
      title: "Implementation",
      description: "Expert execution with regular progress updates and milestones",
      icon: CheckCircle
    },
    {
      step: "04",
      title: "Delivery & Support",
      description: "Final delivery with ongoing support and maintenance services",
      icon: HeartHandshake
    }
  ];

  // Using centralized sectionVariants from @/lib/animations for consistency

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-background to-muted/20"
    >
      <SEOHead
        title="Services"
        description="Snufi Pharmaceutical offers comprehensive services including R&D, contract manufacturing, regulatory affairs, and supply chain solutions."
        keywords="pharmaceutical services, R&D, contract manufacturing, regulatory affairs, supply chain, Snufi Pharma services"
      />
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
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              From drug discovery to market access, we provide comprehensive pharmaceutical services
              to accelerate your journey from concept to patient.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Capabilities Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center h-full flex flex-col">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm ${capability.bgColor}`}>
                    <ColoredIcon
                      Icon={capability.icon}
                      color={capability.iconColor}
                      size={24}
                    />
                  </div>
                  <h3 className="font-semibold mb-2">{capability.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{capability.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Service Portfolio
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive pharmaceutical services tailored to your specific needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full flex flex-col">
                  <div className="space-y-6 flex-grow">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm ${service.title === "Research & Development"
                          ? "bg-sky-100 dark:bg-sky-900/20"
                          : service.title === "Contract Manufacturing"
                            ? "bg-emerald-100 dark:bg-emerald-900/20"
                            : service.title === "Regulatory Affairs"
                              ? "bg-violet-100 dark:bg-violet-900/20"
                              : "bg-amber-100 dark:bg-amber-900/20"
                          }`}>
                          <ColoredIcon
                            Icon={service.icon}
                            color={
                              service.title === "Research & Development"
                                ? "sky"
                                : service.title === "Contract Manufacturing"
                                  ? "emerald"
                                  : service.title === "Regulatory Affairs"
                                    ? "violet"
                                    : "amber"
                            }
                            size={24}
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="font-bold text-foreground">{service.stats.value}</span>
                            <span>{service.stats.label}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>

                    <div className="space-y-3">
                      <h4 className="font-medium">Key Services:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="flex-1">
                            Get Started
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-md">
                          <DialogHeader>
                            <DialogTitle>Get Started with {service.title}</DialogTitle>
                          </DialogHeader>
                          <GetStartedForm />
                        </DialogContent>
                      </Dialog>
                      <Button variant="outline">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                custom={index}
              >
                <Card className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    {step.step}
                  </div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm ${step.step === "01"
                    ? "bg-sky-100 dark:bg-sky-900/20"
                    : step.step === "02"
                      ? "bg-emerald-100 dark:bg-emerald-900/20"
                      : step.step === "03"
                        ? "bg-violet-100 dark:bg-violet-900/20"
                        : "bg-amber-100 dark:bg-amber-900/20"
                    }`}>
                    <ColoredIcon
                      Icon={step.icon}
                      color={
                        step.step === "01"
                          ? "sky"
                          : step.step === "02"
                            ? "emerald"
                            : step.step === "03"
                              ? "violet"
                              : "amber"
                      }
                      size={24}
                    />
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </Card>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </motion.div>
  );
};

export default Services;
