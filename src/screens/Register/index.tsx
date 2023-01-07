import { ArrowLeft } from 'phosphor-react-native';

import { Container, Header, Title, Block, Form } from './styles';

export function Register() {
  return (
    <Container>
      <Header>
        <ArrowLeft color="#000" size={28} />
        <Title>Nova refeição</Title>
        <Block />
      </Header>
      <Form></Form>
    </Container>
  );
}
