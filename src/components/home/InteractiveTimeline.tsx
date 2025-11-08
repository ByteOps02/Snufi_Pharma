import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { CheckCircle, Rocket, Award, Building, Globe, TrendingUp } from "lucide-react";

const InteractiveTimeline = () => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const milestones = [
    {
      year: 2016,
      title: "Company Founded",
      description: "Snufi Pharmaceutical was established with a vision to revolutionize healthcare through innovative medicines.",
      icon: Rocket,
      achievements: ["Established R&D Center", "First Team of 50 Scientists", "Initial Funding Secured"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      year: 2018,
      title: "First Product Launch",
      description: "Successfully launched our flagship cardiovascular medication, Corstelin®, marking our entry into the pharmaceutical market.",
      icon: CheckCircle,
      achievements: ["FDA Approval Received", "10,000+ Patients Treated", "Expanded to 3 Countries"],
      color: "from-green-500 to-emerald-500",
    },
    {
      year: 2020,
      title: "Manufacturing Excellence",
      description: "Commissioned a state-of-the-art, FDA-approved manufacturing plant with advanced automation.",
      icon: Building,
      achievements: ["50,000 sq ft Facility", "ISO 9001:2015 Certified", "Production Capacity Doubled"],
      color: "from-purple-500 to-pink-500",
    },
    {
      year: 2021,
      title: "Industry Recognition",
      description: "Received the prestigious Innovator of the Year award from the pharmaceutical industry.",
      icon: Award,
      achievements: ["Industry Award Won", "Published 15 Research Papers", "Patent Portfolio Expanded"],
      color: "from-amber-500 to-orange-500",
    },
    {
      year: 2023,
      title: "Global Expansion",
      description: "Expanded operations to 25+ countries with strategic partnerships and new market entries.",
      icon: Globe,
      achievements: ["25+ Countries Coverage", "5 New Products Launched", "3,000+ Employees"],
      color: "from-red-500 to-rose-500",
    },
    {
      year: 2025,
      title: "Future Forward",
      description: "Rebranded to Snufi Pharma, embracing digital transformation and personalized medicine.",
      icon: TrendingUp,
      achievements: ["AI-Powered R&D", "Digital Health Platform", "Sustainable Operations"],
      color: "from-indigo-500 to-blue-500",
    },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Journey of Innovation
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A decade of groundbreaking achievements and continuous growth
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary transform -translate-x-1/2"></div>

          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative mb-12 lg:mb-24 ${index % 2 === 0 ? 'lg:pr-1/2' : 'lg:pl-1/2 lg:text-right'}`}
            >
              <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12 lg:ml-auto'}`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    className={`p-6 cursor-pointer transition-all ${
                      selectedYear === milestone.year
                        ? 'ring-2 ring-primary shadow-2xl'
                        : 'hover:shadow-xl'
                    }`}
                    onClick={() => setSelectedYear(selectedYear === milestone.year ? null : milestone.year)}
                  >
                    <div className={`flex items-center gap-4 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${milestone.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <milestone.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-grow">
                        <Badge variant="secondary" className="mb-2">{milestone.year}</Badge>
                        <h3 className="text-xl font-bold text-foreground mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground text-sm">{milestone.description}</p>
                      </div>
                    </div>

                    {selectedYear === milestone.year && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-6 pt-6 border-t border-border"
                      >
                        <h4 className="font-semibold mb-3 text-sm uppercase text-primary">Key Achievements</h4>
                        <ul className="space-y-2">
                          {milestone.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </Card>
                </motion.div>
              </div>

              <div className="hidden lg:block absolute left-1/2 top-8 w-6 h-6 bg-primary rounded-full transform -translate-x-1/2 ring-4 ring-background"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveTimeline;
