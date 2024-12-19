export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "BudgetBuddy",
    description:
      "BudgetBuddy is a simple and efficient app to track expenses, manage transactions, and stay on top of your finances with ease.",
    technologies: ["React", "NodeJS", "MongoDB"],
    github: "https://github.com/amleshwar-p/BudgetBuddy",
    demo: "https://budget-buddy-lxgsvk1lk-amleshwar-ps-projects.vercel.app/",
    image: require(".//../../public/projects/budgetbuddy.png"),
    available: true,
  },
  {
    id: 1,
    name: "TaskSync ",
    description:
      "TaskSync is a sleek and efficient To-Do list app that helps users organize their tasks, track progress, and stay productive.",
    technologies: ["ReactJS", "Material UI"],
    github: "https://github.com/amleshwar-p/tasksync",
    demo: "",
    image: require(".//../../public/projects/tasksync.png"),
    available: true,
  },
  {
    id: 2,
    name: "WordRacer",
    description:
      "WordRacer is an engaging and interactive typing speed game that allows users to test and improve their typing skills while racing against the clock.",
    technologies: ["ReactJS", "Firebase", "MongoDB","Tailwind"],
  github: "https://github.com/amleshwar-p/wordracer",
  demo: "https://wordracer.vercel.app/",
  image: require(".//../../public/projects/wordracer.png"),
    available: true,
  },
];

