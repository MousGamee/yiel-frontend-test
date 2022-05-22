import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import Homes from '../components/Homes'
import SidebarDetails from '../components/SidebarDetails'
import AnimatedPage from './AnimatedPage'
import * as api from '../homeAPI'

const Dashboard = () => {

   
    const [isOpen, setIsOpen] = useState(false);
    const [currentHome, setCurentHome] = useState({})
    const [filter, setFilter] = useState('luxury')
    const [home, setHome] = useState([])

    const { data, isLoading, isError, error, status } = useQuery('homes', api.getHomes)

    //console.log('data => ', data)

    useEffect(() => {
        console.log('donne',data)

        if(!isLoading){
            let filteredData = []
            data.map(item => {
                if(item.type === filter)
                   filteredData.push(item)
            })
            console.log('datas filtered',filteredData)
            setHome(filteredData)
        }
      
    },[home,filter,isLoading])


    const handleClick = (itemId) => {
        let currentItem = data.find(item => item._id === itemId)
        console.log(currentItem)
        if (currentItem) {
            setIsOpen(true)
            setCurentHome(currentItem)
            console.log(currentHome)
        }
    }

if(isLoading){
    return(
        <div className='flex justify-center align-center'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" alt="" />
        </div>
    )
}

if(isError) {
    return(
        <div className='flex justify-center align-center'>
            <p> Something wrong ...</p>
        </div>
    )
}

    return (
        <AnimatedPage >
            <div className='flex max-h-screen'>
                <section className='py-4 px-6 w-full overflow-auto h-screen'>
                    <div className=" flex justify-between">
                        <div className="">
                            <h2 className='text-2xl font-semibold leading-relaxed text-gray-800'>Bonjour John</h2>
                            <span className='text-sm font-medium text-gray-500'>Découvre les meilleurs residences autour de chez toi</span>
                        </div>
                        <div className="  flex bg-neutral-100 rounded-xl px-2 py-2 gap-5 h-1/2">
                            <button className={`text-sm  ${filter === 'luxury' ? 'bg-slate-50' : 'text-gray-500'  } py-1 px-4 rounded-lg`} onClick={() => setFilter('luxury')}>Luxe</button>
                            <button className={`text-sm  ${filter === 'normal' ? 'bg-slate-50' : 'text-gray-500'  } py-1 px-4 rounded-lg`} onClick={() => setFilter('normal')}>Normal</button>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-x-6 py-6">
                        {
                            home?.map(item => {
                                return (
                                    <Homes
                                        item={item}
                                        key={item._id}
                                        handleClick={handleClick}
                                    />

                                )
                            })
                        }

                    </div>
                </section>

                {isOpen ? <SidebarDetails currentHome={currentHome}/> : null}
            </div>
        </AnimatedPage>


    )
}

export default Dashboard