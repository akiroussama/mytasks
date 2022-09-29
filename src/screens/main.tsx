import { useState } from "react";
import TaskItem from "../components/task-item";
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
  return (
    <TaskItem
      isDone={checked}
      subject={subject}
      isEditing={false}
      onToggleCheckbox={handleToggleCheckbox}
    ></TaskItem>
  );
}
