import React, { useCallback, useRef } from "react";
import { AnimatePresence, View } from "moti";
import { ScrollView } from "react-native-gesture-handler";
import TaskItem from "./task-item";
interface TaskItemData {
  id: string;
  subject: string;
  done: boolean;
}

interface TaskListProps {
  data: Array<TaskItemData>;
  onToggleItem: (item: TaskItemData) => void;
}

interface TaskItemProps {
  data: TaskItemData;
  onToggleItem: (item: TaskItemData) => void;
}

export const AnimatedTaskItem = (props: TaskItemProps) => {
  const { data, onToggleItem } = props;
  const handleToggleCheckbox = useCallback(() => {
    onToggleItem(data);
  }, [data, onToggleItem]);
  return (
    <TaskItem
      subject={data.subject}
      isDone={data.done}
      onToggleCheckbox={handleToggleCheckbox}
    />
  );
};

export default function TaskList(props: TaskListProps) {
  const { data, onToggleItem } = props;

  return (
    <ScrollView>
      <AnimatePresence>
        {data.map(item => (
          <AnimatedTaskItem
            key={item.id}
            data={item}
            onToggleItem={onToggleItem}
          />
        ))}
      </AnimatePresence>
    </ScrollView>
  );
}
