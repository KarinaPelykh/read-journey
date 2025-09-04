import { useAppSelector } from '@/shared/hooks/hooks';

import { Div, Name, UserSvg } from './UserBar.styled';
import { userNameSelect } from '@/redux/auth/selectors';

export const UserBar = () => {
  const userName = useAppSelector(userNameSelect);

  return (
    <Div>
      <UserSvg>{userName[0]}</UserSvg>
      <Name>{userName}</Name>
    </Div>
  );
};
