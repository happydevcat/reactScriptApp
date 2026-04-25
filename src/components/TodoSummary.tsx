import type { Todo } from "../types/todos";


interface TodoSummaryProps {
  todos:Todo[];
  deleteAllcompleted: () => void;
}

export default function TodoSummary ( {todos,deleteAllcompleted}: TodoSummaryProps){


  const completedTodos = todos.filter((todo)=> todo.completed);


return (
  <div>
    <p>
      {completedTodos.length} of {todos.length} 을 처리했네요. 
    </p>
    {completedTodos.length > 0 && (
      <button className="text-red-400 hover:underline text-sm font-semibold" onClick={deleteAllcompleted}>  모든 한 일 삭제 </button>
    )}

  </div>

)

}