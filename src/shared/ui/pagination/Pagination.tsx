import { Icon } from '../svg/Svg';
import { Button, WrapperPagination } from './Pagination.styled';
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
        <Icon
          variant="icon-left"
          iconName="icon-left"
          style={{ stroke: page === 1 ? '#686868' : '#aaaaaa' }}
        />
      </Button>
      <Button onClick={handelNext}>
        <Icon
          variant="icon-left"
          iconName="icon-left"
          style={{
            stroke: totalPage === page ? '#686868' : '#aaaaaa',
            transform: 'rotate(178deg)',
          }}
        />
      </Button>
    </WrapperPagination>
  );
};
