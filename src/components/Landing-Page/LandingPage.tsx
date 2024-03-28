import Navbar from "@components/Landing-Page/Navbar";
import Image from "next/image";
import PrimaryButton from "../PrimaryButton";

export default function LandingPage() {
    return (
        <div className="h-dvh justify-center items-center bg-hero bg-white bg-blend-lighten bg-opacity-15 bg-cover bg-center relative flex md:block">
            <div className="">
                <Navbar />
                <hr className="hidden md:block md:mx-16 border-t-black" />
                <div className="h-full w-full">
                    <div className="hidden md:flex flex-row justify-between md:absolute w-full top-[50%] px-16">
                        <Image src="icons/left-arrow.svg" alt="left arrow" width={15} height={15} className="cursor-pointer"></Image>
                        <Image src="icons/right-arrow.svg" alt="left arrow" width={15} height={15} className="cursor-pointer"></Image>
                    </div>

                    <div className="md:absolute bottom-32 left-32 md:w-64 flex flex-col gap-8 z-10 self-center justify-self-center">
                        <div>
                            <h2 className="font-normal text-3xl">Mixed Textiles</h2>
                            <p className="text-sm max-w-32 md:max-w-max">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                        </div>
                        <PrimaryButton></PrimaryButton>
                    </div>
                </div>


                <div className="w-full absolute bottom-16">
                    <hr className="hidden md:block md:mx-16 border-t-black" />
                </div>
            </div>
        </div>
    )
}