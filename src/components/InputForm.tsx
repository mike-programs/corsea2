import Image from 'next/image'
import submit from '../../public/icons/email-arrow.svg'

export default function InputForm() {
    return (
        <div>
            <form className='flex gap-3 md:gap-0 md:border-b-[1px] border-black'>
                <input type="text" placeholder='E-mail address' className='bg-gray-500 bg-opacity-10 md:bg-transparent placeholder-black placeholder md:w-20 basis-full px-0 py-2 outline-none' />
                <Image src={submit} width={30} height={30} alt='submit arrow' className='cursor-pointer' />
            </form>
        </div>
    )
}
