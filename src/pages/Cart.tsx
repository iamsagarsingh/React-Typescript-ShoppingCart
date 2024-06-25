import { CartRender } from "../components/CartRender";
import { cartItems } from "../data/cartItems";

export function Cart(){
    return <div className="text-2xl mt-12 flex flex-col gap-4 md:flex-row md:gap-4 md:flex-wrap">
        {
            cartItems.map(item=>{
                return <CartRender key={item.id} {...item}/>
            })
        }
    </div>
}