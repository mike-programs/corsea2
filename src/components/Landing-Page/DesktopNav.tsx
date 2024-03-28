import Image from "next/image"

export default function DesktopNav() {
    return (
        <div>
            <nav className='p-4 md:p-0 uppercase font-bold md:static flex flex-row md:justify-between md:py-8 md:px-16'>
                <div className="md:flex md:flex-row md:gap-8">
                    <div className="flex mb-4 md:mb-0 justify-between md:static">
                        <Image src="/logos/corsea-logo.png" alt="corsea logo" width={92} height={15} className="cursor-pointer"></Image>
                    </div>

                    <p className="cursor-pointer">home</p>
                    <p className="cursor-pointer">pages</p>
                    <p className="cursor-pointer">shop</p>
                    <p className="cursor-pointer">portfolio</p>
                    <p className="cursor-pointer">blog</p>

                </div>

                <div className="md:flex md:gap-8">
                    <div className="flex  gap-2 cursor-pointer">
                        <p className="my-auto">search</p>
                        <Image src="icons/search.svg" alt="search icon" width={15} height={15}></Image>
                    </div>
                    <div className="flex gap-2 cursor-pointer">
                        <p className="md:my-auto">cart</p>
                        <Image src="icons/cart.svg" alt="cart icon" width={15} height={15}></Image>
                    </div>
                    <div className="hidden md:flex md:gap-1 cursor-pointer">
                        <Image src="icons/save.svg" alt="saved items icon" width={15} height={15}></Image>
                        <p className="hidden md:block md:my-auto">0</p>
                    </div>
                    <div className="hidden md:block cursor-pointer">
                        <Image src="/icons/profile.svg" alt="profile icon" width={15} height={15}></Image>
                    </div>
                </div>
            </nav>
        </div>
    )
}
