import Banner from "./Banner";

export default function ScrollableProductImages(images){
    console.log(images.images[0])
    return(
        <Banner className='w-full bg-light-gray relative'>
            <img src={images.images[0].img} alt={images.images[0].alt} className='w-full object-contain'/>
            <div className='w-full absolute flex p-1.5 gap-2 items-center justify-center bottom-0'>
                {
                    images.images.map((image,index)=>(
                        <div className='p-1 bg-white' key={index}></div>
                    ))
                }
            </div>
        </Banner>
    )
}