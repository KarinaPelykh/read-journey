import PropTypes from 'prop-types';
import {
  Button,
  SvgNext,
  SvgPrevious,
  WrapperPagination,
} from './Pagination.styled';
import icon from '../../images/sprite.svg';
export const Pagination = ({ next, previous, page, totalPage }) => {
  return (
    <WrapperPagination>
      <Button disabled={page === 1} onClick={previous}>
        <SvgPrevious
          style={{ stroke: page === 1 ? '#686868' : '#fff' }}
          width="20"
          height="20"
        >
          <use xlinkHref={icon + '#icon-left'}></use>
        </SvgPrevious>
      </Button>
      <Button onClick={next}>
        <SvgNext
          style={{ stroke: totalPage === page ? '#686868' : '#fff' }}
          width="20"
          height="20"
        >
          <use xlinkHref={icon + '#icon-left'}></use>
        </SvgNext>
      </Button>
    </WrapperPagination>
  );
};

Pagination.propTypes = {
  next: PropTypes.func,
  page: PropTypes.number,
  previous: PropTypes.func,
  totalPage: PropTypes.number,
};
