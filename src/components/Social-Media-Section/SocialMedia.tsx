import React from 'react'
import ImageReel from './ImageReel'
import Features from './Features'

export default function SocialMedia() {
    return (
        <div>
            <div className='mx-2 md:mx-32 my-4'>
                <p className='font-medium md:font-normal md:text-xl'>Instagram</p>
                <p>Follow us on @qodeinteractive</p>
            </div>
            <ImageReel />

            <Features />
        </div>
    )
}
