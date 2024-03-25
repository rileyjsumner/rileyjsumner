import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export const Navigation = () => {
  /**
   * Nav
   *
   * TODO:
   * * Styling
   */

  const links = ["home", "experience", "skills"];
  return (
    <nav>
      <Container>
        <Nav variant="outline" className="justify-content-end">
          {links.map((link) => (
            <Nav.Item>
              <Nav.Link href={`/${link}`} className="px-1">
                <Button size="lg" variant="outline-success">
                  {link.toUpperCase()}
                </Button>
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </Container>
    </nav>
  );
};
