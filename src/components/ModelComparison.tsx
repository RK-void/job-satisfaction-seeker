
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ModelData {
  name: string;
  accuracy: number;
  precision: number;
  recall: number;
  f1Score: number;
  isBest?: boolean;
}

const models: ModelData[] = [
  {
    name: "Random Forest",
    accuracy: 0.723,
    precision: 0.736,
    recall: 0.723,
    f1Score: 0.724,
  },
  {
    name: "Gradient Boosting",
    accuracy: 0.734,
    precision: 0.731,
    recall: 0.734,
    f1Score: 0.732,
  },
  {
    name: "Logistic Regression",
    accuracy: 0.659,
    precision: 0.667,
    recall: 0.659,
    f1Score: 0.658,
  },
  {
    name: "KNN (Tuned)",
    accuracy: 0.791,
    precision: 0.797,
    recall: 0.791,
    f1Score: 0.793,
    isBest: true,
  },
  {
    name: "Neural Network",
    accuracy: 0.712,
    precision: 0.717,
    recall: 0.712,
    f1Score: 0.714,
  },
];

const ModelComparison = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );
    
    const element = document.getElementById("model-comparison");
    if (element) {
      observer.observe(element);
    }
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);
  
  return (
    <div
      id="model-comparison"
      className={cn(
        "w-full overflow-hidden opacity-0 transition-all duration-700",
        isVisible && "opacity-100"
      )}
    >
      <div className="overflow-x-auto">
        <Table>
          <TableCaption>
            KNN (Tuned) achieved the highest performance with an F1 Score of 79.3%
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-left">Model</TableHead>
              <TableHead className="text-center">Accuracy</TableHead>
              <TableHead className="text-center">Precision</TableHead>
              <TableHead className="text-center">Recall</TableHead>
              <TableHead className="text-center">F1 Score</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {models.map((model, index) => (
              <TableRow
                key={model.name}
                className={cn(
                  "transition-all hover:bg-secondary/40",
                  model.isBest ? "bg-primary/5" : "bg-transparent",
                  isVisible ? "animate-fade-in" : "opacity-0"
                )}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <TableCell className="font-medium">
                  <div className="flex items-center">
                    {model.isBest && (
                      <span className="bg-primary/10 text-primary text-xs py-1 px-2 rounded-full mr-2">
                        Best
                      </span>
                    )}
                    {model.name}
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  {(model.accuracy * 100).toFixed(1)}%
                </TableCell>
                <TableCell className="text-center">
                  {(model.precision * 100).toFixed(1)}%
                </TableCell>
                <TableCell className="text-center">
                  {(model.recall * 100).toFixed(1)}%
                </TableCell>
                <TableCell className={cn("text-center", model.isBest ? "font-semibold text-primary" : "")}>
                  {(model.f1Score * 100).toFixed(1)}%
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ModelComparison;
