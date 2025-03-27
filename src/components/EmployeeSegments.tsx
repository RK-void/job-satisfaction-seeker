
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface SegmentData {
  id: number;
  name: string;
  description: string;
  satisfaction: number;
  keyAttributes: string[];
  color: string;
}

const segments: SegmentData[] = [
  {
    id: 0,
    name: "High Performers (Cluster 2)",
    description: "Employees with high potential for growth who show strong satisfaction levels",
    satisfaction: 4.2,
    keyAttributes: ["High Income", "Good Work-Life Balance", "Recent Promotion"],
    color: "bg-yellow-500",
  },
  {
    id: 1,
    name: "Stable Contributors (Cluster 1)",
    description: "Reliable employees with moderate satisfaction needing engagement",
    satisfaction: 3.1,
    keyAttributes: ["Average Income", "Medium Tenure", "Technical Roles"],
    color: "bg-green-500",
  },
  {
    id: 2,
    name: "At-Risk Employees (Cluster 0)",
    description: "Showing signs of disengagement with lower satisfaction scores",
    satisfaction: 1.8,
    keyAttributes: ["High Overtime", "Low Work-Life Balance", "No Recent Promotion"],
    color: "bg-purple-800",
  },
];

const EmployeeSegments = () => {
  const [activeSegment, setActiveSegment] = useState<number>(0);
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
    
    const element = document.getElementById("employee-segments");
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
      id="employee-segments" 
      className={cn(
        "w-full mt-16 opacity-0 transition-all duration-700",
        isVisible && "opacity-100"
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {segments.map((segment) => (
          <button
            key={segment.id}
            onClick={() => setActiveSegment(segment.id)}
            className={cn(
              "transition-all duration-300 p-4 rounded-lg text-center",
              activeSegment === segment.id
                ? "glass-card shadow-md"
                : "bg-secondary/50 hover:bg-secondary"
            )}
          >
            <div
              className={cn(
                "w-3 h-3 rounded-full mx-auto mb-2",
                segment.color
              )}
            />
            <h4 className="text-sm font-medium">{segment.name}</h4>
          </button>
        ))}
      </div>
      
      <div className="glass-card rounded-xl p-6 md:p-8">
        {segments.map((segment) => (
          <div
            key={segment.id}
            className={cn(
              "transition-all duration-500 absolute inset-0 opacity-0 transform translate-x-4",
              activeSegment === segment.id && "opacity-100 transform-none relative",
              "p-4"
            )}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <div>
                <div className="flex items-center mb-2">
                  <div className={cn("w-3 h-3 rounded-full mr-2", segment.color)} />
                  <h3 className="text-xl font-medium">{segment.name}</h3>
                </div>
                <p className="text-muted-foreground">{segment.description}</p>
              </div>
              
              <div className="flex items-center mt-4 md:mt-0">
                <div className="text-right">
                  <div className="text-sm text-muted-foreground mb-1">Avg. Satisfaction</div>
                  <div className="text-2xl font-semibold">{segment.satisfaction.toFixed(1)}/5</div>
                </div>
                <div
                  className={cn(
                    "ml-4 w-16 h-16 rounded-full flex items-center justify-center text-white font-medium",
                    segment.color
                  )}
                >
                  {segment.satisfaction >= 4 ? "High" : segment.satisfaction >= 3 ? "Med" : "Low"}
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {segment.keyAttributes.map((attribute, i) => (
                <div 
                  key={i}
                  className="bg-secondary/50 rounded-lg p-4 text-center"
                >
                  <div className="text-sm font-medium">{attribute}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeSegments;
