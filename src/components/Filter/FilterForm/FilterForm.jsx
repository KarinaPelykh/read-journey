import { Buttons } from "../../Button/Button";
import { Form, InputFilter, Label, Title, Wrapper } from "./FilterForm.styled";
export const FilterForm = () => {
  return (
    <Form>
      <Title>Filters:</Title>
      <Wrapper>
        <Label>Book title:</Label>
        <InputFilter type="" />
      </Wrapper>
      <Wrapper>
        <Label>The author:</Label>
        <InputFilter type="" variant="input2" />
      </Wrapper>

      <Buttons prop="To apply" variant="buttonFilter" />
    </Form>
  );
};
