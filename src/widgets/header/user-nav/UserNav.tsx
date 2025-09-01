import { List, Item } from './UserNav.styled';

const routes = [
  { path: '/recommended', page: 'Home' },
  { path: '/library', page: 'My library ' },
];

export type UserNavProps = {
  variant: string;
};

export const UserNav = ({ variant }: UserNavProps) => {
  return (
    <List $variant={variant}>
      {routes.map(({ path, page }) => (
        <Item key={path} to={path}>
          {page}
        </Item>
      ))}
    </List>
  );
};
