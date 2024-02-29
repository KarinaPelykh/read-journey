import { Link, Outlet } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";
// import { AuthNav } from "../AuthNav/AuthNav";
import { Div, Header, Nav } from "./Layout.styled";
import { LogoMain } from "../Logo/Logo";

export const Layout = () => {
  return (
    <>
      <Header>
        <Nav>
          <LogoMain />
          <Div>
            <Link to="/">Home</Link>
            <Navigation />
          </Div>

          {/* <AuthNav /> */}
        </Nav>
      </Header>
      <Outlet />
    </>
  );
};
