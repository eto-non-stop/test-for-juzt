import React from "react";
import { Link } from "react-router-dom";
import { convert } from "../../../helpers/currencyConverter";
import styles from "./styles.module.css";
import IconButton from "../../../components/IconButton";

const Card = ({
  info,
  favoriteList,
  compareList,
  toggleFavorite,
  toggleCompare
}) => {
  const priceInEuro = info.price;
  const priceInDollars = convert(info.price, "dollar");
  const priceInRubles = convert(info.price, "ruble");
  const priceInPounds = convert(info.price, "pound");
  const priceInFranks = convert(info.price, "frank");

  const style = {
    background: `url('/images/photos/${info.id}.png') no-repeat`
  };

  const favorite = favoriteList.includes(info.id);
  const compare = compareList.includes(info.id);

  const formatNumber = number => new Intl.NumberFormat("ru-RU").format(number);

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["card"]} style={style}>
        <div className={styles["top"]}>
          <div className={styles["card-type"]}>
            <div className={styles["card-type-type"]}>
              {info.type === "sale" ? "продажа" : "аренда"}
            </div>
          </div>
          <div className={styles["card-info"]}>
            <Link to={`/${info.id}`} className={styles["card-info-title"]}>
              {info.description}
            </Link>
            <p className={styles["card-info-address"]}>{info.address}</p>
          </div>
        </div>

        <div className={styles["bottom"]}>
          <div className={styles["card-info-about-house"]}>
            <div className={styles["card-info-about-house-item"]}>
              <img src="./images/icons/footage.svg" alt="footage" />
              <p className={styles["card-info-about-house-description"]}>
                {info.totalArea} м<sup>2</sup>
              </p>
            </div>
            <div className={styles["card-info-about-house-item"]}>
              <img src="./images/icons/bathroom.svg" alt="bathroom" />
              <p className={styles["card-info-about-house-description"]}>
                {info.bathrooms}
              </p>
            </div>
            <div className={styles["card-info-about-house-item"]}>
              <img src="./images/icons/bed.svg" alt="bed" />
              <p className={styles["card-info-about-house-description"]}>
                {info.bedrooms}
              </p>
            </div>
          </div>
          <div className={styles["card-info-footer"]}>
            <select className={styles["card-info-footer-price"]}>
              {info.price}
              <option value="euro">€ {formatNumber(priceInEuro)}</option>
              <option value="dollars">$ {formatNumber(priceInDollars)}</option>
              <option value="rubels">₽ {formatNumber(priceInRubles)}</option>
              <option value="pounds">£ {formatNumber(priceInPounds)}</option>
              <option value="franks">₣ {formatNumber(priceInFranks)}</option>
            </select>
            <div className={styles["card-info-footer-buttons"]}>
              <p className={styles["residence"]}>
                {info.residence ? "+внж" : ""}
              </p>
              <div className={styles["buttons"]}>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
