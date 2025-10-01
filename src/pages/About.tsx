import React from "react";
import { Target, Eye, Award, Users, Building, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ColoredIcon } from "@/components/ui/colored-icon";
import { motion } from "framer-motion";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To develop and deliver innovative pharmaceutical solutions that improve the quality of life for patients worldwide.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To be a leading global pharmaceutical company recognized for excellence in research, development, and patient care.",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description:
        "Maintaining the highest standards of quality and safety in all our pharmaceutical products and processes.",
    },
  ];

  const milestones = [
    {
      year: 2016,
      event:
        "Company founded as Sunfi Pharmaceuticals with a mission to revolutionize patient care.",
    },
    {
      year: 2017,
      event:
        "Established our first R&D center, focusing on innovative drug discovery.",
    },
    {
      year: 2018,
      event:
        "Successfully launched our flagship cardiovascular medication, Corstelin®.",
    },
    {
      year: 2019,
      event:
        "Achieved international expansion, entering markets in Europe and Asia.",
    },
    {
      year: 2020,
      event:
        "Commissioned a state-of-the-art, FDA-approved manufacturing plant.",
    },
    {
      year: 2021,
      event:
        'Received the "Innovator of the Year" award in the pharmaceutical industry.',
    },
    {
      year: 2025,
      event:
        "Rebranded to Snufi to reflect our evolving vision and broader portfolio.",
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
              About Snufi Pharmaceutical®
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              For over five decades, we have been at the forefront of
              pharmaceutical innovation, dedicated to developing life-changing
              medicines that make a real difference in people's lives.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Mission, Vision, Values */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-6 text-center hover-lift">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <ColoredIcon
                      Icon={value.icon}
                      color={
                        value.title === "Our Mission"
                          ? "violet"
                          : value.title === "Our Vision"
                          ? "sky"
                          : "amber"
                      }
                      size={32}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Company Story */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-12 bg-accent"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded in 2016 with a simple yet powerful mission: to improve
                healthcare through innovative pharmaceutical solutions. What
                started as a small research-focused company has grown into a
                global leader in pharmaceutical development and manufacturing.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Today, Snufi Pharmaceutical® operates in over 3 countries, with
                state-of-the-art research facilities, manufacturing plants, and
                a dedicated team of over 5,000 professionals worldwide.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <ColoredIcon
                    Icon={Building}
                    color="emerald"
                    size={32}
                    className="mx-auto mb-2"
                  />
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Years</div>
                </div>
                <div className="text-center">
                  <ColoredIcon
                    Icon={Users}
                    color="indigo"
                    size={32}
                    className="mx-auto mb-2"
                  />
                  <div className="text-2xl font-bold text-primary">5000+</div>
                  <div className="text-sm text-muted-foreground">Employees</div>
                </div>
                <div className="text-center">
                  <ColoredIcon
                    Icon={Globe}
                    color="sky"
                    size={32}
                    className="mx-auto mb-2"
                  />
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
              </div>
            </div>
            <motion.div
              variants={cardVariants}
              className="bg-gradient-primary rounded-2xl p-1"
            >
              <div className="bg-background rounded-xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Key Milestones
                </h3>
                <div className="space-y-4">
                  {milestones.map((milestone, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-semibold text-sm">
                          {milestone.year}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed pt-2">
                        {milestone.event}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Leadership Message */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-12"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            A Message from Our Leadership
          </h2>
          <blockquote className="text-lg text-muted-foreground leading-relaxed italic mb-6">
            "At Snufi Pharmaceutical®, we believe that every breakthrough in
            medicine brings us closer to a healthier world. Our commitment to
            innovation, quality, and patient care drives everything we do, and
            we're proud to continue this mission for generations to come."
          </blockquote>
          <div className="text-foreground font-semibold">
            Saroj, CEO & Founder
          </div>
          <blockquote className="text-lg text-muted-foreground leading-relaxed italic mt-8 mb-6">
            "Our focus on research and development is unwavering. We are
            dedicated to pushing the boundaries of science to create therapies
            that address unmet medical needs and improve patient outcomes."
          </blockquote>
          <div className="text-foreground font-semibold">
            Bhagwat Charan Bhargava, Chief Scientific Officer
          </div>
          <blockquote className="text-lg text-muted-foreground leading-relaxed italic mt-8 mb-6">
            "Operational excellence and a commitment to quality are the
            cornerstones of our manufacturing processes. We strive to deliver
            safe and effective medicines to patients around the globe."
          </blockquote>
          <div className="text-foreground font-semibold">
            Sumit Kumar Upadhyay, Chief Operating Officer
          </div>
        </div>
      </motion.section>

      {/* Our Commitment to Sustainability Section */}
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
              Our Commitment to Sustainability
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We are dedicated to operating in a sustainable and socially responsible manner, minimizing our environmental impact and contributing to the well-being of our communities.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-6 hover-lift">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
                  <ColoredIcon Icon={Globe} color="emerald" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Environmental Stewardship
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We are committed to reducing our carbon footprint, conserving water, and minimizing waste across all our operations.
                </p>
              </Card>
            </motion.div>
            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-6 hover-lift h-full">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
                  <ColoredIcon Icon={Users} color="violet" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Social Responsibility
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We are dedicated to improving access to healthcare, supporting education, and promoting diversity and inclusion in our workforce.
                </p>
              </Card>
            </motion.div>
            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-6 hover-lift h-full">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
                  <ColoredIcon Icon={Award} color="amber" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Ethical Governance
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We are committed to upholding the highest ethical standards in all our business practices, ensuring transparency and accountability.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default About;