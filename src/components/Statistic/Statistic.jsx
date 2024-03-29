import {
  Circle,
  Div,
  Square,
  Text,
  TextSeed,
  Wrapper,
  WrapperInform,
} from "./Statistic.styled";
import { useSelector } from "react-redux";
import { redBookSelector } from "../../redux/books/selectors";
import getProsesReading from "../../helpers/getProgressReading";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const Statistic = () => {
  const redBook = useSelector(redBookSelector);

  const data = getProsesReading({
    progress: redBook.progress,
    totalPage: redBook.totalPages,
  });

  const { pagesRead, speed } = data;
  console.log({ pagesRead, speed });
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
                transform: "rotate(0.0turn)",
                transformOrigin: "center center",
                stroke: "#30B94D",
              },
              trail: {
                stroke: "#1F1F1F",
                strokeLinecap: "butt",
                transform: "rotate(0.25turn)",
                transformOrigin: "center center",
              },
              text: {
                fill: "#fff",
                fontSize: "15px",
                fontWeight: "bold",
              },
            }}
          />
        </Circle>
        <WrapperInform>
          <Square></Square>
          <Div>
            <Text>{pagesRead}%</Text>
            <TextSeed>{speed} pages read</TextSeed>
          </Div>
        </WrapperInform>
      </Wrapper>
    </>
  );
};
