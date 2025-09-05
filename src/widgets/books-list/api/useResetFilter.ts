import { resetFilter } from '@/redux/filter/filterSlice';
import { useAppDispatch } from '@/shared/hooks/hooks';
import { useEffect } from 'react';

export const useResetFilter = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetFilter());
    };
  }, [dispatch]);
};
