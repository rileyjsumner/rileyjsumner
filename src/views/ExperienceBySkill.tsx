import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";
import { Experience, Skill } from "src/core/@types/types";
import { ExperienceItem } from "src/core/components/ExperienceItem";
import { experience, skills } from "src/static/data";
import { projects } from "src/static/data/projects";

export const ExperienceBySkill = () => {
  const { skill } = useParams();

  const [filteredExperiences, setFilteredExperiences] = useState<
    Array<Experience>
  >([]);
  const [fullSkill, setFullSkill] = useState<Skill | undefined>();

  /**
   * Filtering is not updating the colors alternating
   */

  useEffect(() => {
    setFilteredExperiences(
      [...experience, ...projects].filter((item) =>
        item.skills
          .map((experienceSkill) => experienceSkill.tag)
          .includes(skill ?? "N/A")
      )
    );

    setFullSkill(skills.find((item) => item.tag === skill));
  }, [skill]);

  return (
    <>
      <h1 className="p-2">Showing Experiences for: {fullSkill?.skillName}</h1>
      {filteredExperiences.map((filteredItem) => (
        <div className="experience">
          <Row className="p-2">
            <ExperienceItem experience={filteredItem} isProject />
          </Row>
        </div>
      ))}
    </>
  );
};
