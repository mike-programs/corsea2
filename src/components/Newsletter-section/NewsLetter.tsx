import Image from 'next/image'

export default function NewsLetter() {
    return (
        <div className='hidden md:block'>
            <Image src='/images/newsletter-background.png' alt='newsletter background' height={900} width={900} className='w-full' />
        </div>
    )
}
