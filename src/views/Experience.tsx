import Row from "react-bootstrap/Row";
import { ExperienceItem } from "src/core/components/ExperienceItem";
import { experience } from "src/static/data";

export const Experience = () => {
  return (
    <>
      <h1 className="p-2">Experience</h1>
      {experience.map((item) => (
        <div className="experience">
          <Row className="p-2">
            <ExperienceItem experience={item} />
          </Row>
        </div>
      ))}
    </>
  );
};
