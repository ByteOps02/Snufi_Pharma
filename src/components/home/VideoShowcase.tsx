import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Award, Users, Building2, CheckCircle } from "lucide-react";
import { useState } from "react";


const VideoShowcase = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const highlights = [
    {
      icon: Award,
      value: "ISO 9001:2015",
      label: "Certified Quality",
    },
    {
      icon: Users,
      value: "500+",
      label: "Expert Team",
    },
    {
      icon: Building2,
      value: "50,000 sq ft",
      label: "Manufacturing Space",
    },
    {
      icon: CheckCircle,
      value: "99.9%",
      label: "Quality Assurance",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Inside Our State-of-the-Art Facility
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take a virtual tour of our world-class manufacturing and research facilities
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative group">
              <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  {!isPlaying ? (
                    <Button
                      size="lg"
                      onClick={() => setIsPlaying(true)}
                      className="w-20 h-20 rounded-full bg-white/90 hover:bg-white text-primary shadow-xl group-hover:scale-110 transition-transform"
                    >
                      <Play className="h-8 w-8 ml-1" fill="currentColor" />
                    </Button>
                  ) : (
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                      title="Facility Tour"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )}
                </div>
                {!isPlaying && (
                  <img
                    src="https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Manufacturing Facility"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-foreground">
              Advanced Manufacturing Excellence
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Our facility combines cutting-edge technology with stringent quality controls
              to produce pharmaceutical products that meet the highest global standards.
              From raw material testing to final product release, every step is monitored
              and validated.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-4 text-center">
                    <item.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <div className="text-xl font-bold text-foreground">{item.value}</div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <Button size="lg" className="w-full sm:w-auto">
              Schedule a Facility Tour
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
