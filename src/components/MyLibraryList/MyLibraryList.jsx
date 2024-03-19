import { useSelector } from "react-redux";
import { newBooksSelector } from "../../redux/books/selectors";
import Images from "../../images/bookDefault.png";
import hand from "../../images/hand.png";

import {
  Greeting,
  MyListBook,
  Span,
  SpanGreeting,
  Text,
  TextGreeting,
  Wrapper,
} from "./MyLibrary.styled";
import { ModalWindow } from "../Modal/ModalWindow";
import { useEffect, useState } from "react";
import { statusSelector } from "../../redux/filter/selectors";
import { MyLibraryItem } from "./MyLibraryItem/MyLibraryItem";

export const MyLibraryList = () => {
  const newBook = useSelector(newBooksSelector);
  console.log(newBook);
  const statusBook = useSelector(statusSelector);

  const getVisibleTasks = (newBook, statusBook) => {
    switch (statusBook.status) {
      case "unread":
        return newBook?.filter((item) => !item.status !== "unread");
      case "all books":
        return newBook?.filter((item) => !item.status !== "all books");
      case "done":
        return newBook?.filter((item) => !item.status !== "done");
      default:
        return newBook;
    }
  };

  const visible = getVisibleTasks(newBook, statusBook);

  const [isOpen, setIsOpen] = useState(false);

  const [amountBook, setAmountBook] = useState(0);

  useEffect(() => {
    if (newBook.length !== amountBook) {
      setIsOpen(true);
      setAmountBook(newBook.length);
    }
  }, [newBook, setIsOpen, amountBook]);

  const toggle = () => {
    setIsOpen(false);
  };
  return (
    <>
      {newBook.length !== 0 ? (
        <MyListBook>
          {visible.map((item) => (
            <MyLibraryItem
              key={item._id}
              id={item._id}
              img={item.imageUrl}
              title={item.title}
              author={item.author}
              pages={item.totalPages}
            />
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
