import { useSelector } from 'react-redux';
import { redBookSelector } from '../../redux/books/selectors';
import {
  Author,
  Button,
  ImgRead,
  TextTime,
  Title,
  Wrapper,
} from './MyBook.styled';
import icon from '../../images/sprite.svg';
import book from '../../images/img-book.png';
export const MyBook = () => {
  const readBook = useSelector(redBookSelector);
  console.log(readBook);
  return (
    <>
      {readBook?.timeLeftToRead ? (
        <TextTime>
          {readBook.timeLeftToRead.hours}hours and
          {readBook.timeLeftToRead.minutes}minutes left
        </TextTime>
      ) : null}
      <Wrapper>
        <div style={{ textAlign: 'center' }}>
          <div>
            <ImgRead src={readBook?.imageUrl ? readBook?.imageUrl : book} />
          </div>

          <Title>{readBook?.title}</Title>
          <Author>{readBook?.author}</Author>
        </div>
      </Wrapper>
      <Button>
        <svg width="50" height="50">
          {readBook?.timeLeftToRead ? (
            <use xlinkHref={icon + '#button-read'}></use>
          ) : (
            <use xlinkHref={icon + '#button-stop-read'}></use>
          )}
        </svg>
      </Button>
    </>
  );
};
