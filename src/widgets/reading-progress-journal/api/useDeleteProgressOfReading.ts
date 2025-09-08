import { deleteProgress } from '@/redux/books/operations';
import { redBookSelector } from '@/redux/books/selectors';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/hooks';
import { toast } from 'react-toastify';

export const useDeleteProgressOfReading = () => {
  const redBook = useAppSelector(redBookSelector);

  const bookId = redBook._id as string;

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
        toast.success('You delete progress', {
          position: 'top-right',
          hideProgressBar: true,
          theme: 'dark',
        });
      })
      .catch(error =>
        toast.error(error, {
          position: 'top-right',
          hideProgressBar: true,
          theme: 'dark',
        })
      );
  };

  return handelDeleteProgress;
};
