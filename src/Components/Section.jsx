import React, { useState } from 'react';
import "./Section.css";

const Section = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div>
      <section className="section">
        <div className="section_cards">
            <div className="section_card">
                <div className="sectionlogo">
                    <img src="card.png" alt="" />
                    <h2>Управление запасами</h2>
                </div>
                <p>Сервис 1С-Товары позволяет рассчитать необходимое количество товаров на полках (уровень запасов), помогает организовать систему контроля за остатками товаров, а также вовремя и в нужном количестве закупать у поставщиков.</p>
                <button className='sbtn'>Подробнее</button>
            </div>
            <div className="section_card">
                <div className="sectionlogo">
                    <img src="card1.svg" alt="" />
                    <h2>Автозаказ товаров</h2>
                </div>
                <p>Сервис 1С-Товары позволяет рассчитать прогноз спроса. Сервис работает с равномерным и редким спросом для разных видов товаров. Автоматически подбирает подходящий метод расчета и позволяет внести корректировки в выполняемые расчеты.</p>
                <button className='sbtn'>Подробнее</button>
            </div>
        </div>
        <div className="section1_cards">
            <div className="section1_card">
                <div className="sectionlogo">
                    <img src="card2.svg" alt="" />
                    <h2>Анализ магазина</h2>
                </div>
                <p>Система контроля упущенных продаж позволяет увеличить выручку. Средний чек, минимальный чек, максимальный чек - это пример показателей, которые анализирует сервис 1С-Товары, а также предлагает ряд инструментов для управления ценой и торговой наценкой.</p>
                <button className='sbtn'>Подробнее</button>
            </div>
            <div className="section1_card">
                <div className="sectionlogo">
                    <img src="card3.svg" alt="" />
                    <h2>Прогноз спроса</h2>
                </div>
                <p>Сервис 1С-Товары позволяет рассчитать прогноз спроса. Сервис работает с равномерным и редким спросом для разных видов товаров. Автоматически подбирает подходящий метод расчета и позволяет внести корректировки в выполняемые расчеты.</p>
                <button className='sbtn'>Подробнее</button>
            </div>
            <div className="section1_card">
                <div className="sectionlogo">
                    <img src="card4.svg" alt="" />
                    <h2>Управление поставками</h2>
                </div>
                <p>Сервис 1С-Товары позволяет рассчитать прогноз спроса. Сервис работает с равномерным и редким спросом для разных видов товаров. Автоматически подбирает подходящий метод расчета и позволяет внести корректировки в выполняемые расчеты.</p>
                <button className='sbtn'>Подробнее</button>
            </div>
        </div>
        <div className="section_cards">
            <div className="section_card">
                <div className="sectionlogo">
                    <img src="card5.svg" alt="" />
                    <h2>Управление ассортиментом</h2>
                </div>
                <p>Сервис 1С-Товары позволяет определить ассортиментную матрицу. Быстро и просто принять решение о том какие товары вывести из ассортимента, а наличие каких увеличить на полках магазина. Сервис позволяет узнать необходимую информацию: динамику продаж и остатков, периоды дефицита, размер оптимального остатка.</p>
                <button className='sbtn'>Подробнее</button>
            </div>
            <div className="section_card">
                <div className="sectionlogo">
                    <img src="card6.svg" alt="" />
                    <h2>Управление продажами</h2>
                </div>
                <p>Система контроля упущенных продаж позволяет увеличить выручку. Средний чек, минимальный чек, максимальный чек - это пример показателей, которые анализирует сервис 1С-Товары, а также предлагает ряд инструментов для управления ценой и торговой наценкой.</p>
                <button className='sbtn'>Подробнее</button>
            </div>
        </div>
        <div className="prizes">
            <div className="priz">
            <img src="gift.svg" alt="" />
            <h1>Подключи любой продукт на 1 месяц бесплатно и оцени наши приемущества</h1>
            <button className='now'>Подключить сейчас</button>
            </div>
        </div>
        
<div className="comparison">
  <h1>С нами удобнее</h1>
  <div className="comparison-content">
    
    <div className="comparison-column bad">
      <h2>Без 1С-Товары</h2>
      <ul>
        <li><img src="false.svg" alt="x" />Лишний товар складируется и не продается</li>
        <li><img src="false.svg" alt="x" />Постоянно приходится думать, какой продукт будет актуален, а какой стоит выводить</li>
        <li><img src="false.svg" alt="x" />Лишний товар складируется и не продается</li>
        <li><img src="false.svg" alt="x" />Постоянно приходится думать, какой продукт будет актуален</li>
        <li><img src="false.svg" alt="x" />Лишний товар складируется и не продается</li>
        <li><img src="false.svg" alt="x" />Постоянно приходится думать, какой продукт будет актуален</li>
        <li><img src="false.svg" alt="x" />Лишний товар складируется и не продается</li>
      </ul>
    </div>

    <div className="comparison-column good">
      <h2>Вместе с 1С-Товары</h2>
      <ul>
        <li><img src="true.png" alt="" />Организованная система остатков</li>
        <li><img src="true.png" alt="" />Ассортиментная матрица, поддерживающая актуальный ассортимент</li>
        <li><img src="true.png" alt="" />Рассчитанный прогноз спроса</li>
        <li><img src="true.png" alt="" />Ассортиментная матрица, поддерживающая актуальный ассортимент</li>
        <li><img src="true.png" alt="" />Организованная система остатков</li>
        <li><img src="true.png" alt="" />Ассортиментная матрица, поддерживающая актуальный ассортимент</li>
        <li><img src="true.png" alt="" />Система контроля упущенных продаж</li>
      </ul>
    </div>

  </div>
