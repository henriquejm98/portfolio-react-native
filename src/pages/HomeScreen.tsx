import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Links } from '../components/Links';
import { Picture } from '../components/Picture';

export function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Picture />
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
    marginTop: 50,
    width: "100%"
  }
})