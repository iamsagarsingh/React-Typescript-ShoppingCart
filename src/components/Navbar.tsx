import { NavLink } from "react-router-dom";
import { TotalCart } from "./TotalCart";

export function Navbar() {
  return (
    <nav className="p-2 bg-slate-100 drop-shadow flex justify-between fixed top-0 left-0 w-full">
      <ul className="flex gap-4 ml-4 text-lg">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Cart</NavLink>
        </li>
      </ul>
      <div>
        <TotalCart />
      </div>
    </nav>
  );
}
