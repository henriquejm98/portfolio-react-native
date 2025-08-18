import React from 'react';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomTabsRoutes } from './src/routes/bottom-tabs.routes';
import { WebViewComponent } from './src/pages/WebViewComponent';
import { PaperProvider } from 'react-native-paper';


export type RootStackParamList = {
  tabs: undefined;
  webview: { url: string };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* Tabs */}
          <Stack.Screen name="tabs" component={BottomTabsRoutes} />
          {/* WebView */}
          <Stack.Screen name="webview" component={WebViewComponent} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
