import { Link } from "react-router-dom";

const routes = [
  // { path: "/recommended", page: "Recommended Page" },
  { path: "/", page: "Home " },
  { path: "/library", page: "My library " },
];
export const UserNav = () => {
  return (
    <ul>
      {routes.map(({ path, page }) => (
        <Link key={path} to={path}>
          {page}
        </Link>
      ))}
    </ul>
  );
};
