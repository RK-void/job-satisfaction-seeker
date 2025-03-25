
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  id?: string;
}

const SectionTitle = ({ title, subtitle, centered = false, id }: SectionTitleProps) => {
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
        rootMargin: "0px 0px -100px 0px",
      }
    );
    
    const element = document.getElementById(id || "");
    if (element) {
      observer.observe(element);
    }
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [id]);
  
  return (
    <div 
      id={id}
      className={cn(
        "mb-12 opacity-0",
        centered ? "text-center mx-auto" : "",
        isVisible && "animate-fade-up opacity-100"
      )}
    >
      <h2 className="heading-lg mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
          {subtitle}
        </p>
      )}
      <div className="w-20 h-1 bg-primary mt-6 rounded-full"></div>
    </div>
  );
};

export default SectionTitle;
