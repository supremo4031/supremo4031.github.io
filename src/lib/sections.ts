export type SectionId =
  | "home"
  | "about"
  | "skills"
  | "competitive"
  | "experience"
  | "projects"
  | "education"
  | "resume"
  | "contact";

export type NavItem = { id: SectionId; label: string };

export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "competitive", label: "Competitive" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" }
];

