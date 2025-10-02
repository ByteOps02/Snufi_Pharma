import { useState } from "react";
import { Search, MapPin, Calendar, Users, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion, AnimatePresence } from "framer-motion";

interface ClinicalTrial {
  id: string;
  title: string;
  condition: string;
  phase: string;
  status: "recruiting" | "active" | "completed";
  location: string;
  sponsor: string;
  description: string;
  eligibility: string[];
  estimatedEnrollment: number;
  startDate: string;
  estimatedCompletion: string;
}

const ClinicalTrialFinder = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCondition, setSelectedCondition] = useState("all");
  const [selectedPhase, setSelectedPhase] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  // Mock clinical trials data
  const clinicalTrials: ClinicalTrial[] = [
    {
      id: "CT001",
      title: "CardioMax Pro Efficacy Study in Hypertensive Patients",
      condition: "Hypertension",
      phase: "Phase III",
      status: "recruiting",
      location: "Multiple Centers, USA",
      sponsor: "Snufi Pharmaceutical",
      description: "A randomized, double-blind, placebo-controlled study to evaluate the efficacy and safety of CardioMax Pro in patients with essential hypertension.",
      eligibility: ["Age 18-75 years", "Diagnosed hypertension", "No recent cardiovascular events"],
      estimatedEnrollment: 500,
      startDate: "2024-01-15",
      estimatedCompletion: "2025-06-30"
    },
    {
      id: "CT002", 
      title: "NeuroShield Long-term Safety Study",
      condition: "Alzheimer's Disease",
      phase: "Phase IV",
      status: "active",
      location: "Boston, MA",
      sponsor: "Snufi Pharmaceutical",
      description: "Post-marketing surveillance study to assess long-term safety and effectiveness of NeuroShield in Alzheimer's patients.",
      eligibility: ["Mild to moderate Alzheimer's", "Age 50+ years", "Stable caregiver support"],
      estimatedEnrollment: 1000,
      startDate: "2023-08-01",
      estimatedCompletion: "2026-12-31"
    },
    {
      id: "CT003",
      title: "ImmunoGuard Pediatric Formulation Study",
      condition: "Juvenile Arthritis",
      phase: "Phase II",
      status: "recruiting",
      location: "Children's Hospital, Chicago",
      sponsor: "Snufi Pharmaceutical",
      description: "Safety and efficacy study of ImmunoGuard pediatric formulation in children with juvenile idiopathic arthritis.",
      eligibility: ["Age 6-17 years", "Diagnosed JIA", "Parent/guardian consent"],
      estimatedEnrollment: 150,
      startDate: "2024-03-01",
      estimatedCompletion: "2025-09-30"
    }
  ];

  const conditions = ["all", "Hypertension", "Alzheimer's Disease", "Juvenile Arthritis", "Diabetes", "Cancer"];
  const phases = ["all", "Phase I", "Phase II", "Phase III", "Phase IV"];
  const statuses = ["all", "recruiting", "active", "completed"];

  const filteredTrials = clinicalTrials.filter((trial) => {
    const matchesSearch = trial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         trial.condition.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         trial.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCondition = selectedCondition === "all" || trial.condition === selectedCondition;
    const matchesPhase = selectedPhase === "all" || trial.phase === selectedPhase;
    const matchesStatus = selectedStatus === "all" || trial.status === selectedStatus;

    return matchesSearch && matchesCondition && matchesPhase && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "recruiting": return "default";
      case "active": return "secondary";
      case "completed": return "outline";
      default: return "default";
    }
  };

  const getPhaseColor = (phase: string) => {
    switch (phase) {
      case "Phase I": return "destructive";
      case "Phase II": return "default";
      case "Phase III": return "secondary";
      case "Phase IV": return "outline";
      default: return "default";
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-primary">Clinical Trial Finder</h2>
        <p className="text-muted-foreground">
          Find clinical trials that may be right for you
        </p>
      </div>

      {/* Search and Filters */}
      <Card className="p-6">
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by condition, treatment, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Select value={selectedCondition} onValueChange={setSelectedCondition}>
              <SelectTrigger>
                <SelectValue placeholder="Select Condition" />
              </SelectTrigger>
              <SelectContent>
                {conditions.map((condition) => (
                  <SelectItem key={condition} value={condition}>
                    {condition === "all" ? "All Conditions" : condition}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedPhase} onValueChange={setSelectedPhase}>
              <SelectTrigger>
                <SelectValue placeholder="Select Phase" />
              </SelectTrigger>
              <SelectContent>
                {phases.map((phase) => (
                  <SelectItem key={phase} value={phase}>
                    {phase === "all" ? "All Phases" : phase}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger>
                <SelectValue placeholder="Select Status" />
              </SelectTrigger>
              <SelectContent>
                {statuses.map((status) => (
                  <SelectItem key={status} value={status}>
                    {status === "all" ? "All Statuses" : status.charAt(0).toUpperCase() + status.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      {/* Results */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">
            {filteredTrials.length} Trial{filteredTrials.length !== 1 ? 's' : ''} Found
          </h3>
        </div>

        <AnimatePresence>
          {filteredTrials.map((trial, index) => (
            <motion.div
              key={trial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-primary mb-2">
                        {trial.title}
                      </h4>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant={getStatusColor(trial.status) as "default" | "secondary" | "destructive" | "outline"}>
                          {trial.status.toUpperCase()}
                        </Badge>
                        <Badge variant={getPhaseColor(trial.phase) as "default" | "secondary" | "destructive" | "outline"}>
                          {trial.phase}
                        </Badge>
                        <Badge variant="outline">
                          {trial.condition}
                        </Badge>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </div>

                  <p className="text-muted-foreground">
                    {trial.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{trial.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span>{trial.estimatedEnrollment} participants</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>Started: {new Date(trial.startDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-primary" />
                      <span>Sponsor: {trial.sponsor}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h5 className="font-medium mb-2">Key Eligibility Criteria:</h5>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      {trial.eligibility.map((criteria, idx) => (
                        <li key={idx}>{criteria}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredTrials.length === 0 && (
        <Card className="p-8 text-center">
          <div className="space-y-2">
            <Search className="h-12 w-12 text-muted-foreground mx-auto" />
            <h3 className="text-lg font-semibold">No trials found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search criteria or filters
            </p>
          </div>
        </Card>
      )}

      <Card className="p-4 bg-muted/50">
        <div className="flex items-start gap-2">
          <FileText className="h-5 w-5 text-primary mt-0.5" />
          <div className="text-sm text-muted-foreground">
            <p className="font-medium mb-1">Important Information:</p>
            <p>
              Participation in clinical trials is voluntary. Please consult with your healthcare provider 
              to determine if a clinical trial is appropriate for your condition. All trials listed are 
              conducted in accordance with Good Clinical Practice guidelines.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ClinicalTrialFinder;
