import { BooksArrayResponse } from '@/types/book.type';

export const getVisibleTasks = (
  status: string,
  newBook: BooksArrayResponse[]
): BooksArrayResponse[] => {
  if (status === 'done') {
    return newBook.filter(item => item.status === 'done');
  } else if (status === 'in progress') {
    return newBook.filter(item => item.status === 'in-progress');
  } else if (status === 'unread') {
    return newBook.filter(item => item.status === 'unread');
  }
  return newBook;
};
