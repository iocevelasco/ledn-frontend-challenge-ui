import React, { useState } from "react";
import { usePlanetDetail } from "data/queries";
import {
  Container,
  PlanetName,
  Info,
  FilterSelect,
  TransactionsTitle,
  TransactionList,
  TransactionItem,
  TransactionItemWrapper,
} from "./PlanetDetail.style";
interface PlanetDetailProps {
  planetId: string;
}

const PlanetDetail: React.FC<PlanetDetailProps> = ({ planetId }) => {
  const { data: planet, isLoading, isError } = usePlanetDetail(planetId);
  const [filterCurrency, setFilterCurrency] = useState<string>("");

  if (isLoading) return <Container>Loading...</Container>;

  if (isError) return <Container>Error</Container>;

  if (!planetId) {
    return <Container>Select a planet to see details</Container>;
  }

  const filteredTransactions = planet?.transactions.filter(
    (transaction) => !filterCurrency || transaction.currency === filterCurrency
  );

  return (
    <Container>
      <PlanetName>{planet?.name}</PlanetName>
      <Info>Climate: {planet?.climate}</Info>
      <Info>Gravity: {planet?.gravity}</Info>
      <Info>Terrain: {planet?.terrain}</Info>
      <Info>Population: {planet?.population}</Info>

      <FilterSelect
        onChange={(e) => setFilterCurrency(e.target.value)}
        value={filterCurrency}
      >
        <option value="">All</option>
        <option value="GCS">Galactic Credit Standard</option>
        <option value="ICS">Imperial Crown Standard</option>
      </FilterSelect>
      <TransactionItemWrapper>
        <TransactionsTitle>Transactions</TransactionsTitle>
        <TransactionList>
          {filteredTransactions?.map((transaction) => (
            <TransactionItem key={transaction.id}>
              {transaction.currency} : {transaction.amount} -{" "}
              {transaction.status}
            </TransactionItem>
          ))}
        </TransactionList>
      </TransactionItemWrapper>
    </Container>
  );
};

export default PlanetDetail;
