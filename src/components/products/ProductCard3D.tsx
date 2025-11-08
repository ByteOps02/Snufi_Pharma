import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Heart, Share2 } from "lucide-react";
import { useState } from "react";

interface ProductCard3DProps {
  product: {
    id: number;
    name: string;
    category: string;
    description: string;
    strength: string;
    form: string;
    indication: string;
    status: string;
    approvalDate: string;
    patients: string;
  };
  index: number;
}

export const ProductCard3D = ({ product, index }: ProductCard3DProps) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available":
        return "bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800";
      case "Clinical Trial":
        return "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800";
      case "Development":
        return "bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      layout
      whileHover={{ y: -8 }}
    >
      <Card className="p-6 h-full hover:shadow-2xl transition-all duration-500 border border-border rounded-xl overflow-hidden group relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative space-y-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              <Badge className={`${getStatusColor(product.status)} border text-xs px-2 py-1 rounded-full`}>
                {product.status}
              </Badge>
            </div>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsFavorited(!isFavorited)}
              className="p-2 rounded-full hover:bg-muted transition-colors"
            >
              <Heart
                className={`h-5 w-5 ${isFavorited ? "fill-red-500 text-red-500" : "text-muted-foreground"}`}
              />
            </motion.button>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
            {product.description}
          </p>

          <div className="space-y-2 text-sm bg-muted/30 rounded-lg p-3">
            <div className="flex justify-between">
              <span className="font-medium text-foreground">Strength:</span>
              <span className="text-muted-foreground">{product.strength}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-foreground">Form:</span>
              <span className="text-muted-foreground">{product.form}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-foreground">Patients:</span>
              <span className="text-primary font-semibold">{product.patients}</span>
            </div>
          </div>

          <div className="flex gap-2 pt-4">
            <Button size="sm" className="flex-1 rounded-lg group-hover:shadow-lg transition-shadow">
              Learn More
            </Button>
            <Button size="sm" variant="outline" className="rounded-lg">
              <Share2 className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="outline" className="rounded-lg">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
