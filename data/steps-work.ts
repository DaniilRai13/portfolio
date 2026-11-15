export interface StepWork {
  number: string;
  title: string;
  description: string;
  color: string;
}

export const stepsWork: StepWork[] = [
  {
    number: "01",
    title: "Brief",
    description: "We discuss goals, audience and deadlines.",
    color: "text-brand",
  },
  {
    number: "02",
    title: "Plan",
    description: "Structure, stack and a clear scope of work.",
    color: "text-mint-step",
  },
  {
    number: "03",
    title: "Build",
    description: "Responsive, tested pages with regular demos.",
    color: "text-sun-step",
  },
  {
    number: "04",
    title: "Launch & support",
    description: "Deployment, fixes and improvements after release.",
    color: "text-coral",
  },
];