import { X } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import OrderCard from './orderCard'
import { CartContext } from '@/context/cartContext'
import { toast } from 'react-toastify'

const Cart = ({ setMenu, menu }) => {

  const { cartItem } = useContext(CartContext)
  const [quantity, setQuantity] = useState({})
  const [subTotal, setSubTotal] = useState(0)
  const [tax, setTax] = useState(0)
  const [total, setTotal] = useState(0)
  const [DeliveryCharges, setDeliveryCharges] = useState(0)

  const changeQuantity = (id, value) => {
    setQuantity(prev => (
      { ...prev, [id]: value }
    ))
  }

  useEffect(() => {
    const subTotal = cartItem.reduce((total, item) => {
      const qty = quantity[item.id] || 0
      return total + (item.price * qty)
    }, 0)

    setSubTotal(subTotal)
    setTax(subTotal / 100)
    setDeliveryCharges(subTotal > 0 ? 300 : 0)
    setTotal(subTotal + DeliveryCharges + tax)

  }, [quantity, cartItem, DeliveryCharges])


  return (
    <div className={`w-full overflow-auto py-10 px-4 max-w-[500px] shadow fixed top-0 right-0 ${menu ? 'translate-x-0' : 'translate-x-full'} bg-white h-screen transition-all duration-500`}>
      <header className='flex justify-between text-green-600 mb-6'>
        <h3 className='text-xl font-semibold'>Order Item</h3>
        <X className='font-bold cursor-pointer hover:text-red-400 hover:scale-110 transition-all duration-200' onClick={() => setMenu(false)} />
      </header>
      {
        cartItem.length < 1 ? <h1 className='text-green-600 text-xl text-center absolute top-1/2 left-1/2 -translate-1/2 font-bold'>Your cart is empty. Add something first.</h1> :
          <>
            <div className='flex flex-col gap-y-2'>
              {
                cartItem.map((item, idx) => (
                  <OrderCard item={item} idx={idx} changeQuantity={changeQuantity} quantity={quantity[item.id] || 0} key={item.id} />
                ))
              }
            </div>
            <div className='flex flex-col border-t-2 border-b-2 mt-4 py-5 font-semibold px-4'>
              <div className='flex justify-between'>
                <span className='text-zinc-800'>Subtotal</span>
                <span className='text-green-500'>Rs {subTotal}/-</span>
              </div>
              <div className='flex justify-between'>
                <span className='text-zinc-800'>Delivery Fee</span>
                <span className='text-green-500'>Rs {DeliveryCharges}/-</span>
              </div>
              <div className='flex justify-between'>
                <span className='text-zinc-800'>Taxes</span>
                <span className='text-green-500'>Rs {tax}/-</span>
              </div>
            </div>
            <div className='px-4'>
              <div className='flex justify-between py-4'>
                <span className='text-lg font-semibold'>TOTAL</span>
                <span className='text-lg font-semibold text-green-500'>Rs {total}/-</span>
              </div>
              <button className='py-2 rounded-lg bg-green-500 w-full text-white font-semibold cursor-pointer' onClick={() => toast.success("Order Place Successfully...!")}>
                Place Order
              </button>
            </div>
          </>
      }
    </div>
  )
}

export default Cart