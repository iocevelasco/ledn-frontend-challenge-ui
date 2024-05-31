import React from "react";
import styled, { css, useTheme } from "styled-components";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "star-wars";
}

export const defaultStyle = css`
  padding: 8px 24px;
  background-color: ${({ theme }) => theme.colors.common.black};
  color: ${({ theme }) => theme.colors.starWars.yellow};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.foreground};
    color: ${({ theme }) => theme.accent};
  }
`;

const starWarsStyle = css`
  padding: 8px 24px;
  background-color: ${({ theme }) => theme.colors.common.black};
  color: ${({ theme }) => theme.colors.starWars.yellow};
  border: 1px solid ${({ theme }) => theme.colors.starWars.yellow};

  &:hover {
    background-color: ${({ theme }) => theme.colors.starWars.yellow};
    color: ${({ theme }) => theme.colors.common.black};
  }
`;

export const StyledButton = styled.button<ButtonProps>`
  font-family: ${({ theme }) => theme.fonts.starWars};
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: background-color 0.3s, color 0.3s;
  ${(props) => (props.variant === "star-wars" ? starWarsStyle : defaultStyle)}
`;
