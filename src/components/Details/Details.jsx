import { useDispatch, useSelector } from "react-redux";
import star from "../../images/star.png";
import {
  ContainerInfo,
  Data,
  Describe,
  Div,
  DivDiary,
  DivInfoRead,
  ImgStatic,
  List,
  Minutes,
  Pages,
  Speed,
  Text,
  Thumb,
  Title,
  Trash,
  VerticalDiv,
  Wrapper,
  WrapperMain,
} from "./Details.styled";
import { redBookSelector } from "../../redux/books/selectors";
import icon from "../../images/sprite.svg";
import { deleteProgress } from "../../redux/books/operations";
export const Details = () => {
  const redBook = useSelector(redBookSelector);
  const bookId = redBook._id;
  const dispatch = useDispatch();
  return (
    <>
      {redBook.progress.length > 0 ? (
        <DivDiary>
          <Text>Diary</Text>
          <Wrapper>
            <List>
              <VerticalDiv></VerticalDiv>

              {redBook.progress?.map((item) => (
                <li key={item._id}>
                  <WrapperMain>
                    <Data>
                      {
                        new Date(item.startReading)
                          .toLocaleString()
                          .split(",")[0]
                      }
                    </Data>
                    <Pages>
                      {parseInt(item.finishPage) - parseInt(item.startPage)}{" "}
                      pages
                    </Pages>
                  </WrapperMain>
                  <ContainerInfo>
                    <DivInfoRead>
                      <p>
                        {(
                          (parseInt(item.startPage) /
                            parseInt(redBook.totalPages)) *
                          100
                        ).toFixed(1)}
                        %
                      </p>
                      <Minutes>{item.timeLeftToRead?.minutes}minutes</Minutes>
                    </DivInfoRead>
                    <Div>
                      <div>
                        <svg width="59" height="25">
                          <use xlinkHref={icon + "#icon-block"}></use>
                        </svg>
                        <Speed>{item.speed}pages per hours</Speed>
                      </div>

                      <button
                        onClick={() => dispatch(deleteProgress({ bookId }))}
                      >
                        <Trash
                          width="14"
                          height="14"
                          style={{ stroke: "#686868", fill: "transparent" }}
                        >
                          <use xlinkHref={icon + "#trash-1"}></use>
                        </Trash>
                      </button>
                    </Div>
                  </ContainerInfo>
                </li>
              ))}
            </List>
          </Wrapper>
        </DivDiary>
      ) : (
        <div>
          <Title>Progress</Title>
          <Describe>
            Here you will see when and how much you read. To record, click on
            the red button above.
          </Describe>
          <Thumb>
            <ImgStatic src={star} alt="star" />
          </Thumb>
        </div>
      )}
    </>
  );
};
