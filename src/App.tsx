import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { CartContextProvider } from "./context/CartContext";
import "./App.css"
function App() {
  return (
    <>
      <CartContextProvider>
      <Navbar />
      <Outlet />
      </CartContextProvider>
    </>
  );
}

export default App;
