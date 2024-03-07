import { NavLink } from "react-router-dom";
const routes = [
  { path: "/register", page: "Registration" },
  { path: "/login", page: "Login " },
];
export const AuthNav = () => {
  return (
    <nav>
      {routes.map(({ path, page }) => (
        <Item key={path} to={path}>
          {page}
        </Item>
      ))}
    </nav>
  );
};

import styled from "styled-components";
export const Item = styled(NavLink)`
  margin-right: 40px;
  &:last-child {
    margin-right: 0;
  }
`;
