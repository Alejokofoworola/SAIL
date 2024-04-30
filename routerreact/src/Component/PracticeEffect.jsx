
import { useEffect, useState } from "react";

const PracticeEffect =()=>{
    const [count, setCount] =useState(0)
    useEffect(()=>{
        setTimeout(setCount((count)=>count+1),100)
    },[]
    )
    return(
        <>
        <h1>{count}</h1>
        <button onClick={addEventListener}>addition</button>
        </>
    )
}

export default PracticeEffect