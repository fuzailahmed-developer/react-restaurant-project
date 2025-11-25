import { food_items } from '@/lib/food'
import React, { useContext } from 'react'
import { LeafyGreen } from 'lucide-react'
import { HopOff } from 'lucide-react'
import { UserContext } from '@/context/userContext'
import { CartContext } from '@/context/cartContext'
import { toast } from 'react-toastify'

const Items = () => {

    const { filtered } = useContext(UserContext)
    const { cartItem, setCartItem } = useContext(CartContext)

    const handleCart = (item) => {
        const isExist = cartItem.find((cart) => cart.id == item.id)
        console.log(isExist)
        if (isExist) {
            toast.error('Item Already Exist...!')
            return;
        }
        toast.success('Item add Successfully...!')
        setCartItem([...cartItem, item])
    }

    return (
        <div className='max-w-[1400px] mx-auto px-8 flex gap-x-4 flex-wrap justify-evenly gap-y-4 py-5'>
            {
                filtered.map((item) => (
                    <div className='border-2 hover:border-green-300 p-2.5 bg-white rounded-lg w-[320px] min-h-[445px]' key={item.id}>
                        <div className='h-[65%]'>
                            <img src={item.food_image} alt="food" className='w-full h-full rounded-lg' />
                        </div>
                        <div className='flex flex-col  h-[34%]'>
                            <h2 className='font-bold text-lg my-3'>{item.food_name}</h2>
                            <div className='flex justify-between text-green-600 font-semibold bp400:mb-0 mb-2.5'>
                                <span>Rs {item.price}/-</span>
                                <span className='flex gap-x-1'>{item.food_type != 'veg' ? <HopOff /> : <LeafyGreen />} {item.food_type}</span>
                            </div>
                            <button className='mt-auto bg-green-200 py-3 rounded-lg font-bold cursor-pointer hover:bg-green-50 hover:text-green-600 transition-all duration-200 border hover:border-green-500' onClick={() => handleCart(item)}>Add to Cart</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Items