import React from "react";
import {
  StarWarsInputProps,
  InputWrapper,
  Label,
  Input as StyledInput,
} from "./Input.style";

const Input: React.FC<StarWarsInputProps> = ({
  label,
  placeholder,
  ...props
}) => {
  return (
    <InputWrapper>
      {label && <Label>{label}</Label>}
      <StyledInput {...props} placeholder={placeholder} />
    </InputWrapper>
  );
};

export { Input };
