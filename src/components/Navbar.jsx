import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiFillBank, AiFillCompass } from 'react-icons/ai'
import {BsHouseDoor} from 'react-icons/bs'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <aside className='flex flex-col py-4 px-6 w-52 border-r border-gray-200  bg-slate-50 '>
      <Link to='/' className='w-24 block flex  items-center text-blue-600'>
        <AiFillBank className='w-50'/>
        <h1 className='text-xl font-semibold gap-x-3'>  Platform</h1>
      </Link>

      <ul className='flex flex-col gap-y-5 pt-12'>
        <li>
          <NavLink to='/' className='flex gap-x-3 items-center group'>
            <BsHouseDoor />
            <span className='inline-block text-sm leading-6 group-hover:text-blue-600'>Dashboard</span>
          </NavLink>
        </li>

        <li>
          <NavLink to='/discover' className='flex gap-x-3 items-center group'>
          <AiFillCompass />
            <span className='inline-block text-sm leading-6 group-hover:text-blue-600'>Découvrir</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  )
}

export default Navbar