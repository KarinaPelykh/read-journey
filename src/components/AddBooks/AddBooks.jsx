import { useDispatch } from 'react-redux';
import { addNewBook } from '../../redux/books/operations';
import { Form, InputADD, Label, Title, Wrapper } from './AddBooks.styled';
import { Buttons } from '../Button/Button';
import { toast } from 'react-toastify';
export const AddBook = () => {
  const dispatch = useDispatch();
  const handelSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const title = form.elements.title.value;
    const author = form.elements.author.value;
    const totalPages = form.elements.pages.value;
    form.reset();
    console.log({ title, author, totalPages });
    dispatch(addNewBook({ title, author, totalPages }))
      .unwrap()
      .then(() =>
        toast.success('You add new book', {
          position: 'top-right',
          hideProgressBar: true,
          theme: 'dark',
        })
      )
      .catch(error => toast.error(error));
  };

  return (
    <Form onSubmit={handelSubmit}>
      <Title>Create your library:</Title>
      <Wrapper>
        <Label>Book title:</Label>
        <InputADD
          name="title"
          type="text"
          pattern="^[A-Za-zА-Яа-яЁё]+\s?[A-Za-zА-Яа-яЁё]+$"
          required
          placeholder="I See You Are Interested In The Dark"
        />
      </Wrapper>
      <Wrapper>
        <Label>The author:</Label>
        <InputADD
          name="author"
          type="text"
          variant="input2"
          required
          placeholder="Hilarion Pavlyuk"
        />
      </Wrapper>
      <Wrapper>
        <Label>Number of pages:</Label>
        <InputADD
          name="pages"
          type="text"
          variant="input3"
          pattern="^[0-9]+$"
          required
          placeholder="664"
        />
      </Wrapper>

      <Buttons type="submit" variant="buttonBase" prop={'Add book'} />
    </Form>
  );
};
