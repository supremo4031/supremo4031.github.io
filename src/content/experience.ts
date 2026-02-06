export type ExperienceItem = {
  company: string;
  role: string;
  location?: string;
  start: string;
  end: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Ninja Van",
    role: "Software Engineer 2",
    location: "Hyderabad, India",
    start: "2024",
    end: "Present",
    highlights: [
      "Architected migration of webhook infrastructure from Java monolith to Go-based microservices, implementing Kafka-driven event streaming and improving system scalability by 100× utilizing concurrent goroutines.",
      "Designed a robust retry framework with exponential backoff (up to 10 retries), achieving 99.9% delivery reliability and near-zero data loss for mission-critical webhook transmissions.",
      "Built several core modules for External Platform Integration service, onboarding 15+ enterprise shippers (TikTok, Lazada, Shopee) by normalizing payloads and handling authentication, contributing to a 10% increase in B2B order volume.",
      "Developed the Webhook History service with automated daily SLA reports and GChat alerts, reducing manual debugging time by 70% and enhancing incident visibility.",
      "Optimized throughput using Kafka pre/post-processing pipelines, reducing average webhook latency by 50% under high load conditions.",
      "Lead sprint planning and daily standups for the backend team, while mentoring junior engineers on code reviews and system design patterns, directly improving team velocity and code quality."
    ]
  },
  {
    company: "Urban Ladder",
    role: "Software Engineer",
    location: "Bangalore, India",
    start: "2022",
    end: "2024",
    highlights: [
      "Implemented the Promise Engine using Spring Boot and Redis, enabling precise delivery predictions and achieving a 2× reduction in API response time.",
      "Architected an asynchronous system using RabbitMQ to decouple microservices, preventing 500+ daily failures, and built ReactJS dashboards to streamline logistics configurations.",
      "Designed Grafana monitoring dashboards and alerting systems to track inventory SLA mismatches, while maintaining internal tools for warehouse operations.",
      "Enhanced the logistics Android application by integrating bulk image upload features using Retrofit, significantly accelerating the quality check process for warehouse teams."
    ]
  }
];

