import { Outlet } from 'react-router-dom';
import { Container } from '../Container/Container.styled';
import { Header } from '../Header/Header/Header';
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
