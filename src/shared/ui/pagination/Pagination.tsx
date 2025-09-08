import {
  Button,
  SvgNext,
  SvgPrevious,
  WrapperPagination,
} from './Pagination.styled';
import icon from '/images/sprite.svg';
import { booksSelector } from '@/redux/books/selectors';
import { useAppSelector } from '@/shared/hooks/hooks';

type PaginationProps = {
  page: number;
  setPage: (params: number) => void;
};

export const Pagination = ({ page, setPage }: PaginationProps) => {
  const bookSelector = useAppSelector(booksSelector);

  const totalPage = bookSelector.totalPages;

  const handelPrevious = () => {
    if (page === 1) {
      return;
    }
    setPage(page - 1);
  };
  const handelNext = () => {
    if (page === totalPage) {
      return;
    }
    setPage(page + 1);
  };

  return (
    <WrapperPagination>
      <Button disabled={page === 1} onClick={handelPrevious}>
        <SvgPrevious
          style={{ stroke: page === 1 ? '#686868' : '#aaaaaa' }}
          width="20"
          height="20"
        >
          <use xlinkHref={icon + '#icon-left'}></use>
        </SvgPrevious>
      </Button>
      <Button onClick={handelNext}>
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
