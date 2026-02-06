export type SkillCategory = {
  name: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  { name: "Backend", skills: [ "Java", "Go", "REST", "gRPC", "GraphQL", "Auth", "Caching"] },
  { name: "Databases", skills: ["MySQL", "TiDB", "Redis", "Elastic Search"] },
  { name: "DevOps / Cloud", skills: ["Kubernetes", "Docker", "Linux", "AWS"] },
  { name: "Frontend", skills: ["Node.js", "Javascript", "TypeScript", "React", "HTML", "CSS"] },
  { name: "CI / CD", skills: ["Jenkins", "Bamboo", "Bitbucket", "Git"] },
  { name: "Observability", skills: ["Grafana", "Kibana", "Prometheus"] },
  { name: "Messaging", skills: ["Kafka", "RabbitMQ"] },
  { name: "AI Tools", skills: ["Cursor"] }
];

