import React from "react";
import MuiButton from "../../../pattern/atoms/mui_button";
import MuiTextField from "../../../pattern/atoms/mui_textfield";
import { Box } from "@mui/material";

const Search = () => {
  const handleChange = () => {
    console.log("change");
  };
  const onSearch = () => {};

  return (
    <Box>
      <MuiTextField label="Search" name="search" onChange={handleChange} />
      <MuiButton onClick={onSearch}> Search </MuiButton>
    </Box>
  );
};

export default Search;
