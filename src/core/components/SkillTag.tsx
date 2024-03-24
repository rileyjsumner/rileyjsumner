import { Skill } from "../@types/types";

export const SkillTag = (props: { skill: Skill }) => {
  /**
   * TODO:
   * * Make this a link to /skills/:skill
   */
  return (
    <div className="skill">
      <p>{props.skill.skillName}</p>
    </div>
  );
};
