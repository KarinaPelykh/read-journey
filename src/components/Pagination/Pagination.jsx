import {
  Button,
  SvgNext,
  SvgPrevious,
  WrapperPagination,
} from "./Pagination.styled";
import icon from "../../images/sprite.svg";
export const Pagination = ({ next, previous }) => {
  return (
    <WrapperPagination>
      <Button onClick={previous}>
        <SvgPrevious width="20" height="20">
          <use xlinkHref={icon + "#icon-left"}></use>
        </SvgPrevious>
      </Button>
      <Button onClick={next}>
        <SvgNext width="20" height="20">
          <use xlinkHref={icon + "#icon-left"}></use>
        </SvgNext>
      </Button>
    </WrapperPagination>
  );
};
