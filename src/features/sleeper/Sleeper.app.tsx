import { Nav } from "react-bootstrap";
import { Outlet } from "react-router-dom";

export const Sleeper = () => {
  const tabs = ["rosters", "playoffs", "drafts", "download"];
  /**
   * Sleeper App ideas
   * * Playoff Skin
   *   * Create a bracket and use that instead of sleepers
   *   * Determine league seeding rules
   * * Rostership/lineup assistant
   *   * % ownership of each player
   *   * Injury status alert
   *   * Thursday night players in FLX?
   * * Draft viewer
   *   * Analytics on who's drafted whom
   *   *
   */
  return (
    <>
      <h1>Sleeper Viewer</h1>
      <Nav variant="tabs">
        {tabs.map((tab) => (
          <Nav.Link key={tab} href={`/sleeper/${tab}`}>
            {tab}
          </Nav.Link>
        ))}
      </Nav>
      <Outlet />
    </>
  );
};