</div>
<div className="popular-wrapper">
      <div className="popular-header">
        <h2>Популярные продукты</h2>
        <button className="popular-btn">Все продукты</button>
      </div>

      <div className="product-cards">
        <div className="product-card">
          <h3>1С-Товары 300</h3>
          <span className="price">600 руб/мес</span>
          <ul>
            <li>Прогноз спроса с использованием сервера препроцессинга (ограничение — 300 товаров)</li>
            <li>Контроль товарных остатков и автоматический заказ товаров (ограничение — 300 товаров)</li>
            <li>Анализ работы розничного магазина или сети магазинов</li>
            <li>Рекомендации по управлению ассортиментом (1С:Ритейл Чекер)</li>
          </ul>
          <a href="#">Подробнее →</a>
        </div>

        <div className="product-card">
          <h3>1С-Товары 30000</h3>
          <span className="price">1 700 руб/мес</span>
          <ul>
            <li>Прогноз спроса с использованием сервера препроцессинга (ограничение — 30000 товаров)</li>
            <li>Контроль товарных остатков и автоматический заказ товаров (ограничение — 30000 товаров)</li>
            <li>Анализ работы розничного магазина или сети магазинов</li>
            <li>Рекомендации по управлению ассортиментом (1С:Ритейл Чекер)</li>
          </ul>
          <a href="#">Подробнее →</a>
        </div>

        <div className="product-card">
          <h3>1С-Товары</h3>
          <span className="price">4 500 руб/мес</span>
          <ul>
            <li>Прогноз спроса с использованием сервера препроцессинга</li>
            <li>Контроль товарных остатков и автоматический заказ товаров</li>
            <li>Анализ работы розничного магазина или сети магазинов</li>
            <li>Рекомендации по управлению ассортиментом (1С:Ритейл Чекер)</li>
          </ul>
          <a href="#">Подробнее →</a>
        </div>
      </div>
    </div>
    <div className="retail-section">
      <div className="retail-left">
        <img src="shop.png" alt="Retail top" className="retail-img" />
        <img src="shop1.png" alt="Retail bottom" className="retail-img" />
      </div>

      <div className="retail-right">
        <h2>Для розничных магазинов и ресторанов</h2>

        <div className="retail-card">
          <h3>Получайте рекомендации по управлению ассортиментом</h3>
          <p>Для этого подключите бесплатный новый тариф «1С-Ритейл Чекер».</p>
          <p>Каждую неделю ваш топ-менеджер будет получать письмо с рекомендациями:</p>
          <ul>
            <li>какие товары находятся в зоне риска (могут не продаться / устареть);</li>
            <li>какие товары нужно срочно купить, чтобы избежать дефицита;</li>
            <li>и какие товары лучше заменить или снять с реализации.</li>
          </ul>
          <a href="#">Подробнее о «1С-Ритейл Чекер» →</a>
        </div>

        <div className="retail-card">
          <h3>Прогнозируйте спрос и управляйте запасами</h3>
          <p>
          Используйте 1С-Товары для более точного прогноза спроса. 1С-Товары учитывают средние продажи, тренды, периоды дефицита товара (пробелы на полках), сезонность спроса, праздники, распродажи, акции.
Ежедневно 1С-Товары автоматически проверяют минимальные остатки и своевременно отправляет заявку поставщику, используя результаты прогноза. Так вы избежите как дефицита, так и излишков товара в магазине.
          </p>
          <a href="#">Подробнее о «1С-Товары» →</a>
        </div>

        <div className="retail-card">
          <h3>Планируйте ассортимент без ошибок</h3>
          <p>
          Узнайте, какие товары приносят вам прибыль и всегда должны быть в ассортименте. И, наоборот, выводите из ассортимента товары с низкой наценкой и оборачиваемостью.          </p>
        </div>

        <div className="retail-card">
          <h3>Контролируйте бизнес и повышайте прибыль</h3>
          <p>
          Для этого используйте блок аналитики.
          <br />
