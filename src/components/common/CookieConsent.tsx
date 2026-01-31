import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem("cookie-consent");

        if (!consent) {
            // Show banner after a small delay if no choice has been made
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem("cookie-consent", "declined");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-md"
                >
                    <Card className="p-4 shadow-xl border-primary/20 bg-background/95 backdrop-blur-sm">
                        <div className="flex items-start gap-4">
                            <div className="bg-primary/10 p-2 rounded-full hidden sm:block">
                                <Cookie className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-semibold text-foreground flex items-center gap-2">
                                        <Cookie className="h-4 w-4 sm:hidden text-primary" />
                                        We use cookies
                                    </h3>
                                    <button
                                        onClick={handleDecline}
                                        className="text-muted-foreground hover:text-foreground"
                                    >
                                        <X className="h-4 w-4" />
                                    </button>
                                </div>
                                <p className="text-sm text-muted-foreground mb-4">
                                    We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept", you consent to our use of cookies.
                                </p>
                                <div className="flex gap-2 justify-end">
                                    <Button variant="outline" size="sm" onClick={handleDecline}>
                                        Decline
                                    </Button>
                                    <Button size="sm" onClick={handleAccept}>
                                        Accept
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Card>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
