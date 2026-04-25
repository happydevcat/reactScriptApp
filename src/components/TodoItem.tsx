import type { Todo } from "../types/todos"
import { Trash2 } from "lucide-react";


interface TodoItemProps{
  todo:Todo;
  onCompletedChanged : (id: number, completed:boolean) => void;
  onDeleted : (id:number) =>void;

}

export default function TodoItem({todo, onCompletedChanged, onDeleted}:TodoItemProps){

  return (
    <div className="flex items-center gap-1">
      <label className="flex item-center gap-2 border-gray-400 border rounded-m p-2  bg-wite hover:bg-slate-500">
        <input type="checkbox" className="scale-125" checked ={todo.completed} 
        
        onChange={(e) => onCompletedChanged(todo.id, e.target.checked)}
        />
        <span className ={todo.completed ? "line-through text-gray-400":""}>{todo.title}</span>
      </label>
      <button className="p-2" onClick={() => onDeleted(todo.id)}>
        <Trash2 size={20}  className="text-gray-500" />
      </button>

      
    </div>
  )
}