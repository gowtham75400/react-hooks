import { useCallback, useState } from "react"
import Header from "./Header"

const Main = () => {

    const [count, setCount] = useState(0)

    // const newone = () => {
    //     console.log("header rendering...")
    // }

    const newone = useCallback(()=>{},[])

  return (
    <div>
        <Header newone={newone}/>
        <h1>{count}</h1>
        <button onClick={()=> setCount((pre)=> pre+1)}>click</button>
    </div>
  )
}

export default Main