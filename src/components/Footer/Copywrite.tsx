import React from 'react'

export default function Copywrite() {
    return (
        <div className='mx-2 text-sm uppercase md:flex justify-between py-4 md:mx-24'>
            <div className='flex gap-1'>
                <p>©2023</p>
                <div className='bg-black w-16 h-3 my-auto'></div>
                <p>all rights reserved</p>
            </div>

            <div className='flex gap-3'>
                <p className='font-medium'>eng</p>
                <div className='bg-black h-3 w-[.1rem] my-auto'></div>
                <p className='font-medium'>fra</p>
                <div className='bg-black h-3 w-[.1rem] my-auto'></div>
                <p className='font-medium'>skr</p>
            </div>
        </div>
    )
}
