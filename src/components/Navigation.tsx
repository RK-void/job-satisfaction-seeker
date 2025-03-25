
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChartBar, Info, CircleCheck } from "lucide-react";

type NavLink = {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
};

const navLinks: NavLink[] = [
  { id: "introduction", label: "Introduction", icon: Info },
  { id: "methodology", label: "Methodology", icon: ChartBar },
  { id: "results", label: "Results", icon: CircleCheck },
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("introduction");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => document.getElementById(link.id));
      
      // Check if we've scrolled past the top
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Determine which section is currently in view
      const currentSection = sections.reduce((nearest, section) => {
        if (!section) return nearest;
        
        const sectionTop = section.offsetTop;
        const scrollPosition = window.scrollY + 200;
        
        if (scrollPosition >= sectionTop) {
          return section.id;
        }
        
        return nearest;
      }, "introduction");
      
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      scrolled ? "bg-white/70 backdrop-blur-lg shadow-sm py-4" : "bg-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className={cn(
              "text-xl font-medium transition-all duration-300",
              scrolled ? "text-foreground" : "text-foreground/80"
            )}>
              Job Satisfaction <span className="subtle-accent">Predictor</span>
            </h1>
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className={cn(
                      "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-300",
                      activeSection === link.id
                        ? "text-primary bg-primary/5"
                        : "text-foreground/70 hover:text-foreground hover:bg-secondary/50"
                    )}
                  >
                    <link.icon className={cn(
                      "mr-2 h-4 w-4",
                      activeSection === link.id ? "text-primary" : "text-foreground/70"
                    )} />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="md:hidden">
            <div className="flex space-x-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={cn(
                    "p-2 rounded-full transition-all duration-300",
                    activeSection === link.id
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/70 hover:bg-secondary/50"
                  )}
                >
                  <link.icon className="h-5 w-5" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
