import BlogPost from "./BlogPost";

export default function BlogSection() {
    return (
        <div className='p-2 md:p-0 md:my-24 md:mx-auto'>
            <div className="flex flex-col gap-2 my-10">
                <h1 className='capitalize md:text-xl text-center font-medium'>read our blog post</h1>
                <p className="text-center md:w-[30%] m-auto">Lorem ipsum dolor sit amet, consectetur adipiscing ectetur elit, sed do eiusmod.</p>
            </div>
            <BlogPost />
        </div>
    )
}
