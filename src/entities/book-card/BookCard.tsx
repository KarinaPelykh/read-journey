import { Author, Image, QuantityPages, Title } from './BookCard.styled';
import { useToggle } from '../../shared/hooks/useToggle';
import { ModalWindow } from '@/components/Modal/ModalWindow';

type BookItemProps = {
  author: string;
  id: string;
  img: string;
  pages: number;
  title: string;
};

export const BookCard = ({ ...data }: BookItemProps) => {
  const { img, title, author, pages, id } = data;

  const { toggle, isOpen } = useToggle();

  return (
    <>
      <li onClick={toggle}>
        <Image src={img} alt="book" width={137} height={200} />
        <Title>{title}</Title>
        <Author>{author}</Author>
      </li>

      {isOpen && (
        <ModalWindow open={isOpen} toggle={toggle} id={id} title={title}>
          <Image
            $variant="imgModal"
            src={img}
            alt="book"
            width={137}
            height={200}
          />
          <Title $variant="titleModal">{title}</Title>

          <Author $variant="titleAuthor">{author}</Author>
          <QuantityPages>{pages} pages</QuantityPages>
        </ModalWindow>
      )}
    </>
  );
};
