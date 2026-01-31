import { useEffect } from "react";
import { Target, Eye, Award, Users, Building, Globe, Shield, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ColoredIcon } from "@/components/ui/colored-icon";
import { motion } from "framer-motion";
import { sectionVariants } from "@/lib/animations";
import { SEOHead } from "@/components/common/SEOHead";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To develop and deliver innovative pharmaceutical solutions that improve the quality of life for patients worldwide.",
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be a leading global pharmaceutical company recognized for excellence in research, development, and patient care.",
      color: "bg-green-500/10 text-green-600"
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Maintaining the highest standards of quality and safety in all our pharmaceutical products and processes.",
      color: "bg-purple-500/10 text-purple-600"
    }
  ];


  const milestones = [
    { year: 2016, event: "Company founded as Snufi Pharmaceuticals with a mission to revolutionize patient care." },
    { year: 2017, event: "Established our first R&D center, focusing on innovative drug discovery." },
    { year: 2018, event: "Successfully launched our flagship cardiovascular medication, Corstelin®." },
    { year: 2019, event: "Achieved international expansion, entering markets in Europe and Asia." },
    { year: 2020, event: "Commissioned a state-of-the-art, FDA-approved manufacturing plant." },
    { year: 2021, event: 'Received the "Innovator of the Year" award in the pharmaceutical industry.' },
    { year: 2025, event: "Rebranded to Snufi to reflect our evolving vision and broader portfolio." }
  ];

  const commitments = [
    {
      icon: Globe,
      title: "Environmental Stewardship",
      description: "We are committed to reducing our carbon footprint, conserving water, and minimizing waste across all our operations.",
      color: "bg-green-500/10 text-green-600"
    },
    {
      icon: Heart,
      title: "Social Responsibility",
      description: "We are dedicated to improving access to healthcare, supporting education, and promoting diversity and inclusion in our workforce.",
      color: "bg-red-500/10 text-red-600"
    },
    {
      icon: Shield,
      title: "Ethical Governance",
      description: "We are committed to upholding the highest ethical standards in all our business practices, ensuring transparency and accountability.",
      color: "bg-blue-500/10 text-blue-600"
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
        title="About Us"
        description="Learn about Snufi Pharmaceutical's history, mission, and vision to improve global healthcare through innovation and quality excellence."
        keywords="about Snufi Pharma, pharmaceutical company history, mission, vision, healthcare innovation"
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
              About Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              For over a decade, Snufi Pharmaceutical has been at the forefront of medical innovation,
              developing life-changing therapies and advancing the future of healthcare.
            </motion.p>
          </div>
        </div>
      </motion.section>


      {/* Values Section */}
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
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${value.title === "Our Mission"
                    ? "bg-sky-100 dark:bg-sky-900/20"
                    : value.title === "Our Vision"
                      ? "bg-emerald-100 dark:bg-emerald-900/20"
                      : "bg-violet-100 dark:bg-violet-900/20"
                    }`}>
                    <ColoredIcon
                      Icon={value.icon}
                      color={
                        value.title === "Our Mission"
                          ? "sky"
                          : value.title === "Our Vision"
                            ? "emerald"
                            : "violet"
                      }
                      size={24}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story & Journey Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Our Story */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed mb-12">
                <p>
                  Founded in 2016 with a simple yet powerful mission: to improve
                  healthcare through innovative pharmaceutical solutions. What started as a
                  small research-focused company has grown into a global leader in
                  pharmaceutical development and manufacturing.
                </p>
                <p>
                  Today, Snufi Pharmaceutical® operates in over 3 countries, with state-of-the-art
                  research facilities, manufacturing plants, and a dedicated team of
                  over 5,000 professionals worldwide.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm transition-transform group-hover:scale-110 duration-300">
                    <ColoredIcon
                      Icon={Building}
                      color="emerald"
                      size={28}
                    />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">10+</div>
                  <div className="text-sm font-medium text-muted-foreground">Years</div>
                </div>
                <div className="text-center group">
                  <div className="w-14 h-14 bg-sky-100 dark:bg-sky-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm transition-transform group-hover:scale-110 duration-300">
                    <ColoredIcon
                      Icon={Users}
                      color="sky"
                      size={28}
                    />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">5000+</div>
                  <div className="text-sm font-medium text-muted-foreground">Employees</div>
                </div>
                <div className="text-center group">
                  <div className="w-14 h-14 bg-violet-100 dark:bg-violet-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm transition-transform group-hover:scale-110 duration-300">
                    <ColoredIcon
                      Icon={Globe}
                      color="violet"
                      size={28}
                    />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">3+</div>
                  <div className="text-sm font-medium text-muted-foreground">Countries</div>
                </div>
              </div>
            </motion.div>

            {/* Key Milestones */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 border-rose-100 dark:border-rose-900/50 shadow-lg bg-card/50 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-foreground mb-8">Key Milestones</h3>
                <div className="space-y-8 relative">
                  {/* Vertical Line */}
                  <div className="absolute left-[26px] top-4 bottom-4 w-0.5 bg-border -z-10 hidden sm:block" />

                  {milestones.map((milestone, index) => (
                    <motion.div
                      key={milestone.year}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start"
                    >
                      <div className="flex-shrink-0">
                        <Badge
                          className="px-3 py-1 text-sm font-bold bg-[#D34526] hover:bg-[#B83E22] text-white border-none rounded-md w-14 justify-center h-8 flex items-center shadow-md relative z-10"
                        >
                          {milestone.year}
                        </Badge>
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="text-base text-muted-foreground leading-relaxed">
                          {milestone.event}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              A Message from Our Leadership
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* CEO Message */}
            <div className="space-y-4">
              <blockquote className="text-lg text-muted-foreground leading-relaxed italic">
                "At Snufi Pharmaceutical®, we believe that every breakthrough in medicine brings us closer to a healthier world. Our commitment to innovation, quality, and patient care drives everything we do, and we're proud to continue this mission for generations to come."
              </blockquote>
              <div className="text-foreground font-semibold">
                Saroj, Managing Director & CEO
              </div>
            </div>

            {/* CSO Message */}
            <div className="space-y-4">
              <blockquote className="text-lg text-muted-foreground leading-relaxed italic">
                "Our focus on research and development is unwavering. We are dedicated to pushing the boundaries of science to create therapies that address unmet medical needs and improve patient outcomes."
              </blockquote>
              <div className="text-foreground font-semibold">
                Bhagwat Charan Bhargava, Chief Scientific Officer
              </div>
            </div>

            {/* COO Message */}
            <div className="space-y-4">
              <blockquote className="text-lg text-muted-foreground leading-relaxed italic">
                "Operational excellence and a commitment to quality are the cornerstones of our manufacturing processes. We strive to deliver safe and effective medicines to patients around the globe."
              </blockquote>
              <div className="text-foreground font-semibold">
                Sumit Kumar Upadhyay, Chief Operating Officer
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sustainability Section */}
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
              Our Commitment to Sustainability
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We are dedicated to operating in a sustainable and socially responsible manner
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {commitments.map((commitment, index) => (
              <motion.div
                key={commitment.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${commitment.title === "Environmental Stewardship"
                    ? "bg-emerald-100 dark:bg-emerald-900/20"
                    : commitment.title === "Social Responsibility"
                      ? "bg-rose-100 dark:bg-rose-900/20"
                      : "bg-sky-100 dark:bg-sky-900/20"
                    }`}>
                    <ColoredIcon
                      Icon={commitment.icon}
                      color={
                        commitment.title === "Environmental Stewardship"
                          ? "emerald"
                          : commitment.title === "Social Responsibility"
                            ? "rose"
                            : "sky"
                      }
                      size={24}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{commitment.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{commitment.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
