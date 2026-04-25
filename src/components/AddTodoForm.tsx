import { useState } from "react"

  interface AddTodoFormProps{

    onSumit : (title:string) => void;
  }



export default function AddTodoForm({onSumit}: AddTodoFormProps)
{


  const [input,setInput] = useState('');

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    console.log(input);

    if(!input.trim()) return;
    onSumit(input);
    setInput('');
  }

  return(
    <form className="flex" onSubmit={handleSubmit}>
        <input placeholder="할일을 입력해주세요" className="rounded-s-md grow border border-gray-400 p-2" type="text" 
        value={input}
        onChange={(e)=> setInput(e.target.value)}/>
        <button type="submit" className="w-16 p-2 bg-slate-900 rounded-e-md text-white hover:gb-slate-800" 
        
        > ADD </button>

    </form>


  )
}