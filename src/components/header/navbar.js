import logot from './logo-ukhta.png';
import './header.css';

import { NavLink } from 'react-router-dom';

function Navbar () {
    return (
        <header className="header">
        <div className="header-container container d-flex flex-sb">
        <div className="header-logo">
          <NavLink to="/">
             <img src={logot} alt="Лого"/>
          </NavLink>

        </div>
        <div className="header-menu">
          <ul className="header-menu-list d-flex">
            <li>
              <NavLink to="/about-city">О городе</NavLink>
            </li>
            <li>
              <NavLink to="/attractions">Достопримечательности</NavLink>  
            </li>
            <li><a href="#!">Фото</a></li>
            <li><NavLink to="#!">Блоги</NavLink></li>
            <li><a href="#!">Форумы</a></li>
          </ul>
        </div>
        <div className="header-button d-flex">
        <a href="#!">Вход</a>
        </div>
      </div>
      </header>
    )

}

export default Navbar;