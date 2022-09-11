import { Task } from "../models/Task";
import { nanoid } from "nanoid";
import { useCallback } from "react";
import { useContext, useState } from "react";
import { createContext, ReactNode } from "react";

type TasksContextProps = {
  tasks: Task[];
  taskAmount: number;
  doneTaskAmount: number;

  createTask: (content: string) => void;
  removeTask: (taskId: string) => void;
  toggleCheck: (taskId: string) => void;
}

const TasksContext = createContext({} as TasksContextProps);

export const TasksContextProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const taskAmount = tasks.length
  const doneTaskAmount = tasks.filter(task => task.checked).length

  const createTask = (content: string) => {
    setTasks((previous) => [...previous, {
      id: nanoid(),
      checked: false,
      content,
    }]);
  }

  const removeTask = (taskId: string) => {
    setTasks((previous) => previous.filter(task => task.id !== taskId));
  }
  
  const toggleCheck = (taskId: string) => {
    setTasks((previous) => previous.map(task => {
      if (task.id !== taskId) return task;

      return {
        ...task,
        checked: !task.checked
      }
    }));
  }

  return (
    <TasksContext.Provider value={{
      tasks,
      toggleCheck,
      createTask,
      removeTask,
      taskAmount,
      doneTaskAmount
    }}>
      {children}
    </TasksContext.Provider>
  );
}

export const useTasks = () => useContext(TasksContext);
