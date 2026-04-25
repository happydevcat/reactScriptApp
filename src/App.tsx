import { useEffect, useState } from "react";
import AddTodoForm from "./components/AddTodoForm"
import { dummyData } from "./data/todos"
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";
import type { Todo } from "./types/todos";



function App() {

  const [todos,setTodos] = useState(()=>{
    const saveTodos: Todo[] = JSON.parse(localStorage.getItem('todos') || '[]');
    return saveTodos.length > 0 ? saveTodos : dummyData;
  });

  useEffect(()=>{

    localStorage.setItem('todos',JSON.stringify(todos))
    console.log('useEffect  설정 Todo {} ', JSON.stringify(todos))
  },[todos])

  const setTodoCompleted = (id:number, completed:boolean) =>{
    console.log(id, completed);
    setTodos((prevTodos) => prevTodos.map(todo => (todo.id === id)? {...todo, completed}: todo))
  }

  const setTodoDeleted = (id:number) =>{

    //console.log("삭제 :::: {%n}",id);
    setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id));
  }


  const setDeletedAllCompleted = ()=>{
    setTodos((prevTods) => prevTods.filter(todo => !todo.completed))

  }

  const addTodo = (title: string) => {
  setTodos((prevTodos) => {
    // 1. 기존 todos 중 가장 큰 id 찾기 (데이터가 하나도 없으면 0을 기본값으로 사용)
    const maxId = prevTodos.length > 0 
      ? Math.max(...prevTodos.map(todo => todo.id)) 
      : 0;

    // 2. 새 항목 추가 (가장 큰 id + 1)
    return [
      {
        id: maxId + 1,
        title,
        completed: false
      },
      ...prevTodos,
    ];
  });
}

  return (
    <>
    <main className="py-8 h-screen space-y-5">
      <h1 className="font-bold"> 나의 일정</h1>
      <AddTodoForm  onSumit={addTodo}/>
      <div className="bg-red-500 text-white text-4xl p-5 max-lg mx-auto">

      <TodoList todos={todos} onCompletedChanged={setTodoCompleted}   onDeleted={setTodoDeleted}  />      

          {/* <div className="space-y-2">
            {todos.map(todo =>(
              <TodoItem key= {todo.id} todo={todo} onCompletedChanged={setTodoCompleted}/>
            ))}
          </div> */}

      <TodoSummary todos={todos} deleteAllcompleted={setDeletedAllCompleted}      />

     </div>
    </main>
    </>
  )
}

export default App
