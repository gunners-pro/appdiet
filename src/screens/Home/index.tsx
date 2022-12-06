import { Header } from '@components/Header';

import {
  Container,
  HighlightCard,
  HighlightCardTitle,
  HighlightCardDescription,
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
    </Container>
  );
}
