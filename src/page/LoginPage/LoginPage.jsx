import { useSelector } from "react-redux";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import LoginForm from "../../components/LoginForm/LoginForm";
import { selectErrorAuth } from "../../redux/auth/selectors";
import Error from "../../components/Error/Error";
const LoginPage = () => {
  const error = useSelector(selectErrorAuth);
  return (
    <>
      <DocumentTitle>Log In</DocumentTitle>
      {error && <Error />}
      <LoginForm />
    </>
  );
};
export default LoginPage;
