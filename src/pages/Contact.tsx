import React, { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Clock, Send, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ColoredIcon } from "@/components/ui/colored-icon";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, inquiryType: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

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

  return (
    <div className="flex flex-col">
      <section className="py-12 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Get in touch with our team of pharmaceutical experts. We're here
              to answer your questions and discuss how we can support your
              healthcare needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="p-8">
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
                      rows={6}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full md:w-auto">
                    Send Message
                    <ColoredIcon
                      Icon={Send}
                      color="primary"
                      size={16}
                      className="ml-2"
                    />
                  </Button>
                </form>
              </Card>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                      <ColoredIcon
                        Icon={info.icon}
                        size={20}
                        color={
                          info.title === "Headquarters"
                            ? "emerald"
                            : info.title === "Phone"
                              ? "sky"
                              : info.title === "Email"
                                ? "violet"
                                : "amber"
                        }
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
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-accent">
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
              <Card
                key={index}
                className="p-6 text-center hover-lift transition-transform"
              >
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <ColoredIcon Icon={Building} size={24} color="violet" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {office.city}
                </h3>
                <p className="text-primary font-medium mb-3">{office.type}</p>
                <p className="text-sm text-muted-foreground mb-3">
                  {office.address}
                </p>
                <p className="text-sm font-medium text-foreground">
                  {office.phone}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Visit Our Headquarters
            </h2>
            <p className="text-lg text-muted-foreground">
              Located in the heart of Ahmedabad's pharmaceutical district
            </p>
          </div>

          <div className="bg-gradient-subtle rounded-2xl p-12 text-center">
            <ColoredIcon
              Icon={MapPin}
              color="emerald"
              size={64}
              className="mx-auto mb-6"
            />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Interactive Map Coming Soon
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're working on integrating an interactive map to help you find
              our locations easily. In the meantime, please use the address
              information provided above.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
