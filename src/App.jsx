import { Outlet } from "react-router-dom";
import "./App.css";

/*
  Da der oberste Pfad innerhalb des Routers das <App /> Element ist, wird diese Componente als erstes gerendert. Dadurch können wir Reusabels wie die Navigation/Header/footer/Aside innerhalb der App.jsx verwenden.
  Durch die Verwendung von Outlet können wir die children der App.jsx innerhalb der App.jsx rendern. Das bedeutet alle Components wie Beispielsweise die Landingpage, About, Contact und Projects werden mit Hilfe des Outlet innerhalb der App.jsx gerendert.
*/

function App() {
  return (
    <main>
      <Navi />
      <Outlet />
    </main>
  );
}

export default App;
