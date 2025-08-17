import { HomeScreen } from "../pages/HomeScreen";
import { WebViewComponent } from "../pages/WebViewComponent";
import { createStackNavigator } from "@react-navigation/stack";
import { BottomTabsRoutes } from "./bottom-tabs.routes";

const { Navigator, Screen } = createStackNavigator()

export function StackRoutes() {
  return (
    <Navigator>
        <Screen 
        name="webview"
        component={WebViewComponent}
        options={{
            headerShown: false,
        }}
        />
    </Navigator>
  );
}