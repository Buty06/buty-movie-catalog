import logo from "../../assets/icons8-movie-96.png";
import menuIcon from "../../assets/menu-icon.svg";
import "../../Styles/UI/Header.css";

export const Header = () => {
  return (
    <header className="header">
      <img src={logo} className="header_logo" />

      <button className="header_menu">
        <img src={menuIcon} alt="Menu" className="menu_icon" />
      </button>

      <ol className="header_links_container">
        <li>Elemento</li>
        <li>Elemento</li>
        <li>Elemento</li>
        <li>Elemento</li>
      </ol>
    </header>
  );
};
