import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Links } from '../components/Links';
import { Picture } from '../components/Picture';
import { Text } from 'react-native-paper';

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <Picture />
      <View style={{marginTop: 30, marginLeft: 10, marginRight: 10}}>
        <Text variant='titleLarge' style={styles.text}>
          Quer conhecer melhor meu trabalho ou entrar em contato?
        </Text>
        <Text variant='bodyLarge' style={styles.text}>
          Aqui estão meus principais links: meu GitHub com projetos que desenvolvi, meu LinkedIn para acompanhar minha trajetória profissional e, se preferir, um botão para me enviar um e-mail diretamente.
        </Text>
        <Text variant='bodyLarge' style={styles.text}>
          Clique no botão que desejar para acessar.
        </Text>
      </View>
      <View style={styles.links}>
        <Links />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  links: {
    marginTop: 30,
    width: "100%"
  },
  text: {
    color: '#fff',
    marginTop: 10
  }
})