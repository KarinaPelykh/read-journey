import { useSelector } from "react-redux";
import { newBooksSelector } from "../../redux/books/selectors";
import Images from "../../images/bookDefault.png";
import book from "../../images/img-book.png";
import hand from "../../images/hand.png";
import {
  Author,
  BookImg,
  Greeting,
  MyListBook,
  Span,
  SpanGreeting,
  Text,
  TextGreeting,
  Title,
  Wrapper,
} from "./MyLibrary.styled";
import { ModalWindow } from "../Modal/ModalWindow";
import { useEffect, useState } from "react";
export const MyLibraryList = () => {
  const newBook = useSelector(newBooksSelector);
  const [isOpen, setIsOpen] = useState(false);

  const [amountBook, setAmountBook] = useState(0);

  useEffect(() => {
    if (newBook.length > 0 && newBook.length !== amountBook) {
      setIsOpen(true);
    }
    setAmountBook(newBook.length);
  }, [newBook, setIsOpen, amountBook]);

  const toggle = () => {
    setIsOpen(false);
  };
  return (
    <>
      {newBook.length > 0 ? (
        <MyListBook>
          {newBook.map((item) => (
            <li key={item._id}>
              <BookImg src={item.imageUrl ? item.imageUrl : book} />
              <Title>{item.title}</Title>
              <Author>{item.author}</Author>
            </li>
          ))}
        </MyListBook>
      ) : (
        <Wrapper>
          <div>
            <img width="130" height="130" src={Images} alt="book" />
          </div>
          <Text>
            To start training, add <Span>some of your books </Span> or from the
            recommended ones
          </Text>
        </Wrapper>
      )}

      {newBook.length > 0 && isOpen ? (
        <ModalWindow open={isOpen} toggle={toggle} variant="min-modal">
          <img width="68" height="70" src={hand} />
          <TextGreeting>Good job</TextGreeting>
          <Greeting>
            Your book is now in <SpanGreeting>the library </SpanGreeting>! The
            joy knows no bounds and now you can start your training
          </Greeting>
        </ModalWindow>
      ) : null}
    </>
  );
};
