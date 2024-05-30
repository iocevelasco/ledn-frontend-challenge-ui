import React, { useState } from "react";
import {
  Container,
  PlanetListContainer,
  PlanetItem,
  SearchInput,
  SortButton,
} from "./PlanetList.style";
import { Planet } from "../../../utils/types";
import { usePlanetDetail, usePlanetList } from "../../../data/queries";

interface PlanetListProps {
  onSelectPlanet: (planet: Planet) => void;
}

const PlanetList: React.FC<PlanetListProps> = ({ onSelectPlanet }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortAsc, setSortAsc] = useState<boolean>(true);
  const { data: planets, isLoading, isError } = usePlanetList();

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error</div>;

  const filteredPlanets = planets
    ?.filter((planet) =>
      planet.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) =>
      sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );

  return (
    <Container>
      <div>
        <SearchInput
          type="text"
          placeholder="Search for a planet..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SortButton onClick={() => setSortAsc(!sortAsc)}>
          Sort {sortAsc ? "Descending" : "Ascending"}
        </SortButton>
      </div>
      <PlanetListContainer>
        {filteredPlanets?.map((planet) => (
          <PlanetItem key={planet.id} onClick={() => onSelectPlanet(planet)}>
            {planet.name}
          </PlanetItem>
        ))}
      </PlanetListContainer>
    </Container>
  );
};

export { PlanetList };
