import Image from 'next/image'
import boutique from '../../../public/logos/boutique-logo.png'
import ox from '../../../public/logos/ox-logo.png'
import magentle from '../../../public/logos/magentle-logo.png'
import occ from '../../../public/logos/occ-logo.png'
import flowStudio from '../../../public/logos/flow-studio-logo.png'

export default function Logos() {
    return (
        <div className='flex gap-5 md:gap-0 justify-center md:justify-evenly flex-wrap'>
            <Image src={boutique} alt='boutique logo' width={150} height={150} />
            <Image src={occ} alt='boutique logo' width={150} height={150} />
            <Image src={magentle} alt='boutique logo' width={150} height={150} />
            <Image src={flowStudio} alt='boutique logo' width={150} height={150} />
            <Image src={ox} alt='boutique logo' width={150} height={150} />
        </div>
    )
}
