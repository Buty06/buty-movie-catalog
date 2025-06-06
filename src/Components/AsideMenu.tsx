import "../Styles/AsideMenu.css";
import menuIcon from "../assets/menu-icon.svg";

export const AsideMenu = () => {
  return (
    <>
      <button className="header_menu_button">
        <img src={menuIcon} alt="Menu" className="menu_icon" />
      </button>
    </>
  );
};
