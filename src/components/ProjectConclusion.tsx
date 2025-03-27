
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const ProjectConclusion = () => {
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
    
    const element = document.getElementById("project-conclusion");
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
      id="project-conclusion"
      className={cn(
        "glass-card rounded-xl p-6 md:p-8 mb-12 opacity-0 transition-all duration-700",
        isVisible && "opacity-100"
      )}
    >
      <h2 className="text-2xl font-semibold mb-6">Conclusion & Recommendations</h2>
      
      <div className="space-y-6">
        <div className={cn(
          "transition-all duration-500 opacity-0 transform translate-y-4",
          isVisible && "opacity-100 transform-none"
        )} style={{ transitionDelay: "200ms" }}>
          <h3 className="text-xl font-medium mb-3">Key Findings</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Linear Regression achieves the best performance for salary hike prediction with an R² score of 0.6154</li>
            <li>KNN is the best model for job satisfaction prediction with an F1 score of 27.3%</li>
            <li>Performance Rating is the most important feature for predicting salary hikes</li>
            <li>Distance from home and job role significantly impact job satisfaction</li>
          </ul>
        </div>
        
        <div className={cn(
          "transition-all duration-500 opacity-0 transform translate-y-4",
          isVisible && "opacity-100 transform-none"
        )} style={{ transitionDelay: "400ms" }}>
          <h3 className="text-xl font-medium mb-3">Business Impact</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>More transparent and data-driven salary decisions</li>
            <li>Improved ability to identify and address employee satisfaction issues</li>
            <li>Better targeting of HR interventions based on employee segments</li>
          </ul>
        </div>
        
        <div className={cn(
          "transition-all duration-500 opacity-0 transform translate-y-4",
          isVisible && "opacity-100 transform-none"
        )} style={{ transitionDelay: "600ms" }}>
          <h3 className="text-xl font-medium mb-3">Future Work</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Incorporate more sophisticated machine learning techniques</li>
            <li>Perform longitudinal analysis to track changes over time</li>
            <li>Develop an interactive dashboard for HR managers</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectConclusion;
