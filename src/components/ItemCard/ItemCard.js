import React from "react";
import s from "./ItemCard.module.scss";

const ItemCard = ({ id, title, completed, onChange }) => {
  return (
    <div className={s.cCb}>
      <input
        id={id}
        type="checkbox"
        defaultChecked={completed}
        onChange={onChange}
      />
      <label className="todoLabel" htmlFor={id}>
        {title}
      </label>
    </div>
  );
};

export default ItemCard;
