import { CartItem } from "./CartItem"


export const CartItems = (props)=> { 
  return(
    <div key={8}>
      <div className="flex p-1 rounded-sm justify-center">
      <button className="align-middle text-xl font-semibold bg-orange-400 text-white w-80 h-8 rounded-md mb-8 active:opacity-95" onClick={()=> {
        alert('Order Placed Successfully')
      }}>PLACE ORDER</button>
      </div>

      <CartItem data={props.data}/>

    </div>
    )  
}