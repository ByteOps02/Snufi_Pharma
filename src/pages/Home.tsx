import React from 'react';
import { ArrowRight, Shield, Microscope, Heart, Users, Award, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import heroImage from '@/assets/hero-pharmaceutical.jpg';

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control processes ensure the highest standards of pharmaceutical excellence.',
    },
    {
      icon: Microscope,
      title: 'Research & Innovation',
      description: 'Cutting-edge research facilities and innovative approaches to developing life-changing medications.',
    },
    {
      icon: Heart,
      title: 'Patient-Centric',
      description: 'Every decision we make is guided by our commitment to improving patient outcomes and quality of life.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'World-class scientists, researchers, and healthcare professionals dedicated to pharmaceutical excellence.',
    },
  ];

  const stats = [
    { number: '50+', label: 'Years of Excellence' },
    { number: '200+', label: 'Products Developed' },
    { number: '15+', label: 'Countries Served' },
    { number: '1M+', label: 'Lives Improved' },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Modern pharmaceutical laboratory" 
            className="w-full h-full object-cover mix-blend-overlay opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Advancing
              <span className="block text-secondary-light">Healthcare</span>
              Innovation
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Sunfi Pharmaceutical is dedicated to developing innovative medicines that improve lives worldwide. 
              With over five decades of excellence, we continue to push the boundaries of medical science.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                Explore Products
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary hover:border-white">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Sunfi Pharmaceutical
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our commitment to excellence, innovation, and patient care sets us apart in the pharmaceutical industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover-lift">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="text-primary-foreground" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of healthcare professionals who trust Sunfi Pharmaceutical for quality medicines and innovative solutions.
          </p>
          <Button size="lg" className="text-lg px-8 py-4">
            Contact Us Today
            <ChevronRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;