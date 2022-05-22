import axios from 'axios'
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import Homes from '../components/Homes'
import SidebarDetails from '../components/SidebarDetails'
import { datas } from '../fakedata'
import AnimatedPage from './AnimatedPage'



const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [home, setHomes] = useState([])
    const [currentHome, setCurentHome] = useState({})



    const fetchHomes = async () => {
        await axios.get('http://localhost:8000/homes').then(result => {
            console.log('from axios', result.data)
            setHomes(result.data)
        })
    }

    const isActive = "text-sm bg-slate-50  py-1 px-4 rounded-lg";
    const { data, status } = useQuery('homes', fetchHomes)

    console.log('data', home)


    const handleClick = (itemId) => {
        let currentItem = home.find(item => item._id === itemId)
        console.log(currentItem)
        if (currentItem) {
            setIsOpen(true)
            setCurentHome(currentItem)
            console.log(currentHome)
        }
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
                            <button className='text-sm bg-slate-50  py-1 px-4 rounded-lg'>Luxe</button>
                            <button className='text-sm text-gray-500'>Normal</button>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-x-6 py-6">
                        {
                            home.map(item => {
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