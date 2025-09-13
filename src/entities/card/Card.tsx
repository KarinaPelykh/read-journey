import { Image, Title, Author, QuantityPages } from './Card.style';
import { ModalWindow } from '@/components/Modal/ModalWindow';
import { useToggle } from '@/shared/hooks/useToggle';

type CardProps = {
  image: string;
  title: string;
  author: string;
  variant?: string;
  pages?: number;
};

export const Card = ({ image, title, author, variant, pages }: CardProps) => {
  const { open, isOpen, toggle } = useToggle();

  return (
    <>
      <li onClick={open} style={{ cursor: 'pointer' }}>
        <Image
          src={image}
          alt="book"
          width={137}
          height={200}
          $variant={variant}
        />
        <Title $variant={variant}>{title}</Title>
        <Author $variant={variant}>{author}</Author>
      </li>

      {isOpen && (
        <ModalWindow open={isOpen} toggle={toggle ?? (() => {})}>
          <Image
            src={image}
            alt="book"
            width={137}
            height={200}
            $variant="modal"
          />
          <Title $variant="modal">{title}</Title>
          <Author $variant="modal">{author}</Author>
          <QuantityPages>{pages} pages</QuantityPages>
        </ModalWindow>
      )}
    </>
  );
};
