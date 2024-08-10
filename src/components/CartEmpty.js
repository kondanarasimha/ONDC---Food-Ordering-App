import { Link } from "react-router-dom"

export const CartEmpty = ()=> {
  return(
    <div className="max-sm:mt-5">
      <div className="flex justify-center items-center">
      <h1 className="mb-2 text-2xl text-center text-nowrap">Your cart is empty</h1>
      </div>
      <div>
      <div className="flex p-1 rounded-sm justify-center">
      <Link to ='/'><button className="align-middle text-xl font-semibold bg-orange-400 text-white w-80 h-8 rounded-md active:opacity-95 max-sm:text-nowrap">See restaurants near you</button></Link>
      </div>
      </div>
    </div>
  )
}