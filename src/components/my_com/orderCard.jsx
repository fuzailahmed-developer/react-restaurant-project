import React, { useContext, useState } from 'react'
import { Trash } from 'lucide-react'
import { CartContext } from '@/context/cartContext'
import { toast } from 'react-toastify'
const OrderCard = ({item, idx , changeQuantity , quantity}) => {


    const {cartItem,setCartItem} = useContext(CartContext)
    

    const deleteItem = (idx) => {
        const data = [...cartItem]
        data.splice(idx,1)
        setCartItem(data)
    }

    const decrease = () => {
        if (quantity > 0) changeQuantity(item.id, quantity - 1) 
        }
    const increase = () => changeQuantity(item.id, quantity + 1 ) 


    return (
        <div className='flex bp400:h-[120px] bg-white shadow-xl rounded p-3 bp400:flex-row flex-col overflow-hidden hover:scale-[103%] transition-all duration-300 border hover:border-green-400'>
            <div className='basis-[35%] '>
                <img src={item.food_image} alt="" className='w-full h-full rounded-2xl bp400:rounded'/>
            </div>
            <div className='basis-[30%] flex flex-col justify-center items-center gap-y-1.5 p-2 text-center'>
                <div>
                    <span className='font-bold'>{item.food_name}</span>
                </div>
                <div className='border border-green-600 text-green-600 *:py-1 *:px-2 rounded *:inline-block select-none'>
                    <span className='cursor-pointer' onClick={decrease}>-</span>
                    <span className='bg-slate-50'>{quantity}</span>
                    <span className='cursor-pointer' onClick={increase}>+</span>
                </div>
            </div>
            <div className='bp400:ml-auto flex bp400:flex-col justify-around'>
                <span className='text-green-700'>Rs {item.price}/-</span>
                <Trash className='ml-auto text-green-700 cursor-pointer hover:text-red-400 transition-all duration-150' onClick={() => {
                    toast.error('Item Delete Successfully...!')
                    deleteItem(idx)
                }}/>
            </div>
        </div>
    )
}

export default OrderCard