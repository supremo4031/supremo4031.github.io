export type SocialLink = { label: string; href: string };

export type Profile = {
  name: string;
  headline: string;
  tagline: string;
  location: string;
  avatarUrl?: string;
  aboutParagraphs: string[];
  highlights: string[];
  socials: SocialLink[];
  // Can be a relative path (e.g. "/resume.pdf") or an external URL (e.g. Google Drive).
  resumePath: string;
};

export const profile: Profile = {
  name: "Arpan Layek",
  headline: "Full Stack Developer",
  tagline: "I build reliable APIs and ship clean, modern web experiences.",
  location: "Bankura, West Bengal, India",
  avatarUrl: "/profile_image_new.jpg",
  aboutParagraphs: [
    "Backend-heavy Software Engineer with 4+ years of experience across the logistics and e-commerce sectors. I thrive at the intersection of system design and product delivery, whether it’s reducing API latency by 50% through Kafka pipelines or leading backend teams to improve code quality and velocity.",
    "I am passionate about designing robust APIs, improving system observability, and shipping pragmatic solutions that scale.",
  ],
  highlights: ["Microservices", "Distributed Systems", "Event-driven Architecture", "API design & performance", "Data Structures & Algorithms"],
  socials: [
    { label: "Email", href: "mailto:layekarpan30@gmail.com" },
    { label: "GitHub", href: "https://github.com/supremo4031" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/arpan-layek-155003192/" }
  ],
  resumePath: "https://drive.google.com/file/d/1uFYXvR1_rVw-HXR0wf6Ufaf5h5kR6xyd/view?usp=sharing"
};

