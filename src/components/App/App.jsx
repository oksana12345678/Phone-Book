import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { lazy, useEffect } from "react";
import Layout from "../Layout/Layout";
import { Route, Routes } from "react-router-dom";
import { refreshUser } from "../redux/auth/operations";
import { selectIsRefreshing } from "../redux/auth/selectors";
const HomePage = lazy(() => "../../page/HomePage/HomePage");
const RestrictedRoute = lazy(() =>
  import("../RestrictedRoute/RestrictedRoute")
);
const RegistrationPage = lazy(() =>
  import("../../page/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("../../page/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../../page/ContactsPage/ContactsPage"));
function App() {
  const dispatch = useDispatch();
  const IsRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return IsRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts "
              component={<RegistrationPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
