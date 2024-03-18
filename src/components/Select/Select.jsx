import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getBookStatus } from "../../redux/books/operations";
import { CustomRow, CustomRowTwe, Selector } from "./Select.styled";

export const Select = () => {
  const [status, setStatus] = useState();
  const dispatch = useDispatch();
  const handelStatus = (e) => {
    const select = e.target.value;

    setStatus(select);
  };
  useEffect(() => {
    dispatch(getBookStatus({ status }));
  }, [dispatch, status]);
  return (
    <div>
      <Selector onClick={handelStatus} defaultValue="All books">
        <option value="Unread">Unread</option>
        <option value="In progress">In progress</option>
        <option value="Done">Done</option>
        <option value="All books">All books</option>
      </Selector>
      <CustomRow></CustomRow>
      <CustomRowTwe></CustomRowTwe>
    </div>
  );
};
