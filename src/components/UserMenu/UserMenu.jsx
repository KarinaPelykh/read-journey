import { useSelector } from "react-redux";
import { userNameSelect } from "../../redux/auth/selectors";

export const UserMenu = () => {
  const userName = useSelector(userNameSelect);
  return <p>{userName.name}</p>;
};
