export * from "./sleeper";

export enum Company {
  spsCommerce = "SPS Commerce",
  uDisc = "UDisc",
  dailyCardinal = "The Daily Cardinal",
  ohr = "UW Madison Office of Human Resources",
  bare = "JP Ecommerce Inc",
  personal = "Personal Project",
}

export enum SkillType {
  language = "language",
  software = "software",
  concept = "concept",
}

export interface ResumeDate {
  sMo: number;
  sY: number;
  eMo: number | null;
  eY: number | null;
}

export interface Skill {
  tag: string;
  skillName: string;
  level: number;
  type: SkillType;
}

export interface Experience {
  jobTitle: string;
  company: Company;
  dateRange: ResumeDate;
  content: Array<string>;
  skills: Array<Skill>;
  link: string;
  isProject: boolean;
}
