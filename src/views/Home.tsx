import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Resume from "../static/files/rileyjsumnercv.pdf";
import Button from "react-bootstrap/Button";
import Me from "src/static/images/me.png";

export const Home = () => {
  /**
   * Home
   *
   * TODO
   * * Intro/About Me
   * * Click to Download Resume
   * * Education?
   */

  return (
    <>
      <Row className="p-2">
        <Col md="6">
          <Row>
            <Col md="12">
              <h1>About Me</h1>
              <p>
                Hello and welcome! I'm currently a Software Engineer at SPS
                Commerce, where I focus on developing reliable and effective
                software solutions. I graduated from the University of
                Wisconsin-Madison with degrees in Computer Science and
                Journalism, which means I not only code but also communicate
                complex ideas clearly. This website is a snapshot of my work,
                the skills I've developed, and some of the projects I've worked
                on. Take a look around to see what I've been up to and how I can
                help make technology work smarter.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md="12" className="text-center p-5">
              <Button variant="outline-success" href={Resume}>
                Download My Resume
              </Button>
            </Col>
          </Row>
        </Col>
        <Col md="6" className="text-center">
          <img src={Me} alt="me!" width="60%" />
        </Col>
      </Row>
    </>
  );
};
