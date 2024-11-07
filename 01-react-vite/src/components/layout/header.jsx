import "./header.css";
const Header = () => {
  return (
    <ul>
      <li>
        <a class="active" href="/">
          Home
        </a>
      </li>
      <li>
        <a href="/login">Login</a>
      </li>
      <li>
        <a href="/user">User</a>
      </li>
      <li>
        <a href="/plan">Plan</a>
      </li>
    </ul>
  );
};

export default Header;
