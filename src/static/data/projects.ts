import { Company, Experience, ResumeDate } from "src/core/@types/types";
import { skills } from "./skills";

const getProjectDate = (sMo: number, sY: number) => ({
  sMo,
  sY,
  eMo: null,
  eY: null,
});

const getProject = (
  jobTitle: string,
  dateRange: ResumeDate,
  content: Array<string>,
  skillTags: Array<string>,
  link: string,
  company = Company.personal
): Experience => ({
  jobTitle,
  company,
  dateRange,
  content,
  skills: skillTags.map(
    (tag) => skills.find((skill) => skill.tag === tag) ?? ({} as any)
  ),
  link,
  isProject: true,
});
export const projects = [
  getProject(
    "Personal Website",
    getProjectDate(3, 2024),
    [
      "Designed and developed a personal website utilizing React to showcase my professional portfolio and personnal projects, enhancing my digital presence and professional brand.",
    ],
    ["react", "typescript", "javascript"],
    "https://rileyjsumner-470dca1084ed.herokuapp.com/"
  ),
];
