import React, { useRef } from "react";
import { BiSearch } from "react-icons/bi";
import { Input, Box } from "./InputSearchStyle";

export const InputSearch = ({ searchTerm, setSearchTerm }) => {
  const inputEl = useRef("");

  const getSearchTerm = () => {
    setSearchTerm(inputEl.current.value);
  };

  return (
    <>
      <Box>
        <BiSearch style={{ fontSize: "20px" }} />

        <Input
          ref={inputEl}
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={getSearchTerm}
        />
      </Box>
    </>
  );
};
