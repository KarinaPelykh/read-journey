import { Dashboard } from '@/widgets/dashboard/Dashboard';
import { Div, WrapperBooks, TextLibrary } from './MyLibrary.styled';
import { MyLibrarySidebar } from '@/components/MyLibrarySidebar';
import { CustomSelect } from '@/widgets/select/ui/CustomSelect';
import { useEffect, useState } from 'react';
import { getBookOwn } from '@/redux/books/operations';
import { useAppDispatch } from '@/shared/hooks/hooks';
import { MyLibraryList } from '@/components/MyLibraryList/MyLibraryList';
import { OPTIONS } from '@/widgets/select/constants/options.constants';

export const MyLibrary = () => {
  const [statusValue, setStatus] = useState(OPTIONS[OPTIONS.length - 1]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBookOwn({ status: statusValue.value }));
  }, [dispatch, statusValue]);

  return (
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
  );
};
