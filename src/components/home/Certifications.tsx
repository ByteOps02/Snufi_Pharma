import { motion } from "framer-motion";
import { cardVariants } from "@/lib/animations";
import { Award, CheckCircle, Globe, BookOpen, Microscope } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ColoredIcon } from "@/components/ui/colored-icon";

const certifications = [
    {
        name: "WHO-GMP Certified",
        icon: Award,
        description: "World Health Organization Good Manufacturing Practices",
        color: "emerald" as const,
    },
    {
        name: "ISO 9001:2015",
        icon: CheckCircle,
        description: "Quality Management System Certification",
        color: "sky" as const,
    },

    {
        name: "CDSCO Approved",
        icon: Globe,
        description: "Central Drugs Standard Control Organization (India)",
        color: "amber" as const,
    },
    {
        name: "IPC Compliant",
        icon: BookOpen,
        description: "Adhering to Indian Pharmacopoeia Commission Standards",
        color: "indigo" as const,
    },
    {
        name: "ICMR Recognized",
        icon: Microscope,
        description: "Recognized by Indian Council of Medical Research",
        color: "rose" as const,
    },
];

export const Certifications = () => {
    return (
        <section className="py-12 bg-muted/50 border-y border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <h2 className="text-2xl font-bold text-foreground mb-2">
                        Accreditations & Certifications
                    </h2>
                    <p className="text-muted-foreground">
                        Recognized for our commitment to quality and safety
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                        >
                            <Card className="p-4 flex flex-col items-center text-center h-full">
                                <div
                                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 bg-${cert.color}-100 dark:bg-${cert.color}-900/20`}
                                >
                                    <ColoredIcon Icon={cert.icon} color={cert.color} size={24} />
                                </div>
                                <h3 className="font-semibold text-foreground mb-1">
                                    {cert.name}
                                </h3>
                                <p className="text-xs text-muted-foreground">
                                    {cert.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
