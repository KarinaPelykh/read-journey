import { Outlet } from "react-router-dom";
import { Container } from "../Container/Container.styled";
import { Header } from "../Header/Header/Header";
import { Thumb } from "./Layout.styled";
export const Layout = () => {
  return (
    <Thumb>
      <Container>
        <Header />
      </Container>
      <Outlet />
    </Thumb>
  );
};
