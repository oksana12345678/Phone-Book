import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import { FaPhoneSquareAlt } from "react-icons/fa";
const HomePage = () => {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>
      <div>
        <h1>
          <FaPhoneSquareAlt />
          Welcome to your phone book!
        </h1>
      </div>
    </>
  );
};
export default HomePage;
