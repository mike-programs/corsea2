'use client'
import Image from "next/image"

function toggleMenu() {
}

let isOpen = false;


export default function MobileNav() {
    return (

        <div>
            <div>
                <div className="flex justify-between  absolute top-0 px-4 py-4 w-full left-0">
                    <Image src="/logos/corsea-logo.png" alt="corsea logo" width={92} height={15} className="cursor-pointer"></Image>

                    <Image src='/icons/fast-delivery.svg' width={50} height={50} alt="close menu" />
                </div>
            </div>
        </div>
    )
}


