import React, { useEffect } from "react";
import {
  ArrowRight,
  Shield,
  Heart,
  Brain,
  Users,
  Award,
  ChevronRight,
  Star,
  Globe,
  Building,
  Leaf,
  TrendingUp,
  Calendar,
  Quote,
  CheckCircle,
  Target,
  Zap,
  Bone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ColoredIcon } from "@/components/ui/colored-icon";
import heroImage from "@/assets/hero-pharmaceutical.jpg";
import { blogPosts } from "@/lib/blog";

const Home = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const handleExploreProducts = () => {
    navigate("/products");
  };

  const handleLearnMore = () => {
    navigate("/about");
  };

  const handleContactUs = () => {
    navigate("/contact");
  };

  const features = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "Rigorous testing and quality control processes ensure the highest standards of pharmaceutical excellence.",
    },
    {
      icon: Bone,
      title: "Research & Innovation",
      description:
        "Cutting-edge research facilities and innovative approaches to developing life-changing medications.",
    },
    {
      icon: Heart,
      title: "Patient-Centric",
      description:
        "Every decision we make is guided by our commitment to improving patient outcomes and quality of life.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "World-class scientists, researchers, and healthcare professionals dedicated to pharmaceutical excellence.",
    },
  ];

  const stats = [
    { number: "10+", label: "Years of Excellence" },
    { number: "25+", label: "Products Developed" },
    { number: "3+", label: "Countries Served" },
    { number: "2M+", label: "Lives Improved" },
  ];

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

  const therapeuticAreas = [
    {
      name: "Cardiovascular",
      icon: Heart,
      description:
        "Advanced treatments for heart disease, hypertension, and other vascular conditions. Our focus is on developing innovative therapies that improve cardiovascular outcomes and enhance patient quality of life.",
      productCount: 12,
      keyProducts: ["CardioMax Pro", "CardioFlow", "VascularGuard"],
    },
    {
      name: "Neurological",
      icon: Brain,
      description:
        "Innovative solutions for a wide range of neurological disorders, including Alzheimer's, Parkinson's, and epilepsy. We are committed to advancing neuroscience and improving the lives of patients with brain and nervous system conditions.",
      productCount: 8,
      keyProducts: ["NeuroGuard", "NeuroBalance", "CogniMax"],
    },
    {
      name: "Orthology",
      icon: Bone,
      description: "Precision treatments for joint disorders, arthritis, and other orthopedic conditions. Our goal is to restore mobility, reduce pain, and improve the overall musculoskeletal health of our patients.",
      productCount: 15,
      keyProducts: ["OrthoJoint", "JointFlex", "CartilageCare"],
    },
    {
      name: "Immunology",
      icon: Shield,
      description: "Cutting-edge therapies for autoimmune diseases and immune system modulation. We are dedicated to developing treatments that restore immune balance and improve the lives of patients with complex immune-mediated conditions.",
      productCount: 6,
      keyProducts: ["ImmunoShield", "AutoImmune Pro", "ImmuneBalance"],
    },
  ];

  const awards = [
    {
      title: "Pharmaceutical Excellence Award 2023",
      organization: "International Pharma Association",
      year: "2023",
      description: "Recognized for our outstanding contributions to the pharmaceutical industry and our commitment to innovation and excellence.",
      icon: Award,
    },
    {
      title: "Innovation in Medicine 2023",
      organization: "Global Health Foundation",
      year: "2023",
      description: "Awarded for our groundbreaking research and development of new therapies that address unmet medical needs.",
      icon: Star,
    },
    {
      title: "Best Manufacturing Practices 2022",
      organization: "Quality Assurance Council",
      year: "2022",
      description: "Honored for our state-of-the-art manufacturing facilities and our adherence to the highest quality standards.",
      icon: CheckCircle,
    },
    {
      title: "Sustainability Leadership 2022",
      organization: "Green Pharma Initiative",
      year: "2022",
      description: "Acknowledged for our commitment to environmental sustainability and our efforts to reduce our carbon footprint.",
      icon: Leaf,
    },
  ];

  const sustainabilityInitiatives = [
    {
      title: "Carbon Neutral Manufacturing",
      description:
        "Achieving net-zero carbon emissions across all production facilities",
      progress: 75,
      icon: Leaf,
    },
    {
      title: "Water Conservation",
      description:
        "Implementing advanced water recycling systems in manufacturing",
      progress: 90,
      icon: Globe,
    },
    {
      title: "Waste Reduction",
      description: "Zero waste to landfill initiative across all operations",
      progress: 85,
      icon: Target,
    },
    {
      title: "Renewable Energy",
      description: "Transitioning to 100% renewable energy sources",
      progress: 60,
      icon: Zap,
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const latestPosts = blogPosts.slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={heroImage}
            alt="Modern pharmaceutical laboratory"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Advancing
              <span className="block text-secondary-light">Healthcare</span>
              Innovation
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"
            >
              Snufi Pharmaceutical is dedicated to developing innovative
              medicines that improve lives worldwide. With over a decade of
              excellence, we continue to push the boundaries of medical science.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-4"
                onClick={handleExploreProducts}
              >
                Explore Products
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary hover:border-white bg-transparent"
                onClick={handleLearnMore}
              >
                Learn More
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-12 bg-accent"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Why Choose Snufi Pharmaceutical
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence, innovation, and patient care sets us
              apart in the pharmaceutical industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-6 hover-lift">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
                    <ColoredIcon
                      Icon={feature.icon}
                      color={
                        index === 0
                          ? "sky"
                          : index === 1
                          ? "emerald"
                          : index === 2
                          ? "rose"
                          : "violet"
                      }
                      size={24}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Therapeutic Areas Preview */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-12 bg-accent"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Therapeutic Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We specialize in developing innovative treatments across multiple
              therapeutic areas, addressing critical healthcare needs worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {therapeuticAreas.map((area, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-6 text-center hover-lift flex flex-col">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <ColoredIcon
                      Icon={area.icon}
                      color={
                        area.name === "Cardiovascular"
                          ? "rose"
                          : area.name === "Neurological"
                          ? "indigo"
                          : area.name === "Orthology"
                          ? "amber"
                          : "emerald"
                      }
                      size={32}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {area.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {area.description}
                  </p>
                  <div className="space-y-2 mt-auto">
                    <div className="text-2xl font-bold text-primary">
                      {area.productCount}+ Products
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Key: {area.keyProducts.join(", ")}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Customer Testimonials */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-12 bg-background"
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
                              whileHover={{ scale: 1.02, y: -2 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Card className="p-6 hover-lift">
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
                                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                                    {testimonial.avatar}
                                  </div>
                                  <div>
                                    <h4 className="font-semibold text-foreground">
                                      {testimonial.name}
                                    </h4>
                                    <p className="text-sm text-muted-foreground">
                                      {testimonial.title}
                                    </p>
                                    <p className="text-sm text-primary">
                                      {testimonial.company}
                                    </p>
                                  </div>
                                </div>
                              </Card>
                            </motion.div>            ))}
          </div>
        </div>
      </motion.section>

      {/* Latest News & Updates */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-12 bg-accent"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Latest News & Updates
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay informed about our latest developments, regulatory approvals,
              and industry insights.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {latestPosts.map((post, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <Link to={`/blog/${post.id}`}>
                  <Card className="p-6 hover-lift flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto pt-4">
                      <span className="text-xs text-muted-foreground">
                        {post.readTime}
                      </span>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="text-lg px-8 py-4">
              <Link to="/blog">
                View All News
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Awards & Recognition */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-12 bg-background"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Awards & Recognition
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by leading
              industry organizations worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-6 text-center hover-lift">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <ColoredIcon
                      Icon={award.icon}
                      color={
                        index === 0
                          ? "amber"
                          : index === 1
                          ? "sky"
                          : index === 2
                          ? "emerald"
                          : "primary"
                      }
                      size={24}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {award.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {award.organization}
                  </p>
                  <p className="text-xs text-muted-foreground mb-2">
                    {award.description}
                  </p>
                  <span className="text-primary font-semibold">{award.year}</span>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Sustainability & CSR */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-12 bg-background"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Sustainability & Corporate Responsibility
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Committed to environmental stewardship and social responsibility
              while advancing healthcare innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sustainabilityInitiatives.map((initiative, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-6 hover-lift">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <ColoredIcon
                      Icon={initiative.icon}
                      color={
                        index === 0
                          ? "emerald"
                          : index === 1
                          ? "sky"
                          : index === 2
                          ? "violet"
                          : "amber"
                      }
                      size={24}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {initiative.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {initiative.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span className="font-semibold">
                        {initiative.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${initiative.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Community Engagement Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-12 bg-accent"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Community Engagement
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We are committed to improving the health and well-being of the communities we serve through various health programs and initiatives.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-6 hover-lift">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
                  <ColoredIcon Icon={Heart} color="rose" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Health Check-up Camps
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We regularly organize free health check-up camps in rural and underserved areas to provide access to basic healthcare services.
                </p>
              </Card>
            </motion.div>
            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-6 hover-lift">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
                  <ColoredIcon Icon={Users} color="violet" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Disease Awareness Programs
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We conduct awareness programs to educate people about various diseases, their prevention, and treatment options.
                </p>
              </Card>
            </motion.div>
            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-6 hover-lift">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
                  <ColoredIcon Icon={Globe} color="sky" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Global Health Initiatives
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We partner with global health organizations to support initiatives that aim to improve health outcomes in developing countries.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Join Our Team Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-12 bg-background"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Join Our Team
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            We are always looking for passionate and talented individuals to join our team. Explore our open positions and start your career at Snufi Pharmaceutical.
          </p>
          <Button
            size="lg"
            className="text-lg px-8 py-4"
            onClick={() => navigate("/careers")}
          >
            Explore Careers
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-12 bg-gradient-subtle"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Ready to Partner With Us?
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of healthcare professionals who trust Snufi
            Pharmaceutical for quality medicines and innovative solutions.
          </p>
          <Button
            size="lg"
            className="text-lg px-8 py-4"
            onClick={handleContactUs}
          >
            Contact Us Today
            <ChevronRight className="ml-2" size={20} />
          </Button>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Home;