import React, { useCallback, useState } from "react";
import { Box, Icon, VStack, useColorModeValue, Fab } from "native-base";
import TaskList from "../components/task-list";

const initialData = [
  {
    id: 1,
    subject: "Live Coding React Native",
    done: false,
  },
  {
    id: 2,
    subject: "Live Coding Flutter",
    done: false,
  },
];

export default function MainScreen() {
  const [data, setData] = useState(initialData);

  const handleToggleTaskItem = useCallback(item => {
    setData(prevData => {
      const newData = [...prevData];
      const index = prevData.indexOf(item);
      newData[index] = {
        ...item,
        done: !item.done,
      };
      return newData;
    });
  }, []);

  return (
    <Box flex={1} bg={useColorModeValue("warmGray.50", "primary.900")} w="full">
      <VStack
        flex={1}
        space={1}
        bg={useColorModeValue("warmGray.50", "primary.900")}
        mt="-20px"
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        pt="20px"
      >
        <TaskList data={data} onToggleItem={handleToggleTaskItem} />
      </VStack>
    </Box>
  );
}
