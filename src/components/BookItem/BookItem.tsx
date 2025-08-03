import { FC, useState } from 'react';
import { Author, BookImg, QuantityPages, Title } from './BookItem.styled';
import { ModalWindow } from '../Modal/ModalWindow';
import { useToggle } from '../../hooks/useToggle';

type BookItemProps = {
  author: string;
  id: string;
  img: string;
  pages: number;
  title: string;
};

export const BookItem = ({ img, title, author, pages, id }: BookItemProps) => {
  const { toggle, isOpen } = useToggle();

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
