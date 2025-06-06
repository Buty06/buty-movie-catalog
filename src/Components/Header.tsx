import logo from "../assets/icons8-movie-96.png";
import menu from "../assets/menu-icon.svg";
import "../Styles/Header.css";

//*Asignamos el type por defecto de las props
interface HeaderProps {
  onToggleAside: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onToggleAside }) => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="header_logo" />

      <button className="header_menu_button" onClick={onToggleAside}>
        <img src={menu} alt="Menu" className="header_menu_icon" />
      </button>

      <nav className="header_nav">
        <ol className="header_links_container">
          <a href="#" className="header_link">
            <li>Elementos</li>
          </a>
          <a href="#" className="header_link">
            <li>Elementos</li>
          </a>
          <a href="#" className="header_link">
            <li>Elementos</li>
          </a>
          <a href="#" className="header_link">
            <li>Elementos</li>
          </a>
        </ol>
      </nav>
    </header>
  );
};
