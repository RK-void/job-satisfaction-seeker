
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

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
    isBest: true,
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
    accuracy: 0.691,
    precision: 0.697,
    recall: 0.691,
    f1Score: 0.693,
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
        <table className="w-full min-w-[640px]">
          <thead>
            <tr className="border-b">
              <th className="text-left p-4 font-medium text-muted-foreground">Model</th>
              <th className="text-center p-4 font-medium text-muted-foreground">Accuracy</th>
              <th className="text-center p-4 font-medium text-muted-foreground">Precision</th>
              <th className="text-center p-4 font-medium text-muted-foreground">Recall</th>
              <th className="text-center p-4 font-medium text-muted-foreground">F1 Score</th>
            </tr>
          </thead>
          <tbody>
            {models.map((model, index) => (
              <tr
                key={model.name}
                className={cn(
                  "transition-all hover:bg-secondary/40",
                  model.isBest ? "bg-primary/5" : "bg-transparent",
                  isVisible ? "animate-fade-in" : "opacity-0"
                )}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <td className="p-4 border-b">
                  <div className="flex items-center">
                    {model.isBest && (
                      <span className="bg-primary/10 text-primary text-xs py-1 px-2 rounded-full mr-2">
                        Best
                      </span>
                    )}
                    {model.name}
                  </div>
                </td>
                <td className="p-4 text-center border-b">
                  {(model.accuracy * 100).toFixed(1)}%
                </td>
                <td className="p-4 text-center border-b">
                  {(model.precision * 100).toFixed(1)}%
                </td>
                <td className="p-4 text-center border-b">
                  {(model.recall * 100).toFixed(1)}%
                </td>
                <td className="p-4 text-center border-b">
                  <span className={model.isBest ? "font-semibold text-primary" : ""}>
                    {(model.f1Score * 100).toFixed(1)}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ModelComparison;
