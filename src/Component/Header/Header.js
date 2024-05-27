import React from 'react'
import App from '../../App'
import { Link, NavLink } from 'react-router-dom'
import Data from './headerData'
import pr from "./header.module.css"
import Search from './Search'

function Header() {
  return (
    <div className={pr.headContainer}>
      <h1 className=' font-abc text-blue-400 font-bold text-[28px] w-[20%]  '>promStudio</h1>
      
      <ul className={pr.ulContainer}>
      {Data.map(((items)=>{
    return(
      
        <NavLink to = {items.path} key={items.id}><li>{items.name}</li></NavLink>
    )
}))}
 </ul>

 <Search/>
    </div>
  )
}

export default Header