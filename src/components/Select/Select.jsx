import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { CustomRow, CustomRowTwe, Option, Selector } from "./Select.styled";
import { getBookOwn } from "../../redux/books/operations";
import { MyLibraryList } from "../MyLibraryList/MyLibraryList";

export const Select = () => {
  const [statusValue, setStatus] = useState("All books");
  const dispatch = useDispatch();

  const handelStatus = (e) => {
    const status = e.target.value;

    setStatus(status);
  };

  useEffect(() => {
    dispatch(getBookOwn({ status: statusValue }));
  }, [dispatch, statusValue]);

  return (
    <>
      <div>
        <Selector onClick={handelStatus} defaultValue={statusValue}>
          <Option value="Unread">Unread</Option>
          <Option value="In progress">In progress</Option>
          <Option value="Done">Done</Option>
          <Option value="All books">All books</Option>
        </Selector>
        <CustomRow></CustomRow>
        <CustomRowTwe></CustomRowTwe>
      </div>
      <MyLibraryList status={statusValue.toLowerCase()} />
    </>
  );
};
