import React from "react";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/selectors/loaderSelectors";
import clsx from "clsx";
import s from "./Loader.module.scss";

const Loader = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    isLoading && (
      <div className={s.triangles}>
        <div className={clsx(s.tri, s.invert)}></div>
        <div className={clsx(s.tri, s.invert)}></div>
        <div className={s.tri}></div>
        <div className={clsx(s.tri, s.invert)}></div>
        <div className={clsx(s.tri, s.invert)}></div>
        <div className={s.tri}></div>
        <div className={clsx(s.tri, s.invert)}></div>
        <div className={s.tri}></div>
        <div className={clsx(s.tri, s.invert)}></div>
      </div>
    )
  );
};

export default Loader;
