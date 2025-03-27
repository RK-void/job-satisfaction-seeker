
import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import SectionTitle from '@/components/SectionTitle';
import ProjectInfo from '@/components/ProjectInfo';
import ModelComparison from '@/components/ModelComparison';
import FeatureImportance from '@/components/FeatureImportance';
import EmployeeSegments from '@/components/EmployeeSegments';
import SatisfactionScale from '@/components/SatisfactionScale';
import SalaryHikeModels from '@/components/SalaryHikeModels';
import { cn } from '@/lib/utils';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState<'salary' | 'satisfaction'>('salary');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pb-12">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-20 overflow-hidden">
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
              Prediction Model Using Machine Learning
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: '200ms' }}>
              A machine learning approach to predict employee metrics
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '400ms' }}>
              <Button 
                onClick={() => setActiveSection('salary')}
                size="lg"
                variant={activeSection === 'salary' ? 'default' : 'outline'}
                className="transition-all duration-300"
              >
                Salary Hike Prediction
              </Button>
              <Button 
                onClick={() => setActiveSection('satisfaction')}
                size="lg"
                variant={activeSection === 'satisfaction' ? 'default' : 'outline'}
                className="transition-all duration-300"
              >
                Job Satisfaction Prediction
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Project Team Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 mb-12">
        <ProjectInfo />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {activeSection === 'salary' ? (
          <div className="animate-fade-in">
            <SectionTitle 
              title="Salary Hike Prediction"
              subtitle="Using regression techniques to predict employee salary increases"
              id="salary-hike-title"
            />
            <SalaryHikeModels />
          </div>
        ) : (
          <div className="animate-fade-in">
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
          </div>
        )}
      </div>
      
      {/* Footer */}
      <footer className="py-8 mt-16 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-xl font-medium mb-4">Machine Learning Prediction Models</h2>
            <p className="text-muted-foreground mb-4">BUSI 651-HBD-WINTER25-01 Group Project</p>
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Team 7 - All rights reserved</p>
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
