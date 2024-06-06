import React from 'react';
import { List, Item } from './UserNav.styled';
const routes = [
  { path: '/recommended', page: 'Home' },
  { path: '/library', page: 'My library ' },
];
export type Variant = {
  variant: string;
};
export const UserNav: React.FunctionComponent<Variant> = ({ variant }) => {
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
