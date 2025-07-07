import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <header className="nav">
      <div className="logo">
        <img src="logo.png" alt="" />
        <h1>1С-Товары</h1>
      </div>

      <ul className="nav-list">
        <li className="active">Как это работает</li>
        <li>Инструкции</li>
        <li>Продукты</li>
        <li>База знаний</li>
        <li>О нас</li>
      </ul>

      <button className="btn-login">Вход</button>
    </header>
  );
};

export default Nav;
