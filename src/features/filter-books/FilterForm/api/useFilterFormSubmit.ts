import { FormEvent } from 'react';
import { getBook } from '@/redux/filter/operations';
import { useAppDispatch } from '@/shared/hooks/hooks';
import { toast } from 'react-toastify';

type FilterFormSubmitProps = {
  title: string;
  author: string;
  setAuthor: (arg: string) => void;
  setTitle: (arg: string) => void;
};

export const useFilterFormSubmit = ({
  title,
  author,
  setAuthor,
  setTitle,
}: FilterFormSubmitProps) => {
  const dispatch = useAppDispatch();

  const handelSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch(getBook({ title, author }))
      .unwrap()
      .then(({ results }: any) => {
        if (results.length === 0) {
          toast.error("We don't found book, try again");
        } else {
          toast.success('Your book here');
        }
      })
      .catch(error => {
        toast.error(error);
      });

    setTitle('');
    setAuthor('');
  };

  return handelSubmit;
};
