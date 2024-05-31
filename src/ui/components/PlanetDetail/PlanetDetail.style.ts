import styled from 'styled-components';
import { ThemeType } from 'utils/theme';
import backgroundImage from 'assets/background.jpg';

export const Container = styled.div<{ theme: ThemeType }>`
  padding: 16px;
  background: url(${backgroundImage}) no-repeat 45% 60% fixed;
  border: ${({ theme }) => `1px solid ${theme.colors.starWars.yellow}`};
  border-radius: 2rem;
  flex: 1;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  gap: 4px;
`;

export const PlanetName = styled.h2`
  font-family: ${({ theme }) => theme.fonts.starWars};
  font-size: 24px;
  margin-bottom: 10px;
`;

export const Info = styled.p`
  margin: 5px 0;
`;

export const TransactionsTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.starWars};
  padding: 12px 0;
`;

export const TransactionList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const TransactionItem = styled.li`
  padding: 10px;
  border:${({ theme }) => `1px solid  ${theme.colors.background}`};
`;

export const FilterSelect = styled.select<{theme: ThemeType}>`
  padding: 10px;
  margin-top: 10px;
  background: ${({ theme }) => theme.colors.common.black};
  color: ${({ theme }) => theme.colors.primary.main};
  border:${({ theme }) => `1px solid  ${theme.colors.primary.main}`};
  border-radius: 4px;
`;

export const TransactionItemWrapper = styled.div`
  display: flex;
  min-height: 50%;
  flex-flow: column;
  align-items: center;
`;