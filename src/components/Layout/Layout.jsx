import { Link, Outlet, useLocation } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";
// import { AuthNav } from "../AuthNav/AuthNav";
import { Div, Header, HeaderContainer, Nav } from "./Layout.styled";
import { LogoMain } from "../Logo/Logo";
import { Container } from "../Container/Container.styled";

export const Layout = () => {
  const location = useLocation();
  const locations =
    location.pathname === "/register" || location.pathname === "/login";
  return (
    <HeaderContainer>
      <Container>
        {!locations && (
          <Header>
            <Nav>
              <LogoMain />
              <Div>
                <Link to="/">Home</Link>
                <Navigation />
                {/* <AuthNav /> */}
              </Div>
            </Nav>
          </Header>
        )}
      </Container>

      <Outlet />
    </HeaderContainer>
  );
};
