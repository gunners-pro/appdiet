import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
  height: 100%;
`;

export const Header = styled.View`
  height: 120px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Block = styled.View`
  width: 28px;
`;

export const Form = styled.View`
  background-color: #fff;
  padding: 24px;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  flex: 1;
`;

export const InputLabel = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 14px;
`;

export const InputName = styled.TextInput`
  border: 1px;
  opacity: 1;
  border-color: ${({ theme }) => theme.COLORS.GRAY_400}66;
  border-radius: 8px;
  height: 48px;
  padding: 0 12px;
  margin: 8px 0 20px 0;
  color: #000;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: 18px;
`;

export const InputDescription = styled.TextInput`
  border: 1px;
  opacity: 1;
  border-color: ${({ theme }) => theme.COLORS.GRAY_400}66;
  border-radius: 8px;
  height: 136px;
  padding: 10px;
  margin: 8px 0 20px 0;
  color: #000;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: 18px;
`;
