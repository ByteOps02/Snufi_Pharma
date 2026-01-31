import { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Clock, Send, Building, ChevronDown } from "lucide-react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ColoredIcon } from "@/components/ui/colored-icon";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { cardVariants, sectionVariants } from "@/lib/animations";
import { cn } from "@/lib/utils";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null,
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, inquiryType: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await axios.post(
        "http://localhost:3001/api/log-message",
        formData,
      );
      if (response.status === 200) {
        setSubmitStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          inquiryType: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of pharmaceutical products do you offer?",
      answer: "We offer a wide range of pharmaceutical products across various therapeutic areas, including cardiovascular, neurology, orthology, and immunology. Our products are available in various forms, such as tablets, capsules, and injections."
    },
    {
      question: "What types of pharmaceutical services do you offer?",
      answer: "We offer a comprehensive range of pharmaceutical services, including research and development, contract manufacturing, regulatory affairs, and supply chain solutions. We provide end-to-end support to our clients, from drug discovery to commercialization."
    },
    {
      question: "How can I partner with Snufi Pharmaceutical?",
      answer: "We are always open to new partnership opportunities. Please contact us to discuss your proposal, and our business development team will get in touch with you."
    },
    {
      question: "Where are your headquarters located?",
      answer: "Our headquarters are located in Ahmedabad, Gujarat, India. You can find our full address and a map on this page."
    },
    {
      question: "How can I get technical support for your products?",
      answer: "For technical support, please use the inquiry form above and select 'Technical Support' as your inquiry type, or email us directly at support@snufipharma.com."
    },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: "Headquarters",
      details: [
        "Snufi Pharmaceutical Pvt. Ltd.",
        "A-18-19, Talavadi Circle",
        "Krishna Park Society, Part II",
        "Ramol, Ahmedabad, Gujarat 380049",
        "India",
      ],
    },
    {
      icon: Phone,
      title: "Phone",
      details: [
        "+91 75 6672 4040",
        "+91 22 1234 5679 (Fax)",
        "Toll Free: 1800 123 4567",
      ],
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "snufipharmaceutical06@gmail.com",
        "info@snufipharma.com",
        "sales@snufipharma.com",
        "support@snufipharma.com",
      ],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday – Friday: 9:00 AM – 6:00 PM",
        "Saturday: 9:00 AM – 1:00 PM",
        "Sunday: Closed",
        "IST (GMT +5:30)",
      ],
    },
  ];

  const offices = [
    {
      city: "Ahmedabad",
      type: "Headquarters",
      address:
        "A-18-19, Talavadi Circle, Krishna Park Society, Part II, Ramol, Ahmedabad, Gujarat 380049",
      phone: "+91 75 6672 4040",
    },
    {
      city: "Bengaluru",
      type: "R&D Center",
      address: "456 Research Park, Electronic City",
      phone: "+91 80 2345 6789",
    },
    {
      city: "Solan, Shimla",
      type: "Manufacturing",
      address: "789 Industrial Area, Genome Valley",
      phone: "+91 40 3456 7890",
    },
    {
      city: "Gwalior",
      type: "Regional Office",
      address:
        "05 Vaishno Mansion, Near Vivekanand Nidom, R.S. Puram, Gwalior, Madhya Pradesh 474001",
      phone: "+91 78 2831 0922",
    },
  ];

  // Using centralized sectionVariants from @/lib/animations for consistency

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col"
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
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Get in touch with our team of pharmaceutical experts. We're here
              to answer your questions and discuss how we can support your
              healthcare needs.
            </motion.p>
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <Card className="p-12 h-full flex flex-col">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 12345 67890"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="company">Company/Organization</Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="inquiryType">Inquiry Type *</Label>
                      <Select onValueChange={handleSelectChange} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">
                            General Inquiry
                          </SelectItem>
                          <SelectItem value="products">
                            Product Information
                          </SelectItem>
                          <SelectItem value="services">Services</SelectItem>
                          <SelectItem value="partnership">
                            Partnership
                          </SelectItem>
                          <SelectItem value="careers">Careers</SelectItem>
                          <SelectItem value="support">
                            Technical Support
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please describe your inquiry in detail..."
                      rows={12}
                    />
                  </div>

                  <div className="flex flex-col md:flex-row gap-4">
                    <Button type="submit" size="lg" className="w-full md:w-auto" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  {submitStatus === "success" && (
                    <p className="text-green-600 mt-4">
                      Thank you for your message! We'll get back to you shortly.
                    </p>
                  )}
                  {submitStatus === "error" && (
                    <p className="text-red-600 mt-4">
                      We're sorry, but something went wrong. Please try again
                      later.
                    </p>
                  )}
                </form>
              </Card>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div key={index} variants={cardVariants}>
                  <Card className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm ${info.title === "Headquarters"
                        ? "bg-emerald-100 dark:bg-emerald-900/20"
                        : info.title === "Phone"
                          ? "bg-sky-100 dark:bg-sky-900/20"
                          : info.title === "Email"
                            ? "bg-violet-100 dark:bg-violet-900/20"
                            : "bg-amber-100 dark:bg-amber-900/20"
                        }`}>
                        <ColoredIcon
                          Icon={info.icon}
                          color={
                            info.title === "Headquarters"
                              ? "emerald"
                              : info.title === "Phone"
                                ? "sky"
                                : info.title === "Email"
                                  ? "violet"
                                  : "amber"
                          }
                          size={24}
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">
                          {info.title}
                        </h3>
                        <div className="space-y-1">
                          {info.details.map((detail, detailIndex) => (
                            <p
                              key={detailIndex}
                              className="text-sm text-muted-foreground"
                            >
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 bg-accent"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Our Locations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find us across major pharmaceutical hubs in India, providing local
              support and global expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-6 text-center h-full flex flex-col">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm ${office.type === "Headquarters"
                    ? "bg-emerald-100 dark:bg-emerald-900/20"
                    : office.type === "R&D Center"
                      ? "bg-sky-100 dark:bg-sky-900/20"
                      : office.type === "Manufacturing"
                        ? "bg-amber-100 dark:bg-amber-900/20"
                        : "bg-violet-100 dark:bg-violet-900/20"
                    }`}>
                    <ColoredIcon
                      Icon={Building}
                      color={
                        office.type === "Headquarters"
                          ? "emerald"
                          : office.type === "R&D Center"
                            ? "sky"
                            : office.type === "Manufacturing"
                              ? "amber"
                              : "violet"
                      }
                      size={24}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {office.city}
                  </h3>
                  <p className="text-foreground font-medium mb-3">{office.type}</p>
                  <p className="text-sm text-muted-foreground mb-3 flex-grow">
                    {office.address}
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    {office.phone}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.2 }}
        className="mb-16 pt-20"
      >
        <h2 className="text-3xl font-bold text-center text-foreground mb-10">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div key={index}>
              <Card className="p-4">
                <div
                  className="flex justify-between items-center cursor-pointer font-semibold text-lg"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  {faq.question}
                  <ChevronDown
                    className={cn("h-5 w-5 transition-transform", openFaq === index ? "rotate-180" : "")}
                  />
                </div>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="mt-2 text-muted-foreground"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Visit Our Headquarters
            </h2>
            <p className="text-lg text-muted-foreground">
              Located in the heart of Ahmedabad's pharmaceutical district
            </p>
          </div>

          <div className="bg-gradient-subtle rounded-2xl p-4 text-center">
            <LoadScript
              googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
            >
              <GoogleMap
                mapContainerStyle={{ height: "400px", width: "100%" }}
                center={{ lat: 22.643, lng: 72.7762 }}
                zoom={13}
              >
                <Marker position={{ lat: 22.643, lng: 72.7762 }} />
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Contact;