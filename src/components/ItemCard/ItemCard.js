import React from "react";
import PropTypes from "prop-types";
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

ItemCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ItemCard;
