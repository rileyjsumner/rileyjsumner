import { Skill, SkillType } from "src/core/@types/types";

const getSkill = (
  skillName: string,
  level: number,
  type = SkillType.language
) => ({
  skillName,
  tag: skillName.replaceAll(" ", "-").toLowerCase(),
  level,
  type,
});

export const skills: Array<Skill> = [
  getSkill("JavaScript", 5),
  getSkill("TypeScript", 5),
  getSkill("React", 5),
  getSkill("Angular", 4),
  getSkill("Azure Pipelines", 3),
  getSkill("Bootstrap", 4),
  getSkill("Docker", 3),
  getSkill("Git", 5, SkillType.software),
  getSkill("GraphQL", 4),
  getSkill("HTML/CSS", 5),
  getSkill("Java", 3),
  getSkill("Jest", 5),
  getSkill("jQuery", 4),
  getSkill("MongoDB", 3),
  getSkill("NodeJS", 4),
  getSkill("PHP", 3),
  getSkill("R", 4),
  getSkill("Sass", 4),
  getSkill("Vue", 3),
  getSkill("Excel", 4),
  getSkill("Adobe InDesign", 3),
  getSkill("Adobe Illustrator", 3),
  getSkill("Agile", 5),
  getSkill("Functional Programming", 5),
  getSkill("Jira", 4),
  getSkill("RESTful APIs", 5),
  getSkill("Object-Oriented Programming", 5),
];
