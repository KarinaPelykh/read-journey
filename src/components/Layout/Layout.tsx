import { Outlet } from 'react-router-dom';

import { Header } from '../Header/Header/Header';
import { Container } from '../Container/Container.styled';

export const Layout = () => {
  return (
    <Container>
      <Header />
      <main>
        <Outlet />
      </main>
    </Container>
  );
};
