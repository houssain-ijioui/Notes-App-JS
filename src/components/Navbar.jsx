import Link from 'next/link';
import React from 'react'
import { FaRegPenToSquare } from "react-icons/fa6";



const Navbar = () => {
  return (
    <div className='flex'>
        <div className='py-4 w-11/12 ml-32'>
            <Link href="/" className='flex w-32'>
                <FaRegPenToSquare size={30}  />
                <h1 className='font-bold text-lg mt-1'>Notes</h1>
            </Link>
        </div>
    </div>
  )
}

export default Navbar