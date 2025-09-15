import React from 'react';
import { Target, Eye, Award, Users, Building, Globe } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To develop and deliver innovative pharmaceutical solutions that improve the quality of life for patients worldwide.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be a leading global pharmaceutical company recognized for excellence in research, development, and patient care.',
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Maintaining the highest standards of quality and safety in all our pharmaceutical products and processes.',
    },
  ];

  const milestones = [
    { year: '2016', event: 'Founded Sunfi Pharmaceutical with a vision to improve healthcare' },
    { year: '2017', event: 'Established our first research and development facility' },
    { year: '2018', event: 'Launched our first breakthrough cardiovascular medication' },
    { year: '2019', event: 'Expanded operations to international markets' },
    { year: '2020', event: 'Opened state-of-the-art manufacturing facility' },
    { year: '2021', event: 'Celebrating over 10 years of pharmaceutical excellence' },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About Sunfi Pharmaceutical
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              For over five decades, we have been at the forefront of pharmaceutical innovation, 
              dedicated to developing life-changing medicines that make a real difference in people's lives.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-8 text-center hover-lift">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-primary-foreground" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-12 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded in 1970 with a simple yet powerful mission: to improve healthcare through 
                innovative pharmaceutical solutions. What started as a small research-focused company 
                has grown into a global leader in pharmaceutical development and manufacturing.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Today, Sunfi Pharmaceutical operates in over 15 countries, with state-of-the-art 
                research facilities, manufacturing plants, and a dedicated team of over 5,000 
                professionals worldwide.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <Building className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Years</div>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">5000+</div>
                  <div className="text-sm text-muted-foreground">Employees</div>
                </div>
                <div className="text-center">
                  <Globe className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-primary rounded-2xl p-1">
              <div className="bg-background rounded-xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Key Milestones</h3>
                <div className="space-y-4">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-semibold text-sm">{milestone.year}</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed pt-2">
                        {milestone.event}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Message */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            A Message from Our Leadership
          </h2>
          <blockquote className="text-lg text-muted-foreground leading-relaxed italic mb-6">
            "At Sunfi Pharmaceutical, we believe that every breakthrough in medicine brings us 
            closer to a healthier world. Our commitment to innovation, quality, and patient care 
            drives everything we do, and we're proud to continue this mission for generations to come."
          </blockquote>
          <div className="text-foreground font-semibold">
            Saroj, CEO & Founder
          </div>
          <blockquote className="text-lg text-muted-foreground leading-relaxed italic mt-8 mb-6">
            "Our focus on research and development is unwavering. We are dedicated to pushing the boundaries of science to create therapies that address unmet medical needs and improve patient outcomes."
          </blockquote>
          <div className="text-foreground font-semibold">
           Bhagwat Charan Bhargava, Chief Scientific Officer
          </div>
          <blockquote className="text-lg text-muted-foreground leading-relaxed italic mt-8 mb-6">
            "Operational excellence and a commitment to quality are the cornerstones of our manufacturing processes. We strive to deliver safe and effective medicines to patients around the globe."
          </blockquote>
          <div className="text-foreground font-semibold">
            Sumit Kumar Upadhyay, Chief Operating Officer
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;