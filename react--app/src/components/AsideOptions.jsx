import { Link } from "react-router-dom";
import "../employee.css";
import icon from "../assets/icon.svg";

const AsideOptions = (props) => {
  return (
    <Link to={props.to} className="sideOptions">
      <div className="aside__option">
        <span className="img__container">
          <img src={icon} className="nav__img" />
        </span>
        {props.value}
      </div>
    </Link>
  );
};

export default AsideOptions;
