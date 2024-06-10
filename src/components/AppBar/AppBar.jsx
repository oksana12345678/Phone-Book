import Navigation from "../Navigation/Navigation";
import { useSelector } from "react-redux";
import UserMenu from "../UserMenu/UserMenu";
import { selectIsLoggedIn } from "../../redux/auth/selectors.js";
import AuthNav from "../AuthNav/AuthNav";
import css from "./AppBar.module.css"

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <div className={css.container}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};
export default AppBar;
