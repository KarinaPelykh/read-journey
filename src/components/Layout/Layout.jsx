import { Outlet } from "react-router-dom";
// import { Navigation } from "../Navigation/Navigation";
import { AuthNav } from "../AuthNav/AuthNav";
import { Header } from "./Layout.styled";

export const Layout = () => {
  return (
    <>
      <Header>
        <nav>
          {/* <Link to="/">Home</Link> */}
          {/* <Navigation /> */}
          <AuthNav />
        </nav>
      </Header>
      <Outlet />
    </>
  );
};
