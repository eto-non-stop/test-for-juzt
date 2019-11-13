import React from "react";
import { Link } from "react-router-dom";
import { convert } from "../../helpers/currencyConverter";
import styles from "./styles.module.css";
import IconButton from "../../components/IconButton";

const Info = ({
  data,
  match,
  favoriteList,
  compareList,
  toggleFavorite,
  toggleCompare
}) => {
  const [currency, setCurrency] = React.useState("euro");
  const info = data.find(({ id }) => id === +match.params.id);
  const formatNumber = number => new Intl.NumberFormat("ru-RU").format(number);

  const price = convert(info.price, currency);
  const currencyChars = {
    euro: "€",
    dollar: "$",
    ruble: "₽",
    pound: "£",
    frank: "₣"
  };

  const favorite = favoriteList.includes(info.id);
  const compare = compareList.includes(info.id);

  return (
    <div className={styles["wrap"]}>
      <div className={styles["wrapper"]}>
        <div className={styles["header-links"]}>
          <Link to="/" className={styles["header-link"]}>
            Главная •
          </Link>
          <a href="#" className={styles["header-link"]}>
            Жилая недвижимость •
          </a>
          <a href="#" className={styles["header-link"]}>
            {info.description}
          </a>
        </div>
        <h1 className={styles["header-title"]}>{info.description}</h1>
        <h3 className={styles["header-address"]}>{info.address} </h3>
        <div className={styles["photo-galary"]}>
          <div className={styles["primary-photo"]}>
            <img
              src="/images/Rectangle.png"
              alt=""
              className={styles["photo"]}
            />
            <div className={styles["card-type"]}>
              <div className={styles["card-type-type"]}>
                {info.type === "sale" ? "продажа" : "аренда"}
              </div>
            </div>
          </div>
          <div className={styles["galary"]}>
            <img
              src="/images/Rectangle.png"
              alt=""
              className={styles["galary-item"]}
            />
            <img
              src="/images/photos/image.png"
              alt=""
              className={styles["galary-item"]}
            />
            <img
              src="/images/photos/image(1).png"
              alt=""
              className={styles["galary-item"]}
            />
            <img
              src="/images/photos/image(2).png"
              alt=""
              className={styles["galary-item"]}
            />
            <img
              src="/images/photos/image(3).png"
              alt=""
              className={styles["galary-item"]}
            />
            <img
              src="/images/photos/image(4).png"
              alt=""
              className={styles["galary-item"]}
            />
          </div>
          <div className={styles["counter"]}>1/6</div>
        </div>
        <div className={styles["price-block"]}>
          <div className={styles["price-block-header"]}>
            <p className={styles["id"]}>ID {info.id}</p>
            <div className={styles["price-block-icons"]}>
              <IconButton
                onClick={() => toggleFavorite(info.id)}
                active={favorite}
                icon="favorite"
              />
              <IconButton
                onClick={() => toggleCompare(info.id)}
                active={compare}
                icon="compare"
              />
            </div>
          </div>
          <div className={styles["price-block-main-1"]}>
            <div className={styles["price-block-main"]}>
              <p className={styles["price"]}>
                {currencyChars[currency]} {formatNumber(price)}
              </p>
              <div className={styles["currency"]}>
                <button
                  onClick={() => setCurrency("dollar")}
                  className={`${styles["currency-item"]} ${
                    currency === "dollar" ? styles["active"] : ""
                  }`}
                >
                  $
                </button>

                <button
                  onClick={() => setCurrency("euro")}
                  className={`${styles["currency-item"]} ${
                    currency === "euro" ? styles["active"] : ""
                  }`}
                >
                  €
                </button>
                <button
                  onClick={() => setCurrency("ruble")}
                  className={`${styles["currency-item"]} ${
                    currency === "ruble" ? styles["active"] : ""
                  }`}
                >
                  ₽
                </button>
                <button
                  onClick={() => setCurrency("pound")}
                  className={`${styles["currency-item"]} ${
                    currency === "pound" ? styles["active"] : ""
                  }`}
                >
                  £
                </button>
                <button
                  onClick={() => setCurrency("frank")}
                  className={`${styles["currency-item"]} ${
                    currency === "frank" ? styles["active"] : ""
                  }`}
                >
                  ₣
                </button>
              </div>
            </div>
          </div>
          <div className={styles["price-block-footer"]}>
            <p className={styles["residence"]}>
              {info.residence ? "+внж" : ""}
            </p>
          </div>
        </div>
        <div className={styles["card-info"]}>
          <div className={styles["info"]}>
            <div className={styles["info-item"]}>
              <p className={styles["info-title"]}>Общая</p>
              <p className={styles["info-value"]}>
                {info.totalArea} м <sup>2</sup>
              </p>
            </div>
            <div className={styles["info-item"]}>
              <p className={styles["info-title"]}>Участка</p>
              <p className={styles["info-value"]}>
                116 м <sup>2</sup>
              </p>
            </div>
            <div className={styles["info-item"]}>
              <p className={styles["info-title"]}>Спальни</p>
              <p className={styles["info-value"]}>{info.bedrooms}</p>
            </div>
            <div className={styles["info-item"]}>
              <p className={styles["info-title"]}>ванных</p>
              <p className={styles["info-value"]}>{info.bathrooms}</p>
            </div>
          </div>
          <div className={styles["presentation"]}>
            <img src="/images/icons/Rectangle 5.svg" alt="" />

            <a className={styles["presentation-description"]}>
              Скачать презентацию объекта
            </a>
          </div>
        </div>
        <div className={styles["card-description-tags"]}>
          <ul className={styles["card-description-tags-1"]}>
            <li className={styles["card-description-tag"]}>- Терасса/балкон</li>
            <li className={styles["card-description-tag"]}>- Мансарда</li>
            <li className={styles["card-description-tag"]}>
              - Рабочий кабинет
            </li>
          </ul>
          <ul className={styles["card-description-tags-2"]}>
            <li className={styles["card-description-tag"]}>
              - Кухня совмещнная со столовой
            </li>
            <li className={styles["card-description-tag"]}>- Бассейн</li>
          </ul>
        </div>
        <div className={styles["card-form"]}>
          <div className={styles["card-form-header"]}>
            <img src="/images/logo-form.svg" alt="" />
            <p className={styles["card-form-title"]}>
              Оставить заявку на звонок
            </p>
          </div>
          <div className={styles["card-form-main"]}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Ваше имя"
              className={styles["card-form-main-item"]}
            />
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Телефон"
              className={styles["card-form-main-item"]}
            />
          </div>
          <div className={styles["card-form-footer"]}>
            <button className={styles["card-form-button"]}>Отправить</button>
            <p className={styles["card-form-info"]}>
              Нажимая на кнопку Вы соглашайтесь с обработкой персональных данных
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
