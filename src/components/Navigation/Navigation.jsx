import { NavLink } from "react-router-dom";
const routes = [
  { path: "/recommended", page: "Recommended Page" },
  { path: "/library", page: "My library Page" },
  { path: "/reading", page: "Reading  Page" },
];
export const Navigation = () => {
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
