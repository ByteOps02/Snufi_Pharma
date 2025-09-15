import React, { useState, useEffect } from 'react';
import { Search, Filter, Pill, Heart, Brain, Shield, Microscope, Download, Award, CheckCircle, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const Products = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Products', icon: Pill },
    { id: 'cardiovascular', name: 'Cardiovascular', icon: Heart },
    { id: 'neurological', name: 'Neurological', icon: Brain },
    { id: 'immunology', name: 'Immunology', icon: Shield },
    { id: 'oncology', name: 'Oncology', icon: Microscope },
  ];

  const products = [
    {
      id: 1,
      name: 'CardioMax Pro',
      category: 'cardiovascular',
      description: 'Advanced cardiovascular medication for hypertension management with proven efficacy and minimal side effects.',
      strength: '10mg, 20mg, 40mg',
      form: 'Tablets',
      indication: 'Hypertension, Heart Failure',
      status: 'Available',
    },
    {
      id: 2,
      name: 'NeuroGuard',
      category: 'neurological',
      description: 'Innovative neurological treatment for cognitive enhancement and neuroprotection in aging populations.',
      strength: '5mg, 10mg',
      form: 'Capsules',
      indication: 'Cognitive Decline, Dementia',
      status: 'Available',
    },
    {
      id: 3,
      name: 'ImmunoShield',
      category: 'immunology',
      description: 'Cutting-edge immunomodulator designed to enhance immune system response and autoimmune condition management.',
      strength: '25mg, 50mg',
      form: 'Injection',
      indication: 'Autoimmune Disorders',
      status: 'Clinical Trial',
    },
    {
      id: 4,
      name: 'OncoTarget',
      category: 'oncology',
      description: 'Precision oncology medication targeting specific cancer pathways with personalized treatment approach.',
      strength: '100mg, 200mg',
      form: 'Tablets',
      indication: 'Various Cancers',
      status: 'Development',
    },
    {
      id: 5,
      name: 'CardioFlow',
      category: 'cardiovascular',
      description: 'Next-generation anticoagulant with improved safety profile and reduced bleeding risk.',
      strength: '2.5mg, 5mg',
      form: 'Tablets',
      indication: 'Atrial Fibrillation, DVT',
      status: 'Available',
    },
    {
      id: 6,
      name: 'NeuroBalance',
      category: 'neurological',
      description: 'Advanced treatment for movement disorders with enhanced patient quality of life outcomes.',
      strength: '0.5mg, 1mg, 2mg',
      form: 'Extended Release Tablets',
      indication: 'Parkinson\'s Disease',
      status: 'Available',
    },
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Available': return 'text-green-600 bg-green-100';
      case 'Clinical Trial': return 'text-yellow-600 bg-yellow-100';
      case 'Development': return 'text-blue-600 bg-blue-100';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  const therapeuticAreas = [
    {
      name: 'Cardiovascular',
      icon: Heart,
      description: 'Advanced treatments for heart disease, hypertension, and vascular conditions',
      productCount: 12,
      keyProducts: ['CardioMax Pro', 'CardioFlow', 'VascularGuard']
    },
    {
      name: 'Neurological',
      icon: Brain,
      description: 'Innovative solutions for neurological disorders and cognitive health',
      productCount: 8,
      keyProducts: ['NeuroGuard', 'NeuroBalance', 'CogniMax']
    },
    {
      name: 'Oncology',
      icon: Microscope,
      description: 'Precision cancer treatments and supportive care medications',
      productCount: 15,
      keyProducts: ['OncoTarget', 'ChemoShield', 'ImmunoBoost']
    },
    {
      name: 'Immunology',
      icon: Shield,
      description: 'Immune system modulators and autoimmune disease treatments',
      productCount: 6,
      keyProducts: ['ImmunoShield', 'AutoImmune Pro', 'ImmuneBalance']
    }
  ];

  const regulatoryApprovals = [
    { name: 'FDA Approved', country: 'United States', icon: Award },
    { name: 'EMA Approved', country: 'European Union', icon: Award },
    { name: 'CDSCO Approved', country: 'India', icon: Award },
    { name: 'WHO Prequalified', country: 'Global', icon: Globe },
    { name: 'ISO 9001:2015', country: 'Quality Management', icon: CheckCircle },
    { name: 'GMP Certified', country: 'Manufacturing', icon: CheckCircle }
  ];


  const qualityStandards = [
    {
      title: 'Manufacturing Excellence',
      description: 'State-of-the-art facilities with automated production lines and real-time quality monitoring',
      icon: CheckCircle
    },
    {
      title: 'Regulatory Compliance',
      description: 'Full compliance with international regulatory standards including FDA, EMA, and WHO guidelines',
      icon: Award
    },
    {
      title: 'Quality Control',
      description: 'Rigorous testing protocols with 99.9% quality assurance and zero tolerance for defects',
      icon: Shield
    },
    {
      title: 'Research & Development',
      description: 'Continuous innovation with 15% of revenue invested in R&D and cutting-edge research facilities',
      icon: Microscope
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Product Portfolio
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover our comprehensive range of innovative pharmaceutical solutions designed 
              to address critical healthcare needs across multiple therapeutic areas.
            </p>
          </div>
        </div>
      </section>

      {/* Therapeutic Areas Overview */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Therapeutic Areas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive product portfolio spans multiple therapeutic areas, 
              addressing critical healthcare needs with innovative solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {therapeuticAreas.map((area, index) => (
              <Card key={index} className="p-5 text-center hover-lift">
                <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <area.icon className="text-primary-foreground" size={28} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {area.name}
                </h3>
                <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                  {area.description}
                </p>
                <div className="space-y-1">
                  <div className="text-xl font-bold text-primary">
                    {area.productCount}+ Products
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Key: {area.keyProducts.join(', ')}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Approvals */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Regulatory Approvals & Certifications
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our products meet the highest international standards with approvals from 
              leading regulatory authorities worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {regulatoryApprovals.map((approval, index) => (
              <Card key={index} className="p-4 text-center hover-lift aspect-square flex flex-col justify-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                  <approval.icon className="text-primary-foreground" size={24} />
                </div>
                <h3 className="text-sm font-bold text-foreground mb-2 leading-tight">
                  {approval.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-tight">
                  {approval.country}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex items-center gap-2"
                >
                  <category.icon size={16} />
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No products found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="p-6 hover-lift">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {product.name}
                      </h3>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}>
                        {product.status}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-foreground">Strength:</span>
                      <span className="text-sm text-muted-foreground">{product.strength}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-foreground">Form:</span>
                      <span className="text-sm text-muted-foreground">{product.form}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-foreground">Indication:</span>
                      <span className="text-sm text-muted-foreground">{product.indication}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1">
                      Learn More
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="px-3" 
                      title="Download Product Image"
                    >
                      <Download size={16} />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>


      {/* Quality Assurance & Manufacturing */}
      <section className="py-12 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Quality Assurance & Manufacturing Excellence
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to quality is reflected in our state-of-the-art manufacturing facilities 
              and rigorous quality control processes that ensure the highest standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityStandards.map((standard, index) => (
              <Card key={index} className="p-5 text-center hover-lift">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                  <standard.icon className="text-primary-foreground" size={24} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {standard.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {standard.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-12 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Need More Information?
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our medical affairs team is ready to provide detailed product information, 
            clinical data, and support for healthcare professionals.
          </p>
          <Button size="lg" className="text-lg px-8 py-4">
            Contact Medical Affairs
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Products;