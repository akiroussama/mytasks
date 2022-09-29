import { NativeBaseProvider } from "native-base";
import MyDrawer from "./src/drawer";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <MyDrawer></MyDrawer>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
