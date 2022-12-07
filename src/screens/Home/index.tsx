import { Button } from '@components/Button';
import { Header } from '@components/Header';

import {
  Container,
  HighlightCard,
  HighlightCardTitle,
  HighlightCardDescription,
  Meal,
} from './styles';

export function Home() {
  return (
    <Container>
      <Header />
      <HighlightCard>
        <HighlightCardTitle>90,86%</HighlightCardTitle>
        <HighlightCardDescription>
          das refeições dentro da dieta
        </HighlightCardDescription>
      </HighlightCard>
      <Meal>Refeições</Meal>
      <Button text="Nova refeição" showIcon />
    </Container>
  );
}
