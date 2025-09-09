import { finishedReading, startReading } from '@/redux/books/operations';
import { redBookSelector } from '@/redux/books/selectors';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/hooks';
import { FormEvent } from 'react';
import { toast } from 'react-toastify';

type useSubmitProgressReadingProps = {
  setStart: (arg: boolean) => void;
  page: string;
  setPage: (arg: string) => void;
  start: boolean;
  open: () => void;
};

const toastOptions = {
  position: 'top-right' as const,
  hideProgressBar: true,
  theme: 'dark',
};

export const useSubmitProgressReading = ({
  ...data
}: useSubmitProgressReadingProps) => {
  const { setStart, page, setPage, start, open } = data;

  const dispatch = useAppDispatch();

  const readBook = useAppSelector(redBookSelector);

  const id = readBook._id as string;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!start) {
      startRead();
    } else {
      finishRead();
      if (readBook?.totalPages === parseInt(page)) {
        toast.success('You already finished  read', toastOptions);
      }
    }
    setPage('');
  };

  const startRead = () => {
    dispatch(startReading({ id, page }))
      .unwrap()
      .then(() => {
        toast.success('You start read', toastOptions);
        setStart(!start);
      })
      .catch(error => toast.error(error.message));
  };

  const finishRead = () => {
    dispatch(finishedReading({ id, page }))
      .unwrap()
      .then(res => {
        res?.status === 'done' && open();
        toast.success('You finished read', toastOptions);
        setStart(!start);
      })
      .catch(error => {
        toast.error(error.message);
      });
  };
  return handleSubmit;
};
