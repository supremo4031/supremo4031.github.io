export type Project = {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Project One",
    description: "A backend-focused project with a clean API and a small web UI.",
    techStack: ["TypeScript", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/your-handle/project-one",
    featured: true
  },
  {
    title: "Project Two",
    description: "A full-stack app demonstrating auth, data modeling, and deployments.",
    techStack: ["React", "Node.js", "Redis"],
    githubUrl: "https://github.com/your-handle/project-two"
  }
];

