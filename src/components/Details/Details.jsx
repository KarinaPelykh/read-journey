import star from "../../images/star.png";
import { Describe, ImgStatic, Thumb, Title } from "./Details.styled";

export const Details = () => {
  return (
    <>
      <Title>Progress</Title>
      <Describe>
        Here you will see when and how much you read. To record, click on the
        red button above.
      </Describe>
      <Thumb>
        <ImgStatic src={star} alt="star" />
      </Thumb>
    </>
  );
};
