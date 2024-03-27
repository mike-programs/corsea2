import Image from 'next/image'
import xWhite from '../../../public/images/X.png'
import background from '../../../public/images/background-overlay.png'

export default function Background() {
    return (
        <div className='hidden md:block'>
            <Image src={background} alt='background image' width={1200} height={1200} className='w-full border border-black'></Image>
            <div className='absolute top-[40%] left-[35%] min-w-min flex flex-col gap-4'>
                <div className='md:flex gap-5'>
                    <p className='text-3xl text-white uppercase'>onyx</p>
                    <Image src={xWhite} alt='background image' width={10} height={10} className='self-center' ></Image>
                    <p className='text-3xl text-white uppercase'>the flow</p>
                </div>
                <p className='text-white underline underline-offset-4 uppercase self-center cursor-pointer'>read more</p>
            </div>
        </div>
    )
}
