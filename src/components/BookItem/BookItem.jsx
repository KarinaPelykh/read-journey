import { useState } from "react";
import { Author, BookImg, QuantityPages, Title } from "./BookItem.styled";
import { ModalWindow } from "../Modal/ModalWindow";

export const BookItem = ({ img, title, author, pages, id }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
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
          <BookImg variant="imgModal" src={img} />
          <Title variant="titleModal">{title}</Title>

          <Author variant="titleAuthor">{author}</Author>
          <QuantityPages>{pages} pages</QuantityPages>
        </ModalWindow>
      )}
    </>
  );
};
