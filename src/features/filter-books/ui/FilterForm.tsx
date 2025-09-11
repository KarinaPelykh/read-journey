import { Buttons } from '@/shared/ui/btn/Button';
import { Form, InputFilter, Label, Title, Wrapper } from './FilterForm.styled';
import { useState } from 'react';

import { useFilterFormSubmit } from '../api/useFilterFormSubmit';
import { useResetFilter } from '@/features/filter-books/api/useResetFilter';

export const FilterForm = () => {
  const [title, setTitle] = useState('');

  const [author, setAuthor] = useState('');

  const handelSubmit = useFilterFormSubmit({
    title,
    author,
    setAuthor,
    setTitle,
  });

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeAuthor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(e.target.value);
  };
  
  useResetFilter();

  return (
    <Form onSubmit={handelSubmit}>
      <Title>Filters:</Title>
      <Wrapper>
        <Label>Book title:</Label>
        <InputFilter
          type="text"
          name="title"
          value={title}
          onChange={handleChangeTitle}
          required
          placeholder="Enter text"
        />
      </Wrapper>
      <Wrapper>
        <Label>The author:</Label>
        <InputFilter
          type="text"
          $variant="input2"
          name="author"
          value={author}
          onChange={handleChangeAuthor}
          required
          placeholder="Enter text"
        />
      </Wrapper>

      <Buttons prop="To apply" variant="buttonBase" />
    </Form>
  );
};
