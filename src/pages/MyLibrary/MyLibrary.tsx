import { Dashboard } from '@/widgets/dashboard/Dashboard';
import {
  Div,
  WrapperBooks,
  TextLibrary,
  Greeting,
  SpanGreeting,
  TextGreeting,
} from './MyLibrary.styled';
import { MyLibrarySidebar } from '@/components/MyLibrarySidebar';
import { CustomSelect } from '@/widgets/select/ui/CustomSelect';
import { useEffect, useState } from 'react';
import { getBookOwn } from '@/redux/books/operations';
import { useAppDispatch } from '@/shared/hooks/hooks';
import { OPTIONS } from '@/widgets/select/constants/options.constants';
import { MyLibraryList } from '@/components/my-library-list/ui/library-list/MyLibraryList';
import { useLocation } from 'react-router-dom';
import { useToggle } from '@/shared/hooks/useToggle';
import { ModalWindow } from '@/components/Modal/ModalWindow';

export const MyLibrary = () => {
  const [statusValue, setStatus] = useState(OPTIONS[OPTIONS.length - 1]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBookOwn({ status: statusValue.value }));
  }, [dispatch, statusValue]);

  const { open, isOpen, toggle } = useToggle();

  const location = useLocation();

  useEffect(() => {
    if (location.state?.bookAdded) {
      open();
    }
  }, [location.state]);

  return (
    <>
      <Div>
        <Dashboard>
          <MyLibrarySidebar />
        </Dashboard>
        <WrapperBooks>
          <TextLibrary>My library</TextLibrary>
          <CustomSelect setStatus={setStatus} statusValue={statusValue} />
          <MyLibraryList status={statusValue.value.toLowerCase()} />
        </WrapperBooks>
      </Div>
      {isOpen && (
        <ModalWindow open={isOpen} toggle={toggle} variant="min-modal" id="">
          <img width="68" height="70" src="/images/hand.png" />
          <TextGreeting>Good job</TextGreeting>
          <Greeting>
            Your book is now in <SpanGreeting>the library </SpanGreeting>! The
            joy knows no bounds and now you can start your training
          </Greeting>
        </ModalWindow>
      )}
    </>
  );
};
