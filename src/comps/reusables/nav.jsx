import { Link, NavLink } from "react-router-dom";

/*
  Die navigation erleichtert uns lediglich den Umgang mit den Routes, ist für die Funktion aber nicht von Relevaz. Auch ohne Navigation funktioniert der Router, dies kann man testen durch das austauschen der routes innerhalb der url.
  http://localhost:3000/about -> http://localhost:3000/contact
*/

export const Navi = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="about">Contact</NavLink>
        </li>
        <li>
          <Link to="contact">About</Link>
        </li>
        <li>
          <a href="/projects">Projekte</a>
        </li>
      </ul>
    </nav>
  );
};
