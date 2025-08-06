import { Buttons } from '../../../shared/ui/Button/Button';
import { Form, InputFilter, Label, Title, Wrapper } from './FilterForm.styled';
import { getBook } from '../../../redux/filter/operations';
import { FormEvent, useState } from 'react';
import { useAppDispatch } from '../../../hooks/hooks';
import { toast } from 'react-toastify';

export const FilterForm = () => {
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState('');

  const [author, setAuthor] = useState('');

  const handelSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch(getBook({ title, author }))
      .unwrap()
      .then(({ results }: any) => {
        if (results.length === 0) {
          toast.error("We don't found book, try again");
        } else {
          toast.success('Your book here');
        }
      })
      .catch(error => {
        toast.error(error);
      });

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
