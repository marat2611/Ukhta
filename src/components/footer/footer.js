import footer_logo from './logo-ukhta-footer.png';
import "./footer.css"

import { NavLink } from 'react-router-dom';

function Fooeter () {
    return (
        <footer>
            <div className="fooetr-container container d-flex">
                <NavLink to="/">
                    <img src={footer_logo} alt=""/>
                </NavLink>

                <ul className="footrt-menu-list d-flex ">
                    <li><NavLink to="/about-city">О  городе</NavLink></li>
                    <li><NavLink to="/attractions">Достопримечательности</NavLink></li>
                    <li><a href="#!">Фото</a></li>
                    <li><NavLink to="#!">Блоги</NavLink></li>
                    <li><a href="#!">Форумы</a></li>
                </ul>
                <ul className="footer-feedback d-flex">
                    <li><a href="#!">О проекте</a></li>
                    <li><a href="#!">Обратная связь</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Fooeter;