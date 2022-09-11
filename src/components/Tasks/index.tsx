import { TbClipboardText } from "react-icons/tb";

import { TaskHeaderSpan, TasksContainer } from "./styles";
import { useTasks } from "../../hooks/useTasks";
import { Task } from "./Task";

const NoTasksFoundWarning = () => {
  return (
    <div className="nothing-found">
      <TbClipboardText size={56} />
      <span className="bold">Você ainda não tem tarefas cadastradas</span>
      <span>Crie tarefaz e organize seus itens a fazer</span>
    </div>
  )
}

export const Tasks = () => {
  const { tasks, taskAmount, doneTaskAmount } = useTasks()

  return (
    <TasksContainer>
      <header>
        <TaskHeaderSpan variant="blue">
          Tarefas criadas <span>{taskAmount}</span>
        </TaskHeaderSpan>
        <TaskHeaderSpan variant="purple">
          Concluídas <span>{taskAmount ? `${doneTaskAmount} de ${taskAmount}`: 0}</span>
        </TaskHeaderSpan>
      </header>

      <main>
        {!tasks.length && <NoTasksFoundWarning />}

        {tasks.map(task => <Task key={task.id} task={task} />)}
      </main>
    </TasksContainer>
  );
}
