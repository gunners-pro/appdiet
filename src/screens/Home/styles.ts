import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  padding-top: ${StatusBar.currentHeight}px;
  padding-left: 24px;
  padding-right: 24px;
`;

export const HighlightCard = styled.View`
  height: 120px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin: 0 0 36px;
`;

export const HighlightCardTitle = styled.Text`
  font-size: 32px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const HighlightCardDescription = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  margin-top: 8px;
`;

export const Meal = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  margin: 0 0 12px;
`;
