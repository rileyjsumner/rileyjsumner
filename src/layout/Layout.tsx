import { Footer, Header, Nav } from ".";
import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <>
      <Header />
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};
