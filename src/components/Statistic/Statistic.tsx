import {
  Circle,
  Div,
  Square,
  Text,
  TextSeed,
  TextSeeds,
  Wrapper,
  WrapperInform,
} from './Statistic.styled';
import { redBookSelector } from '@/redux/books/selectors';
import getProsesReading from '@/helpers/getProgressReading';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useAppSelector } from '@/hooks/hooks';

export const Statistic = () => {
  const redBook = useAppSelector(redBookSelector);

  const data = getProsesReading({
    progress: redBook.progress,
    totalPage: redBook.totalPages,
  });

  const { pagesRead, speed } = data;
  return (
    <>
      <TextSeed>
        Each page, each chapter is a new round of knowledge, a new step towards
        understanding. By rewriting statistics, we create our own reading
        history.
      </TextSeed>
      <Wrapper>
        <Circle>
          <CircularProgressbar
            value={pagesRead}
            text="100%"
            styles={{
              path: {
                transform: 'rotate(0.0turn)',
                transformOrigin: 'center center',
                stroke: '#30B94D',
              },
              trail: {
                stroke: '#1F1F1F',
                strokeLinecap: 'butt',
                transform: 'rotate(0.25turn)',
                transformOrigin: 'center center',
              },
              text: {
                fill: '#fff',
                fontSize: '15px',
                fontWeight: 'bold',
              },
            }}
          />
        </Circle>
        <WrapperInform>
          <Square></Square>
          <Div>
            <Text>{pagesRead}%</Text>
            <TextSeeds>{speed} pages read</TextSeeds>
          </Div>
        </WrapperInform>
      </Wrapper>
    </>
  );
};
