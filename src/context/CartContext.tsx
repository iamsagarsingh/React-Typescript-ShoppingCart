import { ReactNode, createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface shoppingCartType {
  cart: CartContextType[];
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  removeAll: (id: number) => void;
  cartQuantity: number;
}

const cartContext = createContext({} as shoppingCartType);

interface CartContextType {
  id: number;
  quantity: number;
}

interface cartChildren {
  children: ReactNode;
}

export function CartContextProvider({ children }: cartChildren) {
  const [cart, setCart] = useLocalStorage<CartContextType[]>("cart",[]);

  const cartQuantity = cart.reduce((quantity, item) => {
    return item.quantity + quantity;
  }, 0);

  function addToCart(id: number) {
    const result = cart.find((items) => {
      return items.id === id;
    });
    if (result) {
      const newItem = cart.map((item) => {
        if (item.id === id) {
          item.quantity += 1;
        }
        return item;
      });

      setCart(newItem);
    } else {
      setCart([...cart, { id, quantity: 1 }]);
    }
  }

  function removeFromCart(id: number) {
    const result = cart.find((items) => {
      return items.id === id;
    });
    if (result) {
      const newItem = cart.map((item) => {
        if (item.id === id) {
          item.quantity -= 1;
        }
        return item;
      });

      setCart(newItem);
    } else {
      setCart([...cart]);
    }
  }

  function removeAll(id:number){
    const result = cart.find((items) => {
        return items.id === id;
      });
      if (result) {
        const newItem = cart.filter(item=>{
            return item.id !== id
        })
  
        setCart(newItem);
      } else {
        setCart([...cart]);
      }
  }

  return (
    <cartContext.Provider
      value={{cart, addToCart, removeFromCart, cartQuantity,removeAll}}
    >
      {children}
    </cartContext.Provider>
  );
}

export function useCart() {
  return useContext(cartContext);
}
