import React from 'react'
import arrow from '../../assets/Group.png'
import link from '../../assets/link.png'
import equal from '../../assets/equal.png'
import Contents from './Contents'
import fourdots from '../../assets/fourdots.png'
import '../../App.css'
import grp from '../../assets/grouped.png'

const ContentHeader = () => {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet"></link>
      <div className="flex items-center justify-between">
        <div className='my-15 mx-15 flex items-center'>
          <strong className='text-6xl'>Mobile App</strong>
          <div className='my-3 mx-3 px-3 py-3 rounded-2xl bg-violet-200'><img src={arrow} alt="" /></div>
          <div className='my-3 mx-3 px-3 py-3 rounded-2xl bg-violet-200'><img src={fourdots} alt="" /></div>
        </div>
        <div className='my-10 mx-10 flex items-center gap-5'>
          <div className='my-3 mx-3 px-1 py-0 rounded-md bg-violet-200 text-violet-700 font-bold'>+</div>
          <p className='invite font-bold text-violet-700'>Invite</p>
          <img src={grp} alt="" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <form class="max-w-sm mx-auto flex gap-5">
          <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
          <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </form>
        <div>
          <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Light</button>
        </div>
        <div className="border-[0.3px] border-gray-300 h-8"></div>
        <div className='my-3 mx-3 px-3 py-3 rounded-2xl bg-violet-800'><img src={equal} alt="" /></div>
        <div className='my-3 mx-3 px-3 py-3 rounded-2xl bg-white'><img src={fourdots} alt="" /></div>
      </div>
      <div className='flex items-center justify-between'>
        <div className='my-15 mx-15 flex items-center w-2xs bg-violet-200 rounded-lg'>
          <Contents />
        </div>
      </div>
    </div>
  )
}

export default ContentHeader
