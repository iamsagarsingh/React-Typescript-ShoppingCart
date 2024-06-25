import { useState } from "react";

export function useLocalStorage<T>(key:string,initialValue:T){
    const [data,setData] = useState<T>(()=>{
        const jsonData = localStorage.getItem(key)
        if(jsonData !== null) return JSON.parse(jsonData)
        else return initialValue
    })
    function setCart(value: T | ((val: T) => T)){
        if(value instanceof Function){
            value(data)
        }
        else{
            localStorage.setItem(key,JSON.stringify(value))
            setData(value)
        }
    }

    return [data,setCart] as const
}