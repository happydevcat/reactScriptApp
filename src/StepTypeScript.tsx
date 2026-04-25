
import { useState ,useEffect} from "react";
import type { ChangeEvent } from "react";


type GreetingPros = {
  name: string;
}

const StepTypeScript = ({name} : GreetingPros)=>{

  const [email,setEmail] = useState<string>();
  const [count,setCount] = useState<number>(0);
  const [time,setTime] = useState<string>(new Date().toLocaleTimeString());

  
  useEffect(()=>{

    const timer = setInterval(()=>{
      setTime(new Date().toLocaleTimeString());
    },1000);

    return () => clearInterval(timer)
  },[]);


  const handleChaged = (e: ChangeEvent<HTMLInputElement>) =>{
    setEmail(e.target.value); 
  }

  return (<div> 
            <h1> Hello.  React + TypeScript !!</h1>
            <h2> {time }</h2>
            <h1> 멋쟁이님 {name} </h1>
            <h1> 현재 카운트 : {count}</h1>
            <button onClick={() => setCount(count+1)}> 증가해보자</button>
            <input type="email" value={email} onChange={handleChaged} />
            <h1> 입력된 EMAIL:  {email}</h1>

          </div>
    );
}

export default StepTypeScript