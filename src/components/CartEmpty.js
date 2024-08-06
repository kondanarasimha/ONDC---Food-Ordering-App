import { Link } from "react-router-dom"

export const CartEmpty = ()=> {
  return(
    <div>
      <h1 className="text-center mb-2 text-2xl">Your cart is empty</h1>
      <div>
      <div className="flex p-1 rounded-sm justify-center">
      <Link to ='/'><button className="align-middle text-xl font-semibold bg-orange-400 text-white w-80 h-8 rounded-md active:opacity-95">See restaurants near you</button></Link>
      </div>
      </div>
    </div>
  )
}