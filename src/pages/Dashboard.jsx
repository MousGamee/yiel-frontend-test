import React from 'react'
import { BiBed } from 'react-icons/bi'
import { FaBath, FaVectorSquare } from 'react-icons/fa'

const Dashboard = () => {

    const data = [
        {
            id: Date.now(),
            img: 'https://picsum.photos/200',
            price: '280 000',
            room: 6,
            sdb: 5,
            surface: 5000
        },
        {
            id: Date.now(),
            img: 'https://picsum.photos/200',
            price: '280 000',
            room: 6,
            sdb: 5,
            surface: 5000
        },
        {
            id: Date.now(),
            img: 'https://picsum.photos/200',
            price: '280 000',
            room: 6,
            sdb: 5,
            surface: 5000
        },
        {
            id: Date.now(),
            img: 'https://picsum.photos/200',
            price: '280 000',
            room: 6,
            sdb: 5,
            surface: 5000
        },
        {
            id: Date.now(),
            img: 'https://picsum.photos/200',
            price: '280 000',
            room: 6,
            sdb: 5,
            surface: 5000
        },
        {
            id: Date.now(),
            img: 'https://picsum.photos/200',
            price: '280 000',
            room: 6,
            sdb: 5,
            surface: 5000
        },

    ]
    return (
        <div className='flex w-full max-h-screen'>
            <section className='py-4 px-6 w-full overflow-auto h-screen'>
                <div className=" flex justify-between">
                    <div className="">
                        <h2 className='text-2xl font-semibold leading-relaxed text-gray-800'>Bonjour John</h2>
                        <span className='text-sm font-medium text-gray-500'>Découvre les meilleurs residences autour de chez toi</span>
                    </div>
                    <div className="bg-slate-300 rounded-xl px-6 gap-5">
                        <button className='text-sm bg-slate-50 p-4'>Luxe</button>
                        <button className='text-sm  p-4'>Normal</button>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-x-6 py-6">
                    {
                        data.map(item => {
                            return (
                                <div class="border hover:border-sky-400  mt-12 border-2 rounded-xl px-2 py-2">
                                    <img src={item.img} alt="" class=" w-full h-40 rounded-xl mb-4 " />
                                    <div class="">
                                        <span class="text-bold text-xl inline-block mb-3">2000 000</span>
                                        <div class="flex gap-5">
                                            <div className='text-xs'>
                                                <div className='flex gap-x-2 items-center text-gray-600'>
                                                    <BiBed />
                                                    6
                                                </div>
                                                <span className='text-gray-400'>chambre</span>
                                            </div>
                                            <div className='text-xs'>
                                                <div className='flex gap-x-2 items-center text-gray-600'>
                                                    <FaBath />
                                                    6
                                                </div>
                                                <span className='text-gray-400'>SDB</span>
                                            </div>
                                            <div className='text-xs'>
                                                <div className='flex gap-x-2 items-center text-gray-600'>
                                                    <FaVectorSquare />
                                                    6
                                                </div>
                                                <span className='text-gray-400'>Surface</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </section>


            <div className='flex flex-col py-4 px-6 w-1/3 border-l border-gray-200'>
                <h2>Details</h2>
                <img src="https://picsum.photos/200" alt="" class=" w-full h-50 rounded-xl mb-4 " />
                <div class="">
                    <span class="text-bold text-xl inline-block mb-3">2000 000</span>
                    <div class="flex gap-5">
                        <div>
                            <div>
                                <i>icone</i>
                                6
                            </div>
                            <span>chambre</span>
                        </div>
                        <div>
                            <div>
                                <i>icone</i>
                                6
                            </div>
                            <span>chambre</span>
                        </div>
                        <div>
                            <div>
                                <i>icone</i>
                                6
                            </div>
                            <span>chambre</span>
                        </div>
                    </div>
                </div>
                <h2>Desciption</h2>

                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi veniam natus unde amet consequatur eveniet excepturi possimus! Quaerat veniam, molestias eius maiores itaque consequuntur enim id? Quasi saepe quae numquam.</p>

                <h2>Offres</h2>
                <ul>
                    <li>200 000</li>
                    <li>200 000</li>

                </ul>
                <label className="relative block">
                    <span className="sr-only"></span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
                    </span>
                    <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Votre offre" type="text" name="offre" />
                </label>
            </div>
        </div>


    )
}

export default Dashboard