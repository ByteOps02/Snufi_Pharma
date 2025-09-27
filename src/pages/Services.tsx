import React from "react";
import {
  TestTube,
  Truck,
  Users,
  Phone,
  FileText,
  Award,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ColoredIcon } from "@/components/ui/colored-icon";

const Services = () => {
  const services = [
    {
      icon: TestTube,
      title: "Research & Development",
      description:
        "Comprehensive R&D services from drug discovery to clinical trials, leveraging cutting-edge technology and scientific expertise.",
      features: [
        "Drug Discovery & Design",
        "Preclinical Studies",
        "Clinical Trial Management",
        "Regulatory Submission Support",
      ],
    },
    {
      icon: Award,
      title: "Contract Manufacturing",
      description:
        "State-of-the-art manufacturing facilities providing high-quality production services for pharmaceutical companies worldwide.",
      features: [
        "API Manufacturing",
        "Finished Dosage Forms",
        "Quality Control Testing",
        "Regulatory Compliance",
      ],
    },
    {
      icon: FileText,
      title: "Regulatory Affairs",
      description:
        "Expert regulatory guidance and support to navigate complex global regulatory requirements and accelerate market access.",
      features: [
        "Regulatory Strategy",
        "Submission Preparation",
        "Global Registration",
        "Compliance Monitoring",
      ],
    },
    {
      icon: Truck,
      title: "Supply Chain Solutions",
      description:
        "Integrated supply chain management ensuring reliable, efficient, and compliant distribution of pharmaceutical products.",
      features: [
        "Cold Chain Management",
        "Global Distribution",
        "Inventory Optimization",
        "Track & Trace Systems",
      ],
    },
    {
      icon: Users,
      title: "Medical Affairs",
      description:
        "Comprehensive medical support services bridging the gap between clinical research and commercial success.",
      features: [
        "Medical Information",
        "Scientific Communications",
        "Real-World Evidence",
        "Medical Education",
      ],
    },
    {
      icon: Phone,
      title: "Pharmacovigilance",
      description:
        "Robust safety monitoring systems ensuring continuous surveillance of drug safety throughout the product lifecycle.",
      features: [
        "Adverse Event Reporting",
        "Risk Management Plans",
        "Safety Database Management",
        "Regulatory Reporting",
      ],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description:
        "Initial consultation to understand your specific needs and requirements.",
    },
    {
      step: "02",
      title: "Strategy Development",
      description:
        "Develop customized strategies and timelines tailored to your project.",
    },
    {
      step: "03",
      title: "Implementation",
      description:
        "Execute the plan with our expert teams and state-of-the-art facilities.",
    },
    {
      step: "04",
      title: "Monitoring & Support",
      description:
        "Continuous monitoring and ongoing support throughout the project lifecycle.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Pharmaceutical Services
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              From research and development to manufacturing and regulatory
              affairs, we provide end-to-end pharmaceutical services to support
              your success.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Our Service Portfolio
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions designed to meet all your pharmaceutical
              development and commercialization needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover-lift">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
                  <ColoredIcon
                    Icon={service.icon}
                    color={
                      service.title === "Research & Development"
                        ? "violet"
                        : service.title === "Contract Manufacturing"
                          ? "amber"
                          : service.title === "Regulatory Affairs"
                            ? "sky"
                            : service.title === "Supply Chain Solutions"
                              ? "emerald"
                              : service.title === "Medical Affairs"
                                ? "primary"
                                : "rose"
                    }
                    size={24}
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A streamlined approach to delivering pharmaceutical services with
              precision and efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold text-lg">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Quality & Compliance Excellence
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our services are built on a foundation of uncompromising quality
                standards and regulatory compliance. We maintain certifications
                from leading global regulatory bodies and implement robust
                quality management systems.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-accent rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">
                    ISO 9001
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Quality Management
                  </div>
                </div>
                <div className="text-center p-4 bg-accent rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">
                    GMP
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Manufacturing Practices
                  </div>
                </div>
                <div className="text-center p-4 bg-accent rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">
                    GCP
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Clinical Practice
                  </div>
                </div>
                <div className="text-center p-4 bg-accent rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">
                    GDP
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Distribution Practice
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-primary rounded-2xl p-8 text-center">
              <ColoredIcon
                Icon={Award}
                color="amber"
                size={80}
                className="mx-auto mb-6"
              />
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Trusted by Industry Leaders
              </h3>
              <p className="text-primary-foreground/90 leading-relaxed">
                Over 200 successful partnerships with pharmaceutical companies
                worldwide, delivering excellence in every project with a 99.5%
                client satisfaction rate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Case Studies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore how we have helped our clients achieve their goals through our comprehensive pharmaceutical services.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover-lift">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Accelerating Drug Development for a Biotech Startup
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We partnered with a biotech startup to accelerate the development of their lead drug candidate. Our integrated services, from preclinical studies to clinical trial management, helped them achieve their milestones ahead of schedule.
              </p>
              <Button variant="link" className="p-0">
                Read More <ArrowRight className="ml-2" size={16} />
              </Button>
            </Card>
            <Card className="p-6 hover-lift">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Ensuring Regulatory Compliance for a Global Pharmaceutical Company
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We provided expert regulatory guidance to a global pharmaceutical company, helping them navigate complex regulatory requirements and achieve successful product registration in multiple countries.
              </p>
              <Button variant="link" className="p-0">
                Read More <ArrowRight className="ml-2" size={16} />
              </Button>
            </Card>
            <Card className="p-6 hover-lift">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Optimizing the Supply Chain for a Specialty Pharmaceutical Product
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We developed a customized supply chain solution for a specialty pharmaceutical product, ensuring reliable and efficient distribution while maintaining product integrity.
              </p>
              <Button variant="link" className="p-0">
                Read More <ArrowRight className="ml-2" size={16} />
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-12 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Client Testimonials
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear what our clients have to say about their experience working with us.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover-lift">
              <p className="text-muted-foreground leading-relaxed mb-4">
                "Snufi Pharmaceutical has been an invaluable partner in our drug development efforts. Their expertise and dedication have been instrumental in our success."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mr-4">
                  JD
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    John Doe
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    CEO, Biotech Startup
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6 hover-lift">
              <p className="text-muted-foreground leading-relaxed mb-4">
                "The team at Snufi Pharmaceutical is professional, knowledgeable, and responsive. They have been a true partner in our regulatory affairs activities."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mr-4">
                  JS
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    Jane Smith
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Regulatory Affairs Manager, Global Pharma
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6 hover-lift">
              <p className="text-muted-foreground leading-relaxed mb-4">
                "Snufi Pharmaceutical has helped us optimize our supply chain and reduce costs. Their expertise in cold chain management has been particularly valuable."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mr-4">
                  MB
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    Michael Brown
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Supply Chain Director, Specialty Pharma
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss how our pharmaceutical services can accelerate your
            development timeline and ensure regulatory success.
          </p>
          <Button size="lg" className="text-lg px-8 py-4">
            Get Started Today
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
