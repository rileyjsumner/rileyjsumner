import Container from "react-bootstrap/Container";
import { Footer, Navigation } from ".";
import { Outlet } from "react-router";

export const Layout = () => {
  /**
   * Layout
   *
   * TODO:
   * * Styles
   * * Add Bootstrap
   */
  return (
    <>
      <Navigation />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
};
