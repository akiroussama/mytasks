import { Text, VStack, Center } from "native-base";
export default function WildersComponent() {
  return (
    <Center flex={1}>
      <VStack space={1} alignItems="center">
        <Center w="64" h="20" bg="indigo.300" rounded="md" shadow={3}>
          <Text fontSize="4xl">Hi Wilder's</Text>
          <Text fontSize="xs">using native base & react native</Text>
        </Center>
      </VStack>
    </Center>
  );
};