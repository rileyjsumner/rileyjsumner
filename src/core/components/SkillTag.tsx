import { Link } from "react-router-dom";
import { Skill } from "../@types/types";

export const SkillTag = (props: { skill: Skill }) => {
  return (
    <div className="skill px-2 py-1 mx-1 mb-1">
      <p className="p-0 m-0">
        <Link to={`/skills/${props.skill.tag}`}>{props.skill.skillName}</Link>
      </p>
    </div>
  );
};
