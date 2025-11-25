import React, { useContext, useState } from 'react'
import { Hamburger } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { Search } from 'lucide-react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { UserContext } from '@/context/userContext';
import { CartContext } from '@/context/cartContext';

const Navbar = ({setMenu }) => {

    const {setInput} = useContext(UserContext)
    const {cartItem} = useContext(CartContext)

    return (
        <header className='h-[100px]'>
            <nav className='flex justify-between items-center h-full px-5 bp400:px-10 sm:px-15 md:gap-x-20 sm:gap-x-10 gap-6'>
                <div className='bg-white rounded-lg sm:p-3 p-2 hover:bg-green-100 transition-all duration-300 cursor-pointer'>
                    <Hamburger className='sm:w-6 sm:h-6 h-4 w-4 text-green-600' />
                </div>
                <div className='grow relative'>

                    <Label htmlFor="search">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                    </Label>
                    <Input placeholder={"Search"} className='bg-white pl-10' id={'search'} onChange={(e) => setInput(e.target.value)} autoComplete={'off'} />
                </div>
                <div className='bg-white rounded-lg sm:p-3 p-2 relative hover:bg-green-100 transition-all duration-300 cursor-pointer' onClick={() => setMenu(true)}>
                    <ShoppingCart className='sm:w-6 sm:h-6 h-4 w-4 text-green-600' />
                    <span className='text-green-600 absolute sm:top-[0.5px] sm:right-[18px] -top-[3px] right-[11px] text-xs'>{cartItem.length}</span>
                </div>
            </nav>
        </header>
    )
}

export default Navbar