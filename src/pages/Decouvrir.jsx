import React from 'react'
import AnimatedPage from './AnimatedPage'

const Decouvrir = () => {
  return (
    <AnimatedPage>
      <div className='flex  flex-col w-full max-h-screen py-4 px-6 overflow-auto'>
        <h2 className='text-2xl font-semibold leading-relaxed text-gray-800'>Découvrir</h2>
        <span className='text-sm font-medium text-gray-500 inline-block mb-3'>qui nous sommes ?</span>
        <img
          className='rounded h-50'
          src="https://media.istockphoto.com/vectors/devops-icon-set-dev-ops-web-header-banner-vector-id1164120508" alt="" />
        <p className='text-sm font-medium text-gray-500 mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolor vitae necessitatibus iste eaque! Laudantium, laboriosam architecto nesciunt aperiam praesentium, animi debitis a, quasi itaque possimus in ab. Deserunt, perferendisium, laboriosam architecto nesciunt aperiam praesentium, animi debitis a, quasi itaque possimus in ab. Deserunt, perferendis.</p>
        <p className='text-sm font-medium text-gray-500 mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolor vitae necessitatibus iste eaque! Laudantium, laboriosam architecto nesciunt aperiam praesentium, animi debitis a, quasi itaque possimus in ab. Deserunt, perferendis.</p>
        <p className='text-sm font-medium text-gray-500 mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolor vitae necessitatibus iste eaque! Laudantium, laboriosam architecto nesciunt aperiam praesentium, animi debitis a, quasi itaque possimus in ab. Deserunt, perferendis.</p>


      </div>
    </AnimatedPage>
  )
}

export default Decouvrir