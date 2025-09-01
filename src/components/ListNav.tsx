import { NavLink } from 'react-router-dom';

const routes = [
  { path: '/recommended', page: 'Recommended Page' },
  { path: '/library', page: 'My library ' },
  { path: '/reading', page: 'Reading  Page' },
  { path: '/', page: 'Home' },
];

export const ListNav = () => {
  return (
    <ul>
      {routes.map(({ path, page }) => (
        <NavLink key={path} to={path}>
          {page}
        </NavLink>
      ))}
    </ul>
  );
};
