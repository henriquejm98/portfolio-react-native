import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import WebView from 'react-native-webview';
import Feather from '@expo/vector-icons/Feather';

type WebViewProps = {
  webview: { url: string };
}

export function WebViewComponent({ navigation }: any) {
  const route = useRoute<RouteProp<WebViewProps, "webview">>();
  const { url } = route.params;
  return (
    <View style={styles.container}>
      <Button 
      children="Voltar"
      mode='text'
      onPress={() => navigation.goBack()}
      textColor='#fff'
      icon={({color, size}) => (
        <Feather name="arrow-left" size={size} color={color} />
      )}
      style={{ alignSelf: 'flex-start'}}
      />
      <WebView source={{ uri: url }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 40 },
});