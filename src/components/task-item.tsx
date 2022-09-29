import React, { useCallback } from "react";
import { PanGestureHandlerProps } from "react-native-gesture-handler";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import {
  Text,
  Pressable,
  Box,
  HStack,
  useColorModeValue,
  Icon,
  Input,
  useToken,
} from "native-base";
import AnimatedCheckbox from "react-native-checkbox-reanimated";

interface Props {
  isDone: boolean;
  onToggleCheckbox?: () => void;
  onPressLabel?: () => void;
  subject: string;
}

const TaskItem = (props: Props) => {
  const { isDone, onToggleCheckbox, subject, onPressLabel } = props;

  return (
    <HStack alignItems="center" w="full">
      <Box width={30} height={30} mr={2}>
        <Pressable onPress={onToggleCheckbox}>
          <AnimatedCheckbox
            highlightColor="#4444ff"
            checkmarkColor="#ffffff"
            boxOutlineColor="#4444ff"
            checked={isDone}
          />
        </Pressable>
      </Box>

      <Pressable onPress={onPressLabel}>
        <Text>{subject}</Text>
      </Pressable>
    </HStack>
  );
};

export default TaskItem;
