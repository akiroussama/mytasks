import Main from "./src/screens/main";
import { NativeBaseProvider } from 'native-base';
import { extendTheme } from 'native-base';

export default function App() {
  const theme = extendTheme({
    components: {
      Heading: {
        baseStyle: (props: any) => {
          return {
            _light: { color: 'red.300' },
            _dark: { color: 'blue.300' },
          };
        },
      },
    },
  });
  return (<NativeBaseProvider theme={theme}>
   <Main></Main>
   </NativeBaseProvider>);
}
