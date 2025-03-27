
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const ProjectOverview = () => {
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
    
    const element = document.getElementById("project-overview");
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
      id="project-overview"
      className={cn(
        "glass-card rounded-xl p-6 md:p-8 mb-12 opacity-0 transition-all duration-700",
        isVisible && "opacity-100"
      )}
    >
      <h2 className="text-2xl font-semibold mb-6">Project Overview</h2>
      
      <p className="text-muted-foreground mb-6">
        This project applies machine learning techniques to analyze employee-related outcomes using a real-world HR dataset. 
        The focus is on two predictive tasks:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
          <h3 className="text-lg font-medium mb-3">Problem 1</h3>
          <p className="text-muted-foreground">Predicting Percent Salary Hike</p>
        </div>
        
        <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
          <h3 className="text-lg font-medium mb-3">Problem 2</h3>
          <p className="text-muted-foreground">Predicting Employee Job Satisfaction</p>
        </div>
      </div>
      
      <div className="space-y-6">
        <div className={cn(
          "transition-all duration-500 opacity-0 transform translate-y-4",
          isVisible && "opacity-100 transform-none"
        )} style={{ transitionDelay: "200ms" }}>
          <h3 className="text-xl font-medium mb-3">Objectives</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Build accurate models for predicting salary hikes and job satisfaction</li>
            <li>Identify key factors influencing compensation and satisfaction</li>
            <li>Provide HR teams with data-driven tools for decision-making</li>
          </ul>
        </div>
        
        <div className={cn(
          "transition-all duration-500 opacity-0 transform translate-y-4",
          isVisible && "opacity-100 transform-none"
        )} style={{ transitionDelay: "400ms" }}>
          <h3 className="text-xl font-medium mb-3">Approach</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Cleaned and preprocessed the dataset</li>
            <li>Applied regression and classification models (Linear Regression, Polynomial Regression, Logistic Regression, etc.)</li>
            <li>Evaluated models using metrics like R², RMSE, accuracy, and confusion matrices</li>
            <li>Visualized findings to interpret insights effectively</li>
          </ul>
        </div>
        
        <div className={cn(
          "transition-all duration-500 opacity-0 transform translate-y-4",
          isVisible && "opacity-100 transform-none"
        )} style={{ transitionDelay: "600ms" }}>
          <h3 className="text-xl font-medium mb-3">Key Outcome</h3>
          <p className="text-muted-foreground">
            The project delivers interpretable and effective models that help HR teams make informed decisions 
            in areas of performance-based compensation and employee engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
