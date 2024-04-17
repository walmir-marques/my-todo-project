import Button from "./Button";

const Todo = ({ todo }) => {
  return (
    <div className="flex justify-between bg-gray-100 p-4 m-4">
      <div>
        <h2>({todo.text})</h2>
        <h3>{todo.category}</h3>
      </div>
      <div className="flex gap-2">
        <Button color="green">Completar</Button>
        <Button color="red"> X </Button>
      </div>
    </div>
  );
};
export default Todo;
