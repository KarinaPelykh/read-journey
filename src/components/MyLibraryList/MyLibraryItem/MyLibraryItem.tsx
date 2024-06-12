import book from '../../../images/img-book.png';
import icon from '../../../images/sprite.svg';

import { FC, useState } from 'react';
import { deleteBook } from '../../../redux/books/operations';
import { ModalRead } from '../../Modal/ModalRead';
import {
  Author,
  BookImg,
  ButtonDelete,
  QuantityPages,
  Title,
  WrapperItem,
} from './MyLibraryItem.styled';
import { useAppDispatch } from '../../../hooks/hooks';
interface Item {
  author: string;
  id: string;
  img: string;
  pages: number;
  title: string;
}
export const MyLibraryItem: FC<Item> = ({ id, img, title, author, pages }) => {
  console.log(typeof id);

  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const toggle = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = 'hidden';
    if (isOpen) {
      document.body.style.overflow = 'auto';
    }
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
          <ButtonDelete onClick={() => dispatch(deleteBook({ id }))}>
            <svg width="14" height="14">
              <use xlinkHref={icon + '#trash'}></use>
            </svg>
          </ButtonDelete>
        </WrapperItem>
      </li>

      {isOpen && (
        <ModalRead open={isOpen} toggle={toggle} id={id}>
          <BookImg src={img ? img : book} />
          <Title>{title}</Title>

          <Author>{author}</Author>
          <QuantityPages>{pages} pages</QuantityPages>
        </ModalRead>
      )}
    </>
  );
};
