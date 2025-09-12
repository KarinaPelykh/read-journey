import { Wrapper, Text, Span } from './EmptyBookList.style';

export const EmptyBookList = () => {
  return (
    <Wrapper>
      <div>
        <img
          width={130}
          height={130}
          src="/images/bookDefault.png"
          alt="book"
        />
      </div>
      <Text>
        To start training, add <Span>some of your books</Span> or from the
        recommended ones
      </Text>
    </Wrapper>
  );
};
