import book from '../../../images/img-book.png';
import icon from '../../../images/sprite.svg';

import { useState } from 'react';
import { deleteBook } from '../../../redux/books/operations';
import { useDispatch } from 'react-redux';
import { ModalRead } from '../../Modal/ModalRead';
import {
  Author,
  BookImg,
  ButtonDelete,
  QuantityPages,
  Title,
  WrapperItem,
} from './MyLibraryItem.styled';

export const MyLibraryItem = ({ id, img, title, author, pages }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <li>
        <BookImg onClick={toggle} src={img ? img : book} />

        <WrapperItem>
          <div>
            <Title>{title}</Title>
            <Author>{author}</Author>
          </div>
          <ButtonDelete onClick={() => dispatch(deleteBook(id))}>
            <svg width="14" height="14">
              <use xlinkHref={icon + '#trash'}></use>
            </svg>
          </ButtonDelete>
        </WrapperItem>
      </li>

      {isOpen && (
        <ModalRead open={isOpen} toggle={toggle} id={id}>
          <BookImg variant="imgModal" src={img ? img : book} />
          <Title variant="titleModal">{title}</Title>

          <Author variant="titleAuthor">{author}</Author>
          <QuantityPages>{pages} pages</QuantityPages>
        </ModalRead>
      )}
    </>
  );
};
