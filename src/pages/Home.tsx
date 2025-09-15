import React, { useEffect } from 'react';
import { ArrowRight, Shield, Microscope, Heart, Brain, Users, Award, ChevronRight, Star, Globe, Building, Leaf, TrendingUp, Calendar, Quote, CheckCircle, Target, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import heroImage from '@/assets/hero-pharmaceutical.jpg';

const Home = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const handleExploreProducts = () => {
    navigate('/products');
  };

  const handleLearnMore = () => {
    navigate('/about');
  };

  const handleContactUs = () => {
    navigate('/contact');
  };

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
    { number: '10+', label: 'Years of Excellence' },
    { number: '25+', label: 'Products Developed' },
    { number: '15+', label: 'Countries Served' },
    { number: '2M+', label: 'Lives Improved' },
  ];

  const testimonials = [
    {
      name: 'Dr. Dushyant Deo',
      title: 'Cardiologist',
      company: 'SIIMS Multispeciality Hospital',
      content: 'Sunfi Pharmaceutical has been our trusted partner for over a decade. Their innovative cardiovascular medications have significantly improved our patient outcomes.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Dr. Ghanshyam Das',
      title: 'Pediatrician',
      company: 'Gajra Raj Medical College & Hospital',
      content: 'The quality and efficacy of Sunfi\'s pediatric treatments are unmatched. Their commitment to research excellence is evident in every product.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Dr. Manoj Kumar',
      title: 'Orthopedic Surgeon',
      company: 'Cancer Care Center',
      content: 'Working with Sunfi has transformed our orthopedic treatment protocols. Their precision orthopedic medications offer hope to our patients.',
      rating: 5,
      avatar: 'ER'
    }
  ];

  const latestNews = [
    {
      title: 'Sunfi Pharmaceutical Receives FDA Approval for New Cardiovascular Drug',
      date: '2025-09-15',
      category: 'Regulatory',
      excerpt: 'CardioMax Pro receives FDA approval for treating hypertension, marking a significant milestone in cardiovascular care.',
      readTime: '3 min read'
    },
    {
      title: 'Partnership with Leading Research Institute for Alzheimer\'s Treatment',
      date: '2025-08-21',
      category: 'Partnership',
      excerpt: 'Collaborative research initiative aims to develop breakthrough treatments for neurodegenerative diseases.',
      readTime: '5 min read'
    },
    {
      title: 'Sustainability Initiative: Carbon-Neutral Manufacturing by 2027',
      date: '2025-08-05',
      category: 'Sustainability',
      excerpt: 'Sunfi commits to achieving carbon-neutral manufacturing operations across all facilities worldwide.',
      readTime: '4 min read'
    }
  ];

  const therapeuticAreas = [
    {
      name: 'Cardiovascular',
      icon: Heart,
      description: 'Advanced treatments for heart disease and vascular conditions',
      productCount: 12,
      keyProducts: ['CardioMax Pro', 'CardioFlow', 'VascularGuard']
    },
    {
      name: 'Neurological',
      icon: Brain,
      description: 'Innovative solutions for brain and nervous system disorders',
      productCount: 8,
      keyProducts: ['NeuroGuard', 'NeuroBalance', 'CogniMax']
    },
    {
      name: 'Oncology',
      icon: Microscope,
      description: 'Precision cancer treatments and supportive care',
      productCount: 15,
      keyProducts: ['OncoTarget', 'ChemoShield', 'ImmunoBoost']
    },
    {
      name: 'Immunology',
      icon: Shield,
      description: 'Immune system modulators and autoimmune treatments',
      productCount: 6,
      keyProducts: ['ImmunoShield', 'AutoImmune Pro', 'ImmuneBalance']
    }
  ];

  const awards = [
    {
      title: 'Pharmaceutical Excellence Award 2023',
      organization: 'International Pharma Association',
      year: '2023',
      icon: Award
    },
    {
      title: 'Innovation in Medicine',
      organization: 'Global Health Foundation',
      year: '2023',
      icon: Star
    },
    {
      title: 'Best Manufacturing Practices',
      organization: 'Quality Assurance Council',
      year: '2022',
      icon: CheckCircle
    },
    {
      title: 'Sustainability Leadership',
      organization: 'Green Pharma Initiative',
      year: '2022',
      icon: Leaf
    }
  ];


  const sustainabilityInitiatives = [
    {
      title: 'Carbon Neutral Manufacturing',
      description: 'Achieving net-zero carbon emissions across all production facilities',
      progress: 75,
      icon: Leaf
    },
    {
      title: 'Water Conservation',
      description: 'Implementing advanced water recycling systems in manufacturing',
      progress: 90,
      icon: Globe
    },
    {
      title: 'Waste Reduction',
      description: 'Zero waste to landfill initiative across all operations',
      progress: 85,
      icon: Target
    },
    {
      title: 'Renewable Energy',
      description: 'Transitioning to 100% renewable energy sources',
      progress: 60,
      icon: Zap
    }
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
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4" onClick={handleExploreProducts}>
                Explore Products
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary hover:border-white bg-transparent" onClick={handleLearnMore}>
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Why Choose Sunfi Pharmaceutical
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence, innovation, and patient care sets us apart in the pharmaceutical industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Therapeutic Areas Preview */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Therapeutic Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We specialize in developing innovative treatments across multiple therapeutic areas, 
              addressing critical healthcare needs worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {therapeuticAreas.map((area, index) => (
              <Card key={index} className="p-6 text-center hover-lift">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <area.icon className="text-primary-foreground" size={32} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {area.name}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {area.description}
                </p>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary">
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

      {/* Customer Testimonials */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              What Our Partners Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by healthcare professionals and institutions worldwide for our commitment to quality and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover-lift">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
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
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    <p className="text-sm text-primary">{testimonial.company}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News & Updates */}
      <section className="py-12 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Latest News & Updates
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay informed about our latest developments, regulatory approvals, and industry insights.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {latestNews.map((news, index) => (
              <Card key={index} className="p-6 hover-lift">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {news.category}
                  </span>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(news.date).toLocaleDateString()}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 leading-tight">
                  {news.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {news.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{news.readTime}</span>
                  <Button variant="outline" size="sm">
                    Read More
                    <ArrowRight className="ml-1" size={14} />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Awards & Recognition
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by leading industry organizations worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <Card key={index} className="p-6 text-center hover-lift">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <award.icon className="text-primary-foreground" size={24} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {award.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {award.organization}
                </p>
                <span className="text-primary font-semibold">{award.year}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Sustainability & CSR */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Sustainability & Corporate Responsibility
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Committed to environmental stewardship and social responsibility while advancing healthcare innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sustainabilityInitiatives.map((initiative, index) => (
              <Card key={index} className="p-6 hover-lift">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <initiative.icon className="text-primary-foreground" size={24} />
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
                    <span className="font-semibold">{initiative.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${initiative.progress}%` }}
                    ></div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Ready to Partner With Us?
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of healthcare professionals who trust Sunfi Pharmaceutical for quality medicines and innovative solutions.
          </p>
          <Button size="lg" className="text-lg px-8 py-4" onClick={handleContactUs}>
            Contact Us Today
            <ChevronRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;