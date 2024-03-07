import { Item } from "./UserNav.styled";

const routes = [
  { path: "/recommended", page: "Home" },
  { path: "/library", page: "My library " },
];
export const UserNav = () => {
  return (
    <ul>
      {routes.map(({ path, page }) => (
        <Item key={path} to={path}>
          {page}
        </Item>
      ))}
    </ul>
  );
};
