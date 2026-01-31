import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export const WhatsAppWidget = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling down 100px
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleWhatsAppClick = () => {
        // Replace with actual WhatsApp number
        const phoneNumber = "917566724040";
        const message = encodeURIComponent("Hello Snufi Pharma, I would like to know more about your products.");
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="fixed bottom-24 right-6 z-50"
                >
                    <Button
                        onClick={handleWhatsAppClick}
                        size="lg"
                        className="rounded-full w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg flex items-center justify-center p-0"
                        aria-label="Chat on WhatsApp"
                    >
                        <MessageCircle className="w-8 h-8" />
                    </Button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
