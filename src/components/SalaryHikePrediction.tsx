
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import SalaryHikeModels from "./SalaryHikeModels";
import SectionTitle from "./SectionTitle";

const SalaryHikePrediction = () => {
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
    
    const element = document.getElementById("salary-prediction");
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
    <div id="salary-prediction" className="space-y-12">
      <SectionTitle
        title="Salary Hike Prediction"
        subtitle="Using regression techniques to predict employee salary increases"
        id="salary-hike-title"
      />
      
      <SalaryHikeModels />
      
      <div className={cn(
        "mt-16 space-y-12 opacity-0 transition-all duration-700",
        isVisible && "opacity-100"
      )}>
        <div className="glass-card rounded-xl p-6 md:p-8">
          <h3 className="text-xl font-medium mb-6">Linear Regression: Predicted vs Actual</h3>
          <div className="bg-white rounded-lg overflow-hidden p-4">
            <img 
              src="/lovable-uploads/582de8a2-5c17-4335-abc7-febec7a9627b.png" 
              alt="Linear Regression: Predicted vs Actual" 
              className="w-full max-w-2xl mx-auto h-auto"
            />
          </div>
        </div>
        
        <div className="glass-card rounded-xl p-6 md:p-8">
          <h3 className="text-xl font-medium mb-6">Linear Regression: Residual Distribution</h3>
          <div className="bg-white rounded-lg overflow-hidden p-4">
            <img 
              src="/lovable-uploads/8354df2f-af23-43f9-a1fe-36d5c0be482c.png" 
              alt="Linear Regression: Residual Distribution" 
              className="w-full max-w-2xl mx-auto h-auto"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card rounded-xl p-6 md:p-8">
            <h3 className="text-xl font-medium mb-6">Polynomial Regression</h3>
            <div className="bg-white rounded-lg overflow-hidden p-4">
              <img 
                src="/lovable-uploads/d51f466e-1ba8-43af-a69a-b970238684f9.png" 
                alt="Polynomial Regression" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="glass-card rounded-xl p-6 md:p-8">
            <h3 className="text-xl font-medium mb-6">Polynomial Regression: Residual Distribution</h3>
            <div className="bg-white rounded-lg overflow-hidden p-4">
              <img 
                src="/lovable-uploads/4ae08398-31e2-4779-ba57-199c669cc688.png" 
                alt="Polynomial Regression: Residual Distribution" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card rounded-xl p-6 md:p-8">
            <h3 className="text-xl font-medium mb-6">Model Performance: R² Score</h3>
            <div className="bg-white rounded-lg overflow-hidden p-4">
              <img 
                src="/lovable-uploads/0965f125-dd4f-4d09-9e12-fada2e4d0ef0.png" 
                alt="Model Performance: R² Score" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="glass-card rounded-xl p-6 md:p-8">
            <h3 className="text-xl font-medium mb-6">Model Performance: RMSE</h3>
            <div className="bg-white rounded-lg overflow-hidden p-4">
              <img 
                src="/lovable-uploads/4c21a0a6-d7bb-4ec2-8c11-8c5aa3feaf1c.png" 
                alt="Model Performance: RMSE" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="glass-card rounded-xl p-6 md:p-8">
            <h3 className="text-xl font-medium mb-6">Model Performance: MAE</h3>
            <div className="bg-white rounded-lg overflow-hidden p-4">
              <img 
                src="/lovable-uploads/c4574908-9f31-498f-86b7-c63fc57cc08a.png" 
                alt="Model Performance: MAE" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        
        <div className="glass-card rounded-xl p-6 md:p-8">
          <h3 className="text-xl font-medium mb-6">Top 10 Features to Predict Salary Hike %</h3>
          <div className="bg-white rounded-lg overflow-hidden p-4">
            <img 
              src="/lovable-uploads/8b6652e0-fc00-446f-8131-fbc69aae1bb5.png" 
              alt="Top 10 Features to Predict Salary Hike %" 
              className="w-full max-w-2xl mx-auto h-auto"
            />
          </div>
        </div>
        
        <div className="glass-card rounded-xl p-6 md:p-8">
          <h3 className="text-xl font-medium mb-6">Conclusion & Recommendation</h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-medium mb-3">Conclusion</h4>
            <p className="text-muted-foreground">
              While Polynomial Regression offers better model performance, Linear Regression can be recommended 
              in contexts where simplicity and clear interpretability are essential for HR decision-makers.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-3">Recommendations</h4>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Introduce structured salary hikes based on performance & experience.</li>
              <li>Improve work-life balance to boost satisfaction.</li>
              <li>Tailor HR policies for different employee segments.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalaryHikePrediction;
