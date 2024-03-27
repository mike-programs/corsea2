import Image from 'next/image'
import logo from '../../../public/logos/corsea-logo.png'
import InputForm from '../InputForm'
import Copywrite from './Copywrite'

export default function Footer() {
    return (
        <div className='bg-gray-500 bg-opacity-10 md:bg-transparent'>
            <div className='p-2 flex flex-col gap-6 md:gap-0 md:grid md:grid-cols-6 md:mx-24 mb-16'>
                <div className='flex flex-col gap-5'>
                    <Image src={logo} alt='corsea logo' width={92} height={15} />
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
                </div>
                <div className='flex flex-col md:gap-5'>
                    <h3 className='uppercase font-medium md:font-normal'>support</h3>
                    <div className='flex flex-col md:gap-2'>
                        <p className='capitalize'>help & contact us</p>
                        <p className='capitalize'>return & refunds</p>
                        <p className='capitalize'>online stores</p>
                        <p className='capitalize'>privacy policy</p>
                    </div>
                </div>
                <div className='flex flex-col md:gap-5'>
                    <h3 className='uppercase font-medium md:font-normal'>company</h3>
                    <div className='flex flex-col gap-2'>
                        <div className='w-12 h-3 bg-black'></div>
                        <div className='w-8 h-3 bg-black'></div>
                        <div className='w-6 h-3 bg-black'></div>
                        <div className='w-8 h-3 bg-black'></div>
                    </div>
                </div>
                <div className='flex flex-col md:gap-5'>
                    <h3 className='uppercase font-medium md:font-normal'>locations</h3>
                    <div className='flex flex-col md:gap-2'>
                        <p>Vienna, Hansalgasse, Austria</p>
                        <p>Berlin, Buschallee, Germany</p>
                        <p>The Piazza, London, UK</p>
                    </div>
                </div>
                <div className='col-span-2'>
                    <h3 className='capitalize text-lg md:text-sm font-medium mb:2 md:mb-5 p-0'>get the latest news</h3>
                    <InputForm />

                </div>

            </div>
            <hr className="border-t-black" />
            <Copywrite />
        </div>
    )
}
