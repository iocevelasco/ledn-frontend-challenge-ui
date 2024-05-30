import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px;
`;

export const PlanetName = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const Info = styled.p`
  margin: 5px 0;
`;

export const TransactionsTitle = styled.h3`
  margin-top: 20px;
`;

export const TransactionList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const TransactionItem = styled.li`
  padding: 10px;
  border:${({ theme }) => `1px solid  ${theme.colors.background}`};
`;

export const FilterSelect = styled.select`
  padding: 10px;
  margin-top: 10px;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  border:${({ theme }) => `1px solid  ${theme.colors.background}`};
  border-radius: 4px;
`;