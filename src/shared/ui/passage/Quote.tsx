import { SpanWord, WrapperQuote, Text } from './Quote.styled';

export const Quote = () => {
  return (
    <WrapperQuote>
      <img src="/images/book.png" />
      <Text>
        &quot;Books are <SpanWord>windows</SpanWord> to the world, and reading
        is a journey into the unknown.&quot;
      </Text>
    </WrapperQuote>
  );
};
