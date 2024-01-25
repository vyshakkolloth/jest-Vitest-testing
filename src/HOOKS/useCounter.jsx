import { useState } from "react";
export const useCounter=(initailcount =0)=>{
    const [count, setcount] = useState(initailcount)


    const onIncreament=()=>{
        setcount((prev)=>prev+1 ) 
    }


    const onDecreament=()=>{
        setcount((prev)=prev-1)
    }

    return {count,onDecreament,onIncreament}
}