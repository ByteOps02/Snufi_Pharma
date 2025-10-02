import { useState } from "react";
import { Search, AlertTriangle, CheckCircle, Info, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { motion, AnimatePresence } from "framer-motion";

interface Drug {
  id: string;
  name: string;
  genericName: string;
  category: string;
}

interface Interaction {
  severity: "high" | "moderate" | "low";
  description: string;
  recommendation: string;
}

const DrugInteractionChecker = () => {
  const [selectedDrugs, setSelectedDrugs] = useState<Drug[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [interactions, setInteractions] = useState<Interaction[]>([]);
  const [isChecking, setIsChecking] = useState(false);

  // Mock drug database
  const drugDatabase: Drug[] = [
    { id: "1", name: "CardioMax Pro", genericName: "Amlodipine", category: "Cardiovascular" },
    { id: "2", name: "NeuroShield", genericName: "Donepezil", category: "Neurological" },
    { id: "3", name: "ImmunoGuard", genericName: "Methotrexate", category: "Immunology" },
    { id: "4", name: "BoneStrong", genericName: "Alendronate", category: "Orthology" },
    { id: "5", name: "Warfarin", genericName: "Warfarin", category: "Anticoagulant" },
    { id: "6", name: "Aspirin", genericName: "Acetylsalicylic Acid", category: "Analgesic" },
  ];

  const filteredDrugs = drugDatabase.filter(
    (drug) =>
      (drug.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
       drug.genericName.toLowerCase().includes(searchTerm.toLowerCase())) &&
      !selectedDrugs.find((selected) => selected.id === drug.id)
  );

  const addDrug = (drug: Drug) => {
    setSelectedDrugs([...selectedDrugs, drug]);
    setSearchTerm("");
  };

  const removeDrug = (drugId: string) => {
    setSelectedDrugs(selectedDrugs.filter((drug) => drug.id !== drugId));
    setInteractions([]);
  };

  const checkInteractions = async () => {
    if (selectedDrugs.length < 2) return;
    
    setIsChecking(true);
    
    // Simulate API call
    setTimeout(() => {
      const mockInteractions: Interaction[] = [
        {
          severity: "high",
          description: "Warfarin and Aspirin may increase bleeding risk",
          recommendation: "Monitor INR closely and consider alternative therapy"
        },
        {
          severity: "moderate", 
          description: "Amlodipine may enhance hypotensive effect",
          recommendation: "Monitor blood pressure regularly"
        }
      ];
      
      setInteractions(mockInteractions);
      setIsChecking(false);
    }, 1500);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high": return "destructive";
      case "moderate": return "default";
      case "low": return "secondary";
      default: return "default";
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "high": return <AlertTriangle className="h-4 w-4" />;
      case "moderate": return <Info className="h-4 w-4" />;
      case "low": return <CheckCircle className="h-4 w-4" />;
      default: return <Info className="h-4 w-4" />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-primary">Drug Interaction Checker</h2>
        <p className="text-muted-foreground">
          Check for potential interactions between medications
        </p>
      </div>

      <Card className="p-6">
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search for medications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {searchTerm && filteredDrugs.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="border rounded-lg p-2 bg-background max-h-40 overflow-y-auto"
            >
              {filteredDrugs.slice(0, 5).map((drug) => (
                <div
                  key={drug.id}
                  className="flex items-center justify-between p-2 hover:bg-muted rounded cursor-pointer"
                  onClick={() => addDrug(drug)}
                >
                  <div>
                    <p className="font-medium">{drug.name}</p>
                    <p className="text-sm text-muted-foreground">{drug.genericName}</p>
                  </div>
                  <Plus className="h-4 w-4 text-primary" />
                </div>
              ))}
            </motion.div>
          )}

          {selectedDrugs.length > 0 && (
            <div className="space-y-2">
              <h3 className="font-semibold">Selected Medications:</h3>
              <div className="flex flex-wrap gap-2">
                <AnimatePresence>
                  {selectedDrugs.map((drug) => (
                    <motion.div
                      key={drug.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                    >
                      <Badge variant="secondary" className="flex items-center gap-2">
                        {drug.name}
                        <X
                          className="h-3 w-3 cursor-pointer hover:text-destructive"
                          onClick={() => removeDrug(drug.id)}
                        />
                      </Badge>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          )}

          {selectedDrugs.length >= 2 && (
            <Button 
              onClick={checkInteractions} 
              disabled={isChecking}
              className="w-full"
            >
              {isChecking ? "Checking Interactions..." : "Check for Interactions"}
            </Button>
          )}
        </div>
      </Card>

      <AnimatePresence>
        {interactions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold">Interaction Results</h3>
            {interactions.map((interaction, index) => (
              <Alert key={index} className="border-l-4" style={{
                borderLeftColor: interaction.severity === 'high' ? '#ef4444' : 
                                interaction.severity === 'moderate' ? '#f59e0b' : '#10b981'
              }}>
                <div className="flex items-start gap-2">
                  {getSeverityIcon(interaction.severity)}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant={getSeverityColor(interaction.severity) as "default" | "secondary" | "destructive" | "outline"}>
                        {interaction.severity.toUpperCase()} RISK
                      </Badge>
                    </div>
                    <AlertDescription className="mb-2">
                      <strong>Interaction:</strong> {interaction.description}
                    </AlertDescription>
                    <AlertDescription>
                      <strong>Recommendation:</strong> {interaction.recommendation}
                    </AlertDescription>
                  </div>
                </div>
              </Alert>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <Card className="p-4 bg-muted/50">
        <div className="flex items-start gap-2">
          <Info className="h-5 w-5 text-primary mt-0.5" />
          <div className="text-sm text-muted-foreground">
            <p className="font-medium mb-1">Important Disclaimer:</p>
            <p>
              This tool is for informational purposes only and should not replace professional medical advice. 
              Always consult with your healthcare provider before making any changes to your medication regimen.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DrugInteractionChecker;
