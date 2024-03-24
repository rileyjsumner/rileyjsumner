import { Footer, Header, Nav } from ".";
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
      <Nav />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
