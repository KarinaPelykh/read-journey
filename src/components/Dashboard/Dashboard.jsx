import { FilterForm } from "../Filter/FilterForm/FilterForm";
import { LibraryOverview } from "../LibraryOverview/LibraryOverview";
import { Quote } from "../Quote/Quote";
import { DivDashboard } from "./Dashboard.styled";

export const Dashboard = () => {
  return (
    <DivDashboard>
      <FilterForm />
      <LibraryOverview />
      <Quote />
    </DivDashboard>
  );
};
