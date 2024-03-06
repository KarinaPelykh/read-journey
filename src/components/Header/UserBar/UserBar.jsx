import { useSelector } from "react-redux";
import { userNameSelect } from "../../../redux/auth/selectors";
import { UserSvg } from "./UserBar.styled";
export const UserBar = () => {
  const userName = useSelector(userNameSelect);
  const name = userName.name;
  const nikUser = name.split("");
  return (
    <>
      <UserSvg>{nikUser[0]}</UserSvg>
      <p>{userName.name}</p>
    </>
  );
};
