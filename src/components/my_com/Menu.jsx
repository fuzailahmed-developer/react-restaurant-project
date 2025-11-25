import React, { useContext } from 'react'
import { categoryMenu } from '@/lib/category';
import { UserContext } from '@/context/userContext';

const Menu = () => { 

    const {setCategory , category} = useContext(UserContext)


    return (
        <div className='max-w-[1200px] mx-auto my-5 flex justify-between px-10 lg:px-0 md:flex-nowrap flex-wrap gap-x-1 gap-y-3'>
            {
                categoryMenu.map((item) => (
                    <div className={`w-20 h-20  rounded-xl text-green-600 flex justify-evenly items-center flex-col text-center mx-auto cursor-pointer hover:bg-green-100 transition-all duration-300 font-bold p-0.5 ${item.food_category == category ? 'bg-green-100' : 'bg-white'}`} key={item.id} onClick={() => setCategory(item.food_category)}>
                        <item.icon/>
                        <p >{item.name}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Menu