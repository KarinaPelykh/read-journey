import { SpanWord, WrapperQuote, Text } from './Quote.styled';
import book from '../../../images/book.png';
export const Quote = () => {
  return (
    <WrapperQuote>
      <img src={book} />
      <Text>
        &quot;Books are <SpanWord>windows</SpanWord> to the world, and reading
        is a journey into the unknown.&quot;
      </Text>
    </WrapperQuote>
  );
};
