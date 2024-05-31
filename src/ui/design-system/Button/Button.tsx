import React from "react";
import { StyledButton, ButtonProps } from "./Button.style";

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "default",
  ...rest
}) => {
  return (
    <StyledButton variant={variant} {...rest}>
      {children}
    </StyledButton>
  );
};

export { Button };
