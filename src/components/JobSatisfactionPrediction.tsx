
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import SectionTitle from "./SectionTitle";
import ModelComparison from "./ModelComparison";
import FeatureImportance from "./FeatureImportance";
import EmployeeSegments from "./EmployeeSegments";
import SatisfactionScale from "./SatisfactionScale";

const JobSatisfactionPrediction = () => {
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
    
    const element = document.getElementById("satisfaction-prediction");
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
    <div id="satisfaction-prediction" className="space-y-12">
      <SectionTitle
        title="Job Satisfaction Prediction"
        subtitle="Using classification to predict employee satisfaction levels"
        id="satisfaction-title"
      />
      
      <div className="mb-12">
        <ModelComparison />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div>
          <h3 className="text-xl font-medium mb-6">Feature Importance</h3>
          <FeatureImportance />
        </div>
        
        <div>
          <h3 className="text-xl font-medium mb-6">Employee Segments</h3>
          <EmployeeSegments />
        </div>
      </div>
      
      <div className="mb-12">
        <h3 className="text-xl font-medium mb-6">Satisfaction Prediction</h3>
        <SatisfactionScale />
      </div>
      
      <div className={cn(
        "mt-16 space-y-12 opacity-0 transition-all duration-700",
        isVisible && "opacity-100"
      )}>
        <div className="glass-card rounded-xl p-6 md:p-8">
          <h3 className="text-xl font-medium mb-6">KNN Confusion Matrix Insights</h3>
          <div className="bg-secondary/20 rounded-lg p-6">
            <h4 className="text-lg font-medium mb-4">Correct Predictions:</h4>
            <p className="text-muted-foreground mb-6">
              Diagonal values - Class 3 was predicted correctly 28 times (row 2, column 2)
            </p>
            
            <h4 className="text-lg font-medium mb-4">Misclassifications:</h4>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>19 instances of class 2 were misclassified as class 0 (row 2, column 0)</li>
              <li>Class 3 had multiple misclassifications—14 samples were predicted as class 1</li>
            </ul>
          </div>
        </div>
        
        <div className="glass-card rounded-xl p-6 md:p-8">
          <h3 className="text-xl font-medium mb-6">Employee Clustering Using PCA</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-secondary/20 rounded-lg p-4">
              <p className="text-center font-medium">Principal Components</p>
              <p className="text-center text-sm text-muted-foreground">Summarize attributes</p>
            </div>
            <div className="bg-secondary/20 rounded-lg p-4">
              <p className="text-center font-medium">Cluster Density</p>
              <p className="text-center text-sm text-muted-foreground">Indicates similarity</p>
            </div>
            <div className="bg-secondary/20 rounded-lg p-4">
              <p className="text-center font-medium">Distinct Clusters</p>
              <p className="text-center text-sm text-muted-foreground">Represent employee segments</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/54a01dd7-5011-41d2-a6df-fb0793f1d130.png" 
              alt="Employee Clustering Using PCA" 
              className="w-full max-w-2xl mx-auto h-auto"
            />
          </div>
        </div>
        
        <div className="glass-card rounded-xl p-6 md:p-8">
          <h3 className="text-xl font-medium mb-6">Employee Satisfaction Prediction</h3>
          
          <div className="mb-6">
            <p className="text-muted-foreground">
              Employee displays <strong>moderate satisfaction with high confidence</strong>. 
              This employee is in the <strong>"Stable Employees with Moderate Satisfaction"</strong> segment.
              Although they are not at risk of immediate disengagement, proactive engagement can improve retention.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-3">Key Suggestions:</h4>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Meet with employees regularly to resolve issues</li>
              <li>Provide professional growth opportunities to boost engagement</li>
              <li>Enhance work environment, recognition, or benefits to increase satisfaction</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSatisfactionPrediction;
