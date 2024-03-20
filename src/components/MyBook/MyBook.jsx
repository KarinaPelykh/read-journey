import { useSelector } from "react-redux";
import { redBookSelector } from "../../redux/books/selectors";
import { Author, ImgRead, Title, Wrapper } from "./MyBook.styled";
import icon from "../../images/sprite.svg";
export const MyBook = () => {
  const readBook = useSelector(redBookSelector);
  const [status] = readBook.progress;
  return (
    <>
      <Wrapper>
        <div>
          <div>
            <ImgRead src={readBook?.imageUrl} />
          </div>

          <Title>{readBook?.title}</Title>
          <Author>{readBook?.author}</Author>
        </div>
      </Wrapper>
      <button>
        <svg width="50" height="50">
          {/* {status?.status === "active" ? ( */}
          <use xlinkHref={icon + "#button-stop-read"}></use>
          {/* ) : (
            <use xlinkHref={icon + "#button-read"}></use>
          )} */}
        </svg>
      </button>
    </>
  );
};
