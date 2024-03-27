import gridItems from "@/utils/data"
import Image from "next/image"

//

function GridCards() {
    return (
        <div className="flex my-8 md:my-0 overflow-scroll md:overflow-visible gap-3 md:gap-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:mb-32 text-xs md:text-base">
            {gridItems.map((gridItem, index) => (
                <div className="min-h-20 border min-w-64 md:min-w-0 border-black" key={index}>
                    <div className="relative">
                        <Image src={gridItem.image} alt={gridItem.alt} width={500} height={500}></Image>
                        <div className="absolute top-4 right-6 flex flex-col align-middle gap-2">
                            <Image src="icons/save.svg" alt="save icon" width={10} height={10} className="mx-auto cursor-pointer"></Image>
                            <Image src="icons/quick-view.svg" alt="view icon" width={15} height={15} className="cursor-pointer"></Image>
                        </div>

                        {gridItem.hasTag &&
                            <p className="absolute top-4 left-6">
                                {gridItem.tagLine}
                            </p>
                        }

                    </div>
                    <div className="flex">
                        <div className="border border-black border-b-0 border-l-transparent p-2 md:p-4 basis-[100%]">
                            <p className="uppercase font-bold">{gridItem.item}</p>
                            <p>${gridItem.price}.00</p>
                        </div>
                        <div className="border h-auto border-black border-x-0 p-2 md:p-6 cursor-pointer">
                            <Image src="icons/cart.svg" alt="cart icon" width={15} height={15} sizes="(media:" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default GridCards