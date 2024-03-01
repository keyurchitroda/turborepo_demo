import { TextField, useTheme } from "@mui/material";
import React, { ChangeEvent, FC } from "react";

interface TextInputProps {
  label: string | React.ReactNode;
  name: string;
  defaultValue?: string;
  helperText?: string;
  variant?: "outlined" | "standard" | "filled";
  required?: boolean;
  error?: boolean;
  disabled?: boolean;
  multiline?: boolean;
  maxRows?: number;
  fullWidth?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const MuiTextField: FC<TextInputProps> = ({
  name,
  label,
  fullWidth = false,
  onChange,
}) => {
  const theme = useTheme();

  return (
    <div>
      <TextField
        name={name}
        sx={{
          input: {
            background: theme.palette.common.white,
          },
          "& .MuiFilledInput-root": {
            background: theme.palette.common.white,
            borderRadius: 1,
            height: 50,
            border: `1px solid ${theme.palette.grey[300]}`,
            "&:hover": {
              background: theme.palette.common.white,
            },
          },
        }}
        size="small"
        label={label}
        variant="filled"
        fullWidth={fullWidth}
        InputProps={{
          disableUnderline: true,
        }}
        onChange={onChange}
      />
    </div>
  );
};

export default MuiTextField;
