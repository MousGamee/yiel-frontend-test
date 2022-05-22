import React from 'react'
import { BiBed } from 'react-icons/bi'
import { FaBath, FaVectorSquare } from 'react-icons/fa'

const Homes = ({ item , handleClick}) => {
  return (
    <div class="hover:border-sky-400  mt-12 border-2 rounded-xl px-2 py-2  cursor-pointer" onClick={() => handleClick(item._id)}>
                                    <img src={item.img} alt="" class=" w-full h-40 rounded-xl mb-4 " />
                                    
                                        <span class="text-bold text-xl inline-block mb-3">{item.price} €</span>
                                        <div class="flex gap-5">
                                            <div className='text-xs'>
                                                <div className='flex gap-x-2 items-center text-gray-600'>
                                                    <BiBed />
                                                    {item.room}
                                                </div>
                                                <span className='text-gray-400'>chambre</span>
                                            </div>
                                            <div className='text-xs'>
                                                <div className='flex gap-x-2 items-center text-gray-600'>
                                                    <FaBath  />
                                                    {item.sdb}
                                                </div>
                                                <span className='text-gray-400'>SDB</span>
                                            </div>
                                            <div className='text-xs'>
                                                <div className='flex gap-x-2 items-center text-gray-600'>
                                                    <FaVectorSquare />
                                                    {item.surface}m
                                                </div>
                                                <span className='text-gray-400'>Surface</span>
                                            </div>
                                        </div>
                                    </div>
  )
}

export default Homes