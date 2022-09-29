import { useCallback, useState } from "react";
import TaskList from "../components/task-list";
const initialData = [
  {
    id: "1",
    subject: "Buy movie tickets for Friday",
    done: false,
  },
  {
    id: "2",
    subject: "Make a React Native tutorial",
    done: false,
  },
];
export default function Main() {
  const [checked, setChecked] = useState(false);
  const [subject, setSubject] = useState("task item");
  const handleToggleCheckbox = () => {
    console.log(arguments);
    // setData(prevData => {
    //   const newData = [...prevData]
    //   const index = prevData.indexOf(item)
    //   newData[index] = {
    //     ...item,
    //     done: !item.done
    //   }
    //   return newData
    // })
  };
  const handleToggleTaskItem = () => {};
  const handleChangeTaskItemSubject = () => {};
  const handleFinishEditingTaskItem = () => {};
  const handlePressTaskItemLabel = () => {};
  const handleRemoveItem = () => {};
  const editingItemId = "test";
  return (
    <TaskList
      data={initialData}
      onToggleItem={handleToggleTaskItem}
      onChangeSubject={handleChangeTaskItemSubject}
      onFinishEditing={handleFinishEditingTaskItem}
      onPressLabel={handlePressTaskItemLabel}
      onRemoveItem={handleRemoveItem}
      editingItemId={editingItemId}
    />
  );
}
