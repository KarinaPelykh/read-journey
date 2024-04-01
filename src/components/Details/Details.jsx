import { useDispatch, useSelector } from 'react-redux';
import {
  ContainerInfo,
  Data,
  Div,
  DivDiary,
  DivInfoRead,
  List,
  Minutes,
  Pages,
  Speed,
  Trash,
  VerticalDiv,
  Wrapper,
  WrapperMain,
} from './Details.styled';
import { redBookSelector } from '../../redux/books/selectors';
import icon from '../../images/sprite.svg';
import { deleteProgress } from '../../redux/books/operations';
import formatDate from '../../helpers/formatDate';
import getDate from '../../helpers/getDate';
import timeReadingBook from '../../helpers/timeReadingBook';
import { toast } from 'react-toastify';

export const Details = () => {
  const redBook = useSelector(redBookSelector);
  const bookId = redBook._id;
  const dispatch = useDispatch();
  const handelDeleteProgress = _id => {
    dispatch(
      deleteProgress({
        bookId,
        readingId: _id,
      })
    )
      .unwrap()
      .then(() => {
        toast.success('You delete progress', {
          position: 'top-right',
          hideProgressBar: true,
          theme: 'dark',
        });
      })
      .catch(error =>
        toast.error(error, {
          position: 'top-right',
          hideProgressBar: true,
          theme: 'dark',
        })
      );
  };

  return (
    <>
      <DivDiary>
        <Wrapper>
          <List>
            <VerticalDiv></VerticalDiv>
            {getDate({
              progress: redBook.progress,
              totalPage: redBook.totalPages,
            })?.map(({ data, pagesReadCount, inform }) => (
              <li key={data}>
                <WrapperMain>
                  <svg
                    width="20"
                    height="20"
                    style={{ position: 'absolute', left: '-27px' }}
                  >
                    <use xlinkHref={icon + '#block'}></use>
                  </svg>
                  <Data>{formatDate(data)}</Data>
                  <Pages>
                    {pagesReadCount}
                    pages
                  </Pages>
                </WrapperMain>
                <ul>
                  {inform?.map(
                    ({
                      progressReading,
                      startReading,
                      finishReading,
                      speed,
                      _id,
                    }) => (
                      <li key={_id}>
                        <ContainerInfo>
                          <DivInfoRead>
                            <p>{progressReading}%</p>
                            <Minutes>
                              {timeReadingBook({
                                startReading,
                                finishReading,
                              })}
                            </Minutes>
                          </DivInfoRead>
                          <Div>
                            <div>
                              <svg width="59" height="25">
                                <use xlinkHref={icon + '#icon-block'}></use>
                              </svg>
                              <Speed>{speed} pages per hours</Speed>
                            </div>

                            <button onClick={() => handelDeleteProgress(_id)}>
                              <Trash
                                width="14"
                                height="14"
                                style={{
                                  stroke: '#686868',
                                  fill: 'transparent',
                                }}
                              >
                                <use xlinkHref={icon + '#trash-1'}></use>
                              </Trash>
                            </button>
                          </Div>
                        </ContainerInfo>
                      </li>
                    )
                  )}
                </ul>
              </li>
            ))}
          </List>
        </Wrapper>
      </DivDiary>
    </>
  );
};
