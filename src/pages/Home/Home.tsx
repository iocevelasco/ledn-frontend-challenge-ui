import React from "react";
import { Container } from "./Home.style";
import { PlanetList } from "ui/components/PlanetList";

export default function Home() {
  return (
    <Container>
      <PlanetList onSelectPlanet={console.log} />
    </Container>
  );
}
