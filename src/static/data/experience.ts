import { Company, Experience, ResumeDate } from "src/core/@types/types";
import { skills } from "./skills";

const getResumeDate = (
  sMo: number,
  sY: number,
  eMo: number | null,
  eY: number | null
) => ({
  sMo,
  sY,
  eMo,
  eY,
});

const getExperience = (
  jobTitle: string,
  company: Company,
  dateRange: ResumeDate,
  content: Array<string>,
  skillTags: Array<string>,
  link: string
): Experience => ({
  jobTitle,
  company,
  dateRange,
  content,
  skills: skillTags.map(
    (tag) => skills.find((skill) => skill.tag === tag) ?? ({} as any)
  ),
  link,
  isProject: false,
});

export const experience: Array<Experience> = [
  getExperience(
    "Software Engineer",
    Company.spsCommerce,
    getResumeDate(9, 2023, null, null),
    [
      "Architected the successful refactor of the reporting backend utilizing AWS Step Functions and AWS S3 in Typescript, achieving a significant reduction in report delivery failures and enhancing system reliability.",
      "Led the transition of the application to a monorepo architecture using Azure Pipelines and Docker, resulting in easier deployment and a markedly better developer experience.",
      "Executed comprehensive improvements and refactors across the codebase which accelerated future development efforts and increased code maintainability and efficiency.",
    ],
    [
      "react",
      "typescript",
      "javascript",
      "jest",
      "azure-pipelines",
      "docker",
      "git",
      "agile",
      "functional-programming",
      "jira",
      "object-oriented-programming",
    ],
    "https://spscommerce.com"
  ),
  getExperience(
    "Associate Software Engineer II",
    Company.spsCommerce,
    getResumeDate(6, 2022, 9, 2023),
    [
      "Significantly enhanced my proficiency as a developer through key contributions to the development and optimization of the Fulfillment Monitor product, demonstrating a strong capability to learn and apply new technologies effectively.",
      "Actively engaged in Agile development processes, contributing to sprint planning, daily stand-ups, sprint reviews, and retrospectives, thereby enhancing team collaboration and project velocity.",
    ],
    [
      "react",
      "typescript",
      "javascript",
      "jest",
      "git",
      "agile",
      "functional-programming",
      "jira",
      "object-oriented-programming",
    ],
    "https://spscommerce.com"
  ),
  getExperience(
    "Software Engineer Intern",
    Company.spsCommerce,
    getResumeDate(6, 2021, 5, 2022),
    [
      'Developed a comprehensive "Getting Started Tutorial" for the Fulfillment Monitor team, providing future interns and new hires with a structured guide to onboard efficiently and contribute effectively to team projects.',
      "Contributed to the enhancement of the fulfillment monitor product, delivering valuable features and improvements to meet client needs and enhance user experience.",
      "Engaged in Agile ceremonies collaboratively with the team, fostering effective communication and alignment on project goals and tasks.",
    ],
    [
      "react",
      "typescript",
      "javascript",
      "jest",
      "git",
      "agile",
      "functional-programming",
      "jira",
    ],
    "https://spscommerce.com"
  ),
  getExperience(
    "Editorial Board Chair",
    Company.dailyCardinal,
    getResumeDate(8, 2021, 5, 2022),
    [
      "Facilitated meetings with the Daily Cardinal Editorial Board members to strategize and prioritize stories for publication, fostering collaboration and aligning editorial direction with the paper's values",
      "Designed layouts to effectively present chosen stories, ensuring visual coherence and reader engagement across the publication.",
    ],
    ["adobe-illustrator", "adobe-indesign"],
    "https://dailycardinal.com"
  ),
  getExperience(
    "Frontend Web Developer Intern",
    Company.uDisc,
    getResumeDate(9, 2020, 6, 2021),
    [
      "Lead the overhaul of the UDisc ReleasePoint blog page viewed by >30,000 users. Made UI/UX improvements that allowed users to better navigate and share content, as well as improving overall performance and accessibility of the site.",
    ],
    ["react", "javascript", "git"],
    "https://udisc.com/blog"
  ),
  getExperience(
    "Opinion Desk Editor",
    Company.dailyCardinal,
    getResumeDate(8, 2020, 4, 2021),
    [
      "Reviewed, edited, and published compelling stories for The Daily Cardinal opinion section, ensuring the delivery of engaging and relevant content to readers.",
      "Utilized Adobe InDesign to create captivating newspaper layouts, effectively organizing content and enhancing readability to meet editorial standards and audience preferences.",
    ],
    ["adobe-illustrator", "adobe-indesign"],
    "https://dailycardinal.com"
  ),
  getExperience(
    "Frontend Web Developer",
    Company.ohr,
    getResumeDate(9, 2018, 3, 2021),
    [
      "Responsible for creating webpages used by HR Staff, students and jobseekers. Worked with team to prioritize needs across teams within HR. Noteworthy projects include:",
      "Professional Development Courses: Created a web application that aggregates professional development courses offered by various departments at UW-Madison. Allows users to fetch upcoming courses, filter results and view course information before registration.",
      "Events Calendar: Lead the development of an application that dynamically generates an events calendar to be used across HR teams. Allows event organizers to plan sessions using Airtable, and generate an interactive calendar on event page to allow users easy access to event sessions.",
      "Student Jobs: Enhanced the platform used to post jobs for students at UW-Madison by improving functionality and mobile experience.",
    ],
    ["php", "vue", "javascript", "sass"],
    "https://hr.wisc.edu/"
  ),
  getExperience(
    "Web Developer Intern",
    Company.bare,
    getResumeDate(3, 2018, 8, 2021),
    [
      "Conducted research on design layouts for affiliated ecommerce brands, focusing on market trends and user preferences.",
      "Implemented design layouts for affiliated ecommerce brands, emphasizing brand identity and user experience.",
    ],
    ["javascript"],
    "https://barehome.com/"
  ),
];
