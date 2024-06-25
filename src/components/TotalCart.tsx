import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { Slider } from "./Slider";

export function TotalCart(){

    const {cartQuantity} = useCart()
    const [active,setActive] = useState<boolean>(false);
    return <>
    <div className="relative" onClick={()=>setActive(!active)}>
        <span>
            <FaShoppingCart className="text-3xl"  style={{color: cartQuantity !== 0 ? 'blue':'black'}}/>
        </span>
        <span className="absolute -bottom-1 right-0 bg-orange-500 rounded-3xl p-1 text-[9px] font-bold">{cartQuantity}</span>
    </div>
    {active && <Slider setActive={setActive} active={active} />}
    </>
}