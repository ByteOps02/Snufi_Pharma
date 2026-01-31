import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Dr. Dushyant Deo",
    title: "Cardiologist",
    company: "SIIMS Multispeciality Hospital",
    content:
      "Snufi Pharmaceutical has been our trusted partner for over a decade. Their innovative cardiovascular medications have significantly improved our patient outcomes.",
    rating: 5,
    avatar: "SJ",
  },
  {
    name: "Dr. Ghanshyam Das",
    title: "Pediatrician",
    company: "Gajra Raj Medical College & Hospital",
    content:
      "The quality and efficacy of Snufi's pediatric treatments are unmatched. Their commitment to research excellence is evident in every product.",
    rating: 5,
    avatar: "MC",
  },
  {
    name: "Dr. Manoj Kumar",
    title: "Orthopedic Surgeon",
    company: "Orthopedic Care Center",
    content:
      "Working with Snufi has transformed our orthopedic treatment protocols. Their precision orthopedic medications offer hope to our patients.",
    rating: 5,
    avatar: "ER",
  },
];

import { cardVariants, sectionVariants } from "@/lib/animations";

export const Testimonials = () => {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-20 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Medical Professionals Trust Snufi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by healthcare professionals and institutions worldwide for
            our commitment to quality and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.title}
                    </p>
                    <p className="text-sm text-foreground">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
