export enum Company {
  spsCommerce = "spsCommerce",
  uDisc = "uDisc",
}

export enum SkillType {
  language = "language",
  software = "software",
}

export interface ResumeDate {
  sMo: string;
  sY: string;
  eMo: string | null;
  eY: string | null;
}

export interface Skill {
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
}
