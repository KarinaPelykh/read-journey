import { useLocation } from "react-router-dom";
import { DivDashboard } from "./Dashboard.styled";
import { AddBook } from "../AddBooks/AddBooks";
import { FilterOnRecommendedPage } from "../FilterOnRecommendedPage/FilterOnRecommendedPage";

export const Dashboard = () => {
  const location = useLocation();
  const userNav = location.pathname === "/library";
  return (
    <DivDashboard>
      {!userNav ? <FilterOnRecommendedPage /> : <AddBook />}
    </DivDashboard>
  );
};
