
import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import SectionTitle from '@/components/SectionTitle';
import ProjectInfo from '@/components/ProjectInfo';
import ProjectOverview from '@/components/ProjectOverview';
import ProjectBackground from '@/components/ProjectBackground';
import DataAnalysis from '@/components/DataAnalysis';
import SalaryHikePrediction from '@/components/SalaryHikePrediction';
import JobSatisfactionPrediction from '@/components/JobSatisfactionPrediction';
import ProjectConclusion from '@/components/ProjectConclusion';
import { cn } from '@/lib/utils';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState<'overview' | 'salary' | 'satisfaction'>('overview');

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
                onClick={() => setActiveSection('overview')}
                size="lg"
                variant={activeSection === 'overview' ? 'default' : 'outline'}
                className="transition-all duration-300"
              >
                Project Overview
              </Button>
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
      
      {/* Main Content - Toggled by buttons */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {activeSection === 'overview' && (
          <div className="animate-fade-in">
            <div className="mb-12">
              <ProjectOverview />
            </div>
            
            <div className="mb-12">
              <ProjectBackground />
            </div>
            
            <div className="mb-12">
              <DataAnalysis />
            </div>
            
            {/* Project Team Info */}
            <div className="mb-12">
              <ProjectInfo />
            </div>
          </div>
        )}
        
        {activeSection === 'salary' && (
          <div className="animate-fade-in">
            <SalaryHikePrediction />
            
            <div className="mt-16">
              <ProjectConclusion />
            </div>
          </div>
        )}
        
        {activeSection === 'satisfaction' && (
          <div className="animate-fade-in">
            <JobSatisfactionPrediction />
            
            <div className="mt-16">
              <ProjectConclusion />
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
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} - All rights reserved</p>
            <p className="text-sm text-muted-foreground mt-2">By Rabin Khadka</p>
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
