import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../pages/HomeScreen";
import { Skills } from "../pages/Skills";
import Feather from '@expo/vector-icons/Feather';
import Octicons from '@expo/vector-icons/Octicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { About } from "../pages/About";

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
        component={About}
        options={{
            headerShown: false,
            title: "Sobre mim",
            tabBarIcon: ({color, size}) => (
              <Octicons name="person" size={size} color={color} />
            )
        }}
        />
        <Screen 
        name="skills"
        component={Skills}
        options={{
            headerShown: false,
            title: "Habilidades",
            tabBarIcon: ({color, size}) => (
              <AntDesign name="setting" size={size} color={color} />
            )
        }}
        />
    </Navigator>
  );
}