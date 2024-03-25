import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Experience } from "src/core/@types/types";
import { ExperienceItem } from "src/core/components/ExperienceItem";
import { experience } from "src/static/data";

export const ExperienceBySkill = () => {
  const { skill } = useParams();
  const [filteredExperiences, setFilteredExperiences] = useState<
    Array<Experience>
  >([]);

  useEffect(() => {
    setFilteredExperiences(
      experience.filter((item) =>
        item.skills
          .map((experienceSkill) => experienceSkill.tag)
          .includes(skill ?? "N/A")
      )
    );
  }, [skill]);

  return (
    <>
      {filteredExperiences.map((filteredItem) => (
        <ExperienceItem experience={filteredItem} />
      ))}
    </>
  );
};
