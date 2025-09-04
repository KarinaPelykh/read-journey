import { useEffect, useState } from 'react';
import { getBookOwn } from '@/redux/books/operations';
import { MyLibraryList } from '../../../components/MyLibraryList/MyLibraryList';
import { useAppDispatch } from '@/shared/hooks/hooks';
import { Selectors } from './CustomSelect.styled';

type SelectorOption = {
  value: string;
  label: string;
};

const options = [
  { value: 'Unread', label: 'Unread' },
  { value: 'In progress', label: 'In progress' },
  { value: 'Done', label: 'Done' },
  { value: 'All books', label: 'All books' },
];

export const CustomSelect = () => {
  const [statusValue, setStatus] = useState(options[options.length - 1]);

  const statusBook = statusValue.value.toLowerCase();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBookOwn({ status: statusValue.value }));
  }, [dispatch, statusValue]);

  const handleStatusChange = (option: SelectorOption | any) => {
    if (option) {
      setStatus(prevState => ({
        ...prevState,
        value: option.value,
        label: option.label,
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
