import { useRef } from "react"


const Ref2 = () => {

    const inputEle = useRef() //DOM Change

    function handleinput(){
        inputEle.current.style.background = "red"
    }
    console.log("changed");
    return (
        <div>
            <input type="text" ref={inputEle}/>
            <button onClick={handleinput}>Click</button>
        </div>
    )
}

export default Ref2