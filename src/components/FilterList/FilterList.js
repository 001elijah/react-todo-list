import React from "react";
import PropTypes from "prop-types";
import ButtonGroup from "../ButtonGroup/ButtonGroup";

const FilterList = ({ filterList }) => {
  return <ButtonGroup>{filterList}</ButtonGroup>;
};

FilterList.propTypes = {
  filterList: PropTypes.array.isRequired,
};

export default FilterList;
