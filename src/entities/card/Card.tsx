import { Image, Title, Author, QuantityPages, Li, Box } from './Card.style';
import { ModalWindow } from '@/components/Modal/ui/modal/ModalWindow';
import { useToggle } from '@/shared/hooks/useToggle';
import { ReactNode } from 'react';

type CardProps = {
  image: string;
  title: string;
  author: string;
  variant?: string;
  pages?: number;
  children?: ReactNode;
  id?: string;
};

export const Card = ({
  image,
  title,
  author,
  variant,
  pages,
  children,
  id = '',
}: CardProps) => {
  const { open, isOpen, toggle, close } = useToggle();

  return (
    <>
      <Li onClick={variant === 'reading' ? close : open} $variant={variant}>
        <Image
          src={image}
          alt="book"
          width={137}
          height={200}
          $variant={variant}
        />
        <Box $variant={variant}>
          <div>
            <Title $variant={variant}>{title}</Title>
            <Author $variant={variant}>{author}</Author>
          </div>

          {children}
        </Box>
      </Li>

      {variant === 'widget'
        ? null
        : isOpen && (
            <ModalWindow
              open={isOpen}
              toggle={toggle}
              id={id}
              title={title}
              variant={variant}
            >
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
