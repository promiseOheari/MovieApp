import React from 'react'
import { IoSearchOutline } from "react-icons/io5";

function Search() {
  return (
    <div className='flex items-center justify-center w-[20%] border-black border-[1px] bg-slate-200 rounded-[10px] px-[15px] py-[2px]'>
        <input placeholder='search movie...' className=' mr-[10px] outline-none rounded-[10px] bg-slate-200'/>
      
        <IoSearchOutline  size={16} className='bg-slate-200'/> 
    </div>
  )
}

export default Search