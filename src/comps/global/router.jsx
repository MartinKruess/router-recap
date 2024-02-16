import App from "../../App";
import { createBrowserRouter } from "react-router-dom";
/*
  Wir lagern den Router aus und importiere diesen in die main.jsx.
  Das Auslagern des Routers ist sinnvoll, um die main.jsx klein und Übersichtlich zu halten. Ein weiterer Vorteil ist, dass der Router so beleibig erweitert oder gar ganz ausgetauscht werden kann.
*/

// Routes
import { Landingpage } from "../landingpage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Landingpage />,
      },
      {
        path: "about",
        element: <section>About</section>,
      },
      {
        path: "contact",
        element: <section>Contact</section>,
      },
      {
        path: "projects",
        element: <section>Projects</section>,
      },
    ],
  },
]);
