import { Buttons } from '../../Button/Button';
import { Form, InputFilter, Label, Title, Wrapper } from './FilterForm.styled';
import { getBook } from '../../../redux/filter/operations';
import { FormEvent, useState } from 'react';
import { useAppDispatch } from '../../../hooks/hooks';
export const FilterForm = () => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const handelSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(getBook({ title, author }));
    setTitle('');
    setAuthor('');
  };
  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleChangeAuthor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(e.target.value);
  };
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
