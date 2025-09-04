import { addNewBook } from '@/redux/books/operations';
import { Form, InputADD, Label, Title, Wrapper } from './AddBooks.styled';
import { Buttons } from '@/shared/ui/button/Button';
import { toast } from 'react-toastify';
import { useAppDispatch } from '@/shared/hooks/hooks';
import { FormEvent, useState } from 'react';

export const AddBook = () => {
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState('');

  const [author, setAuthor] = useState('');

  const [totalPages, setTotalPages] = useState(0);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch(addNewBook({ title, author, totalPages }))
      .unwrap()
      .then(() =>
        toast.success('You add new book', {
          position: 'top-right',
          hideProgressBar: true,
          theme: 'dark',
        })
      )
      .catch(error => toast.error(error.message));
    setTitle('');
    setAuthor('');
    setTotalPages(0);
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeAuthor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(e.target.value);
  };

  const handleChangePage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const totalPages = Number(e.target.value);
    setTotalPages(totalPages);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Create your library:</Title>
      <Wrapper>
        <Label>Book title:</Label>
        <InputADD
          name="title"
          value={title}
          onChange={handleChangeTitle}
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
          value={author}
          onChange={handleChangeAuthor}
          type="text"
          $variant="input2"
          required
          placeholder="Hilarion Pavlyuk"
        />
      </Wrapper>
      <Wrapper>
        <Label>Number of pages:</Label>
        <InputADD
          name="pages"
          value={totalPages}
          onChange={handleChangePage}
          type="text"
          $variant="input3"
          pattern="^[0-9]+$"
          required
          placeholder="664"
        />
      </Wrapper>
      <Buttons variant="buttonBase" prop={'Add book'} />
    </Form>
  );
};
