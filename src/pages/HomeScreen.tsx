import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Links } from '../components/Links';
import { Picture } from '../components/Picture';
import { Text } from 'react-native-paper';

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <Picture />
      <View style={{marginTop: 30, marginLeft: 10, marginRight: 10}}>
        <Text variant='titleMedium' style={styles.text}>
          Quer conhecer melhor meu trabalho ou entrar em contato?
        </Text>
        <Text variant='bodyMedium' style={styles.text}>
          Aqui estão meus principais links:
        </Text>
      </View>
      <ScrollView style={styles.links}>
        <Links />
      </ScrollView>
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