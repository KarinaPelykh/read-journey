import { useState } from 'react';
import { Author, BookImg, QuantityPages, Title } from './BookItem.styled';
import { ModalWindow } from '../Modal/ModalWindow';
interface BookItem {
  author: string;
  id: string;
  img: string;
  pages: number;
  title: string;
}
export const BookItem = ({ img, title, author, pages, id }: BookItem) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = 'hidden';
    if (isOpen) {
      document.body.style.overflow = 'auto';
    }
  };
  return (
    <>
      <li onClick={toggle}>
        <BookImg src={img} />
        <Title>{title}</Title>
        <Author>{author}</Author>
      </li>
      {isOpen && (
        <ModalWindow open={isOpen} toggle={toggle} id={id} title={title}>
          <BookImg $variant="imgModal" src={img} />
          <Title $variant="titleModal">{title}</Title>

          <Author $variant="titleAuthor">{author}</Author>
          <QuantityPages>{pages} pages</QuantityPages>
        </ModalWindow>
      )}
    </>
  );
};
