import { deleteProgress } from '@/redux/books/operations';
import { redBookSelector } from '@/redux/books/selectors';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/hooks';
import { toast } from 'react-toastify';

const options = {
  position: 'top-right' as const,
  hideProgressBar: true,
  theme: 'dark',
};

export const useDeleteProgressOfReading = () => {
  const readBook = useAppSelector(redBookSelector);

  const bookId = readBook._id;

  const dispatch = useAppDispatch();

  const handelDeleteProgress = (_id: string) => {
    dispatch(
      deleteProgress({
        bookId,
        readingId: _id,
      })
    )
      .unwrap()
      .then(() => {
        toast.success('You delete progress', options);
      })
      .catch(error => toast.error(error, options));
  };

  return handelDeleteProgress;
};
