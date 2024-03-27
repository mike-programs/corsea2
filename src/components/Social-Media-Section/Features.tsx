import Image from 'next/image'
import fastDelivery from '../../../public/icons/fast-delivery.svg'
import freeReturns from '../../../public/icons/free-returns.svg'
import secureCheckout from '../../../public/icons/secure-checkout.svg'
import orderTracking from '../../../public/icons/order-tracking.svg'

export default function Features() {
    return (
        <div className='p-2 my-5 md:p-0 md:flex md:justify-between md:border border-black md:my-20'>
            <div className='p-6 border md:border-r-black basis-full '>
                <div className='flex gap-4 mx-auto max-w-max'>
                    <Image src={fastDelivery} alt='' width={20} height={20} />
                    <p className='uppercase font-medium my-auto'>fast delivery</p>
                </div>
            </div>

            <div className='p-6 border md:border-r-black basis-full'>
                <div className='flex gap-4 m-auto max-w-max'>
                    <Image src={freeReturns} alt='' width={20} height={20} />
                    <p className='uppercase font-medium my-auto'>free returns</p>
                </div>
            </div>

            <div className='p-6 border md:border-r-black basis-full'>
                <div className='flex gap-4 mx-auto max-w-max'>
                    <Image src={secureCheckout} alt='' width={15} height={15} />
                    <p className='uppercase font-medium my-auto'>secure checkout</p>
                </div>
            </div>

            <div className='p-6 border md:border-r-0 basis-full'>
                <div className='flex gap-4 mx-auto max-w-max'>
                    <Image src={orderTracking} alt='' width={20} height={20} />
                    <p className='uppercase font-medium my-auto'>order tracking</p>
                </div>
            </div>
        </div>
    )
}
