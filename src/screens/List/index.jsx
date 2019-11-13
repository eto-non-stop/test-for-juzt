import React from "react";
import Card from "./Card";
import styles from "./styles.module.css";

const List = props => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.list}>
        {props.data.map(info => (
          <Card {...props} key={info.id} info={info} />
        ))}
      </div>
    </div>
  );
};

export default List;
