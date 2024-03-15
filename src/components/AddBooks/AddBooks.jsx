import { useDispatch } from "react-redux";
import { addNewBook } from "../../redux/books/operations";
import { Form, InputADD, Label, Title, Wrapper } from "./AddBooks.styled";
import { Buttons } from "../Button/Button";
export const AddBook = () => {
  const dispatch = useDispatch();
  const handelSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.elements.title.value;
    const author = form.elements.author.value;
    const totalPages = form.elements.pages.value;
    form.reset();
    console.log({ title, author, totalPages });
    dispatch(addNewBook({ title, author, totalPages }));
  };

  return (
    <Form onSubmit={handelSubmit}>
      <Title>Create your library:</Title>
      <Wrapper>
        <Label>Book title</Label>
        <InputADD
          name="title"
          type="text"
          pattern="^[A-Za-zА-Яа-яЁё]+\s?[A-Za-zА-Яа-яЁё]+$"
          required
        />
      </Wrapper>
      <Wrapper>
        <Label>The author:</Label>
        <InputADD name="author" type="text" variant="input2" required />
      </Wrapper>
      <Wrapper>
        <Label>Number of pages:</Label>
        <InputADD
          name="pages"
          type="text"
          variant="input3"
          pattern="^[0-9]+$"
          required
        />
      </Wrapper>

      <Buttons type="submit" variant="buttonBase" prop={"Add book"} />
    </Form>
  );
};
