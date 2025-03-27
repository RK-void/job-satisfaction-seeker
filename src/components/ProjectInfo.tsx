
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TeamMember {
  name: string;
  id?: string;
}

const teamMembers: TeamMember[] = [
  { name: "Hamza Ahmed Siddiqui", id: "2242917" },
  { name: "Himani Rajput" },
  { name: "Numan Safiullakhan Pathan", id: "2242732" },
  { name: "Rabin Khadka" },
];

const ProjectInfo = () => {
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
    
    const element = document.getElementById("project-info");
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
      id="project-info"
      className={cn(
        "w-full mb-12 transition-all duration-700", 
        isVisible ? "opacity-100" : "opacity-0 transform translate-y-4"
      )}
    >
      <div className="glass-card rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-2">Group Project (BUSI 651-HBD-WINTER25-01)</h2>
        <h3 className="text-lg font-medium mb-4 text-muted-foreground">Presented by: Team 7</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name}
              className={cn(
                "bg-secondary/30 rounded-lg p-4 transition-all",
                isVisible && "animate-fade-in"
              )}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <p className="font-medium">{member.name}</p>
              {member.id && (
                <p className="text-sm text-muted-foreground">ID: {member.id}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
