import { createDrawerNavigator } from "@react-navigation/drawer";
import Main from "./screens/main";
import About from "./screens/about";

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="Main" component={Main} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
}