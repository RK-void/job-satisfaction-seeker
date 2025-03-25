
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface FeatureData {
  name: string;
  importance: number;
}

const features: FeatureData[] = [
  { name: "Work Life Balance", importance: 0.185 },
  { name: "Monthly Income", importance: 0.142 },
  { name: "Job Role", importance: 0.137 },
  { name: "Years at Company", importance: 0.112 },
  { name: "Environment Satisfaction", importance: 0.098 },
  { name: "Age", importance: 0.081 },
  { name: "Job Level", importance: 0.072 },
  { name: "Distance From Home", importance: 0.063 },
  { name: "Years Since Last Promotion", importance: 0.057 },
  { name: "Gender", importance: 0.053 },
];

const FeatureImportance = () => {
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
    
    const element = document.getElementById("feature-importance");
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
      id="feature-importance"
      className="w-full mt-12"
    >
      <div className="glass-card rounded-xl p-6">
        <h3 className="text-xl font-medium mb-6">Top Features for Prediction</h3>
        <div className="space-y-6">
          {features.map((feature, index) => (
            <div
              key={feature.name}
              className={cn(
                "transition-all duration-700 opacity-0 transform translate-x-4",
                isVisible && "opacity-100 transform-none"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between mb-1">
                <span className="text-sm">{feature.name}</span>
                <span className="text-sm text-muted-foreground">
                  {(feature.importance * 100).toFixed(1)}%
                </span>
              </div>
              <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                  style={{ 
                    width: isVisible ? `${feature.importance * 100}%` : "0%",
                    transitionDelay: `${index * 100 + 300}ms`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureImportance;
