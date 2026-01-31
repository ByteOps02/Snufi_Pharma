import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { ColoredIcon } from "@/components/ui/colored-icon";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Footer = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    toast.success("Subscribed successfully!", {
      description: "Thank you for subscribing to our newsletter.",
    });
    setEmail("");
  };

  const socialLinks = [
    {
      icon: FaFacebook,
      href: "https://facebook.com/snufipharma",
      label: "Facebook",
    },
    {
      icon: FaTwitter,
      href: "https://twitter.com/snufipharma",
      label: "Twitter",
    },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/company/snufi-pharmaceutical",
      label: "LinkedIn",
    },
    {
      icon: FaInstagram,
      href: "https://instagram.com/snufipharma",
      label: "Instagram",
    },
    {
      icon: FaWhatsapp,
      href: "https://wa.me/917566724040",
      label: "WhatsApp",
    },
  ];

  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Products", path: "/products" },
    { label: "Services", path: "/services" },
    { label: "Clinical Trials", path: "/clinical-trials" },
    { label: "Healthcare Pros", path: "/healthcare-professionals" },
    { label: "Blog", path: "/blog" },
    { label: "Careers", path: "/careers" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">
                  S
                </span>
              </div>
              <div className="flex flex-col">
                <div className="text-xl font-bold text-gradient-primary">
                  Snufi Pharmaceutical®
                </div>
                <div className="text-sm text-gradient-primary">
                  Known for cure
                </div>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Committed to advancing healthcare through innovation and
              excellence in pharmaceutical manufacturing.
            </p>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-sm transition-all duration-300 group-hover:scale-110 ${social.label === "Facebook"
                    ? "bg-blue-100 dark:bg-blue-900/20 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/30"
                    : social.label === "Twitter"
                      ? "bg-sky-100 dark:bg-sky-900/20 group-hover:bg-sky-200 dark:group-hover:bg-sky-800/30"
                      : social.label === "LinkedIn"
                        ? "bg-indigo-100 dark:bg-indigo-900/20 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800/30"
                        : social.label === "Instagram"
                          ? "bg-pink-100 dark:bg-pink-900/20 group-hover:bg-pink-200 dark:group-hover:bg-pink-800/30"
                          : "bg-green-100 dark:bg-green-900/20 group-hover:bg-green-200 dark:group-hover:bg-green-800/30"
                    }`}>
                    <social.icon className={`h-5 w-5 ${social.label === "Facebook"
                      ? "text-blue-600 dark:text-blue-400"
                      : social.label === "Twitter"
                        ? "text-sky-600 dark:text-sky-400"
                        : social.label === "LinkedIn"
                          ? "text-indigo-600 dark:text-indigo-400"
                          : social.label === "Instagram"
                            ? "text-pink-600 dark:text-pink-400"
                            : "text-green-600 dark:text-green-400"
                      }`} />
                  </div>
                </a>
              ))}
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">
                Subscribe to our Newsletter
              </h4>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2 max-w-sm">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" className="flex items-center gap-2">
                  <Send className="h-4 w-4" />
                  Subscribe
                </Button>
              </form>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => handleNavigation(link.path)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ColoredIcon
                    Icon={MapPin}
                    color="emerald"
                    size={24}
                  />
                </div>
                <div className="text-sm text-muted-foreground">
                  <div>A-18-19, Talavadi Circle, Krishna Park Society, Part II</div>
                  <div>Ramol, Ahmedabad, Gujarat 380049</div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-sky-100 dark:bg-sky-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ColoredIcon
                    Icon={Mail}
                    color="sky"
                    size={24}
                  />
                </div>
                <div className="text-sm text-muted-foreground">
                  info@snufipharma.com
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-violet-100 dark:bg-violet-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ColoredIcon
                    Icon={Phone}
                    color="violet"
                    size={24}
                  />
                </div>
                <div className="text-sm text-muted-foreground">
                  +91 75 6672 4040
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Snufi Pharmaceutical Pvt. Ltd. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
