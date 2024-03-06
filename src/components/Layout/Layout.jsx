import { Outlet, useLocation } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";
import { Header, HeaderContainer, Nav } from "./Layout.styled";

import { Container } from "../Container/Container.styled";
import { Buttons } from "../Button/Button";
import { logOutThunk } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import { LogoMain } from "../Logo/Logo";
export const Layout = () => {
  const location = useLocation();
  const locations =
    location.pathname === "/register" || location.pathname === "/login";
  const dispatch = useDispatch();
  return (
    <HeaderContainer>
      <Container>
        {!locations && (
          <Header>
            <Nav>
              <LogoMain />
              <Navigation />
              <Buttons
                onClick={() => dispatch(logOutThunk())}
                $variant="button-log-out"
                prop={"Log out"}
              />
            </Nav>
          </Header>
        )}
      </Container>

      <Outlet />
    </HeaderContainer>
  );
};
