import { Link } from "react-router-dom";
import errorimg from "../assets/error-image.jpg";
import "../errorStyle.css";

const NotFound = () => {
  return (
    <main className="error-main">
      <span className="errorimg__style">
        <img src={errorimg} className="error__img" />
      </span>
    </main>
  );
};

export default NotFound;
