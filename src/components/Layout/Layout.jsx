import { Suspense } from "react";
import AppBar from "../AppBar/AppBar";
import Loading from "../Loading/Loading";
import css from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      <main className={css.main}>
        <Suspense fallback={<Loading />}> {children}</Suspense>
      </main>
    </div>
  );
};
export default Layout;
