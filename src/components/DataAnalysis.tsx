
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const DataAnalysis = () => {
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
    
    const element = document.getElementById("data-analysis");
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
      id="data-analysis"
      className={cn(
        "space-y-8 opacity-0 transition-all duration-700",
        isVisible && "opacity-100"
      )}
    >
      <div className="glass-card rounded-xl p-6 md:p-8">
        <h2 className="text-2xl font-semibold mb-6">Data Exploration & Analysis</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-4">About the Dataset</h3>
          <p className="text-muted-foreground">
            Dataset contains 31 variables including demographics, job role, experience, and satisfaction metrics.
          </p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-4">Key Variables</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Salary Hike%</li>
            <li>Job Satisfaction</li>
            <li>Work-life Balance</li>
            <li>Education & Experience</li>
          </ul>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className={cn(
          "glass-card rounded-xl p-6 opacity-0 transform translate-y-4 transition-all duration-500",
          isVisible && "opacity-100 transform-none"
        )} style={{ transitionDelay: "200ms" }}>
          <h3 className="text-xl font-medium mb-4">Data Analysis - Correlation</h3>
          <div className="bg-white rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/bf30b640-94b3-4521-8b82-1f98e363a1b7.png" 
              alt="Data Analysis Correlation" 
              className="w-full h-auto"
            />
          </div>
        </div>
        
        <div className={cn(
          "glass-card rounded-xl p-6 opacity-0 transform translate-y-4 transition-all duration-500",
          isVisible && "opacity-100 transform-none"
        )} style={{ transitionDelay: "400ms" }}>
          <h3 className="text-xl font-medium mb-4">Data Analysis - Distribution</h3>
          <div className="bg-white rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/281931f3-1e81-4d7d-af96-a9dee5140b03.png" 
              alt="Data Analysis Distribution" 
              className="w-full h-auto"
            />
          </div>
        </div>
        
        <div className={cn(
          "glass-card rounded-xl p-6 opacity-0 transform translate-y-4 transition-all duration-500",
          isVisible && "opacity-100 transform-none"
        )} style={{ transitionDelay: "600ms" }}>
          <h3 className="text-xl font-medium mb-4">Data Exploration</h3>
          <div className="bg-white rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/3c7b9522-2705-43c3-8dde-3cf10006a950.png" 
              alt="Data Exploration" 
              className="w-full h-auto"
            />
          </div>
        </div>
        
        <div className={cn(
          "glass-card rounded-xl p-6 opacity-0 transform translate-y-4 transition-all duration-500",
          isVisible && "opacity-100 transform-none"
        )} style={{ transitionDelay: "800ms" }}>
          <h3 className="text-xl font-medium mb-4">Heat Map</h3>
          <div className="bg-white rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/b9ca8a13-4d11-42c5-8b94-ac992d1ad401.png" 
              alt="Heat Map" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      
      <div className={cn(
        "glass-card rounded-xl p-6 md:p-8 opacity-0 transform translate-y-4 transition-all duration-500",
        isVisible && "opacity-100 transform-none"
      )} style={{ transitionDelay: "1000ms" }}>
        <h3 className="text-xl font-medium mb-4">Data Preprocessing</h3>
        <div className="bg-white rounded-lg overflow-hidden p-4">
          <img 
            src="/lovable-uploads/01ae7f06-40be-459c-9fe2-2eb81d5d8836.png" 
            alt="Data Preprocessing" 
            className="w-full max-w-xl mx-auto h-auto"
          />
        </div>
      </div>
      
      <div className={cn(
        "glass-card rounded-xl p-6 md:p-8 opacity-0 transform translate-y-4 transition-all duration-500",
        isVisible && "opacity-100 transform-none"
      )} style={{ transitionDelay: "1200ms" }}>
        <h3 className="text-xl font-medium mb-4">Model Selection & Development</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-medium mb-2">Regression Models</h4>
            <p className="text-muted-foreground">Regression models (Linear, Polynomial) for salary hike prediction.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-2">Classification Models</h4>
            <p className="text-muted-foreground">Classification models (Logistic Regression, KNN) for job satisfaction.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-2">Clustering</h4>
            <p className="text-muted-foreground">Clustering for employee segmentation.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataAnalysis;
