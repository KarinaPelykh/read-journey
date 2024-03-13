import { useState } from "react";
import { ModalWindow } from "../../Modal/ModalWindow";
import { Author, BookImg, Title } from "./BookItemFilter.styled";

export const BookItemFilter = ({ img, title, author, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
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
