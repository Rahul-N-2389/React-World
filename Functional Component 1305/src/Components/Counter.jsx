import { useState } from "react"

function Counter(){
    
    const[Count,setCount]=useState(0)
    const incBtn=()=>{
        setCount(Count+1)
    }

    return(
        <div>
            <h1>Counter</h1>
            <h1>{Count}</h1>
            <button onClick={incBtn}>Inc</button>
            <button onClick={()=>setCount(Count=0)}>Rst</button>
            <button onClick={()=>setCount(Count-1)}>Dec</button>
        </div>
    )
}
export default Counter