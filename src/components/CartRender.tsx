import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { cartTypes } from "../data/cartItems";
import { formatCurrency } from "../utilities/formatCurrency";

export function CartRender({
  id,
  productName,
  productPrice,
  productImg,
}: cartTypes) {
    const {cart,addToCart,removeFromCart,removeAll} = useCart()
    
    const [quantity,setQuantity] = useState<number>(0)

    function getQuantity(id:number){
        let q = 0;
        cart.forEach(item=>{
            if(item.id === id) q=item.quantity
        })
        setQuantity(q)
    }

    useEffect(()=>{
        getQuantity(id)
    },[cart])
    
  return (
    <div className="border p-4 w-full md:w-1/4 md:h-auto m-auto">
      <div>
        <img src={productImg} alt="product" className="object-cover" />
      </div>
      <div className="flex justify-between items-baseline pt-2">
        <span className="text-sm">{productName}</span>
        <span className="text-lg">{formatCurrency(productPrice)}</span>
      </div>
      <div className="text-lg flex justify-center items-center">
        {quantity === 0 ? (
          <button className="bg-sky-300 rounded p-2" onClick={()=>addToCart(id)}>Add to Cart</button>
        ) : (
          <div className="flex items-center justify-center flex-col gap-1">
            <div className="space-x-2 flex flex-row items-center">
              <button className="bg-sky-300 rounded p-2" onClick={()=>removeFromCart(id)}>-</button>
              <p>{quantity}</p>
              <button className="bg-sky-300 rounded p-2" onClick={()=>addToCart(id)}>+</button>
            </div>
            <div>
              <button className="bg-red-400 rounded p-2" onClick={()=>removeAll(id)}>Remove</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
