import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { newBooksSelector } from '../../redux/books/selectors';
import Images from '../../images/bookDefault.png';
import hand from '../../images/hand.png';

import {
  Greeting,
  MyListBook,
  Span,
  SpanGreeting,
  Text,
  TextGreeting,
  Wrapper,
} from './MyLibrary.styled';
import { ModalWindow } from '../Modal/ModalWindow';
import { MyLibraryItem } from './MyLibraryItem/MyLibraryItem';
import { useEffect, useState } from 'react';

export const MyLibraryList = ({ status }) => {
  const newBook = useSelector(newBooksSelector);

  const getVisibleTasks = (status, newBook) => {
    if (status === 'done') {
      return newBook.filter(item => item.status === 'done');
    } else if (status === 'in progress') {
      return newBook.filter(item => item.status === 'in-progress');
    } else if (status === 'unread') {
      return newBook.filter(item => item.status === 'unread');
    }
    return newBook;
  };

  const visible = getVisibleTasks(status, newBook);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const toggle = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = 'hidden';
  };

  return (
    <>
      {newBook.length !== 0 ? (
        <MyListBook>
          {visible.map(item => (
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

MyLibraryList.propTypes = {
  status: PropTypes.string,
};
