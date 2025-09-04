import { RecommendationsList } from '../ListBooksRecommended/RecommendationsList';
import { LinkHome, Title, Wrapper } from './Recommendations.styled';
import { Icon } from '@/shared/ui/svg/Svg';

export const Recommendations = () => {
  return (
    <Wrapper>
      <Title>Recommended books</Title>
      <RecommendationsList />
      <LinkHome to="/recommended">
        <p>Home</p>
        <Icon iconName="log-in" variant="log-in" />
      </LinkHome>
    </Wrapper>
  );
};
