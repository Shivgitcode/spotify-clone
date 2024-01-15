import React from 'react'
import { home, logo, search } from '../../assets'

export default function Header() {
  return (
    <div className='bg-[#121212]'>
        <div className="flex flex-col items-start justify-between gap-3">
            <div className='w-full p'>
                <img src={logo} alt="" />
            </div>
            <div>
                <div className='flex flex-row items-start justify-start text-white'>
                <img src={home} alt="" width={"24px"}/><span>Home</span>


                </div>
                <div>
                    <img src={search} alt="" width={"24px"}/><span>search</span>
                </div>
            </div>
        </div>
    </div>
  )
}
