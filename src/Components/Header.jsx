import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
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
      </nav>
      <div className="header-content">
        <div className="header-content-text">
          <h1>Управление запасами розничного магазина</h1>
          <p>Использование сервиса 1С-Товары позволяет значительно упростить работу по формированию заявок поставщику.</p>
          <button className="hdbtn">Заказать демонстрацию</button>
        </div>
        <div className="header-content-img">
          <img src="img.png" alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
