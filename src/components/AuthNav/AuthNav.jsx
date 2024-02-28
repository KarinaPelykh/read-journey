import { NavLink } from "react-router-dom";
const routes = [
  { path: "/register", page: "Registration Page" },
  //   { path: "/login", page: "Login Page" },
];
export const AuthNav = () => {
  return (
    <nav>
      {routes.map(({ path, page }) => (
        <NavLink key={path} to={path}>
          {page}
        </NavLink>
      ))}
    </nav>
  );
};
