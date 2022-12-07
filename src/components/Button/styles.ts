import styled, { css } from 'styled-components/native';

type Props = {
  outline: boolean;
};

export const Container = styled.TouchableOpacity<Props>`
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  height: 60px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${({ theme, outline }) =>
    outline &&
    css`
      border: 2px solid ${theme.COLORS.GRAY_600};
      background-color: ${theme.COLORS.BACKGROUND};
    `}
`;

export const Text = styled.Text<Props>`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 14px;
  margin-left: 16px;

  ${({ theme, outline }) =>
    outline &&
    css`
      color: ${theme.COLORS.GRAY_600};
    `}
`;
