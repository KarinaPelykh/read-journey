import { useDispatch, useSelector } from "react-redux";
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
} from "./Details.styled";
import { redBookSelector } from "../../redux/books/selectors";
import icon from "../../images/sprite.svg";
import { deleteProgress } from "../../redux/books/operations";
import formatDate from "../../helpers/formatDate";
import getDate from "../../helpers/getDate";
import timeReadingBook from "../../helpers/timeReadingBook";

export const Details = () => {
  const redBook = useSelector(redBookSelector);
  const bookId = redBook._id;
  const dispatch = useDispatch();

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
                                <use xlinkHref={icon + "#icon-block"}></use>
                              </svg>
                              <Speed>{speed} pages per hours</Speed>
                            </div>

                            <button
                              onClick={() =>
                                dispatch(
                                  deleteProgress({
                                    bookId,
                                    readingId: _id,
                                  })
                                )
                              }
                            >
                              <Trash
                                width="14"
                                height="14"
                                style={{
                                  stroke: "#686868",
                                  fill: "transparent",
                                }}
                              >
                                <use xlinkHref={icon + "#trash-1"}></use>
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
