import { Item, List } from './UserNav.styled';

const routes = [
  { path: '/recommended', page: 'Home' },
  { path: '/library', page: 'My library ' },
];
export const UserNav = ({ variant }) => {
  return (
    <List variant={variant}>
      {routes.map(({ path, page }) => (
        <Item key={path} to={path}>
          {page}
        </Item>
      ))}
    </List>
  );
};
