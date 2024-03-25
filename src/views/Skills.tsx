import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { SkillTag } from "src/core/components/SkillTag";
import { skills } from "src/static/data";

export const Skills = () => {
  return (
    <>
      <div className="p-2">
        <h1>Skills</h1>
        <p>
          Here's a brief overview of my skills and their proficiency levels. If
          you click on the tag you can see any relevant experiences I have with
          that skill.
        </p>
      </div>
      {skills.map((skill) => (
        <Row>
          <Col md="3" className="text-center d-flex justify-content-end px-0">
            <SkillTag skill={skill} />
          </Col>
          <Col md="4" className="px-1">
            <div className="skill-level-bar-wrap d-flex justify-content-start w-100">
              {[...Array(skill.level).keys()].map((_index) => (
                <div className="skill-level-bar" />
              ))}
            </div>
          </Col>
        </Row>
      ))}
    </>
  );
};
