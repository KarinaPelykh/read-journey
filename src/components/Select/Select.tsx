import { useEffect, useState } from 'react';
import { Selectors } from './Select.styled';
import { getBookOwn } from '@/redux/books/operations';
import { MyLibraryList } from '../MyLibraryList/MyLibraryList';
import { useAppDispatch } from '@/hooks/hooks';
type Selector = {
  value: string;
  label: string;
  handleStatusChange: (options: Selector | null) => void;
};

export const Selector = () => {
  const [statusValue, setStatus] = useState({
    value: 'All books',
    label: 'All books',
  });

  const statusBook = statusValue.value.toLowerCase();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBookOwn({ status: statusValue.value }));
  }, [dispatch, statusValue]);

  const options = [
    { value: 'Unread', label: 'Unread' },
    { value: 'In progress', label: 'In progress' },
    { value: 'Done', label: 'Done' },
    { value: 'All books', label: 'All books' },
  ];

  const handleStatusChange = (options: Selector | any | null): void => {
    if (options) {
      setStatus(prevState => ({
        ...prevState,
        value: options.value,
        label: options.label,
      }));
    }
  };

  return (
    <>
      <Selectors
        onChange={handleStatusChange}
        defaultValue={statusValue}
        options={options}
        classNamePrefix="react-select"
      />

      <MyLibraryList status={statusBook} />
    </>
  );
};
