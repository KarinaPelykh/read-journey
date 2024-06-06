import { Item } from './AuthNav.styled';
const routes = [
  { path: '/register', page: 'Registration' },
  { path: '/login', page: 'Login ' },
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
