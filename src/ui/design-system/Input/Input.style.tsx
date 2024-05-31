import styled from "styled-components";
import { ThemeType } from "utils/theme";

export interface StarWarsInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Label = styled.label<{ theme: ThemeType }>`
  font-family: ${({ theme }) => theme.fonts.starWars};
  color: ${({ theme }) => theme.colors.starWars.yellow};
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const Input = styled.input<{ theme: ThemeType }>`
  padding: 8px;
  width: 100%;
  max-width: 300px;
  font-family: ${({ theme }) => theme.fonts.starWars};
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.common.white};
  background-color: ${({ theme }) => theme.colors.common.black};
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.starWars.yellow};
  outline: none;

  &:focus {
    border-bottom: 2px solid ${({ theme }) => theme.colors.secondary.dark};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.starWars.yellow};
  }
`;
