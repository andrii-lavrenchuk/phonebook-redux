import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/slices/filterSlice";

const Filter = () => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const onFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return <input type="text" value={filter} onChange={onFilterChange} />;
};

export default Filter;
