export type EducationItem = {
  institution: string;
  degree: string;
  period: string;
  highlights?: string[];
};

export const education: EducationItem[] = [
  {
    institution: "Jalpaiguri Government Engineering College",
    degree: "B.Tech in Computer Science and Engineering",
    period: "2018 — 2022",
    highlights: ["Operating Systems, Networking and DBMS", "CGPA: 8.76"]
  }
];
