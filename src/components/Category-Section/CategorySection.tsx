import Image from "next/image"
import manImage from "../../../public/images/category-man-img.png"
import womanImage from "../../../public/images/category-woman-img.png"
import PrimaryButton from "../PrimaryButton"

export default function CategorySection() {
    return (
        <div className="md:grid md:grid-cols-2 p-2 md:p-0">
            <div className="relative">
                <Image src={manImage} alt="image" height={100} width={800} className="w-full md:h-svh md:border border-black border-r-0" />
                <div className="mb-12 md:my-0 md:absolute top-[40%] right-[40%]">
                    <h3 className="mt-5 uppercase md:text-3xl text-center md:mb-6">man</h3>
                    <div className="mx-auto md:mx-0">
                        <PrimaryButton />
                    </div>
                </div>
            </div>
            <div className="relative">
                <Image src={womanImage} alt="image" height={500} width={800} className="w-full md:h-svh md:border border-black" />
                <div className="mb-5     md:my-0 md:absolute top-[40%] left-[40%]">
                    <h3 className="mt-10 uppercase md:text-3xl text-center md:mb-6">woman</h3>
                    <div className="mx-auto md:mx-0">
                        <PrimaryButton />
                    </div>
                </div>
            </div>
        </div>
    )
}
