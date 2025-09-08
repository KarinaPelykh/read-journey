import { addNewBook } from '@/redux/books/operations';
import { useAppDispatch } from '@/shared/hooks/hooks';
import { FormEvent } from 'react';
import { toast } from 'react-toastify';

export const useBookFomSubmit = ({ ...data }) => {
  const { title, author, totalPages, setTitle, setAuthor, setTotalPages } =
    data;

  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch(addNewBook({ title, author, totalPages }))
      .unwrap()
      .then(() =>
        toast.success('You add new book', {
          position: 'top-right',
          hideProgressBar: true,
          theme: 'dark',
        })
      )
      .catch(error => toast.error(error.message));

    setTitle('');

    setAuthor('');

    setTotalPages(0);
  };

  return handleSubmit;
};
