import { Link } from "react-router-dom";

export const Nav = () => {
  /**
   * Nav
   *
   * TODO:
   * * Styling
   */
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/skills">Skills</Link>
      {/* <Link to="/projects">Projects</Link> Coming Soon */}
    </nav>
  );
};
