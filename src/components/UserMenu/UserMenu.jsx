import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);
  return (
    <div>
      <p>WElcome, {name}</p>
      <button type="button" onClick={() => dispatch(logOut)}></button>
    </div>
  );
};
export default UserMenu;
