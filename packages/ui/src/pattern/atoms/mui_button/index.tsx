import { Button, SxProps } from "@mui/material";
import React from "react";

export type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  color?: "primary" | "secondary";
  disabled?: boolean;
  sx?: SxProps;
};

const MuiButton = ({
  onClick,
  children,
  color = "primary",
  disabled,
  sx,
}: ButtonProps) => {
  return (
    <div>
      <Button
        onClick={onClick}
        color={color}
        disabled={disabled}
        variant="contained"
        sx={sx}
      >
        {children}
      </Button>
    </div>
  );
};

export default MuiButton;
