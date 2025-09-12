import { ListBookPicksWidget } from '../list-book-picks-widget/ListBookPicksWidget';
import { LinkHome, Title, Wrapper } from './BookPicksWidget.styled';
import { Icon } from '@/shared/ui/svg/Svg';

export const BookPicksWidget = () => {
  return (
    <Wrapper>
      <Title>Recommended books</Title>
      <ListBookPicksWidget />
      <LinkHome to="/recommended">
        <p>Home</p>
        <Icon iconName="log-in" variant="log-in" />
      </LinkHome>
    </Wrapper>
  );
};
