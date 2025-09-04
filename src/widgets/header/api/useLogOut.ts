import { useAppDispatch } from '@/shared/hooks/hooks';
import { logOutThunk } from '@/redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const useLogOut = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handelLogout = () => {
    dispatch(logOutThunk())
      .then(() => {
        navigate('/');
        toast.success('You Log-out', {
          position: 'top-right',
          hideProgressBar: true,
          theme: 'dark',
        });
      })
      .catch(error => toast.error(error));
  };

  return handelLogout;
};
