import { Form, InputADD, Label, Title, Wrapper } from './AddBooks.styled';
import { Buttons } from '@/shared/ui/btn/Button';

import { useState } from 'react';
import { useBookFomSubmit } from '../api/useBookFomSubmit';

export const AddBook = () => {
  const [title, setTitle] = useState('');

  const [author, setAuthor] = useState('');

  const [totalPages, setTotalPages] = useState(0);

  const handleSubmit = useBookFomSubmit({
    title,
    author,
    totalPages,
    setTitle,
    setAuthor,
    setTotalPages,
  });

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Create your library:</Title>
      <Wrapper>
        <Label>Book title:</Label>
        <InputADD
          name="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
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
          onChange={e => setAuthor(e.target.value)}
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
          onChange={e => setTotalPages(Number(e.target.value))}
          type="text"
          $variant="input3"
          pattern="^[0-9]+$"
          required
          placeholder="664"
        />
      </Wrapper>
      <Buttons variant="buttonBase" prop="Add book" />
    </Form>
  );
};
