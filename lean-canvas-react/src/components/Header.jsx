// import { useNavigate, Link, NavLink } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function Header() {
  //const navigate = useNavigate();

  return (
    <header>
      <ul>
        {/* <li onClick={() => navigate('')}>Home</li>
        <li onClick={() => navigate('/about')}>About</li>
        <li onClick={() => navigate('/contact')}>Contact</li> */}
        <li>
          {/* 렌더링된 페이지에선 Link 태그 부분이 a 태그로 들어가있음 */}
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive ? 'text-blue-700' : '';
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => {
              return isActive ? 'text-blue-700' : '';
            }}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => {
              return isActive ? 'text-blue-700' : '';
            }}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
