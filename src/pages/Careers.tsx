import React from "react";
import { Briefcase, Coffee, Heart, Zap, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ColoredIcon } from "@/components/ui/colored-icon";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import ApplyNowForm from "@/components/forms/ApplyNowForm";

const Careers = () => {
  const jobOpenings = [
    {
      title: "Senior Research Scientist",
      location: "New York, NY",
      department: "Research & Development",
    },
    {
      title: "Clinical Trial Manager",
      location: "London, UK",
      department: "Clinical Operations",
    },
    {
      title: "Regulatory Affairs Specialist",
      location: "Washington, D.C.",
      department: "Regulatory Affairs",
    },
    {
      title: "Quality Control Analyst",
      location: "San Francisco, CA",
      department: "Quality Assurance",
    },
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description:
        "Comprehensive health, dental, and vision insurance for you and your family.",
    },
    {
      icon: Zap,
      title: "Professional Growth",
      description:
        "Opportunities for continuous learning, development, and career advancement.",
    },
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description:
        "Flexible work arrangements, generous paid time off, and a supportive work environment.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Join Our Team
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              At Snufi Pharmaceutical®, we are always looking for talented and passionate individuals to join our team. Explore our open positions and find your next career opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Open Positions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobOpenings.map((job, index) => (
              <Card key={index} className="p-6 hover-lift">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {job.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {job.location} | {job.department}
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Apply Now</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Apply for {job.title}</DialogTitle>
                    </DialogHeader>
                    <ApplyNowForm />
                  </DialogContent>
                </Dialog>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Why Join Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-8 text-center hover-lift">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <ColoredIcon
                    Icon={benefit.icon}
                    color={
                      benefit.title === "Health & Wellness"
                        ? "violet"
                        : benefit.title === "Professional Growth"
                          ? "sky"
                          : "amber"
                    }
                    size={32}
                  />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Life at Snufi Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Life at Snufi
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover-lift">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <ColoredIcon Icon={Users} color="violet" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Collaboration
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We foster a collaborative and inclusive work environment where every employee is valued and has the opportunity to grow.
              </p>
            </Card>
            <Card className="p-6 text-center hover-lift">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <ColoredIcon Icon={Zap} color="sky" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Innovation
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We encourage our employees to think outside the box and develop innovative solutions that address unmet medical needs.
              </p>
            </Card>
            <Card className="p-6 text-center hover-lift">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <ColoredIcon Icon={Heart} color="rose" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Well-being
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe in work-life balance and offer a variety of programs and activities to support our employees' well-being.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            If you are passionate about improving lives and want to be part of a dynamic and innovative team, we would love to hear from you. 
          </p>
          <Button size="lg">View All Openings</Button>
        </div>
      </section>
    </div>
  );
};

export default Careers;