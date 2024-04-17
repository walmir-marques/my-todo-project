import { useState } from "react";
import Button from "./Button";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return;

    addTodo(value, category);

    setCategory("");
    setValue("");
  };

  return (
    <div className="bg-gray-100 p-4 m-4">
      <h2 className="font-bold text-xl">Criar Tarefa:</h2>
      <form className="flex flex-col gap-8 mt-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite o título ..."
          className="p-2"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <select
          className="p-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Financas">Finanças</option>
          <option value="Estudos">Estudos</option>
        </select>
        <Button type="submit" color="yellow">
          Criar Tarefa
        </Button>
      </form>
    </div>
  );
}
export default TodoForm;
