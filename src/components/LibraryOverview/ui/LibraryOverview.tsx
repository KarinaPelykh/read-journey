import { Icon } from '@/shared/ui/svg/Svg';
import {
  Block,
  Information,
  LinkLibrary,
  Span,
  Title,
  WrapperInfo,
} from './LibraryOverview.styled';

export const LibraryOverview = () => {
  return (
    <Block>
      <Title>Start your workout</Title>
      <WrapperInfo>
        <Icon iconName="icon-1" variant="icon-1" />
        <Information>
          <Span>Create a personal library:</Span> add the books you intend to
          read to it.
        </Information>
      </WrapperInfo>
      <WrapperInfo>
        <Icon iconName="icon-2" variant="icon-2" />
        <Information>
          <Span> Create your first workout:</Span>
          define a goal, choose a period, start training.
        </Information>
      </WrapperInfo>
      <LinkLibrary to="/library">
        <p> My library</p>
        <Icon iconName="log-in" variant="log-in'" />
      </LinkLibrary>
    </Block>
  );
};
