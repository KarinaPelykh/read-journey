import { useLocation } from "react-router-dom";
import { FilterForm } from "../Filter/FilterForm/FilterForm";
import { LibraryOverview } from "../LibraryOverview/LibraryOverview";
import { Quote } from "../Quote/Quote";
import { DivDashboard } from "./Dashboard.styled";

export const Dashboard = () => {
  const location = useLocation();
  const userNav = location.pathname === "/library";
  return (
    <DivDashboard>
      {!userNav && (
        <>
          <FilterForm />
          <LibraryOverview />
          <Quote />
        </>
      )}
    </DivDashboard>
  );
};
