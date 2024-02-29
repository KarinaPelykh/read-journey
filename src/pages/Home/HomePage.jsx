import { Dashboard } from "../../components/Dashboard/Dashboard";
import { RecommendedBooks } from "../../components/RecommendedBooks/RecommendedBooks";
import { Div } from "./HomePage.style";

export const HomePage = () => {
  return (
    <Div>
      <Dashboard />
      <RecommendedBooks />
    </Div>
  );
};
