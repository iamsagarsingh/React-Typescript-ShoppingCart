import { useCart } from "../context/CartContext";
import { cartItems, cartTypes } from "../data/cartItems";

interface cartProperties {
  id: number;
  quantity: number;
}

export function CartItem({ id, quantity }: cartProperties) {
  const items:cartTypes | undefined = cartItems.find((i) => ((i.id === id)&& quantity !== 0));
  console.log(items);
  
  const {removeAll} = useCart()

  return (
    quantity!==0 && (<div className="flex gap-2 m-2 items-center border-b-2 border-b-slate-300 p-2">
        <div className="w-1/4 h-auto">
          <img src={items?.productImg} alt="product" className="w-full h-auto" />
        </div>
        <div className="flex justify-between items-center flex-1 ">
          <p className="text-sm mr-1">{items?.productName}</p>
          <div>
            <span className="text-gray-400">x</span>
            <span className="m-1">{quantity}</span>
            <button className="bg-red-400 rounded p-2 text-sm" onClick={()=>removeAll(id)}>Remove</button>
          </div>
        </div>
      </div>)
  );
}
