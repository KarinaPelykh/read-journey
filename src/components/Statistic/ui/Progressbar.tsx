import { CircularProgressbar } from 'react-circular-progressbar';
import { Circle } from '../Statistic.styled';
import 'react-circular-progressbar/dist/styles.css';

type ProgressbarProps = {
  pagesRead: number;
};

export const Progressbar = ({ pagesRead }: ProgressbarProps) => {
  return (
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
  );
};
