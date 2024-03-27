import Image from "next/image"
import GridCards from "./GridCards"

function ExploreSection() {
    return (
        <div className="p-2 md:p-0 md:mx-32">
            <p className="max-w-[30rem] md:max-w-[50rem] text-center md:text-xl font-medium mx-auto my-10 md:my-32 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud.
            </p>

            <div>
                <div className="flex flex-col md:flex-row uppercase gap-2 md:gap-0 font-bold mb-4 md:justify-between">
                    <div className="md:flex md:gap-12">
                        <p className="my-auto">all products</p>
                        <p className="my-auto">lifestyle</p>
                        <p className="my-auto">brand</p>
                        <p className="bg-[#000000] inline bg-opacity-[0.2] p-1">outware</p>
                    </div>

                    <div className="md:flex gap-2">
                        <p className="my-auto">filter</p>
                        <Image src="icons/dropdown.svg" alt="dropdown arrow" height={15} width={15}></Image>
                    </div>
                </div>
            </div>
            <GridCards />
        </div>
    )
}

export default ExploreSection