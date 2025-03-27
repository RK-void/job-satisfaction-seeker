
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const ProjectBackground = () => {
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
    
    const element = document.getElementById("project-background");
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
      id="project-background"
      className={cn(
        "glass-card rounded-xl p-6 md:p-8 mb-12 opacity-0 transition-all duration-700",
        isVisible && "opacity-100"
      )}
    >
      <h2 className="text-2xl font-semibold mb-6">Background</h2>
      
      <p className="text-muted-foreground mb-6">
        In today's competitive work environment, organizations strive to retain top talent and ensure fair compensation. 
        Machine learning can offer valuable insights into employee compensation and satisfaction patterns.
      </p>
      
      <div className="space-y-6">
        <div className={cn(
          "transition-all duration-500 opacity-0 transform translate-y-4",
          isVisible && "opacity-100 transform-none"
        )} style={{ transitionDelay: "200ms" }}>
          <h3 className="text-xl font-medium mb-3">Problem Statements</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><strong>Problem 1:</strong> Predict the Percent Salary Hike an employee should receive using job and performance-related data.</li>
            <li><strong>Problem 2:</strong> Predict Employee Job Satisfaction levels based on demographic and professional attributes.</li>
          </ul>
        </div>
        
        <div className={cn(
          "transition-all duration-500 opacity-0 transform translate-y-4",
          isVisible && "opacity-100 transform-none"
        )} style={{ transitionDelay: "400ms" }}>
          <h3 className="text-xl font-medium mb-3">Goals</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Use machine learning to uncover patterns and trends in employee data.</li>
            <li>Help HR departments align compensation with performance and foster a satisfying work environment.</li>
          </ul>
        </div>
        
        <div className={cn(
          "transition-all duration-500 opacity-0 transform translate-y-4",
          isVisible && "opacity-100 transform-none"
        )} style={{ transitionDelay: "600ms" }}>
          <h3 className="text-xl font-medium mb-3">Significance</h3>
          <p className="text-muted-foreground mb-2">By leveraging data analytics, organizations can:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Improve fairness and transparency in salary decisions.</li>
            <li>Boost retention and satisfaction through targeted HR strategies.</li>
            <li>Use predictive models to inform future workforce planning.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectBackground;
