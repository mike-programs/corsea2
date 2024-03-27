import Image from "next/image";
import artist1 from '../../../public/images/artistimg1.png'
import artist2 from '../../../public/images/artistimg2.png'
import PrimaryButton from "../PrimaryButton";

export default function ArtistSection() {
    return (
        <div className="mx-2 md:mx-32 my-20  flex flex-col-reverse lg:flex-row gap-6 lg:gap-0 md:justify-between">
            <div className="flex flex-col md:flex-row items-center gap-4">
                <Image src={artist1} alt="artist image" height={300} width={300} />
                <Image src={artist2} alt="artist image" height={300} width={300} />
            </div>
            <div className="max-w-72 m-auto flex flex-col gap-10">
                <div className="flex flex-col gap-2">
                    <p className="text-xl font-medium">Meet The Artists Behind The Corsen Maria & Sophia</p>
                    <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>
                <PrimaryButton />
            </div>
        </div>
    )
}
