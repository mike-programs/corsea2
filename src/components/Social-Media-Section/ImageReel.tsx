import Image from 'next/image'
import { instaImages } from '@/utils/data'

export default function ImageReel() {
    return (
        <div className='flex gap-2 md:gap-0 md:overflow-auto overflow-scroll md:justify-between'>
            {
                instaImages.map((instaImage, index) => (
                    <Image
                        key={index}
                        src={instaImage.imgsrc}
                        width={instaImage.size}
                        height={instaImage.size}
                        alt='instagram image'
                    />
                ))
            }
        </div>
    )
}