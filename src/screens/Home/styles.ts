import { ArrowUpRight } from 'phosphor-react-native';
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
  position: relative;
`;

export const HighlightIcon = styled(ArrowUpRight).attrs({
  size: 30,
  color: '#639339',
  weight: 'bold',
})`
  position: absolute;
  right: 8px;
  top: 8px;
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

export const SectionHeader = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  margin-top: 24px;
  margin-bottom: 10px;
`;

export const FoodListItem = styled.View`
  flex-direction: row;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 8px;
  padding: 16px 12px;
  margin-bottom: 8px;
`;

export const FoodListItemTime = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const FoodListItemText = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_500};
`;
