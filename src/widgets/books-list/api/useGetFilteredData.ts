import { booksSelector } from '@/redux/books/selectors';
import { selectorFilter } from '@/redux/filter/selectors';
import { useAppSelector } from '@/shared/hooks/hooks';

export const useGetFilteredData = () => {
  const filteredBook = useAppSelector(selectorFilter);

  const { results } = useAppSelector(booksSelector);

  return results.filter((item: { title: string }) =>
    item.title
      .toLocaleLowerCase()
      .includes(filteredBook.toLocaleLowerCase() || '')
  );
};
