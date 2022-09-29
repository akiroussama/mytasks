import Main from "./src/screens/main";
import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Main></Main>
    </NativeBaseProvider>
  );
}
