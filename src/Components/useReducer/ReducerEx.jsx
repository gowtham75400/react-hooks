import { useReducer} from "react"


function reducerFun(state,action){
    switch(action.type){
        case   "In" : {
            return {count : state.count + 1}
        }
        case "dec" : {
            return {count:state.count - 1}
        }
        default :
            return state;
    }
}

const ReducerEx = () => {



    const [state,dispatch] = useReducer(reducerFun , {count:0})

    // const [count, setCount] = useState(0)

    function Increment(){
        // setCount((pre)=>pre+1)
        dispatch({type:"In"})
    }
    function decrement(){
        // setCount((pre)=>pre-1)
        dispatch({type: "dec"})
    }
    return (
        <div>
            <button onClick={Increment}>+</button>
            {state.count}
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default ReducerEx