import { Container, PlanetListContainer, PlanetItem } from "./PlanetList.style";
import { Planet } from "utils/types";
import { usePlanetList } from "data/queries";

interface PlanetListProps {
  setPlanetId: (id: string) => void;
  planetList: Planet[];
  selectedPlanetId: string;
}

const PlanetList: React.FC<PlanetListProps> = ({
  setPlanetId,
  planetList,
  selectedPlanetId,
}) => {
  const { isLoading, isError } = usePlanetList();

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error</div>;

  if (planetList.length === 0) {
    return <div>No planets found</div>;
  }

  return (
    <Container>
      <PlanetListContainer>
        {planetList.map((planet) => (
          <PlanetItem
            isSelected={planet.id === selectedPlanetId}
            key={planet.id}
            onClick={() => setPlanetId(planet.id)}
          >
            {planet.name}
          </PlanetItem>
        ))}
      </PlanetListContainer>
    </Container>
  );
};

export { PlanetList };
