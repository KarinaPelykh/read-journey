import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Selectors } from './Select.styled';
import { getBookOwn } from '../../redux/books/operations';
import { MyLibraryList } from '../MyLibraryList/MyLibraryList';

export const Selector = () => {
  const [statusValue, setStatus] = useState({
    value: 'All books',
    label: 'All books',
  });
  const dispatch = useDispatch();
  const statusBook = statusValue.value.toLowerCase();

  useEffect(() => {
    dispatch(getBookOwn({ status: statusValue }));
  }, [dispatch, statusValue]);

  const options = [
    { value: 'Unread', label: 'Unread' },
    { value: 'In progress', label: 'In progress' },
    { value: 'Done', label: 'Done' },
    { value: 'All books', label: 'All books' },
  ];
  return (
    <>
      <Selectors
        onChange={setStatus}
        defaultValue={statusValue}
        options={options}
        classNamePrefix="react-select"
      />

      <MyLibraryList status={statusBook} />
    </>
  );
};
