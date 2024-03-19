import { useLocation } from "react-router-dom";
import { DivDashboard } from "./Dashboard.styled";
import { FilterOnRecommendedPage } from "../FilterOnRecommendedPage/FilterOnRecommendedPage";
import { MyLibraryDashboard } from "../MyLibraryDashboard/MyLibraryDashboard";

export const Dashboard = () => {
  const location = useLocation();
  const userNav = location.pathname === "/library";
  return (
    <DivDashboard>
      {!userNav ? <FilterOnRecommendedPage /> : <MyLibraryDashboard />}
    </DivDashboard>
  );
};
