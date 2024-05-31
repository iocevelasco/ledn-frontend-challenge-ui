
import styled from "styled-components";
import { ThemeType } from "utils/theme";

interface PlanetItemProps {
  isSelected: boolean;
  theme: ThemeType
}

export const Container = styled.div`
  padding: 8px;
  height: 100%;
  overflow-y: auto;
  gap: 8px;
  scroll-snap-type: y mandatory;
  display: flex;
  flex-flow: column nowrap;
  flex: 1;
  max-height: 60vh;
  `;

export const PlanetListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  border-radius: 20px;
`;

export const PlanetItem = styled.li<PlanetItemProps>`
  padding: 8px;
  cursor: pointer;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.grey[300]}`};
  cursor: pointer;
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.primary.main : theme.colors.common.black};
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.common.black : theme.colors.grey[200]};
  border: 1px solid
    ${({ isSelected, theme }) =>
      isSelected ? theme.colors.primary.dark : theme.colors.primary.main};
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.dark};
    color: ${({ theme }) => theme.colors.common.white};
  }

  &:first-child {
    border-radius: 20px 20px 0 0;
  }
`;