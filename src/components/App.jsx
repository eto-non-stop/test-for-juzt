import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Info from "../screens/Info";
import List from "../screens/List";

const App = () => {
  const [favoriteList, setFavoriteList] = React.useState([]);
  const [compareList, setCompareList] = React.useState([]);

  const data = [
    {
      id: 1,
      type: "sale",
      description: "Квартиры, комнат: 1-30, продается, Сен-Жени-Пуйи",
      address: "France, Saint-Genis-Pouilly, Auvergne Rhône-Alpes",
      totalArea: 2387,
      bathrooms: 7,
      bedrooms: 13,
      price: 180500000,
      residence: true,
      fullDescription:
        "Вилла, этажей: 3, 285 м2, комнат: 5, спален: 4, терраса. Вид на озеро. Планировка: ванных комнат – 4, спален – 4, сауна, прачечная, рабочий кабинет, кухня совмещенная со столовой, гардероб, прихожая, гостиная. Отделка и оборудование: домашняя автоматизация. Дополнительно: частный бассейн, открытые парковочные места (3). Здание: современное. Участок: 116 м2."
    },
    {
      id: 2,
      type: "rent",
      description: "Продажа, вилла, комнат: 5, Коллина-ди-Оро",
      address: "Switzerland, Collina d'Oro, Ticino",
      totalArea: 2387,
      bathrooms: 7,
      bedrooms: 13,
      price: 168500000,
      residence: false
    },
    {
      id: 3,
      type: "sale",
      description: "Продается, дома, спален: 3–5, Лозенец",
      address: null,
      totalArea: 2387,
      bathrooms: 7,
      bedrooms: 13,
      price: 180500000,
      residence: false
    },
    {
      id: 4,
      type: "sale",
      description: "Квартиры, комнат: 1-30, продается, Сен-Жени-Пуйи",
      address: "France, Saint-Genis-Pouilly, Auvergne Rhône-Alpes",
      totalArea: 2387,
      bathrooms: 7,
      bedrooms: 13,
      price: 180500000,
      residence: true
    },
    {
      id: 5,
      type: "sale",
      description: "Продажа, вилла, комнат: 5, Коллина-ди-Оро",
      address: "Switzerland, Collina d'Oro, Ticino",
      totalArea: 2387,
      bathrooms: 7,
      bedrooms: 13,
      price: 168500000,
      residence: false
    },
    {
      id: 6,
      type: "sale",
      description: "Продается, дома, спален: 3–5, Лозенец",
      address: "Bulgaria, Lozenets, Burgas ",
      totalArea: 2387,
      bathrooms: 7,
      bedrooms: 13,
      price: 180500000,
      residence: false
    },
    {
      id: 7,
      type: "sale",
      description: "Квартиры, комнат: 1-30, продается, Сен-Жени-Пуйи",
      address: "France, Saint-Genis-Pouilly, Auvergne Rhône-Alpes",
      totalArea: 2387,
      bathrooms: 7,
      bedrooms: 13,
      price: 180500000,
      residence: true
    },
    {
      id: 8,
      type: "rent",
      description: "Продажа, вилла, комнат: 5, Коллина-ди-Оро",
      address: "Switzerland, Collina d'Oro, Ticino",
      totalArea: 2387,
      bathrooms: 7,
      bedrooms: 13,
      price: 168500000,
      residence: false
    }
  ];

  const toggleCompare = id => {
    setCompareList(
      compareList.includes(id)
        ? compareList.filter(item => item !== id)
        : [...compareList, id]
    );
  };

  const toggleFavorite = id => {
    setFavoriteList(
      favoriteList.includes(id)
        ? favoriteList.filter(item => item !== id)
        : [...favoriteList, id]
    );
  };

  return (
    <BrowserRouter>
      <Route
        exact
        path="/"
        component={() => (
          <List
            data={data}
            toggleFavorite={toggleFavorite}
            toggleCompare={toggleCompare}
            compareList={compareList}
            favoriteList={favoriteList}
          />
        )}
      />
      <Route
        exact
        path="/:id"
        component={props => (
          <Info
            {...props}
            data={data}
            toggleFavorite={toggleFavorite}
            toggleCompare={toggleCompare}
            compareList={compareList}
            favoriteList={favoriteList}
          />
        )}
      />
    </BrowserRouter>
  );
};

export default App;
