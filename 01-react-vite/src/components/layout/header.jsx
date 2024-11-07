import "./header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <ul>
      <li>
        <Link class="active" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/user">User</Link>
      </li>
      <li>
        <Link to="/plan">Plan</Link>
      </li>
    </ul>
  );
};

export default Header;
