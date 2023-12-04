import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { usePagination, DOTS } from "../../utils/hooks/usePagination";
import s from "./Pagination.module.scss";
import { nanoid } from "nanoid";

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    if (currentPage < totalCount / pageSize) {
      const nextPage = currentPage + 1;
      onPageChange(nextPage);
    }
  };

  const onPrevious = () => {
    if (currentPage > 1) {
      const previousPage = currentPage - 1;
      onPageChange(previousPage);
    }
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      key={"Pagination"}
      className={clsx(s.paginationContainer, { [className]: className })}
    >
      {/* Left navigation arrow */}
      <li
        key={"firstPage"}
        className={clsx(s.paginationItem, {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <div className={clsx(s.arrow, s.left)} />
      </li>
      {paginationRange.map((pageNumber) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return (
            <li
              key={`Dots${nanoid()}`}
              className={clsx(s.paginationItem, s.dots)}
            >
              &#8230;
            </li>
          );
        }

        // Render our Page Pills
        return (
          <li
            key={pageNumber}
            className={clsx(
              s.paginationItem,
              pageNumber === currentPage && s.selected
            )}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      {/*  Right Navigation arrow */}
      <li
        key={"lastPage"}
        className={clsx(s.paginationItem, {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <div className={clsx(s.arrow, s.right)} />
      </li>
    </ul>
  );
};

Pagination.propTypes = {
  onPageChange: PropTypes.func.isRequired,
  totalCount: PropTypes.number.isRequired,
  siblingCount:PropTypes.number,
  currentPage: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
};

export default Pagination;
