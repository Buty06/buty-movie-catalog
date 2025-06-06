import logo from "../assets/icons8-movie-96.png";
import '../Styles/Header.css'
import { AsideMenu } from "./AsideMenu";
import { Menu } from "./Menu";


export const Header : React.FC = () => {
  return (
    <header className="header">
      <img src={logo} className="header_logo" />

      {(innerWidth < 700) 
        ?  <AsideMenu></AsideMenu>
        : <Menu></Menu> }

    </header>
  );
};
