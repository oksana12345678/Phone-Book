import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import { FaPhoneSquareAlt } from "react-icons/fa";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>
      <div className={css.welcomeText}>
        <h1 className={css.title}>
          <FaPhoneSquareAlt />
          Welcome to your phone book!
        </h1>
        <p className={css.desc}>
          After authorization you can add your contacts and save them in this
          app.
        </p>
      </div>
    </>
  );
};
export default HomePage;