Пробуйте разные варианты повышения продаж – новые товары, изменение наценки, перераспределение площади. Убедиться в правильности действий помогут отчеты. Блок аналитики доступен через Интернет и сделан как приборная панель индикаторов деятельности, что позволяет быстро заметить изменения.
          </p>
        </div>
      </div>
    </div>
    <div className="consultation-container">
      <div className="consultation-left">
        <h2>Хотите бесплатную консультацию?<br />Оставляйте заявку</h2>
        <p>Оставьте заявку и наши менеджеры свяжутся с Вами в ближайшее время</p>
      </div>
      <form className="consultation-form">
        <input type="text" placeholder="Ваше имя" />
        <input type="text" placeholder="Ваш телефон" />
        <input type="email" placeholder="Ваш e-mail" />
        <button type="submit">Отправить</button>
        <span className="disclaimer">
          Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности
        </span>
      </form>
    </div>
    <section className="faq">
  <h2 className="faq-title">Ответы на вопросы</h2>

  <div className="faq-item">
    <input type="checkbox" id="faq1" className="faq-toggle" />
    <label htmlFor="faq1" className="faq-question">
      <h3>С чего начать работу с 1С-Товары?</h3>
      <span className="arrow"></span>
    </label>
    <div className="faq-answer">
      <p>Для начала подключите тариф, затем настройте ассортимент, загрузите остатки и начните использовать прогнозы.</p>
    </div>
  </div>

  <div className="faq-item">
    <input type="checkbox" id="faq2" className="faq-toggle" />
    <label htmlFor="faq2" className="faq-question">
      <h3>Как подключить 1С-Ритейл Чекер и 1С-Товары?</h3>
      <span className="arrow"></span>
    </label>
    <div className="faq-answer">
      <p>Для этого подключите бесплатный тариф «1С-Ритейл Чекер».</p>
      <p>Каждую неделю вы будете получать рекомендации:</p>
      <ul>
        <li>Какие товары необходимо срочно купить;</li>
        <li>Как избежать упущенной прибыли из-за пустых полок;</li>
        <li>Какие товары уже в избытке и стоит снизить количество;</li>
        <li>Какие товары стоит пересчитать для уверенности в правильности учета.</li>
      </ul>
    </div>
  </div>

  <div className="faq-item">
    <input type="checkbox" id="faq3" className="faq-toggle" />
    <label htmlFor="faq3" className="faq-question">
      <h3>Средний чек, о чем нам может рассказать?</h3>
      <span className="arrow"></span>
    </label>
    <div className="faq-answer">
      <p>Если вы только начинаете, воспользуйтесь бесплатным тарифом. Для расширенного функционала и рекомендаций по управлению ассортиментом выберите платный тариф.</p>
    </div>
  </div>

  <div className="faq-item">
    <input type="checkbox" id="faq4" className="faq-toggle" />
    <label htmlFor="faq4" className="faq-question">
      <h3>Сценарии автозаказа сервиса 1С-Товары</h3>
      <span className="arrow"></span>
    </label>
    <div className="faq-answer">
      <p>Данные загружаются автоматически из 1С, если настроена интеграция. Также можно использовать ручной импорт через Excel или CSV.</p>
    </div>
  </div>

  <div className="faq-item">
    <input type="checkbox" id="faq5" className="faq-toggle" />
    <label htmlFor="faq5" className="faq-question">
      <h3>Как подключить 1С-Ритейл Чекер* и 1С-Товары?</h3>
      <span className="arrow"></span>
    </label>
    <div className="faq-answer">
      <p>Да, 1С-Товары подходит для управления как одним, так и несколькими магазинами. Можно настраивать аналитику и рекомендации отдельно по каждой точке.</p>
    </div>
  </div>

  <div className="faq-item">
    <input type="checkbox" id="faq6" className="faq-toggle" />
    <label htmlFor="faq6" className="faq-question">
      <h3>Методы и формулы расчета торговой наценки</h3>
      <span className="arrow"></span>
    </label>
    <div className="faq-answer">
      <p>Рекомендации формируются каждую неделю на основе новых продаж, остатков и других данных. Вы всегда получаете актуальные подсказки для управления товаром.</p>
    </div>
  </div>
</section>
      </section>
      <section className="knowledge-section">
  <div className="knowledge-header">
    <h2 className="knowledge-title">База знаний</h2>
    <a href="/articles" className="knowledge-all-btn">Все статьи</a>
  </div>

  <div className="knowledge-slider">
    <button className="slider-arrow left">←</button>

    <div className="knowledge-cards">
      <div className="knowledge-card">
        <img src="article-1.png" alt="Методы и формулы" />
        <h3>Методы и формулы расчета торговой наценки</h3>
        <a href="#" className="read-link">Читать статью</a>
      </div>

      <div className="knowledge-card">
        <img src="article-2.png" alt="Ассортимент" />
        <h3>Ассортимент продуктового ассортимента</h3>
        <a href="#" className="read-link">Читать статью</a>
      </div>

      <div className="knowledge-card">
        <img src="article-3.png" alt="Сезонность" />
        <h3>Что такое сезонность продаж</h3>
        <a href="#" className="read-link">Читать статью</a>
      </div>
    </div>

    <button className="slider-arrow right">→</button>
  </div>
</section>

    </div>
  )
}

export default Section
