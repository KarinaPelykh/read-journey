import {
  Describe,
  Image,
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
        <Image src="/images/star.png" alt="star" width={100} height={100} />
      </Thumb>
    </WrapperProgress>
  );
};
