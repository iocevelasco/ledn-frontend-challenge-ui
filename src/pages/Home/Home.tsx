import { Button } from "ui/design-system/Button";
import {
  Container,
  WrapperFlex,
  WrapperColumn,
  Title,
  ContentWrapper,
} from "./Home.style";
import { PlanetList } from "ui/components/PlanetList";
import PlanetDetail from "ui/components/PlanetDetail/PlanetDetail";
import { usePlanetState, HomeMessages } from "./Home.utils";
import { Input } from "ui/design-system/Input";

export default function Home() {
  const {
    sortAsc,
    setSortAsc,
    handleSearchChange,
    filteredPlanets,
    planetId,
    setPlanetId,
  } = usePlanetState();

  return (
    <Container>
      <Title> {HomeMessages.TITLE} </Title>
      <ContentWrapper>
        <WrapperColumn>
          <WrapperFlex>
            <Input
              type="text"
              placeholder={HomeMessages.SEARCH_PLACEHOLDER}
              onChange={handleSearchChange}
            />
            <Button variant="star-wars" onClick={() => setSortAsc(!sortAsc)}>
              Sort {sortAsc ? HomeMessages.SORT_DESC : HomeMessages.SORT_ASC}
            </Button>
          </WrapperFlex>
          <PlanetList
            selectedPlanetId={planetId}
            setPlanetId={setPlanetId}
            planetList={filteredPlanets}
          />
        </WrapperColumn>
        <PlanetDetail planetId={planetId} />
      </ContentWrapper>
    </Container>
  );
}
