import "./header.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <ul>
      <li>
        <NavLink class="active" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/Target">Target</NavLink>
      </li>
      <li>
        <NavLink to="/user">User</NavLink>
      </li>
      <li>
        <NavLink to="/plan">Plan</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </ul>
  );
};

export default Header;
