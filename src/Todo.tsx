import {useState, useEffect} from "react"
import type {ChangeEvent, MouseEvent} from "react"
import './App.css'

type User ={
  id:number;
  name:string;
}

type TodoInterface = {
  id:number;
  text:string;
  done:boolean;
} 
const Todo = () => {
  const [todos,setTodos] = useState<TodoInterface[]>([]);
  const [text,setText] = useState<string>("");

  const addTodo = () =>{

    if(!text.trim()) return;
    setTodos([...todos, {id:Date.now(), text, done: false}]);
    setText("");
  };

  const toggleTodo = (id:number) =>{
    setTodos(
      todos.map((t) => (t.id === id) ? {...t,done: !t.done} : t )
    )
  };


  const handleChaged = (e:ChangeEvent<HTMLInputElement>) : void =>{
    setText(e.target.value);
  }

  const handAddClick = (e:MouseEvent<HTMLButtonElement>) : void =>{
    e.preventDefault();
    addTodo();
  }

  return (
    <div className="bg-red-300 md:bg-blue-300 lg:bg-green-300 p-4">
        <input type="text" value={text} onChange={handleChaged}
         className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
         placeholder="이름 입력"
        />
        <button onClick={handAddClick}>추가</button>

        <ul className="p-4 space-y-2">
          {
            todos.map( (t) => (
              <li key={t.id} onClick={() => toggleTodo(t.id)} className="p-3 bg-gray-100 rounded hover:bg-gray-200">
                {t.done ? <s>{t.text}</s> :  t.text}
              </li>
              )
            )
          }

        </ul>
    </div>


  )

}

export default Todo