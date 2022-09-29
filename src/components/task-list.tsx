import React, { useCallback, useRef } from "react";
import { AnimatePresence, View } from "moti";
import {
  PanGestureHandlerProps,
  ScrollView,
} from "react-native-gesture-handler";
import TaskItem from "./task-item";
interface TaskItemData {
  id: string;
  subject: string;
  done: boolean;
}

interface TaskListProps {
  data: Array<TaskItemData>;
  onToggleItem: (item: TaskItemData) => void;
  onPressLabel: (item: TaskItemData) => void;
}

interface TaskItemProps
  extends Pick<PanGestureHandlerProps, "simultaneousHandlers"> {
  data: TaskItemData;
  onToggleItem: (item: TaskItemData) => void;
  onPressLabel: (item: TaskItemData) => void;
}

export const AnimatedTaskItem = (props: TaskItemProps) => {
  const { simultaneousHandlers, data, onToggleItem, onPressLabel } = props;
  const handleToggleCheckbox = useCallback(() => {
    onToggleItem(data);
  }, [data, onToggleItem]);
  const handlePressLabel = useCallback(() => {
    onPressLabel(data);
  }, [data, onPressLabel]);
  return (
    <View
      from={{
        opacity: 0,
        scale: 0.5,
        marginBottom: -46,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        marginBottom: 0,
      }}
      exit={{
        opacity: 0,
        scale: 0.5,
        marginBottom: -46,
      }}
    >
      <TaskItem
        simultaneousHandlers={simultaneousHandlers}
        subject={data.subject}
        isDone={data.done}
        onToggleCheckbox={handleToggleCheckbox}
        onPressLabel={handlePressLabel}
      />
    </View>
  );
};

export default function TaskList(props: TaskListProps) {
  const { data, onToggleItem, onPressLabel } = props;
  const refScrollView = useRef(null);

  return (
    <ScrollView ref={refScrollView}>
      <AnimatePresence>
        {data.map(item => (
          <AnimatedTaskItem
            key={item.id}
            data={item}
            simultaneousHandlers={refScrollView}
            onToggleItem={onToggleItem}
            onPressLabel={onPressLabel}
          />
        ))}
      </AnimatePresence>
    </ScrollView>
  );
}
