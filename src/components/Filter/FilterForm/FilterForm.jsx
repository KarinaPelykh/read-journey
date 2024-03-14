import { useDispatch } from "react-redux";
import { Buttons } from "../../Button/Button";
import { Form, InputFilter, Label, Title, Wrapper } from "./FilterForm.styled";
import { getBook } from "../../../redux/filter/operations";
export const FilterForm = () => {
  const dispatch = useDispatch();
  const handelSubmit = (e) => {
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
        <InputFilter type="text" name="title" required />
      </Wrapper>
      <Wrapper>
        <Label>The author:</Label>
        <InputFilter type="text" variant="input2" name="author" required />
      </Wrapper>

      <Buttons prop="To apply" variant="buttonBase" />
    </Form>
  );
};
