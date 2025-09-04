import {
  Describe,
  ImgStatic,
  Thumb,
  Title,
  WrapperProgress,
} from './ProgressOnboarding.styled';

export const ProgressOnboarding = () => {
  return (
    <WrapperProgress>
      <Title>Progress</Title>
      <Describe>
        Here you will see when and how much you read. To record, click on the
        red button above.
      </Describe>
      <Thumb>
        <ImgStatic src="/images/star.png" alt="star" />
      </Thumb>
    </WrapperProgress>
  );
};
