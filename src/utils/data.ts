
let gridItems : {item: string, price:number, image:string, alt: string, hasTag: boolean, tagLine: string | null }[] = [];
let blogPosts : {title: string, image: string}[] = [];
let instaImages: {imgsrc:string, size: number}[] = []

gridItems = [
{item: "black jacket", price: 350.00, image: "/images/gridimg1.png", alt:"grid image 1", hasTag:true, tagLine: "NEW"}, 
{item: "leather jacket", price: 300, image: "/images/gridimg2.png", alt:"grid image 2", hasTag:false, tagLine: null},
{item: "black outfit", price: 220.00, image: "/images/gridimg3.png", alt:"grid image 3", hasTag:true, tagLine: "SALE"},
{item: "t shirt", price: 120.00, image: "/images/gridimg4.png", alt:"grid image 4", hasTag:false, tagLine: null},
{item: "black vest", price: 85.00, image: "/images/gridimg5.png", alt:"grid image 5", hasTag:false, tagLine: null},
{item: "leather jacket", price: 300.00, image: "/images/gridimg6.png", alt:"grid image 6", hasTag:false, tagLine: null},
{item: "beige t-shirt", price: 60.00, image: "/images/gridimg7.png", alt:"grid image 7", hasTag:true, tagLine: "SOLD"},
{item: "black hat", price: 45.00, image: "/images/gridimg8.png", alt:"grid image 8", hasTag:false, tagLine: null},
]

blogPosts = 
[
{title: "Top 10 Winter Essentials For 2022 You Should Try", image:'/images/blogimg1.png'},
{title: 'The Complete Communication Skills Master Class For Work', image: '/images/blogimg2.png'},
{title: 'Premium Consultant Course For You', image: '/images/blogimg3.png'}
]

instaImages = [
{imgsrc: '/images/instagram-img1.png', size:30},
{imgsrc: '/images/instagram-img2.png', size:200},
{imgsrc: '/images/instagram-img3.png', size:200},
{imgsrc: '/images/instagram-img4.png', size:200},
{imgsrc: '/images/instagram-img5.png', size:200},
{imgsrc: '/images/instagram-img6.png', size:200},
{imgsrc: '/images/instagram-img7.png', size:30}

]



export default gridItems
export {blogPosts, instaImages}