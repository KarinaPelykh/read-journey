import { useSelector } from "react-redux";
import { newBooksSelector } from "../../redux/books/selectors";
import Images from "../../images/bookDefault.png";
import {
  Author,
  BookImg,
  MyListBook,
  Span,
  Text,
  Title,
  Wrapper,
} from "./MyLibrary.styled";
export const MyLibraryList = () => {
  const newBook = useSelector(newBooksSelector);

  return (
    <>
      {newBook.length > 0 ? (
        <MyListBook>
          {newBook.map((item) => (
            <li key={item._id}>
              <BookImg src={item.imageUrl} />
              <Title>{item.title}</Title>
              <Author>{item.author}</Author>
            </li>
          ))}
        </MyListBook>
      ) : (
        <Wrapper>
          <div>
            <img width="130" height="130" src={Images} alt="book" />
          </div>
          <Text>
            To start training, add <Span>some of your books </Span> or from the
            recommended ones
          </Text>
        </Wrapper>
      )}
    </>
  );
};
