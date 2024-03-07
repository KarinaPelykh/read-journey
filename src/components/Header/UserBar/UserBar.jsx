import { useSelector } from "react-redux";
import {
  isLoggedInSelect,
  userNameSelect,
} from "../../../redux/auth/selectors";
import { Div, UserSvg } from "./UserBar.styled";
export const UserBar = () => {
  const userName = useSelector(userNameSelect);
  const name = userName.name;
  const nikUser = name.split("");

  const isLoggedIn = useSelector(isLoggedInSelect);
  return (
    <Div>
      {isLoggedIn && <UserSvg>{nikUser[0]}</UserSvg>}
      <p>{userName.name}</p>
    </Div>
  );
};
