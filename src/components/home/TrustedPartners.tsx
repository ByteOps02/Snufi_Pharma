import { motion } from "framer-motion";


const TrustedPartners = () => {
  const partners = [
    { name: "AIIMS", logo: "AIIMS" },
    { name: "Apollo Hospitals", logo: "AH" },
    { name: "Tata Memorial Centre", logo: "TMC" },
    { name: "Fortis Healthcare", logo: "FH" },
    { name: "Medanta - The Medicity", logo: "MED" },
    { name: "NIMHANS", logo: "NIM" },
  ];

  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            Trusted by Leading Healthcare Institutions
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Our Partners in Innovation
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <div className="group cursor-pointer">
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:from-primary/10 group-hover:to-secondary/10">
                  <span className="text-xl font-bold text-muted-foreground group-hover:text-primary transition-colors">
                    {partner.logo}
                  </span>
                </div>
                <p className="text-xs text-center mt-2 text-muted-foreground group-hover:text-foreground transition-colors">
                  {partner.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            Collaborating with <span className="font-semibold text-foreground">100+ healthcare organizations</span> worldwide
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedPartners;
