import { Plus, Trash } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';

import { Container, Text } from './styles';

type Props = {
  text: string;
  showIcon?: boolean;
  outline?: boolean;
};

export function Button({ text, showIcon, outline }: Props) {
  const { COLORS } = useTheme();

  return (
    <Container activeOpacity={0.8} outline>
      {showIcon &&
        (outline ? (
          <Trash
            color={showIcon || outline ? COLORS.GRAY_600 : COLORS.GRAY_100}
            size={24}
          />
        ) : (
          <Plus
            color={showIcon || outline ? COLORS.GRAY_600 : COLORS.GRAY_100}
            size={24}
          />
        ))}
      <Text outline>{text}</Text>
    </Container>
  );
}
