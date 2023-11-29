import React from "react";
import s from "./ItemCard.module.scss";

const ItemCard = ({ id, name, completed, onChange }) => {
  return (
    <div className={s.cCb}>
      <input
        id={id}
        type="checkbox"
        defaultChecked={completed}
        onChange={onChange}
      />
      <label className="todoLabel" htmlFor={id}>
        {name}
      </label>
    </div>
  );
};

export default ItemCard;
