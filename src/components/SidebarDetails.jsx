import { BiBed } from "react-icons/bi"
import { useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { FaVectorSquare, FaBath } from "react-icons/fa"
import { motion } from "framer-motion"
import ReadMoreLess from './ReadMoreLess'
import * as api from '../homeAPI'

const SidebarDetails = ({ currentHome }) => {

    const [offre, setOffre] = useState('')
    const { isLoading, mutate } = useMutation(api.updateOffre)

    const { data : home } = useQuery('detailHome', api.getHomeById(currentHome._id))
    console.log(home)

    const handleSubmit = () => {
        let newOffre = [...currentHome.offre]
        newOffre.push(offre)
        console.log(newOffre)
        mutate(offre)
    }
    return (
        <motion.div initial={{ width: 0 }} animate={{ width: "33%" }}
            className='flex flex-col py-4 px-6 w-1/3 border-l border-gray-200 bg-slate-50 max-h-screen overflow-auto'>
            <h2 className='text-2xl font-semibold leading-relaxed text-gray-800'>Details</h2>
            <img src={currentHome.img} alt="" class=" w-full  rounded-xl mb-4 " />
            <div class="">
                <p className='text-xl font-semibold leading-relaxed text-gray-800'>{currentHome.name}</p>
                <span class="font-semiboldtext-xl inline-block mb-3">2000 000</span>
                <div class="flex gap-5 mb-3">
                    <div className='text-xs'>
                        <div className='flex gap-x-2 items-center text-gray-600'>
                            <BiBed />
                            {currentHome.room}
                        </div>
                        <span className='text-gray-400'>chambre</span>
                    </div>
                    <div className='text-xs'>
                        <div className='flex gap-x-2 items-center text-gray-600'>
                            <FaBath />
                            {currentHome.sdb}
                        </div>
                        <span className='text-gray-400'>SDB</span>
                    </div>
                    <div className='text-xs'>
                        <div className='flex gap-x-2 items-center text-gray-600'>
                            <FaVectorSquare />
                            {currentHome.surface}
                        </div>
                        <span className='text-gray-400'>Surface</span>
                    </div>
                </div>
            </div>
            <h2 className='text-xl font-semibold leading-relaxed text-gray-800'>Desciption</h2>

            <ReadMoreLess>
                {currentHome.description}
            </ReadMoreLess>

            <h2 className='text-xl font-semibold leading-relaxed text-gray-800 mb-2'>Offres</h2>
            <ul>
                {currentHome.offre.map(item => {
                    return (
                        <li>{item}</li>
                    )
                })}

            </ul>
            <label className="relative block mt-3 gap-y-2">
                <span className="sr-only"></span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
                </span>
                <input className=" placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Votre offre" type="text" name="offre"
                    onChange={(e) => setOffre(e.target.value)}
                />
                <button onClick={() => handleSubmit()} className='bg-sky-400  w-full text-white font-semibold rounded-md py-2 mt-2' disabled={offre.length < 0} > Faire une offre</button>
            </label>
        </motion.div>
    )
}

export default SidebarDetails