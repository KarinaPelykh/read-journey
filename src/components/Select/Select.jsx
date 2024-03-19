// import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CustomRow, CustomRowTwe, Option, Selector } from "./Select.styled";
import { statusSelector } from "../../redux/filter/selectors";
import { getBookStatus } from "../../redux/filter/operations";

export const Select = () => {
  // const [status, setStatus] = useState();
  // console.log(status);
  const statusBook = useSelector(statusSelector);
  const dispatch = useDispatch();
  const handelStatus = (e) => {
    const status = e.target.value;
    dispatch(getBookStatus({ status }));
    // setStatus(select);
  };
  // useEffect(() => {
  //   dispatch(getBookStatus({ status }));
  // }, [dispatch, status]);

  // useEffect(() => {
  //   dispatch(getBookStatus({ status }));
  // }, [dispatch, status]);

  return (
    <div>
      <Selector onClick={handelStatus} defaultValue={statusBook.status}>
        <Option value="Unread">Unread</Option>
        <Option value="In progress">In progress</Option>
        <Option value="Done">Done</Option>
        <Option value="All books">All books</Option>
      </Selector>
      <CustomRow></CustomRow>
      <CustomRowTwe></CustomRowTwe>
    </div>
  );
};
