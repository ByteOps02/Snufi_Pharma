import { useState } from "react";
import { 
  Stethoscope, 
  FileText, 
  GraduationCap, 
  Calendar, 
  Download, 
  Search,
  BookOpen,
  Video,
  Users,
  Award,
  Clock,
  ExternalLink,
  Lock,
  Mail
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ColoredIcon } from "@/components/ui/colored-icon";
import { motion } from "framer-motion";

interface MedicalResource {
  id: string;
  title: string;
  type: "prescribing_info" | "clinical_data" | "safety_info" | "dosing_guide";
  category: string;
  lastUpdated: string;
  downloadUrl: string;
  description: string;
}

interface EducationalProgram {
  id: string;
  title: string;
  type: "webinar" | "course" | "conference" | "workshop";
  duration: string;
  cmeCredits?: number;
  date: string;
  status: "upcoming" | "available" | "completed";
  description: string;
  specialty: string;
}

interface ClinicalUpdate {
  id: string;
  title: string;
  type: "study_results" | "safety_alert" | "new_indication" | "dosing_update";
  date: string;
  priority: "high" | "medium" | "low";
  summary: string;
  drug: string;
}

const HealthcareProfessionalPortal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const medicalResources: MedicalResource[] = [
    {
      id: "pi-cardiomax",
      title: "CardioMax Pro - Complete Prescribing Information",
      type: "prescribing_info",
      category: "Cardiovascular",
      lastUpdated: "2024-01-15",
      downloadUrl: "/resources/cardiomax-pi.pdf",
      description: "Comprehensive prescribing information including indications, dosage, contraindications, and adverse reactions."
    },
    {
      id: "clinical-neuroshield",
      title: "NeuroShield Clinical Trial Data Summary",
      type: "clinical_data",
      category: "Neurological",
      lastUpdated: "2024-02-01",
      downloadUrl: "/resources/neuroshield-clinical.pdf",
      description: "Phase III clinical trial results demonstrating efficacy and safety in Alzheimer's disease patients."
    },
    {
      id: "safety-immunoguard",
      title: "ImmunoGuard Safety Profile Update",
      type: "safety_info",
      category: "Immunology",
      lastUpdated: "2024-01-30",
      downloadUrl: "/resources/immunoguard-safety.pdf",
      description: "Updated safety information based on post-marketing surveillance data."
    },
    {
      id: "dosing-bonestrong",
      title: "BoneStrong Dosing Guidelines",
      type: "dosing_guide",
      category: "Orthology",
      lastUpdated: "2024-01-20",
      downloadUrl: "/resources/bonestrong-dosing.pdf",
      description: "Evidence-based dosing recommendations for optimal therapeutic outcomes."
    }
  ];

  const educationalPrograms: EducationalProgram[] = [
    {
      id: "cardio-webinar",
      title: "Advances in Cardiovascular Pharmacotherapy",
      type: "webinar",
      duration: "60 min",
      cmeCredits: 1.0,
      date: "2024-03-15",
      status: "upcoming",
      description: "Latest developments in cardiovascular drug therapy and clinical practice guidelines.",
      specialty: "Cardiology"
    },
    {
      id: "alzheimers-course",
      title: "Alzheimer's Disease: Current Treatment Paradigms",
      type: "course",
      duration: "4 hours",
      cmeCredits: 4.0,
      date: "2024-02-20",
      status: "available",
      description: "Comprehensive course covering pathophysiology, diagnosis, and treatment of Alzheimer's disease.",
      specialty: "Neurology"
    },
    {
      id: "immunology-conference",
      title: "Annual Immunology Research Conference",
      type: "conference",
      duration: "2 days",
      cmeCredits: 12.0,
      date: "2024-04-10",
      status: "upcoming",
      description: "Leading experts discuss breakthrough research in immunological disorders and treatments.",
      specialty: "Immunology"
    }
  ];

  const clinicalUpdates: ClinicalUpdate[] = [
    {
      id: "update-1",
      title: "CardioMax Pro: New Indication Approved",
      type: "new_indication",
      date: "2024-02-05",
      priority: "high",
      summary: "FDA approves CardioMax Pro for treatment of heart failure with reduced ejection fraction.",
      drug: "CardioMax Pro"
    },
    {
      id: "update-2",
      title: "NeuroShield: Updated Dosing Recommendations",
      type: "dosing_update",
      date: "2024-01-28",
      priority: "medium",
      summary: "New dosing guidelines based on recent pharmacokinetic studies in elderly patients.",
      drug: "NeuroShield"
    },
    {
      id: "update-3",
      title: "ImmunoGuard: Important Safety Information",
      type: "safety_alert",
      date: "2024-01-25",
      priority: "high",
      summary: "Updated contraindications and monitoring recommendations for patients with hepatic impairment.",
      drug: "ImmunoGuard"
    }
  ];

  const getResourceTypeIcon = (type: string) => {
    switch (type) {
      case "prescribing_info": return FileText;
      case "clinical_data": return Award;
      case "safety_info": return Stethoscope;
      case "dosing_guide": return BookOpen;
      default: return FileText;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "destructive";
      case "medium": return "default";
      case "low": return "secondary";
      default: return "default";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming": return "default";
      case "available": return "secondary";
      case "completed": return "outline";
      default: return "default";
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="max-w-md mx-auto p-6 space-y-6 mt-20">
        <Card className="p-8 text-center">
          <div className="space-y-6">
            <div className="flex justify-center">
              <div className="w-20 h-20 bg-sky-100 dark:bg-sky-900/20 rounded-2xl flex items-center justify-center shadow-lg">
                <ColoredIcon
                  Icon={Lock}
                  color="sky"
                  size={40}
                />
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Healthcare Professional Portal</h2>
              <p className="text-muted-foreground">
                Access exclusive medical resources, clinical data, and educational programs
              </p>
            </div>
            <div className="space-y-4">
              <Input placeholder="Medical License Number" />
              <Input placeholder="Email Address" type="email" />
              <Input placeholder="Password" type="password" />
              <Button 
                className="w-full" 
                onClick={() => setIsLoggedIn(true)}
              >
                Sign In
              </Button>
            </div>
            <div className="text-sm text-muted-foreground">
              <p>New to our portal? <Button variant="link" className="p-0 h-auto">Register here</Button></p>
              <p className="mt-2">This portal is exclusively for licensed healthcare professionals.</p>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-primary">Healthcare Professional Portal</h2>
          <p className="text-muted-foreground">Welcome back, Dr. Smith</p>
        </div>
        <Button variant="outline" onClick={() => setIsLoggedIn(false)}>
          Sign Out
        </Button>
      </div>

      <Tabs defaultValue="resources" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="resources">Medical Resources</TabsTrigger>
          <TabsTrigger value="education">Education & CME</TabsTrigger>
          <TabsTrigger value="updates">Clinical Updates</TabsTrigger>
          <TabsTrigger value="support">Medical Affairs</TabsTrigger>
        </TabsList>

        <TabsContent value="resources" className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search medical resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {medicalResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <ColoredIcon 
                        Icon={getResourceTypeIcon(resource.type)} 
                        color="primary"
                        className="h-8 w-8 bg-primary/10 p-2 rounded-lg" 
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2">{resource.title}</h3>
                        <div className="flex gap-2 mb-2">
                          <Badge variant="outline">{resource.category}</Badge>
                          <Badge variant="secondary">{resource.type.replace('_', ' ')}</Badge>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground">{resource.description}</p>

                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>Updated: {new Date(resource.lastUpdated).toLocaleDateString()}</span>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </Button>
                      <Button size="sm" variant="outline">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="education" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {educationalPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <GraduationCap className="h-6 w-6 text-primary" />
                        <div>
                          <h3 className="font-semibold">{program.title}</h3>
                          <p className="text-sm text-muted-foreground">{program.specialty}</p>
                        </div>
                      </div>
                      <Badge variant={getStatusColor(program.status) as "default" | "secondary" | "destructive" | "outline"}>
                        {program.status}
                      </Badge>
                    </div>

                    <p className="text-sm text-muted-foreground">{program.description}</p>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{new Date(program.date).toLocaleDateString()}</span>
                      </div>
                      {program.cmeCredits && (
                        <div className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-primary" />
                          <span>{program.cmeCredits} CME Credits</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <Video className="h-4 w-4 text-primary" />
                        <span>{program.type}</span>
                      </div>
                    </div>

                    <Button className="w-full">
                      {program.status === "upcoming" ? "Register" : "Access Program"}
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="updates" className="space-y-6">
          <div className="space-y-4">
            {clinicalUpdates.map((update, index) => (
              <motion.div
                key={update.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold">{update.title}</h3>
                        <Badge variant={getPriorityColor(update.priority) as "default" | "secondary" | "destructive" | "outline"}>
                          {update.priority} priority
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span>{update.drug}</span>
                        <span>•</span>
                        <span>{new Date(update.date).toLocaleDateString()}</span>
                        <span>•</span>
                        <span>{update.type.replace('_', ' ')}</span>
                      </div>
                      <p className="text-muted-foreground">{update.summary}</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Read More
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="support" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Stethoscope className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Medical Information</h3>
                </div>
                <p className="text-muted-foreground">
                  Get answers to medical questions from our team of clinical experts.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Medical Information Hotline</p>
                  <p className="text-lg font-bold text-primary">1-800-MED-INFO</p>
                  <p className="text-sm text-muted-foreground">
                    Monday - Friday: 9:00 AM - 6:00 PM EST
                  </p>
                </div>
                <Button className="w-full">
                  <Mail className="h-4 w-4 mr-2" />
                  Submit Medical Inquiry
                </Button>
              </div>
            </Card>

            <Card className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Advisory Board</h3>
                </div>
                <p className="text-muted-foreground">
                  Join our medical advisory board and contribute to drug development.
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    • Participate in clinical research discussions<br />
                    • Provide expert medical insights<br />
                    • Shape future treatment guidelines
                  </p>
                </div>
                <Button className="w-full" variant="outline">
                  Learn About Opportunities
                </Button>
              </div>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HealthcareProfessionalPortal;
