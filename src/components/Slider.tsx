import { useEffect, useRef } from "react"
import { useCart } from "../context/CartContext"
import { CartItem } from "./CartItem"
import { cartItems } from "../data/cartItems"
import { formatCurrency } from "../utilities/formatCurrency"

interface sliderTypes{
    setActive:React.Dispatch<React.SetStateAction<boolean>>,
    active:boolean,    
}

export function Slider({setActive,active}:sliderTypes){
    const sliderRef = useRef<HTMLDivElement>(null)
    const {cart} = useCart()

    function handleClickOutside(event:MouseEvent){
        if(sliderRef.current && !sliderRef.current.contains(event?.target as Node)){
            setActive(false)
        }
    }

    useEffect(()=>{
        if(active){
            document.addEventListener('mousedown', handleClickOutside);
        }
    },[active])

    return <div ref={sliderRef} className="absolute right-0 top-0 w-3/4 h-screen overflow-y-auto custom-scrollbar bg-slate-200">
        {cart.length ===0 ? <p>No items in cart..</p> : <div>
            <div className="max-h-full">
            {
                cart.map(item => {
                    return <CartItem key={item.id} {...item}/>
                })
            }
            </div>
            <div className="border-b-2 border-b-slate-300 flex justify-between m-2 items-center">
                <p className="text-2xl">Total</p>
                <p>{formatCurrency(cart.reduce((total,c)=>{
                    const items = cartItems.find(i => i.id === c.id)
                    return total + (items?.productPrice || 0) * c.quantity
                },0))}</p>
            </div>
            </div>}
    </div>
}