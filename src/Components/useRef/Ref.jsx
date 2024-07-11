import { useEffect, useRef, useState} from "react"

const Ref = () => {

    const [count, setCount] = useState(0)

    const number = useRef(0)

    useEffect(()=>{
        number.current = number.current+1;
    })

    function Increment(){
        setCount((curr)=>curr+1)
    }
    function Decrement(){
        setCount((curr)=>curr-1)
    }

    console.log("Rendering");
    return (
        <div>
            <button onClick={Increment}>+</button>
            {count}
            <button onClick={Decrement}>-</button>
            <h2>Rendered : {number.current}</h2>
        </div>
    )
}

export default Ref