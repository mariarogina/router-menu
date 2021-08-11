import React from 'react';
import {NavLink} from 'react-router-dom';

function Menu() {
  return (
  <nav className="menu">
    <NavLink exact to="/" activeClassName="menu__item-active" className="menu__item">Главная</NavLink>
    <NavLink exact to="/drifttaxi" activeClassName="menu__item-active" className="menu__item">Дрифт-такси</NavLink>
    <NavLink exact to="/timeattack" activeClassName="menu__item-active" className="menu__item">Time Attack</NavLink>
    <NavLink exact to="/forzacarting" activeClassName="menu__item-active" className="menu__item">Forza Karting</NavLink>
  </nav>
  );
}

export default Menu;
