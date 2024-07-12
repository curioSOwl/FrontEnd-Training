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
        <AsideOptions value="Employee List" to="list" />
        <AsideOptions value="CreateEmployee" to="create" />
        <AsideOptions value="LogOut" to="/" />
      </aside>
    </>
  );
};

export default Aside;
