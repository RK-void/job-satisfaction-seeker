
import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import SectionTitle from '@/components/SectionTitle';
import FeatureCard from '@/components/FeatureCard';
import ModelComparison from '@/components/ModelComparison';
import FeatureImportance from '@/components/FeatureImportance';
import EmployeeSegments from '@/components/EmployeeSegments';
import { cn } from '@/lib/utils';
import { SearchIcon, ChartBar, Info, CircleCheck, FileText, Settings, ArrowUp } from 'lucide-react';

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50 to-slate-50"></div>
        <div className="absolute inset-0 z-0">
          <div className="h-full w-full bg-[radial-gradient(circle_400px_at_50%_300px,rgba(56,189,248,0.1),transparent)]"></div>
        </div>
        
        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-6 animate-fade-in">
              Machine Learning • Data Science • HR Analytics
            </div>
            <h1 className="heading-xl mb-6 animate-fade-up">
              Predicting Employee Job Satisfaction
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: '200ms' }}>
              A machine learning approach to understanding and forecasting employee satisfaction levels
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '400ms' }}>
              <button 
                onClick={() => {
                  const element = document.getElementById('methodology');
                  if (element) {
                    window.scrollTo({
                      top: element.offsetTop - 100,
                      behavior: 'smooth',
                    });
                  }
                }}
                className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                View Methodology
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('results');
                  if (element) {
                    window.scrollTo({
                      top: element.offsetTop - 100,
                      behavior: 'smooth',
                    });
                  }
                }}
                className="bg-secondary text-foreground px-6 py-3 rounded-lg hover:bg-secondary/80 transition-colors"
              >
                See Results
              </button>
            </div>
          </div>
          
          <div className="mt-16 md:mt-24 relative">
            <div className="glass-card rounded-xl p-6 md:p-8 max-w-4xl mx-auto animate-blur-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-medium mb-4">Project Overview</h3>
                  <p className="text-muted-foreground mb-4">
                    This project utilizes machine learning techniques to predict employee job satisfaction levels based on various workplace and personal factors.
                  </p>
                  <p className="text-muted-foreground">
                    By analyzing patterns in employee data, we developed a model that can identify at-risk employees and provide targeted recommendations to improve satisfaction.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-green-500/10 p-2 rounded-lg mr-3 mt-1">
                      <CircleCheck className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">Data-driven Insights</h4>
                      <p className="text-sm text-muted-foreground">Analyzed employee data to discover key satisfaction drivers</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-500/10 p-2 rounded-lg mr-3 mt-1">
                      <ChartBar className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">Predictive Modeling</h4>
                      <p className="text-sm text-muted-foreground">Compared multiple ML models to find the optimal solution</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-500/10 p-2 rounded-lg mr-3 mt-1">
                      <Settings className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">Actionable Recommendations</h4>
                      <p className="text-sm text-muted-foreground">Provides targeted interventions based on predictions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Introduction Section */}
      <section id="introduction" className="py-16 md:py-24">
        <div className="section-container">
          <SectionTitle 
            title="Introduction"
            subtitle="Understanding the importance of employee satisfaction and how data science can help organizations improve workplace happiness"
            id="intro-title"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <FeatureCard
              title="Problem Statement"
              description="Employee turnover costs organizations billions annually. Identifying dissatisfaction early can prevent turnover and improve productivity."
              icon={<Info className="h-5 w-5 text-primary" />}
              delay={100}
            />
            <FeatureCard
              title="Data Collection"
              description="We analyzed a comprehensive dataset containing employee demographics, work history, compensation, and satisfaction metrics."
              icon={<FileText className="h-5 w-5 text-primary" />}
              delay={200}
            />
            <FeatureCard
              title="Machine Learning Approach"
              description="Using supervised learning techniques, we developed models to predict satisfaction levels and identify the most influential factors."
              icon={<Settings className="h-5 w-5 text-primary" />}
              delay={300}
            />
          </div>
          
          <div className="mt-16 md:mt-24 glass-card rounded-xl p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="heading-md mb-4">Project Objectives</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="bg-primary/10 text-primary p-1 rounded-full mr-3 mt-1">
                      <CircleCheck className="h-4 w-4" />
                    </span>
                    Identify key factors that influence job satisfaction
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/10 text-primary p-1 rounded-full mr-3 mt-1">
                      <CircleCheck className="h-4 w-4" />
                    </span>
                    Develop predictive models to forecast satisfaction levels
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/10 text-primary p-1 rounded-full mr-3 mt-1">
                      <CircleCheck className="h-4 w-4" />
                    </span>
                    Segment employees for targeted interventions
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/10 text-primary p-1 rounded-full mr-3 mt-1">
                      <CircleCheck className="h-4 w-4" />
                    </span>
                    Create a tool to provide actionable recommendations
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="heading-md mb-4">Business Impact</h3>
                <div className="space-y-4">
                  <div className="glass-card rounded-lg p-4 border border-green-100">
                    <div className="flex items-center mb-2">
                      <div className="bg-green-500/20 p-1 rounded text-xs text-green-700 font-medium">RETENTION</div>
                    </div>
                    <p className="text-sm text-muted-foreground">Reduced turnover by identifying at-risk employees before they decide to leave</p>
                  </div>
                  
                  <div className="glass-card rounded-lg p-4 border border-blue-100">
                    <div className="flex items-center mb-2">
                      <div className="bg-blue-500/20 p-1 rounded text-xs text-blue-700 font-medium">PRODUCTIVITY</div>
                    </div>
                    <p className="text-sm text-muted-foreground">Increased productivity through targeted satisfaction improvement initiatives</p>
                  </div>
                  
                  <div className="glass-card rounded-lg p-4 border border-purple-100">
                    <div className="flex items-center mb-2">
                      <div className="bg-purple-500/20 p-1 rounded text-xs text-purple-700 font-medium">CULTURE</div>
                    </div>
                    <p className="text-sm text-muted-foreground">Enhanced workplace culture by addressing satisfaction factors systematically</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Methodology Section */}
      <section id="methodology" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="section-container">
          <SectionTitle 
            title="Methodology"
            subtitle="Our approach to building a robust machine learning model that accurately predicts employee job satisfaction"
            id="methodology-title"
          />
          
          <div className="mt-12">
            <div className="glass-card rounded-xl p-6 md:p-8">
              <div className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <span className="text-primary font-semibold">1</span>
                    </div>
                    <h3 className="text-xl font-medium mb-2">Data Preprocessing</h3>
                    <p className="text-muted-foreground">
                      We started with a comprehensive dataset containing employee demographics, work history, compensation, and satisfaction metrics. After cleaning the data and handling missing values, we encoded categorical variables using label encoding.
                    </p>
                  </div>
                  
                  <div className="glass-card rounded-lg p-4">
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">Key Preprocessing Steps:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="bg-blue-500/10 p-1 rounded-full mr-2 mt-0.5">
                          <CircleCheck className="h-3 w-3 text-blue-600" />
                        </span>
                        Removed irrelevant columns (EmployeeNumber, StandardHours)
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-500/10 p-1 rounded-full mr-2 mt-0.5">
                          <CircleCheck className="h-3 w-3 text-blue-600" />
                        </span>
                        Handled missing values in numerical and categorical columns
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-500/10 p-1 rounded-full mr-2 mt-0.5">
                          <CircleCheck className="h-3 w-3 text-blue-600" />
                        </span>
                        Created derived features (Age, YearsAtCompany, IncomePerLevel)
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-500/10 p-1 rounded-full mr-2 mt-0.5">
                          <CircleCheck className="h-3 w-3 text-blue-600" />
                        </span>
                        Applied Label Encoding to categorical variables
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <span className="text-primary font-semibold">2</span>
                    </div>
                    <h3 className="text-xl font-medium mb-2">Feature Selection</h3>
                    <p className="text-muted-foreground">
                      We identified the most relevant features for predicting job satisfaction using correlation analysis and SelectFromModel with a Random Forest classifier. This reduced dimensionality and improved model performance.
                    </p>
                  </div>
                  
                  <div className="glass-card rounded-lg p-4">
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">Feature Selection Approach:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="bg-blue-500/10 p-1 rounded-full mr-2 mt-0.5">
                          <CircleCheck className="h-3 w-3 text-blue-600" />
                        </span>
                        Analyzed correlation with JobSatisfaction target variable
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-500/10 p-1 rounded-full mr-2 mt-0.5">
                          <CircleCheck className="h-3 w-3 text-blue-600" />
                        </span>
                        Used SelectFromModel with Random Forest to identify important features
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-500/10 p-1 rounded-full mr-2 mt-0.5">
                          <CircleCheck className="h-3 w-3 text-blue-600" />
                        </span>
                        Selected top features based on importance scores
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <span className="text-primary font-semibold">3</span>
                    </div>
                    <h3 className="text-xl font-medium mb-2">Model Selection</h3>
                    <p className="text-muted-foreground">
                      We trained and evaluated multiple machine learning models including Random Forest, Gradient Boosting, Logistic Regression, KNN, and Neural Networks. We then selected the best performing model based on accuracy, precision, recall, and F1-score.
                    </p>
                  </div>
                  
                  <div className="glass-card rounded-lg p-4">
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">Model Training Process:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="bg-blue-500/10 p-1 rounded-full mr-2 mt-0.5">
                          <CircleCheck className="h-3 w-3 text-blue-600" />
                        </span>
                        Split data into training (77%) and testing (23%) sets
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-500/10 p-1 rounded-full mr-2 mt-0.5">
                          <CircleCheck className="h-3 w-3 text-blue-600" />
                        </span>
                        Applied StandardScaler to normalize features
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-500/10 p-1 rounded-full mr-2 mt-0.5">
                          <CircleCheck className="h-3 w-3 text-blue-600" />
                        </span>
                        Performed hyperparameter tuning for KNN using GridSearchCV
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-500/10 p-1 rounded-full mr-2 mt-0.5">
                          <CircleCheck className="h-3 w-3 text-blue-600" />
                        </span>
                        Evaluated models using multiple metrics (accuracy, precision, recall, F1)
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <span className="text-primary font-semibold">4</span>
                    </div>
                    <h3 className="text-xl font-medium mb-2">Employee Segmentation</h3>
                    <p className="text-muted-foreground">
                      We used KMeans clustering to segment employees into meaningful groups based on their attributes. This allowed us to develop targeted strategies for different employee segments based on their characteristics and satisfaction levels.
                    </p>
                  </div>
                  
                  <div className="glass-card rounded-lg p-4">
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">Segmentation Approach:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="bg-blue-500/10 p-1 rounded-full mr-2 mt-0.5">
                          <CircleCheck className="h-3 w-3 text-blue-600" />
                        </span>
                        Applied KMeans clustering with k=4 clusters
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-500/10 p-1 rounded-full mr-2 mt-0.5">
                          <CircleCheck className="h-3 w-3 text-blue-600" />
                        </span>
                        Analyzed cluster profiles and average satisfaction by cluster
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-500/10 p-1 rounded-full mr-2 mt-0.5">
                          <CircleCheck className="h-3 w-3 text-blue-600" />
                        </span>
                        Used PCA to visualize employee segments
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-500/10 p-1 rounded-full mr-2 mt-0.5">
                          <CircleCheck className="h-3 w-3 text-blue-600" />
                        </span>
                        Created tailored recommendations for each segment
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Results Section */}
      <section id="results" className="py-16 md:py-24">
        <div className="section-container">
          <SectionTitle 
            title="Results & Findings"
            subtitle="Outcomes of our analysis and key insights from the predictive modeling"
            id="results-title"
          />
          
          <div className="mt-12">
            <h3 className="text-xl font-medium mb-6">Model Comparison</h3>
            <ModelComparison />
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium mb-6">Feature Importance</h3>
                <FeatureImportance />
              </div>
              
              <div className="glass-card rounded-xl p-6 mt-12 md:mt-0">
                <h3 className="text-xl font-medium mb-6">Key Findings</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-lg mr-3 mt-0.5">
                      <ChartBar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Work-Life Balance is Crucial</h4>
                      <p className="text-sm text-muted-foreground">
                        The single most important predictor of job satisfaction, accounting for 18.5% of predictive power
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-lg mr-3 mt-0.5">
                      <ChartBar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Compensation Matters</h4>
                      <p className="text-sm text-muted-foreground">
                        Monthly income ranked as the second most important factor, but with context of job role and level
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-lg mr-3 mt-0.5">
                      <ChartBar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Career Progression Significance</h4>
                      <p className="text-sm text-muted-foreground">
                        Years since last promotion showed significant impact on satisfaction levels
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-lg mr-3 mt-0.5">
                      <ChartBar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Model Performance</h4>
                      <p className="text-sm text-muted-foreground">
                        Gradient Boosting classifier achieved the highest F1-score of 73.2%, outperforming other models
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-medium mb-6">Employee Segments</h3>
              <EmployeeSegments />
            </div>
          </div>
        </div>
      </section>
      
      {/* Conclusion Section */}
      <section id="conclusion" className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="section-container">
          <SectionTitle 
            title="Conclusions & Applications"
            subtitle="How this model can be applied and what we learned from the analysis"
            id="conclusion-title"
          />
          
          <div className="mt-12 glass-card rounded-xl p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="heading-md mb-6">Key Takeaways</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-lg mr-3">
                      <CircleCheck className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Multifaceted Satisfaction</h4>
                      <p className="text-muted-foreground">
                        Job satisfaction is influenced by a complex interplay of factors including work-life balance, compensation, role, and environment.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-lg mr-3">
                      <CircleCheck className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Predictable Patterns</h4>
                      <p className="text-muted-foreground">
                        Employee satisfaction follows predictable patterns that can be effectively modeled using machine learning techniques.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-lg mr-3">
                      <CircleCheck className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Segmentation Value</h4>
                      <p className="text-muted-foreground">
                        Employee segmentation provides valuable insights for creating targeted interventions tailored to specific employee groups.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="heading-md mb-6">Practical Applications</h3>
                <div className="space-y-4">
                  <div className="glass-card rounded-lg p-5 border border-blue-100">
                    <h4 className="font-medium mb-2">Proactive Retention Management</h4>
                    <p className="text-sm text-muted-foreground">
                      Identify employees at risk of dissatisfaction before they consider leaving, enabling timely interventions.
                    </p>
                  </div>
                  
                  <div className="glass-card rounded-lg p-5 border border-blue-100">
                    <h4 className="font-medium mb-2">Resource Allocation</h4>
                    <p className="text-sm text-muted-foreground">
                      Direct HR resources toward initiatives that address the most influential satisfaction factors for maximum impact.
                    </p>
                  </div>
                  
                  <div className="glass-card rounded-lg p-5 border border-blue-100">
                    <h4 className="font-medium mb-2">Personalized Employee Experience</h4>
                    <p className="text-sm text-muted-foreground">
                      Customize management approaches and benefit offerings based on employee segments and predicted satisfaction drivers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t">
              <h3 className="heading-md mb-6">Future Directions</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass-card rounded-lg p-5">
                  <div className="bg-primary/10 p-2 rounded-lg w-10 h-10 flex items-center justify-center mb-4">
                    <SearchIcon className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-medium mb-2">Continuous Learning</h4>
                  <p className="text-sm text-muted-foreground">
                    Implement a system that continuously updates the model with new employee data for improved accuracy over time.
                  </p>
                </div>
                
                <div className="glass-card rounded-lg p-5">
                  <div className="bg-primary/10 p-2 rounded-lg w-10 h-10 flex items-center justify-center mb-4">
                    <ChartBar className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-medium mb-2">Expanded Features</h4>
                  <p className="text-sm text-muted-foreground">
                    Incorporate additional data sources such as team dynamics, management styles, and workplace culture factors.
                  </p>
                </div>
                
                <div className="glass-card rounded-lg p-5">
                  <div className="bg-primary/10 p-2 rounded-lg w-10 h-10 flex items-center justify-center mb-4">
                    <Settings className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-medium mb-2">Automated Recommendations</h4>
                  <p className="text-sm text-muted-foreground">
                    Develop an automated system that provides personalized satisfaction improvement recommendations for employees and managers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-xl font-medium mb-4">Job Satisfaction Prediction Model</h2>
            <p className="text-muted-foreground mb-6">A machine learning approach to understanding employee satisfaction</p>
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} All rights reserved</p>
          </div>
        </div>
      </footer>
      
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg transition-all duration-300 z-40",
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        )}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  );
};

export default Index;
