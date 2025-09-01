import {
  isLoggedInSelect,
  userNameSelect,
} from '../../../redux/auth/selectors';
import { Div, Name, UserSvg } from './UserBar.styled';
import { useAppSelector } from '../../../hooks/hooks';
export const UserBar = () => {
  const userName = useAppSelector(userNameSelect);
  const name = userName.name;
  const nikUser = name.split('');

  const isLoggedIn = useAppSelector(isLoggedInSelect);
  return (
    <Div>
      {isLoggedIn && <UserSvg>{nikUser[0]}</UserSvg>}
      <Name>{userName.name}</Name>
    </Div>
  );
};
