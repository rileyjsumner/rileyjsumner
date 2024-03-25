import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Experience } from "../@types/types";
import { SkillTag } from "./SkillTag";
import { useState } from "react";
import Button from "react-bootstrap/Button";

export const ExperienceItem = (props: { experience: Experience }) => {
  const { experience } = props;
  const { dateRange } = experience;
  const sDate = new Date(dateRange.sY, dateRange.sMo - 1, 1);
  const eDate =
    dateRange.eY && dateRange.eMo
      ? new Date(dateRange.eY, dateRange.eMo - 1, 1)
      : null;

  const [showAll, setShowAll] = useState(false);
  return (
    <div className="experience-item">
      <Col md="12">
        <Row>
          <Col md="9">
            <h2>{experience.jobTitle}</h2>
            <div className="skill-list d-flex justify-content-start flex-wrap">
              {experience.skills
                .slice(0, showAll ? experience.skills.length : 5)
                .map((skill) => (
                  <SkillTag skill={skill} />
                ))}
              {experience.skills.length > 5 && (
                <Button variant="outline" onClick={() => setShowAll(!showAll)}>
                  {showAll ? "Hide" : "Show More"}
                </Button>
              )}
            </div>
            <ul>
              {experience.content.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </Col>
          <Col md="3">
            <h4>
              <a href={props.experience.link}>{props.experience.company}</a>
            </h4>
            <p>
              {sDate.toLocaleDateString("default", {
                month: "long",
                year: "numeric",
              })}{" "}
              —{" "}
              {eDate
                ? eDate.toLocaleDateString("default", {
                    month: "long",
                    year: "numeric",
                  })
                : "Present"}
            </p>
          </Col>
        </Row>
      </Col>
    </div>
  );
};
