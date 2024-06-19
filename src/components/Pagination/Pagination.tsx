import {
  Button,
  SvgNext,
  SvgPrevious,
  WrapperPagination,
} from './Pagination.styled';
import icon from '../../images/sprite.svg';
import { FC } from 'react';
interface Pagination {
  next: () => void;
  page: number;
  previous: () => void;
  totalPage: number;
}
export const Pagination: FC<Pagination> = ({
  next,
  previous,
  page,
  totalPage,
}) => {
  return (
    <WrapperPagination>
      <Button disabled={page === 1} onClick={previous}>
        <SvgPrevious
          style={{ stroke: page === 1 ? '#686868' : '#aaaaaa' }}
          width="20"
          height="20"
        >
          <use xlinkHref={icon + '#icon-left'}></use>
        </SvgPrevious>
      </Button>
      <Button onClick={next}>
        <SvgNext
          style={{
            stroke: totalPage === page ? '#686868' : '#aaaaaa',
          }}
          width="20"
          height="20"
        >
          <use xlinkHref={icon + '#icon-left'}></use>
        </SvgNext>
      </Button>
    </WrapperPagination>
  );
};
