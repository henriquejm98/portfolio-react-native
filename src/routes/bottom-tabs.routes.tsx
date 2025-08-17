import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../pages/HomeScreen";
import { Skills } from "../pages/Skills";
import Feather from '@expo/vector-icons/Feather';

const { Navigator, Screen } = createBottomTabNavigator()

export function BottomTabsRoutes() {
  return (
    <Navigator>
        <Screen 
        name="home"
        component={HomeScreen}
        options={{
            headerShown: false,
            title: "Meus links",
            tabBarIcon: ({color, size}) => (
              <Feather name="link" size={size} color={color} />
            )
        }}
        />
        <Screen 
        name="about me"
        component={HomeScreen}
        options={{
            headerShown: false,
            title: "Sobre mim"
        }}
        />
        <Screen 
        name="skills"
        component={Skills}
        options={{
            headerShown: false,
            title: "Habilidades"
        }}
        />
    </Navigator>
  );
}