
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend, Tooltip } from "recharts";

interface ModelPerformance {
  name: string;
  r2Score: number;
  rmse: number;
  mae: number;
  isBest?: boolean;
}

// Data from the presentation
const models: ModelPerformance[] = [
  {
    name: "Linear Regression",
    r2Score: 0.6154,
    rmse: 2.3615,
    mae: 1.9491,
    isBest: true,
  },
  {
    name: "Polynomial Regression (Degree: 2)",
    r2Score: 0.4521,
    rmse: 2.8187,
    mae: 2.2764,
  },
];

// Data for the chart
const chartData = [
  {
    metric: "R² Score",
    "Linear Regression": 0.6153,
    "Polynomial Regression": 0.4520,
  },
  {
    metric: "RMSE",
    "Linear Regression": 2.3615,
    "Polynomial Regression": 2.8186,
  },
  {
    metric: "MAE",
    "Linear Regression": 1.9491,
    "Polynomial Regression": 1.2763,
  },
];

// Color configuration for the chart
const chartConfig = {
  "Linear Regression": {
    color: "#4f46e5",
  },
  "Polynomial Regression": {
    color: "#f97316",
  },
};

const SalaryHikeModels = () => {
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
    
    const element = document.getElementById("salary-hike-models");
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
      id="salary-hike-models"
      className={cn(
        "w-full mt-12 transition-all duration-700",
        isVisible ? "opacity-100" : "opacity-0 transform translate-y-4"
      )}
    >
      <div className="glass-card rounded-xl p-6 mb-6">
        <h3 className="text-xl font-medium mb-6">Predicting Salary Hike</h3>
        
        <div className="mb-8">
          <p className="mb-4 text-muted-foreground">
            Linear Regression outperformed Polynomial Regression in predicting employee salary hikes, with an R² score of 0.62 compared to 0.45.
          </p>
          
          <div className="h-[300px] w-full mt-8">
            <ChartContainer config={chartConfig}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="metric" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar dataKey="Linear Regression" fill="var(--color-Linear Regression)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="Polynomial Regression" fill="var(--color-Polynomial Regression)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <Table>
            <TableCaption>
              Linear Regression achieved better overall performance for salary hike prediction
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="text-left">Model</TableHead>
                <TableHead className="text-center">R² Score</TableHead>
                <TableHead className="text-center">RMSE</TableHead>
                <TableHead className="text-center">MAE</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {models.map((model, index) => (
                <TableRow
                  key={model.name}
                  className={cn(
                    "transition-all hover:bg-secondary/40",
                    model.isBest ? "bg-primary/5" : "bg-transparent",
                    isVisible ? "animate-fade-in" : "opacity-0"
                  )}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <TableCell className="font-medium">
                    <div className="flex items-center">
                      {model.isBest && (
                        <span className="bg-primary/10 text-primary text-xs py-1 px-2 rounded-full mr-2">
                          Best
                        </span>
                      )}
                      {model.name}
                    </div>
                  </TableCell>
                  <TableCell className={cn("text-center", model.isBest ? "font-semibold text-primary" : "")}>
                    {model.r2Score.toFixed(4)}
                  </TableCell>
                  <TableCell className="text-center">
                    {model.rmse.toFixed(4)}
                  </TableCell>
                  <TableCell className="text-center">
                    {model.mae.toFixed(4)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

// Custom tooltip component for the chart
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background/95 p-3 border rounded-lg shadow-md backdrop-blur-sm">
        <p className="font-medium mb-1">{`${label}`}</p>
        {payload.map((entry: any, index: number) => (
          <div key={`item-${index}`} className="flex items-center gap-2">
            <div 
              className="w-3 h-3 rounded-sm" 
              style={{ backgroundColor: entry.fill }}
            />
            <p className="text-sm">{`${entry.name}: ${entry.value.toFixed(4)}`}</p>
          </div>
        ))}
      </div>
    );
  }

  return null;
};

export default SalaryHikeModels;
