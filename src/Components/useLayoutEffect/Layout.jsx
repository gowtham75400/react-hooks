import { useEffect, useState, useLayoutEffect } from "react"

const Layout = () => {

    const [count, setCount] = useState(0)

    // useEffect(()=>{
    //     console.log("count" , count);
    // },[count]) //Async

    useLayoutEffect(()=>{
        console.log("count" , count);
    },[count]) // same as effect but when we use like animation pro it will help ---> like it works update DOM painting side by side works layout Effect 

    console.log("Rendered");

    return (
        <div>
            {count}
            <button onClick={() => setCount(pre => pre + 1)}>ADD</button>
        </div>
    )
}

export default Layout