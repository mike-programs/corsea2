import { blogPosts } from "@/utils/data";
import Image from "next/image";

export default function BlogPost() {
    return (
        <div className="flex justify-center">
            <div className="md:flex md:gap-3">
                {blogPosts.map((blogPost, index) => (
                    <div className="flex flex-col relative" key={index}>
                        <Image src={blogPost.image} alt="blog post image" height={400} width={400} />
                        <div className="uppercase text-[.6rem] flex justify-center gap-1 my-2">
                            <p>fashion</p>
                            <Image src='/icons/separator.svg' alt='divider image' width={5} height={5} />
                            <p>inspiration</p>
                        </div>
                        <div>
                            <p className="uppercase bg-white py-1 px-2 border border-black absolute top-4 left-4 text-[.6rem]">september 29, 2022</p>
                        </div>
                        <hr className="border-t-black mb-2" />
                        <p className="text-sm text-center font-medium">{blogPost.title}</p>

                        <div className="my-3">
                            <p className="text-center uppercase underline underline-offset-4 font-semibold text-[.6rem] cursor-pointer">read more</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
