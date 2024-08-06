import { useSelector } from "react-redux";
import { CartItems } from "./CartItems";
import { CartEmpty } from "./CartEmpty";

export const Cart = ()=> {
  const cartItemsData = useSelector((store)=> store.cart.items);
  return(
    <div className="py-28 px-52">
      {cartItemsData.length === 0 ? <CartEmpty/> : <CartItems data={cartItemsData}/>}
    </div>
  )
}