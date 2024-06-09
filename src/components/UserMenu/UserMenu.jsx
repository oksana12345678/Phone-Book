import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { LogOut } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);
  return (
    <div>
      <p>WElcome, {name}</p>
      <button type="button" onClick={() => dispatch(LogOut)}></button>
    </div>
  );
};
export default UserMenu;
