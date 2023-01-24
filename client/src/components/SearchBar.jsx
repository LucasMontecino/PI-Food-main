import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipesName } from "../actions";
import { CustomButton } from "./CustomButton";
import style from "./SearchBar.module.css";

export const SearchBar = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(getRecipesName(name));
    setName("");
  };

  return (
    <div className={style.searchBar}>
      <input
        type="text"
        placeholder="Busque su receta..."
        onChange={(e) => handleChange(e)}
        value={name}
      />
      <CustomButton
        text="Search"
        type="submit"
        alHacerClick={(e) => handleSearch(e)}
      />
    </div>
  );
};
