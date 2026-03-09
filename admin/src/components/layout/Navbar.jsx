import React, { useContext } from 'react'
import {assets} from "../../assets/assets.js"
import AdminContext from '../../context/AdminContext.jsx'
function Navbar() {
  const {setToken} = useContext(AdminContext)
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
      <img className='w-[10%]' src={assets.logo} alt="" />
      <button onClick={()=>setToken("")} className='bg-gray-600 text-white px-5 py-2 sm:px-7 rounded-full'>Logout</button>
    </div>
  )
}

export default Navbar
