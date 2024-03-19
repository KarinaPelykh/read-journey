import icon from "../../../images/sprite.svg";
import { RecommendationsList } from "../ListBooksRecommended/RecommendationsList";
import { LinkHome, Title, Wrapper } from "./Recommendations.styled";
export const Recommendations = () => {
  return (
    <Wrapper>
      <Title>Recommended books</Title>
      <RecommendationsList />
      <LinkHome to="/recommended">
        <p>Home</p>
        <svg width="24" height="24">
          <use xlinkHref={icon + "#log-in"}></use>
        </svg>
      </LinkHome>
    </Wrapper>
  );
};
