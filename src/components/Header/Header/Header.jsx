import { UserBar } from "../UserBar/UserBar";
import { Buttons } from "../../Button/Button";
import { logOutThunk } from "../../../redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";
import { LogoMain } from "../../Logo/Logo";
import { UserNav } from "../UserNav/UserNav";
import { HeaderDiv, Nav } from "./Header.styled";
import { isLoggedInSelect } from "../../../redux/auth/selectors";
import { AuthNav } from "../../AuthNav/AuthNav";
import { useLocation, useNavigate } from "react-router-dom";
export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();
  const locationUser =
    location.pathname === "/login" || location.pathname === "/register";
  const isLoggedIn = useSelector(isLoggedInSelect);
  return (
    <>
      {!locationUser && (
        <HeaderDiv>
          <Nav>
            <LogoMain variant="logo-header" />
            {isLoggedIn ? <UserNav /> : <AuthNav />}
            <UserBar />
            {!isLoggedIn ? null : (
              <Buttons
                onClick={() =>
                  dispatch(logOutThunk())
                    .unwrap()
                    .then(() => navigate("/"))
                }
                variant="log-out"
                prop={"Log out"}
              />
            )}
          </Nav>
        </HeaderDiv>
      )}
    </>
  );
};
