import { SkillTag } from "src/core/components/SkillTag";
import { skills } from "src/static/data";

export const Skills = () => {
  /**
   * Skills
   *
   * TODO:
   * * Populate Skills Data
   * * Display Skills in bar graph
   * * Add skills/:skill to view all experiences by skill
   */

  return (
    <>
      {skills.map((skill) => (
        <SkillTag skill={skill} />
      ))}
    </>
  );
};
