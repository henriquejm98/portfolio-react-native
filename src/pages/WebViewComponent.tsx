import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import WebView from 'react-native-webview';

type WebViewProps = {
  webview: { url: string };
}

export function WebViewComponent() {
  const route = useRoute<RouteProp<WebViewProps, "webview">>();
  const { url } = route.params;
  return (
    <View style={styles.container}>
        <WebView source={{ uri: url }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});