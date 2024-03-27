
import Image from 'next/image'
import quotes from '../../../public/icons/quote.svg'
import leftArrow from '../../../public/icons/left-arrow.svg'
import rightArrow from '../../../public/icons/right-arrow.svg'
import x from '../../../public/icons/x.svg'
import Logos from './Logos'
import Background from './Background'

export default function LogoSection() {
    return (
        <div className='px-2 md:px-0 md:mx-32 flex flex-col gap-28'>
            <div>
                <Image src={quotes} height={30} width={30} alt="quote image" className='mx-auto mt-28 mb-5' />
                <div className='flex justify-between'>
                    <Image src={leftArrow} alt='left arrow' width={15} height={15} className='cursor-pointer hidden md:block' />
                    <p className='md:basis-1/2 py-4 text-center md:text-xl font-medium'>
                        Accusantium doloremque laudantium, totam rem aperiam.
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
                    </p>
                    <Image src={rightArrow} alt='right arrow' width={15} height={15} className='cursor-pointer hidden md:block' />
                </div>
                <Image src={x} alt='right arrow' width={10} height={10} className='mx-auto my-4' />
                <div>
                    <Logos></Logos>
                </div>
            </div>

            <div className='relative'>
                <Background />
            </div>
        </div>
    )
}
