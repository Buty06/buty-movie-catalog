import "./App.css";
import { Foother } from "./Components/Foother";
import { Header } from "./Components/Header";
import { Main } from "./Components/Main";

export const App = () => {
  return (
    <>
      <Header></Header>
      <Main></Main>
      <Foother></Foother>
    </>
  );
};
