import logo from "../assets/icons8-movie-96.png";
import menu from "../assets/menu-icon.svg";
import "../Styles/Header.css";

export const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="header_logo" />

      <img src={menu} alt="Menu" className="header_menu_icon" />
    </header>
  );
};
