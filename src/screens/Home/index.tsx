import { SectionList, Text, View } from 'react-native';

import { Button } from '@components/Button';
import { Header } from '@components/Header';

import {
  Container,
  HighlightCard,
  HighlightCardTitle,
  HighlightCardDescription,
  Meal,
  SectionHeader,
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
          <View
            style={{
              flexDirection: 'row',
              borderWidth: 1,
              padding: 12,
              marginBottom: 8,
            }}
          >
            <Text>{item.time}</Text>
            <Text style={{ marginHorizontal: 12 }}>{'|'}</Text>
            <Text>{item.description}</Text>
          </View>
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
