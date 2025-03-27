
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const EmployeeClustering = () => {
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
    
    const element = document.getElementById("employee-clustering");
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
      id="employee-clustering"
      className={cn(
        "w-full mt-12 transition-all duration-700",
        isVisible ? "opacity-100" : "opacity-0 transform translate-y-4"
      )}
    >
      <div className="glass-card rounded-xl p-6">
        <h3 className="text-xl font-medium mb-6">Employee Clustering Using PCA</h3>
        
        <div 
          className={cn(
            "grid grid-cols-1 md:grid-cols-3 gap-6", 
            isVisible ? "animate-fade-in" : "opacity-0"
          )}
        >
          <div className="bg-secondary/30 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Principal Components</h4>
            <p className="text-muted-foreground">
              Summarize employee attributes into primary factors that explain most variation
            </p>
          </div>
          
          <div className="bg-secondary/30 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Cluster Density</h4>
            <p className="text-muted-foreground">
              Indicates similarity between employees in each segment
            </p>
          </div>
          
          <div className="bg-secondary/30 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Distinct Clusters</h4>
            <p className="text-muted-foreground">
              Represent different employee segments with similar characteristics
            </p>
          </div>
        </div>
        
        <div className="mt-6 p-4 border border-border rounded-lg bg-secondary/10">
          <p className="text-center text-muted-foreground italic">
            PCA clustering helps identify natural employee segments for targeted retention strategies
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeClustering;
