import { useSelector } from "react-redux";
import { ListNav } from "../ListNav/ListNav";
import { AuthNav } from "../AuthNav/AuthNav";

import { isLoggedInSelect } from "../../redux/auth/selectors";
export const Navigation = () => {
  const isLoggedIn = useSelector(isLoggedInSelect);
  return <>{!isLoggedIn ? <AuthNav /> : <ListNav />}</>;
};
