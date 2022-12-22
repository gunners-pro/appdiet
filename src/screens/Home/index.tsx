import { SectionList, Text } from 'react-native';

import { Button } from '@components/Button';
import { Header } from '@components/Header';

import {
  Container,
  HighlightCard,
  HighlightIcon,
  HighlightCardTitle,
  HighlightCardDescription,
  Meal,
  SectionHeader,
  FoodListItem,
  FoodListItemTime,
  FoodListItemText,
} from './styles';

const FAKE_DATA = [
  {
    title: '12.08.22',
    data: [
      { time: '20:00', description: 'X-tudo' },
      { time: '16:00', description: 'Whey protein com leite' },
      { time: '12:30', description: 'Salada cesar com frango...' },
      { time: '09:30', description: 'Vitamina de banana com...' },
    ],
  },
  {
    title: '11.08.22',
    data: [
      { time: '20:00', description: 'X-tudo' },
      { time: '16:00', description: 'Whey protein com leite' },
      { time: '12:30', description: 'Salada cesar com frango...' },
      { time: '09:30', description: 'Vitamina de banana com...' },
    ],
  },
];

export function Home() {
  return (
    <Container>
      <Header />
      <HighlightCard>
        <HighlightIcon />
        <HighlightCardTitle>90,86%</HighlightCardTitle>
        <HighlightCardDescription>
          das refeições dentro da dieta
        </HighlightCardDescription>
      </HighlightCard>
      <Meal>Refeições</Meal>
      <Button text="Nova refeição" showIcon />

      <SectionList
        sections={FAKE_DATA}
        keyExtractor={item => item.description}
        renderItem={({ item }) => (
          <FoodListItem>
            <FoodListItemTime>{item.time}</FoodListItemTime>
            <Text style={{ marginHorizontal: 12 }}>{'|'}</Text>
            <FoodListItemText>{item.description}</FoodListItemText>
          </FoodListItem>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <SectionHeader>{title}</SectionHeader>
        )}
        style={{ marginTop: 8 }}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
