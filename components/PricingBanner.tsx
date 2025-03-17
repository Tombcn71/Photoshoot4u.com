import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";

export default function PricingBanner() {
  return (
    <Card className="w-full max-w-6xl mx-auto overflow-hidden">
      <CardContent className="p-0">
        <div className="bg-slate-100 p-4 md:p-6">
          <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8 items-center min-h-[250px]">
            {/* Left side features */}
            <div className="space-y-1.5 md:space-y-3 flex flex-col justify-center">
              <h3 className="text-sm md:text-lg font-semibold text-center">
                Included Features
              </h3>
              <ul className="space-y-1.5 md:space-y-2 text-xs md:text-base">
                {leftFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-3 w-3 md:h-5 md:w-5 text-primary shrink-0 mr-1 md:mr-2" />
                    <span className="text-center">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Center pricing */}
            <div className="text-center space-y-1.5 md:space-y-3 flex flex-col justify-center">
              <div className="space-y-1">
                <div className="flex items-center justify-center">
                  <span className="text-2xl md:text-4xl font-bold">29€</span>
                </div>
              </div>
              <Button size="lg" className="w-full">
                Get Started
              </Button>
              <p className="text-xs md:text-sm font-medium text-primary">
                20 min done
              </p>
              <p className="text-[10px] md:text-xs text-muted-foreground">
                30-day money-back guarantee
              </p>
            </div>

            {/* Right side features */}
            <div className="space-y-1.5 md:space-y-3 flex flex-col justify-center">
              <h3 className="text-sm md:text-lg font-semibold text-center">
                Advanced Features
              </h3>
              <ul className="space-y-1.5 md:space-y-2 text-xs md:text-base">
                {rightFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-3 w-3 md:h-5 md:w-5 text-primary shrink-0 mr-1 md:mr-2" />
                    <span className="text-center">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

const leftFeatures = [
  "Unlimited projects",
  "Unlimited collaborators",
  "Priority support",
  "Custom domains",
  "Advanced analytics",
];

const rightFeatures = [
  "API access",
  "White labeling",
  "Custom integrations",
  "Dedicated account manager",
  "99.9% uptime SLA",
];
