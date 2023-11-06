import { useEffect, useRef, useState } from "react"
import {gsap} from "gsap"

const MAXIMUN_COUNTE = 10;


export const CounterEffect = () => {
    const [contador, setContador] = useState<number>(5)
    const counterElemnt = useRef<HTMLHeadingElement>(null)

    const handlerClick = (numero:number)=>{
        setContador(prev => Math.min(prev + numero, MAXIMUN_COUNTE))
    }

    useEffect(() => {
        if(contador >= MAXIMUN_COUNTE){
            setContador(10)
            gsap.to(counterElemnt.current, {y: -10, duration:0.5, ease:""})
            .then(()=>{
                gsap.to(counterElemnt.current, {y: 0, duration:0.5, ease:"bounce.out"})
            })
            
            
        }


    }, [contador])
    

  return (
    <>
        <h1 className="text-2xl mt-6">CounterEffect:</h1>
        <h2 ref={counterElemnt} className="text-2xl">{contador}</h2>

        <button
        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        onClick={()=>{
            handlerClick(1)
        }}
        >+1</button>
        <button
        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        onClick={
            ()=>{
                setContador(0)
            }
        }
        >Reset</button>
        <button
        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        onClick={()=>{
            handlerClick(-1)
        }}
        >-1</button>
    </>
  )
}
