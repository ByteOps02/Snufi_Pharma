import React from "react";
import { Briefcase, Coffee, Heart, Zap, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ColoredIcon } from "@/components/ui/colored-icon";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import ApplyNowForm from "@/components/forms/ApplyNowForm";
import { motion } from "framer-motion";

const Careers = () => {
  const jobOpenings = [
    {
      title: "Senior Research Scientist",
      location: "New York, NY",
      department: "Research & Development",
    },
    {
      title: "Clinical Trial Manager",
      location: "London, UK",
      department: "Clinical Operations",
    },
    {
      title: "Regulatory Affairs Specialist",
      location: "Washington, D.C.",
      department: "Regulatory Affairs",
    },
    {
      title: "Quality Control Analyst",
      location: "San Francisco, CA",
      department: "Quality Assurance",
    },
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description:
        "Comprehensive health, dental, and vision insurance for you and your family.",
    },
    {
      icon: Zap,
      title: "Professional Growth",
      description:
        "Opportunities for continuous learning, development, and career advancement.",
    },
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description:
        "Flexible work arrangements, generous paid time off, and a supportive work environment.",
    },
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col"
    >
      {/* Hero Section */}
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
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            >
              Join Our Team
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              At Snufi Pharmaceutical®, we are always looking for talented and
              passionate individuals to join our team. Explore our open
              positions and find your next career opportunity.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Open Positions */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Open Positions
          </h2>
          <div className="space-y-4">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-6 hover-lift flex flex-col md:flex-row justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {job.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="font-semibold">{job.department}</span> | {job.location}
                    </p>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="mt-4 md:mt-0">Apply Now</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Apply for {job.title}</DialogTitle>
                      </DialogHeader>
                      <ApplyNowForm />
                    </DialogContent>
                  </Dialog>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Join Us? */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-12 bg-accent"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Why Join Us?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer a collaborative, innovative, and supportive environment where you can grow your career and make a difference.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-6 hover-lift">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
                  <ColoredIcon Icon={benefit.icon} color={index === 0 ? "rose" : index === 1 ? "sky" : "amber"} size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Life at Snufi Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Life at Snufi
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We foster a culture of collaboration, innovation, and well-being.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div variants={cardVariants} whileHover={{ scale: 1.02, y: -2 }}>
              <Card className="p-6 text-center hover-lift">
                <img src="/placeholder.svg" alt="Team collaboration" className="rounded-lg shadow-md w-full h-48 object-cover mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Collaboration
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We foster a collaborative and inclusive work environment where
                  every employee is valued and has the opportunity to grow.
                </p>
              </Card>
            </motion.div>
            <motion.div variants={cardVariants} whileHover={{ scale: 1.02, y: -2 }}>
              <Card className="p-6 text-center hover-lift">
                <img src="/placeholder.svg" alt="Innovative research lab" className="rounded-lg shadow-md w-full h-48 object-cover mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Innovation
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We encourage our employees to think outside the box and
                  develop innovative solutions that address unmet medical needs.
                </p>
              </Card>
            </motion.div>
            <motion.div variants={cardVariants} whileHover={{ scale: 1.02, y: -2 }}>
              <Card className="p-6 text-center hover-lift">
                <img src="/placeholder.svg" alt="Company event" className="rounded-lg shadow-md w-full h-48 object-cover mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Well-being
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We believe in work-life balance and offer a variety of
                  programs and activities to support our employees' well-being.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-12 bg-accent"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            If you are passionate about improving lives and want to be part of a
            dynamic and innovative team, we would love to hear from you.
          </p>
          <Button size="lg">View All Openings</Button>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Careers;