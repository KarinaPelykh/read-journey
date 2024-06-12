import { Buttons } from '../../Button/Button';
import { Form, InputFilter, Label, Title, Wrapper } from './FilterForm.styled';
import { getBook } from '../../../redux/filter/operations';
import { FormEventHandler } from 'react';
import { useAppDispatch } from '../../../hooks/hooks';
export const FilterForm = () => {
  const dispatch = useAppDispatch();
  const handelSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const title = form.elements.title.value;
    const author = form.elements.author.value;

    form.reset();

    dispatch(getBook({ title, author }));
  };

  return (
    <Form onSubmit={handelSubmit}>
      <Title>Filters:</Title>
      <Wrapper>
        <Label>Book title:</Label>
        <InputFilter
          type="text"
          name="title"
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
          required
          placeholder="Enter text"
        />
      </Wrapper>

      <Buttons prop="To apply" variant="buttonBase" />
    </Form>
  );
};
