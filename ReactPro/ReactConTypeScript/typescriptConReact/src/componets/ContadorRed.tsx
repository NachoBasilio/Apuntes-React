import { useReducer } from "react"


const initialState = {
    contador: 0,
}

type ActionType = {type: "decrementar"} | {type: "incrementar"} | {type: "custom", payload: number}

const contadorReducer = (state: typeof initialState, action:ActionType) => {

    switch (action.type) {
        case "incrementar":
            return {
                ...state,
                contador: state.contador +1
            }
        case "decrementar":
            return {
                ...state,
                contador: state.contador -1
            }
        case "custom":
            return {
                ...state,
                contador: action.payload
            }
        default:
            return state
    }
}



export const ContadorRed = () => {
   const [contadorState, dispatch] = useReducer(contadorReducer, initialState)

  return (
    <>
        <h2>Contador: {contadorState.contador}</h2>
        <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        onClick={()=>{
            dispatch({type: "incrementar"})
        }}
        >+1</button>
        <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        onClick={()=>{
            dispatch({type: "decrementar"})
        }}
        >-1</button>
                <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        onClick={()=>{
            dispatch({type: "custom", payload:100})
        }}
        >100</button>
    </>
  )
}
