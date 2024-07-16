import logo from "../assets/kv logo.png";
import "../employee.css";
import AsideOptions from "./AsideOptions";

const Aside = () => {
  return (
    <>
      <header>
        <img src={logo} className="header__img" alt="logo" />
      </header>
      <aside>
        <AsideOptions value="Employee List" to="/employee" />
        <AsideOptions value="Create Employee" to="create" />
        <AsideOptions value="Logout" to="/" />
      </aside>
    </>
  );
};

export default Aside;
