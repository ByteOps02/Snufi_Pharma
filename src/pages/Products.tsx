import React, { useState } from 'react';
import { Search, Filter, Pill, Heart, Brain, Shield, Microscope } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const Products = () => {
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
      case 'Available': return 'text-success bg-success/10';
      case 'Clinical Trial': return 'text-warning bg-warning/10';
      case 'Development': return 'text-primary bg-primary/10';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Product Portfolio
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of innovative pharmaceutical solutions designed 
              to address critical healthcare needs across multiple therapeutic areas.
            </p>
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

                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Need More Information?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
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