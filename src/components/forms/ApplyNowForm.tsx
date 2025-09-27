import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ApplyNowForm = () => {
  return (
    <form className="space-y-4">
      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" placeholder="John Doe" />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="john.doe@example.com" />
      </div>
      <div>
        <Label htmlFor="phone">Phone Number</Label>
        <Input id="phone" type="tel" placeholder="+1 (555) 555-5555" />
      </div>
      <div>
        <Label htmlFor="resume">Resume</Label>
        <Input id="resume" type="file" />
      </div>
      <div>
        <Label htmlFor="cover-letter">Cover Letter</Label>
        <Textarea id="cover-letter" placeholder="Tell us about yourself..." />
      </div>
      <Button type="submit" className="w-full">Submit Application</Button>
    </form>
  );
};

export default ApplyNowForm;
