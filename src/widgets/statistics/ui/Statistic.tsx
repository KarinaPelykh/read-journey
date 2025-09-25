import {
  Div,
  Square,
  StatTeller,
  Text,
  TextSeeds,
  Wrapper,
  WrapperInform,
} from './Statistic.styled';

import { redBookSelector } from '@/redux/books/selectors';
import getProsesReading from '@/helpers/getProgressReading';

import { useAppSelector } from '@/shared/hooks/hooks';
import { Progressbar } from './Progressbar';

export const Statistic = () => {
  const redBook = useAppSelector(redBookSelector);

  const data = getProsesReading({
    progress: redBook.progress,
    totalPage: redBook.totalPages,
  });

  const { pagesRead, speed } = data;

  return (
    <>
      <StatTeller>
        Each page, each chapter is a new round of knowledge, a new step towards
        understanding. By rewriting statistics, we create our own reading
        history.
      </StatTeller>
      <Wrapper>
        <Progressbar pagesRead={pagesRead} />
        <WrapperInform>
          <Square />
          <Div>
            <Text>{pagesRead}%</Text>
            <TextSeeds>{speed} pages read</TextSeeds>
          </Div>
        </WrapperInform>
      </Wrapper>
    </>
  );
};
