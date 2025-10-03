import { useEffect } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ColoredIcon } from "@/components/ui/colored-icon";
import { Users, Award, Globe, TrendingUp } from "lucide-react";

const ClinicalTrials = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </Card>
          ))}
        </motion.div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-16"
        >
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-secondary/5">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold text-primary">Why Participate in Clinical Trials?</h2>
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
