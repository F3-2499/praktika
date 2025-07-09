import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div>
          <footer className="footer">
      <div className="footer__container">
        <div className="footer__col">
        <div className="logo">
        <img src="logo.png" alt="" />
        <h1>1С-Товары</h1>
      </div>
          <p className="footer__text">Линия консультации<br /><b>+7(495)-111-00-10</b></p>
          <p className="footer__text">Наш e-mail<br /><a href="mailto:info@rozn.info" className="footer__link">info@rozn.info</a></p>
          <button className="footer__button">Заказать звонок</button>
          <p className="footer__small">
            Для активации перейдите на <a href="https://portal.ts.ru">portal.ts.ru</a><br />
            или обратитесь к Вашему партнёру 1С.
          </p>
          <p className="footer__small">Инструкция по установке сервиса</p>
        </div>

        <div className="footer__col">
          <h4>Информация</h4>
          <ul>
            <li><a href="#">Как это работает</a></li>
            <li><a href="#">Инструкции</a></li>
            <li><a href="#">Блог</a></li>
            <li><a href="#">О нас</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Продукты</h4>
          <ul>
            <li><a href="#" className="green">1С-Ритейл Чекер Демо</a></li>
            <li><a href="#">1С-Товары Тестовый для магазина на 1 месяц</a></li>
            <li><a href="#">1С-Ритейл Чекер</a></li>
            <li><a href="#">1С-Товары 300</a></li>
            <li><a href="#">1С-Товары 30000</a></li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <p>ТС-Товары © 2023</p>
        <p>Сайт создан — <a href="https://vtstudio.ru">vtstudio.ru</a></p>
      </div>
    </footer>

    </div>
  )
}

export default Footer
