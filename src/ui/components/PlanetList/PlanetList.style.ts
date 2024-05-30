
import styled from "styled-components";

export const Container = styled.div`
  margin: 20px;
  max-height: 40vh;
  overflow-y: auto;
`;

export const SearchInput = styled.input`
  padding: 10px;
  margin-right: 10px;
`;

export const SortButton = styled.button`
  padding: 10px;
`;

export const PlanetListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const PlanetItem = styled.li`
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid #ddd;

  &:hover {
    background-color: #eee;
  }
`;