import { Skill, SkillType } from "src/core/@types/types";

const getSkill = (
  skillName: string,
  level: number,
  type = SkillType.language
) => ({
  skillName,
  level,
  type,
});

export const skills: Array<Skill> = [
  getSkill("JavaScript", 5),
  getSkill("TypeScript", 5),
  getSkill("React", 5),
];
