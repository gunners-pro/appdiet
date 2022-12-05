import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ActivityLoading = styled.ActivityIndicator.attrs(({ theme }) => ({
  size: 'large',
  color: theme.COLORS.GREEN_DARK,
}))``;
