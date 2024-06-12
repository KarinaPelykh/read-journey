import { Details } from '../Details/Details';
import { Statistic } from '../Statistic/Statistic';
import icon from '../../images/sprite.svg';
import star from '../../images/star.png';

import { useState } from 'react';
import { Describe, ImgStatic, Thumb, Title } from '../Details/Details.styled';
import { redBookSelector } from '../../redux/books/selectors';
import { Div, Text, Wrapper, WrapperProgress } from './ShowmyInform.styled';
import { useAppSelector } from '../../hooks/hooks';
export const ShowMyInform = () => {
  const [open, setOpen] = useState({ statistic: false, details: true });
  const redBook = useAppSelector(redBookSelector);

  return (
    <Wrapper>
      {redBook.progress && redBook.progress[0]?.status === 'inactive' ? (
        <>
          <Div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Text> {open.details ? 'Diary' : 'Statistic'} </Text>
            <div>
              <button
                onClick={() => {
                  setOpen({ statistic: false, details: true });
                }}
              >
                <svg
                  width="20"
                  height="20"
                  style={{ stroke: open.details ? '#f9f9f9' : '#686868' }}
                >
                  <use xlinkHref={icon + '#watches'}></use>
                </svg>
              </button>
              <button
                onClick={() => {
                  setOpen({ statistic: true, details: false });
                }}
              >
                <svg
                  width="20"
                  height="20"
                  style={{ stroke: open.statistic ? '#f9f9f9' : '#686868' }}
                >
                  <use xlinkHref={icon + '#icon-pie-chart'}></use>
                </svg>
              </button>
            </div>
          </Div>
          {open.details && <Details />}
          {open.statistic && <Statistic />}
        </>
      ) : (
        <WrapperProgress>
          <Title>Progress</Title>
          <Describe>
            Here you will see when and how much you read. To record, click on
            the red button above.
          </Describe>
          <Thumb>
            <ImgStatic src={star} alt="star" />
          </Thumb>
        </WrapperProgress>
      )}
    </Wrapper>
  );
};
