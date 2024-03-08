import {
  Block,
  Information,
  LinkLibrary,
  Span,
  Title,
  WrapNav,
  WrapperInfo,
} from "./LibraryOverview.styled";
import icon from "../../images/sprite.svg";
export const LibraryOverview = () => {
  return (
    <Block>
      <Title>Start your workout</Title>
      <WrapperInfo>
        <svg width="44" height="44">
          <use xlinkHref={icon + "#icon-1"}></use>
        </svg>
        <Information>
          <Span>Create a personal library:</Span> add the books you intend to
          read to it.
        </Information>
      </WrapperInfo>
      <WrapperInfo>
        <svg width="44" height="44">
          <use xlinkHref={icon + "#icon-2"}></use>
        </svg>
        <Information>
          <Span> Create your first workout:</Span>
          define a goal, choose a period, start training.
        </Information>
      </WrapperInfo>
      <WrapNav>
        <LinkLibrary to="/library">My library</LinkLibrary>
        <svg width="24" height="24">
          <use xlinkHref={icon + "#log-in"}></use>
        </svg>
      </WrapNav>
    </Block>
  );
};
