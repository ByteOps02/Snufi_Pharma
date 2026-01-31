import { useEffect } from "react";
import {
  Coffee,
  Heart,
  Zap,
  Users,
  MapPin,
  Clock,
  DollarSign,
  GraduationCap,
  Award,
  Building,
  Globe,
  TrendingUp,
  Search
} from "lucide-react"; import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ColoredIcon } from "@/components/ui/colored-icon";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import ApplyNowForm from "@/components/forms/ApplyNowForm";
import { motion } from "framer-motion";
import { sectionVariants } from "@/lib/animations";
import { SEOHead } from "@/components/common/SEOHead";

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jobOpenings = [
    {
      id: 1,
      title: "Senior Research Scientist",
      location: "Mumbai, Maharashtra",
      department: "Research & Development",
      type: "Full-time",
      experience: "5+ years",
      salary: "₹18,00,000 - ₹25,00,000",
      description: "Lead innovative drug discovery programs and manage cross-functional research teams.",
      requirements: ["PhD in Chemistry/Biology", "Drug discovery experience", "Leadership skills"],
      posted: "2 days ago"
    },
    {
      id: 2,
      title: "Clinical Trial Manager",
      location: "Hyderabad, Telangana",
      department: "Clinical Operations",
      type: "Full-time",
      experience: "3+ years",
      salary: "₹15,00,000 - ₹20,00,000",
      description: "Oversee Phase II/III clinical trials and ensure regulatory compliance.",
      requirements: ["Clinical research experience", "GCP certification", "Project management"],
      posted: "1 week ago"
    },
    {
      id: 3,
      title: "Regulatory Affairs Specialist",
      location: "New Delhi, Delhi",
      department: "Regulatory Affairs",
      type: "Full-time",
      experience: "2+ years",
      salary: "₹12,00,000 - ₹18,00,000",
      description: "Support regulatory submissions and maintain compliance with FDA requirements.",
      requirements: ["Regulatory experience", "FDA knowledge", "Attention to detail"],
      posted: "3 days ago"
    },
    {
      id: 4,
      title: "Quality Control Analyst",
      location: "Ahmedabad, Gujarat",
      department: "Quality Assurance",
      type: "Full-time",
      experience: "1+ years",
      salary: "₹6,00,000 - ₹9,00,000",
      description: "Perform analytical testing and ensure product quality standards.",
      requirements: ["Analytical chemistry", "GMP knowledge", "Laboratory experience"],
      posted: "5 days ago"
    },
    {
      id: 5,
      title: "Digital Health Product Manager",
      location: "Remote",
      department: "Digital Innovation",
      type: "Full-time",
      experience: "4+ years",
      salary: "₹20,00,000 - ₹30,00,000",
      description: "Drive development of digital health solutions and patient engagement platforms.",
      requirements: ["Product management", "Healthcare technology", "Agile methodology"],
      posted: "1 day ago"
    },
    {
      id: 6,
      title: "Pharmacovigilance Associate",
      location: "Bangalore, Karnataka",
      department: "Safety & Risk Management",
      type: "Full-time",
      experience: "2+ years",
      salary: "₹10,00,000 - ₹15,00,000",
      description: "Monitor drug safety and manage adverse event reporting systems.",
      requirements: ["Pharmacovigilance experience", "Medical writing", "Database management"],
      posted: "4 days ago"
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance plus wellness programs and mental health support.",
      color: "bg-red-500/10 text-red-600"
    },
    {
      icon: Zap,
      title: "Professional Growth",
      description: "Continuous learning opportunities, mentorship programs, and career advancement pathways.",
      color: "bg-yellow-500/10 text-yellow-600"
    },
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description: "Flexible work arrangements, generous PTO, and supportive work environment.",
      color: "bg-orange-500/10 text-orange-600"
    },
    {
      icon: DollarSign,
      title: "Competitive Compensation",
      description: "Market-leading salaries, performance bonuses, and comprehensive benefits package.",
      color: "bg-green-500/10 text-green-600"
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      description: "Tuition reimbursement, conference attendance, and professional certification support.",
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Work on life-changing medicines that improve patient outcomes worldwide.",
      color: "bg-purple-500/10 text-purple-600"
    }
  ];

  const companyStats = [
    { icon: Users, value: "5,000+", label: "Global Employees", color: "text-blue-600" },
    { icon: Globe, value: "25+", label: "Countries", color: "text-green-600" },
    { icon: Award, value: "50+", label: "Industry Awards", color: "text-purple-600" },
    { icon: TrendingUp, value: "15%", label: "Annual Growth", color: "text-orange-600" }
  ];

  const departments = [
    { name: "Research & Development", count: 12, color: "bg-blue-500/10 text-blue-600" },
    { name: "Clinical Operations", count: 8, color: "bg-green-500/10 text-green-600" },
    { name: "Regulatory Affairs", count: 6, color: "bg-purple-500/10 text-purple-600" },
    { name: "Quality Assurance", count: 5, color: "bg-orange-500/10 text-orange-600" },
    { name: "Digital Innovation", count: 4, color: "bg-red-500/10 text-red-600" },
    { name: "Safety & Risk Management", count: 3, color: "bg-indigo-500/10 text-indigo-600" }
  ];

  const cultureValues = [
    {
      title: "Innovation First",
      description: "We encourage creative thinking and breakthrough solutions that advance healthcare.",
      icon: Zap,
      color: "bg-yellow-500/10 text-yellow-600"
    },
    {
      title: "Patient-Centric",
      description: "Every decision we make is guided by our commitment to improving patient outcomes.",
      icon: Heart,
      color: "bg-red-500/10 text-red-600"
    },
    {
      title: "Scientific Excellence",
      description: "We maintain the highest standards of scientific rigor and regulatory compliance.",
      icon: Award,
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      title: "Collaborative Spirit",
      description: "We believe diverse teams and inclusive environments drive the best results.",
      icon: Users,
      color: "bg-green-500/10 text-green-600"
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
        title="Careers"
        description="Join Snufi Pharmaceutical's team of innovators. Explore career opportunities in Research, Clinical Operations, and more across India."
        keywords="pharmaceutical careers, jobs, hiring, India, research scientist, clinical trials, Snufi Pharma careers"
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
              Careers
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Join a team of passionate professionals dedicated to developing life-changing medicines
              and advancing pharmaceutical innovation worldwide.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Company Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm ${stat.label === "Open Positions"
                    ? "bg-sky-100 dark:bg-sky-900/20"
                    : stat.label === "Team Members"
                      ? "bg-emerald-100 dark:bg-emerald-900/20"
                      : stat.label === "Countries"
                        ? "bg-violet-100 dark:bg-violet-900/20"
                        : "bg-amber-100 dark:bg-amber-900/20"
                    }`}>
                    <ColoredIcon
                      Icon={stat.icon}
                      color={
                        stat.label === "Open Positions"
                          ? "sky"
                          : stat.label === "Team Members"
                            ? "emerald"
                            : stat.label === "Countries"
                              ? "violet"
                              : "amber"
                      }
                      size={24}
                    />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Search Section */}
      <section className="py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search positions, departments, or locations..."
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {departments.map((dept) => (
                <Badge key={dept.name} variant="outline" className="cursor-pointer hover:bg-muted">
                  {dept.name} ({dept.count})
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover exciting opportunities to advance your career in pharmaceutical innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}

              >
                <Card className="p-6 h-full">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge variant="secondary">{job.department}</Badge>
                          <Badge variant="outline">{job.type}</Badge>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {job.posted}
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {job.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{job.experience}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-primary" />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building className="h-4 w-4 text-primary" />
                        <span>{job.department}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Key Requirements:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-green-500 mt-1">•</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-2 pt-4">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="flex-1">
                            Apply Now
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-md">
                          <DialogHeader>
                            <DialogTitle>Apply for {job.title}</DialogTitle>
                          </DialogHeader>
                          <ApplyNowForm />
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

      {/* Benefits Section */}
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
              Why Choose Snufi Pharma?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We offer comprehensive benefits and a supportive environment for your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}

              >
                <Card className="p-6 h-full">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-sm ${benefit.title === "Health & Wellness"
                    ? "bg-rose-100 dark:bg-rose-900/20"
                    : benefit.title === "Professional Growth"
                      ? "bg-sky-100 dark:bg-sky-900/20"
                      : benefit.title === "Work-Life Balance"
                        ? "bg-emerald-100 dark:bg-emerald-900/20"
                        : "bg-violet-100 dark:bg-violet-900/20"
                    }`}>
                    <ColoredIcon
                      Icon={benefit.icon}
                      color={
                        benefit.title === "Health & Wellness"
                          ? "rose"
                          : benefit.title === "Professional Growth"
                            ? "sky"
                            : benefit.title === "Work-Life Balance"
                              ? "emerald"
                              : "violet"
                      }
                      size={24}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Culture & Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and define our company culture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cultureValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm ${value.title === "Innovation"
                      ? "bg-sky-100 dark:bg-sky-900/20"
                      : value.title === "Collaboration"
                        ? "bg-emerald-100 dark:bg-emerald-900/20"
                        : value.title === "Excellence"
                          ? "bg-violet-100 dark:bg-violet-900/20"
                          : "bg-amber-100 dark:bg-amber-900/20"
                      }`}>
                      <ColoredIcon
                        Icon={value.icon}
                        color={
                          value.title === "Innovation"
                            ? "sky"
                            : value.title === "Collaboration"
                              ? "emerald"
                              : value.title === "Excellence"
                                ? "violet"
                                : "amber"
                        }
                        size={24}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* CTA section removed per request */}
    </motion.div>
  );
};

export default Careers;
