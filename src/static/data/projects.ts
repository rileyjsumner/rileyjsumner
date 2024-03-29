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
  getProject(
    "D&D Character Sheet Template",
    getProjectDate(1, 2024),
    [
      "Developed a comprehensive Dungeons & Dragons (D&D) character sheet template using Excel, streamlining the character creation process and enabling users to efficiently build their own characters.",
      "Implemented automated functionalities within the Excel template to dynamically calculate character stats, abilities, and modifiers based on user inputs, reducing manual calculations and errors.",
    ],
    ["excel"],
    "https://www.etsy.com/listing/1662250427/automated-dd-character-sheet-spreadsheet?click_key=6bd047f93b5594e6c2d217e532f03237e37c8102%3A1662250427&click_sum=e79ac8c8&ref=shop_home_feat_1&pro=1"
  ),
];
