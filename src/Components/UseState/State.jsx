import { useState } from "react"

const State = () => {

    const [count, setCount] = useState(0)

    function Increment(){
        setCount((curr)=>curr+1)
    }
    function Decrement(){
        setCount((curr)=>curr-1)
    }
    return (
        <div>
            <button onClick={Increment}>+</button>
            {count}
            <button onClick={Decrement}>-</button>
        </div>
    )
}

export default State