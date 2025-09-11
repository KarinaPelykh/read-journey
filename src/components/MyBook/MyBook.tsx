import { redBookSelector } from '@/redux/books/selectors';
import { Author, Button, ImgRead, Title, Wrapper } from './MyBook.styled';
import { useAppSelector } from '@/shared/hooks/hooks';
import { Icon } from '@/shared/ui/svg/Svg';

export const MyBook = () => {
  const readBook = useAppSelector(redBookSelector);

  const { timeLeftToRead, imageUrl, title, author } = readBook;

  return (
    <Wrapper>
      <div>
        <ImgRead src={imageUrl ? imageUrl : '/images/img-book.png'} />
      </div>
      <Title>{title}</Title>
      <Author>{author}</Author>
      <Button>
        <Icon
          iconName={timeLeftToRead ? 'button-read' : 'button-stop-read'}
          variant="reading-button"
        />
      </Button>
    </Wrapper>
  );
};
