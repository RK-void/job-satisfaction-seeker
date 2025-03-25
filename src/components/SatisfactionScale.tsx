
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const satisfactionLevels = [
  { level: 1, label: "Low", color: "bg-red-500" },
  { level: 2, label: "Medium", color: "bg-yellow-500", isCurrent: true },
  { level: 3, label: "High", color: "bg-green-400" },
  { level: 4, label: "Very High", color: "bg-green-600" }
];

const SatisfactionScale = () => {
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
    
    const element = document.getElementById("satisfaction-scale");
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
      id="satisfaction-scale"
      className={cn(
        "w-full opacity-0 transition-all duration-700",
        isVisible && "opacity-100"
      )}
    >
      <div className="glass-card rounded-xl p-6">
        <h3 className="text-xl font-medium mb-6">Satisfaction Scale</h3>
        
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            {satisfactionLevels.map((level, index) => (
              <div 
                key={level.level}
                className={cn(
                  "text-center opacity-0 transform translate-y-4",
                  isVisible && "opacity-100 transform-none transition-all duration-500"
                )}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <span className="block text-sm text-muted-foreground mb-1">{level.label}</span>
                <span className="block font-medium">{level.level}</span>
              </div>
            ))}
          </div>
          
          <div className="h-3 flex rounded-full overflow-hidden">
            {satisfactionLevels.map((level, index) => (
              <div
                key={level.level}
                className={cn(
                  level.color,
                  "flex-1 transition-all duration-1000",
                  level.isCurrent ? "h-5 -mt-1" : "h-3",
                  isVisible ? "opacity-100" : "opacity-0"
                )}
                style={{ transitionDelay: `${(index * 150) + 600}ms` }}
              ></div>
            ))}
          </div>
        </div>
        
        <div className="space-y-6">
          <div 
            className={cn(
              "opacity-0 transform translate-y-4 transition-all duration-500",
              isVisible && "opacity-100 transform-none"
            )}
            style={{ transitionDelay: "900ms" }}
          >
            <h4 className="font-medium mb-2">Sample Prediction Output</h4>
            <div className="p-4 bg-secondary/20 rounded-lg">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Satisfaction Rating:</span>
                <span className="text-sm">2 (Medium)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Confidence:</span>
                <span className="text-sm">100%</span>
              </div>
            </div>
          </div>
          
          <div 
            className={cn(
              "opacity-0 transform translate-y-4 transition-all duration-500",
              isVisible && "opacity-100 transform-none"
            )}
            style={{ transitionDelay: "1050ms" }}
          >
            <h4 className="font-medium mb-2">Interpretation & Suggested Actions</h4>
            <p className="text-sm text-muted-foreground mb-4">The employee is relatively satisfied—not dissatisfied but not highly satisfied either.</p>
            
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start">
                <span className="bg-primary/10 p-1 rounded-full mr-2 mt-0.5 flex-shrink-0">
                  <svg className="h-3 w-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                Meet with the employee regularly to resolve issues
              </li>
              <li className="flex items-start">
                <span className="bg-primary/10 p-1 rounded-full mr-2 mt-0.5 flex-shrink-0">
                  <svg className="h-3 w-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                Provide professional growth opportunities to boost engagement
              </li>
              <li className="flex items-start">
                <span className="bg-primary/10 p-1 rounded-full mr-2 mt-0.5 flex-shrink-0">
                  <svg className="h-3 w-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                Enhance work environment, recognition, or benefits to improve satisfaction level
              </li>
            </ul>
          </div>
          
          <div 
            className={cn(
              "opacity-0 transform translate-y-4 transition-all duration-500",
              isVisible && "opacity-100 transform-none"
            )}
            style={{ transitionDelay: "1200ms" }}
          >
            <h4 className="font-medium mb-2">Employee Segment</h4>
            <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg">
              <p className="text-sm text-blue-800">
                <span className="font-medium">Stable Employees with Moderate Satisfaction:</span> Although they are not in danger of immediate disengagement, proactive engagement efforts can be used to boost their satisfaction and retention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SatisfactionScale;
