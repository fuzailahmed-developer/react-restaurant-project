import Cart from '@/components/my_com/Cart'
import Items from '@/components/my_com/Items'
import Menu from '@/components/my_com/menu'
import Navbar from '@/components/my_com/Navbar'
import React, { useState } from 'react'


const Home = () => {

  const [menu,setMenu] = useState(false);

  return (
    <div className='min-h-screen bg-slate-200'>
        <Navbar setMenu={setMenu} />
        <Menu />
        <Items />
        <Cart setMenu={setMenu} menu={menu}/>
    </div>
  )
}

export default Home