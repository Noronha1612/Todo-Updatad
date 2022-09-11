import { FiCheck, FiTrash2 } from "react-icons/fi"
import { useTasks } from "../../hooks/useTasks"
import { Task as ITask } from "../../models/Task"
import { TaskContainer } from "./styles"

type TaskProps = {
  task: ITask
}

export const Task = ({ task }: TaskProps) => {
  const { toggleCheck, removeTask } = useTasks();

  return (
    <TaskContainer checked={task.checked}>
      <input
        id={`checkboxInput-${task.id}`}
        type="checkbox"
        checked={task.checked}
        onChange={() => toggleCheck(task.id)}
        style={{ display: 'none' }}
      />
      <label htmlFor={`checkboxInput-${task.id}`}>
        {task.checked && <FiCheck size={12} />}
      </label>

      <span className="font-md">{task.content}</span>

      <button onClick={() => removeTask(task.id)}>
        <FiTrash2 height={16} />
      </button>
    </TaskContainer>
  )
}