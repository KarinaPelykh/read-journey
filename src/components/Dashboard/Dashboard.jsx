import { useLocation } from "react-router-dom";
import { DivDashboard } from "./Dashboard.styled";
import { FilterOnRecommendedPage } from "../FilterOnRecommendedPage/FilterOnRecommendedPage";
import { MyLibraryDashboard } from "../MyLibraryDashboard/MyLibraryDashboard";
import { AddReading } from "../AddReading/AddReading";
import { Details } from "../Details/Details";

export const Dashboard = () => {
  const location = useLocation();
  const userNav = location.pathname === "/library";
  const nav = location.pathname === "/reading";
  return (
    <DivDashboard>
      {nav ? (
        <>
          <AddReading />
          <Details />
        </>
      ) : !userNav ? (
        <FilterOnRecommendedPage />
      ) : (
        <MyLibraryDashboard />
      )}
    </DivDashboard>
  );
};
