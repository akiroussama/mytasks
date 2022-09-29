import { Text, VStack, Center, NativeBaseProvider } from "native-base";
export const MyComponent = () => {
  return (
    <VStack space={1} alignItems="center">
      <Center w="64" h="20" bg="indigo.300" rounded="md" shadow={3}>
        <Text fontSize="4xl">Hi Wilder's</Text>
        <Text fontSize="xs">using native base!</Text>
      </Center>
    </VStack>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <MyComponent />
      </Center>
    </NativeBaseProvider>
  );
};
