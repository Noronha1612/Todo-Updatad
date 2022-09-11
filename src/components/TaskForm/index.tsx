import { FormEvent, useState } from "react";
import { FiPlusCircle } from "react-icons/fi";

import { useTasks } from "../../hooks/useTasks";
import { InputContainer } from "./styles";

export const TaskForm = () => {
  const { createTask } = useTasks()
  const [inputText, setInputText] = useState('');

  const handleAddTask = (e: FormEvent) => {
    e.preventDefault();

    if (inputText) {
      createTask(inputText)
      setInputText('')
    }
  }

  return (
    <InputContainer onSubmit={handleAddTask}>
      <input
        placeholder="Adicione uma nova tarefa"
        value={inputText}
        onChange={e => setInputText(e.target.value)}
      />

      <button type="submit">
        <span className="bold font-md">Criar</span>
        <FiPlusCircle size={16} color="#F2F2F2" />
      </button>
    </InputContainer>
  );
}
