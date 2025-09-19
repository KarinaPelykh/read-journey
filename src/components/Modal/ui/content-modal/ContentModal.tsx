import { addBooksWithRecommended, addReadBook } from '@/redux/books/operations';
import { useAppDispatch } from '@/shared/hooks/hooks';
import { Buttons } from '@/shared/ui/btn/Button';
import { ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const ContentModal = ({
  children,
  id,
}: {
  children: ReactNode;
  id: string;
}) => {
  const { pathname } = useLocation();

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handelAddBook = () => {
    dispatch(addBooksWithRecommended({ id }));
    navigate('/library', { state: { bookAdded: true } });
  };

  const handelAddToRead = () => {
    dispatch(addReadBook({ id }));
    navigate('/reading');
  };
  return (
    <>
      {children}

      <Buttons
        prop={pathname === '/library' ? 'Start reading' : 'Add to library'}
        variant="buttonModal"
        onClick={pathname === '/library' ? handelAddToRead : handelAddBook}
      />
    </>
  );
};
