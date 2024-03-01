import { Buttons } from "../../Button/Button";
import { ButtonFilter } from "./FilterForm.styled";
export const FilterForm = () => {
  return (
    <form>
      <input type="" placeholder="Book title:" />
      <input type="" placeholder="The author:" />
      <Buttons prop="to apply" variant={ButtonFilter} />
    </form>
  );
};
