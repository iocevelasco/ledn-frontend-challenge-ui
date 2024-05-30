import React, { useState } from "react";
import {
  Container,
  PlanetName,
  Info,
  FilterSelect,
  TransactionsTitle,
  TransactionList,
  TransactionItem,
} from "./PlanetDetail.style";
import { Planet } from "utils/types";
interface PlanetDetailProps {
  planet: Planet | null;
}

const PlanetDetail: React.FC<PlanetDetailProps> = ({ planet }) => {
  const [filterCurrency, setFilterCurrency] = useState<string>("");

  if (!planet) {
    return <Container>Select a planet to see details</Container>;
  }

  const filteredTransactions = planet.transactions.filter(
    (tx) => !filterCurrency || tx.currency === filterCurrency
  );

  return (
    <Container>
      <PlanetName>{planet.name}</PlanetName>
      <Info>Climate: {planet.climate}</Info>
      <Info>Gravity: {planet.gravity}</Info>
      <Info>Terrain: {planet.terrain}</Info>
      <Info>Population: {planet.population}</Info>

      <FilterSelect
        onChange={(e) => setFilterCurrency(e.target.value)}
        value={filterCurrency}
      >
        <option value="">All</option>
        <option value="GCS">Galactic Credit Standard</option>
        <option value="ICS">Imperial Crown Standard</option>
      </FilterSelect>

      <TransactionsTitle>Transactions</TransactionsTitle>
      <TransactionList>
        {filteredTransactions.map((tx) => (
          <TransactionItem key={tx.id}>
            {tx.currency} {tx.amount} - {tx.status}
          </TransactionItem>
        ))}
      </TransactionList>
    </Container>
  );
};

export default PlanetDetail;
