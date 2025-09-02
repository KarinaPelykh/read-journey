import { Header } from '@/widgets/header/ui/Header';
import { Outlet } from 'react-router-dom';
import { Container } from './Container/Container.styled';

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
