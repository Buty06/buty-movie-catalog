import "./Styles/App.css";
import { Header } from "./Components/Header";
import { Aside } from "./Components/Aside";
import { Main } from "./Components/Main";
import { Foother } from "./Components/Foother";

//?Empezamos el proceso para mostrar un componente en App mediante un boton en el header esto se logra compartiendo el estado entre componentes, y se llama {lifting state up}
import { useState } from "react";

export const App: React.FC = () => {
  //*creamos una variable de estado en false, esto dice si deve de mostrarse o no
  const [showAside, setShowAside] = useState(false);

  return (
    <>
      {/* //*Le pasamos al header una funcion como prop donde cambia el valor de */}
      <Header onToggleAside={() => setShowAside((prev) => !prev)}></Header>

      {/*De esta forma evaluamos si es true o false que se ejecute el componente
      o no */}
      {showAside && <Aside></Aside>}
      <Main></Main>
      <Foother></Foother>
    </>
  );
};
