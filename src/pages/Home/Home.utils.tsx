import React, { useCallback, useMemo, useState } from "react";
import { usePlanetList } from "data/queries";
import { debounce } from "lodash";

export enum HomeMessages {
  SEARCH_PLACEHOLDER = "Search for a planet...",
  NO_PLANETS = "No planets found",
  SORT_ASC = "Ascending",
  SORT_DESC = "Descending",
  TITLE = "Coruscant Bank's",
}

export const usePlanetState = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [planetId, setPlanetId] = useState<string>("");
  const [sortAsc, setSortAsc] = useState<boolean>(true);
  const { data: planets } = usePlanetList();

  const filteredPlanets = useMemo(() => {
    if (!planets) return [];

    const lowercasedSearchTerm = searchTerm.toLowerCase();

    return planets
      .filter((planet) =>
        planet.name.toLowerCase().includes(lowercasedSearchTerm)
      )
      .sort((a, b) => {
        const comparison = a.name.localeCompare(b.name);
        return sortAsc ? comparison : -comparison;
      });
  }, [planets, searchTerm, sortAsc]);

  const debouncedSearch = useCallback(
    debounce((term: string, setValue: any) => {
      setValue(term);
    }, 300),
    []
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value, setSearchTerm);
  };

  return {
    planets,
    searchTerm,
    sortAsc,
    setSortAsc,
    handleSearchChange,
    filteredPlanets,
    setPlanetId,
    planetId,
  };
};
