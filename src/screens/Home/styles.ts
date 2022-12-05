import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  padding-top: ${StatusBar.currentHeight}px;
  padding-left: 24px;
  padding-right: 24px;
`;
