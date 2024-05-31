import styled from "styled-components";
import { device } from "utils/breakpoints";

export const Container = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  gap: 24px;
  background: ${({ theme }) => theme.colors.common.black};
  color: ${({ theme }) => theme.colors.starWars.yellow};
`;

export const WrapperFlex = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

export const WrapperColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.starWars};
  font-size: 48px;
  margin-bottom: 24px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 24px;
`;
