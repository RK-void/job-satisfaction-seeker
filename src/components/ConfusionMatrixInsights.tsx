
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const ConfusionMatrixInsights = () => {
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
    
    const element = document.getElementById("confusion-matrix");
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
      id="confusion-matrix"
      className={cn(
        "w-full mt-12 transition-all duration-700",
        isVisible ? "opacity-100" : "opacity-0 transform translate-y-4"
      )}
    >
      <div className="glass-card rounded-xl p-6">
        <h3 className="text-xl font-medium mb-6">KNN Confusion Matrix Insights</h3>
        
        <div className="space-y-4">
          <div 
            className={cn(
              "bg-secondary/30 p-4 rounded-lg transition-all",
              isVisible && "animate-fade-in"
            )}
            style={{ animationDelay: "100ms" }}
          >
            <h4 className="font-semibold mb-2">Correct Predictions</h4>
            <p className="text-muted-foreground">
              The diagonal values represent correct predictions. For example, Class 3 was predicted correctly 28 times (row 2, column 2).
            </p>
          </div>
          
          <div 
            className={cn(
              "bg-secondary/30 p-4 rounded-lg transition-all",
              isVisible && "animate-fade-in"
            )}
            style={{ animationDelay: "250ms" }}
          >
            <h4 className="font-semibold mb-2">Misclassifications</h4>
            <p className="text-muted-foreground">
              The off-diagonal values represent misclassifications:
            </p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>19 instances of class 2 were misclassified as class 0 (row 2, column 0)</li>
              <li>Class 3 had multiple misclassifications—14 samples were predicted as class 1</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfusionMatrixInsights;
