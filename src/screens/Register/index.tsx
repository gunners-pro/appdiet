import { ArrowLeft } from 'phosphor-react-native';

import {
  Container,
  Header,
  Title,
  Block,
  Form,
  InputLabel,
  InputName,
  InputDescription,
} from './styles';

export function Register() {
  return (
    <Container>
      <Header>
        <ArrowLeft color="#000" size={28} />
        <Title>Nova refeição</Title>
        <Block />
      </Header>
      <Form>
        <InputLabel>Nome</InputLabel>
        <InputName />
        <InputLabel>Descrição</InputLabel>
        <InputDescription
          numberOfLines={5}
          multiline
          maxLength={214}
          style={{ textAlignVertical: 'top' }}
        />
      </Form>
    </Container>
  );
}
