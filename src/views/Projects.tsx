import Row from "react-bootstrap/Row";
import { ExperienceItem } from "src/core/components/ExperienceItem";
import { projects } from "src/static/data/projects";

export const Projects = () => {
  return (
    <>
      <h1 className="p-2">Projects</h1>
      {projects.map((project) => (
        <div className="experience">
          <Row className="p-2">
            <ExperienceItem experience={project} isProject />
          </Row>
        </div>
      ))}
    </>
  );
};
