import { useState } from "react";
import {
  Search,
  Pill,
  Heart,
  Brain,
  Shield,
  Bone,
  Download,
  Award,
  CheckCircle,
  BookOpen,
  Sparkles,
  Activity,
  Zap,
  Wind,
  Droplet,
  FlaskConical
} from "lucide-react";
import { SEOHead } from "@/components/common/SEOHead";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ColoredIcon } from "@/components/ui/colored-icon";
import { motion, AnimatePresence } from "framer-motion";
import { sectionVariants } from "@/lib/animations";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { products } from "@/lib/products";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "all", name: "All Products", icon: Pill, iconColor: "text-gray-500" },
    { id: "clinical_trials", name: "Clinical Trials", icon: FlaskConical, iconColor: "text-amber-500" },
    { id: "cardiovascular", name: "Cardiovascular", icon: Heart, iconColor: "text-red-500" },
    { id: "neurological", name: "Neurological", icon: Brain, iconColor: "text-purple-500" },
    { id: "orthology", name: "Orthology", icon: Bone, iconColor: "text-orange-500" },
    { id: "immunology", name: "Immunology", icon: Shield, iconColor: "text-blue-500" },
    { id: "dermatology", name: "Dermatology", icon: Sparkles, iconColor: "text-pink-500" },
    { id: "gastroenterology", name: "Gastroenterology", icon: Activity, iconColor: "text-emerald-500" },
    { id: "pain management", name: "Pain Mgmt", icon: Zap, iconColor: "text-amber-500" },
    { id: "respiratory", name: "Respiratory", icon: Wind, iconColor: "text-cyan-500" },
    { id: "anti-diabetic", name: "Diabetes Care", icon: Droplet, iconColor: "text-red-600" },
  ];


  const filteredProducts = products.filter((product) => {
    let matchesCategory = selectedCategory === "all" || product.category === selectedCategory;

    if (selectedCategory === "clinical_trials") {
      matchesCategory = product.status === "Clinical Trial";
    }

    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.indication.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available":
        return "bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800";
      case "Clinical Trial":
        return "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800";
      case "Development":
        return "bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };


  const qualityStandards = [
    {
      title: "CDSCO Approved",
      description: "All products meet stringent CDSCO safety and efficacy standards",
      icon: Award,
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      title: "GMP Certified",
      description: "Manufactured in Good Manufacturing Practice certified facilities",
      icon: CheckCircle,
      color: "bg-green-500/10 text-green-600"
    },
    {
      title: "ISO Compliant",
      description: "Quality management systems certified to ISO 9001:2015",
      icon: Shield,
      color: "bg-purple-500/10 text-purple-600"
    },
    {
      title: "IPC Standards",
      description: "Compliant with Indian Pharmacopoeia Commission quality standards",
      icon: BookOpen,
      color: "bg-orange-500/10 text-orange-600"
    }
  ];

  // Using centralized sectionVariants from @/lib/animations for consistency

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-background to-muted/20"
    >
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        className="py-12 bg-gradient-subtle"
      >
        <SEOHead
          title="Products"
          description="Explore our comprehensive range of CDSCO-approved pharmaceutical products including cardiovascular, neurological, and immunological treatments."
          keywords="pharmaceutical products, medicines, drugs, cardiovascular, neurology, Snufi Pharma products"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold text-primary mb-4"
            >
              Our Products
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Discover our comprehensive range of CDSCO-approved medications designed to improve patient outcomes
              across multiple therapeutic areas.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Brochure Download CTA */}
      <section className="bg-primary/5 py-4 border-b border-primary/10" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end">
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Download Product Brochure (PDF)
          </Button>
        </div>
      </section >

      {/* Search and Filter Section */}
      <section className="py-6 md:py-8 bg-background" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 rounded-full"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant="outline"
                  onClick={() => setSelectedCategory(category.id)}
                  className={`rounded-full px-4 py-2 text-sm border transition-all ${selectedCategory === category.id
                    ? "bg-primary border-primary text-primary-foreground hover:bg-primary/90"
                    : "border-border text-foreground hover:bg-muted hover:border-muted-foreground"
                    }`}
                >
                  {category.id === "cardiovascular" ? (
                    <Heart className={`h-3 w-3 mr-1.5 ${selectedCategory === category.id
                      ? "fill-current text-white"
                      : `fill-current ${category.iconColor}`
                      }`} />
                  ) : (
                    <category.icon className={`h-3 w-3 mr-1.5 ${selectedCategory === category.id
                      ? "text-white"
                      : category.iconColor
                      }`} />
                  )}
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section >

      {/* Products Grid */}
      < section className="py-12 md:py-20" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              {filteredProducts.length} Product{filteredProducts.length !== 1 ? 's' : ''} Found
            </h2>
            <p className="text-muted-foreground">
              {selectedCategory === "all" ? "All therapeutic areas" : categories.find(c => c.id === selectedCategory)?.name}
            </p>
          </div>

          <AnimatePresence>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  id={`product-${product.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  layout
                >
                  <motion.div>
                    <Card className="p-6 h-full border border-border rounded-lg">
                      <div className="space-y-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">{product.name}</h3>
                            <Badge className={`${getStatusColor(product.status)} border text-xs px-2 py-1 rounded-full`}>
                              {product.status}
                            </Badge>
                          </div>
                        </div>

                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {product.description}
                        </p>

                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="font-medium text-foreground">Strength:</span>
                            <span className="text-muted-foreground">{product.strength}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium text-foreground">Form:</span>
                            <span className="text-muted-foreground">{product.form}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium text-foreground">Indication:</span>
                            <span className="text-muted-foreground">{product.indication}</span>
                          </div>
                        </div>

                        <div className="flex gap-2 pt-4">
                          <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md px-4 py-2 text-xs">
                            Learn More
                          </Button>
                          <Button size="sm" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-md px-4 py-2 text-xs">
                            Request a Sample
                          </Button>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button size="sm" variant="outline" className="border-border text-muted-foreground hover:bg-muted rounded-md px-2 py-2">
                                  <Download className="h-4 w-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Download Product Image</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>

          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <Pill className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No products found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or category filters
              </p>
            </motion.div>
          )}
        </div>
      </section >

      {/* Quality Standards Section */}
      < section className="py-12 md:py-20 bg-muted/30" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Quality & Compliance
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our commitment to the highest standards of pharmaceutical excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityStandards.map((standard, index) => (
              <motion.div
                key={standard.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center h-full">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm ${standard.title === "CDSCO Approved"
                    ? "bg-sky-100 dark:bg-sky-900/20"
                    : standard.title === "GMP Certified"
                      ? "bg-emerald-100 dark:bg-emerald-900/20"
                      : standard.title === "ISO Compliant"
                        ? "bg-violet-100 dark:bg-violet-900/20"
                        : "bg-amber-100 dark:bg-amber-900/20"
                    }`}>
                    <ColoredIcon
                      Icon={standard.icon}
                      color={
                        standard.title === "CDSCO Approved"
                          ? "sky"
                          : standard.title === "GMP Certified"
                            ? "emerald"
                            : standard.title === "ISO Compliant"
                              ? "violet"
                              : "amber"
                      }
                      size={24}
                    />
                  </div>
                  <h3 className="font-semibold mb-2">{standard.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{standard.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section >


    </motion.div >
  );
};

export default Products;
