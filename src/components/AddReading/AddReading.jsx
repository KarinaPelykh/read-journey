import { useDispatch, useSelector } from "react-redux";
import { Buttons } from "../Button/Button";
import { InputAddBook, Label, Title, Wrapper } from "./AddReading.styled";
import { redBookSelector } from "../../redux/books/selectors";
import { finishedReading, startReading } from "../../redux/books/operations";

export const AddReading = () => {
  const readBook = useSelector(redBookSelector);
  const id = readBook._id;
  const [status] = readBook.progress;

  console.log(status);
  const dispatch = useDispatch();

  const handelSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const page = form.elements.page.value;

    // if (status && status.status === "active") {
    //   dispatch(finishedReading({ id, page }));
    // }
    dispatch(startReading({ id, page }));

    form.reset();
  };

  return (
    <form onSubmit={handelSubmit}>
      <Title>Start page:</Title>
      <Wrapper>
        <Label>Page number:</Label>
        <InputAddBook type="page" name="page" required pattern="^[0-9]+$" />
      </Wrapper>
      <Buttons
        prop={status && status.status === "active" ? "To stop" : "To start"}
        variant="buttonBase"
      />
    </form>
  );
};
