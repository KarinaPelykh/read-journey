import { useSelector } from "react-redux";
import { redBookSelector } from "../../redux/books/selectors";
import { Author, ImgRead, Title, Wrapper } from "./MyBook.styled";
import icon from "../../images/sprite.svg";
import book from "../../images/img-book.png";
export const MyBook = () => {
  const readBook = useSelector(redBookSelector);
  return (
    <>
      {readBook?.timeLeftToRead ? (
        <p>
          {readBook.timeLeftToRead.hours}hours and
          {readBook.timeLeftToRead.minutes}minutes left
        </p>
      ) : null}
      <Wrapper>
        <div>
          <div>
            <ImgRead src={readBook?.imageUrl ? readBook?.imageUrl : book} />
          </div>

          <Title>{readBook?.title}</Title>
          <Author>{readBook?.author}</Author>
        </div>
      </Wrapper>
      <button>
        <svg width="50" height="50">
          {readBook?.timeLeftToRead ? (
            <use xlinkHref={icon + "#button-read"}></use>
          ) : (
            <use xlinkHref={icon + "#button-stop-read"}></use>
          )}
        </svg>
      </button>
    </>
  );
};
