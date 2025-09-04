import { useState } from 'react';

import { Author, BookImg, Title } from './BookItemFilter.styled';
import { ModalWindow } from '@/components/Modal/ModalWindow';

type BookItemFilterProps = {
  author: string;
  id: string;
  img: string;
  title: string;
};

export const BookItemFilter = ({
  img,
  title,
  author,
  id,
}: BookItemFilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div onClick={toggle}>
        <BookImg src={img} />
        <Title>{title}</Title>
        <Author>{author}</Author>
      </div>
      {isOpen && (
        <ModalWindow open={isOpen} toggle={toggle} id={id}>
          <BookImg src={img} />
          <Title>{title}</Title>
          <Author>{author}</Author>
        </ModalWindow>
      )}
    </>
  );
};
