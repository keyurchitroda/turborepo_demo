import React from "react";
import MuiButton from "../../atoms/mui_button";
import useStore from "../../../store/useStore";
import { Box, Typography } from "@mui/material";

const Counter = () => {
  const { count, increment, decrement } = useStore((state: any) => ({
    count: state.count,
    increment: state.increment,
    decrement: state.decrement,
  }));

  return (
    <Box>
      <Typography>Count: {count}</Typography>
      <MuiButton onClick={increment}>Increment</MuiButton>
      <MuiButton onClick={decrement}>Decrement</MuiButton>
    </Box>
  );
};

export default Counter;
