import React from "react";
import MuiButton from "../../../pattern/atoms/mui_button";
import MuiTextField from "../../../pattern/atoms/mui_textfield";
import { Box, Typography } from "@mui/material";
import useStore from "../../../store/useStore";

const TodoForm = () => {
  const [todo, setTodo] = React.useState<string>("");
  const todos = useStore((state: any) => state.todos);
  const addTodo = useStore((state: any) => state.addTodo);

  const add = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    addTodo(todo);
  };

  return (
    <Box>
      <Typography variant="h5">TODO LIST</Typography>
      <MuiTextField
        label="Add"
        name="add"
        onChange={(e) => setTodo(e.currentTarget.value)}
      />
      <MuiButton onClick={add}>add</MuiButton>
      {todos.map((item: any, index: any) => (
        <Typography key={index}>{item}</Typography>
      ))}
    </Box>
  );
};

export default TodoForm;
