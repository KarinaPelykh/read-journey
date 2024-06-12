import { FC, useState } from 'react';
import { ModalWindow } from '../../Modal/ModalWindow';
import { Author, BookImg, Title } from './BookItemFilter.styled';
interface BookItemFilter {
  author: string;
  id: string;
  img: string;
  title: string;
}
export const BookItemFilter: FC<BookItemFilter> = ({
  img,
  title,
  author,
  id,
}) => {
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
