import { useState } from "react"
import '../App.jsx'
import '../Components/counter.css'

const counter = () => {
     const [count , setCount] = useState(0);

    const handleClick = () =>{
        setCount(count => count + 1)
        console.log('click...');
    }

    const handleDec = () =>{
        if(count === 0){
            alert('Value cannot be negative!!..');
        }
        else{
            setCount(count => count - 1)
        }
        console.log('click..');
    }

    const handlereset = () =>{
        setCount(count => 0)
        console.log('set..');
    }

    return(
        <div className="counter">
            <h1>Counter app : {count}</h1>
            <button onClick={handleClick}>Increment</button>
            <button onClick={handleDec}>Decrement</button>
            <button onClick={handlereset}>Reset</button>
        </div>
    )
}
export default counter;