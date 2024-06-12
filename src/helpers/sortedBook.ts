interface Book {
  author: string;
  imageUrl: string;
  status: string;
  title: string;
  _id: string;
  totalPages: number;
}
export const getVisibleTasks = (status: string, newBook: Book[]): Book[] => {
  if (status === 'done') {
    return newBook.filter(item => item.status === 'done');
  } else if (status === 'in progress') {
    return newBook.filter(item => item.status === 'in-progress');
  } else if (status === 'unread') {
    return newBook.filter(item => item.status === 'unread');
  }
  return newBook;
};
