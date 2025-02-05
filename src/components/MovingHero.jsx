import Image from './Image'
import { useEffect, useState } from 'react'
import {heroShoes} from '../constants/index'

export default function MovingHero() {
    const [heroShoe, setHeroShoe] = useState(heroShoes[0]);
    const [index, setIndex] = useState(0)

    function changeHeroImage(input, index){
        setHeroShoe(input);
        setIndex(index)
    }

    function autoChangeImg() {
        setIndex(index + 1);
        if(index === heroShoes.length-1){
            setIndex(0)
        }
        setHeroShoe(heroShoes[index])
    } 

    useEffect(()=>{
        const id = setInterval(autoChangeImg, 2500);
        return () => clearInterval(id)
    },[autoChangeImg])


  return (
    <div className='w-full py-2 px-4 relative bg-[#F7F7F7] mt-4 rounded-[5px]'>
        <Image src={heroShoe.src} alt={heroShoe.alt || 'first shoe'} classname={'w-1/2 h-[130px] object-contain m-auto'}/>
        <div className='flex items-center gap-2 justify-end'>
            {heroShoes.map((shoe, index)=>(
                <button 
                    key={shoe.id}
                    className={`p-2.5 rounded-full bg-white border ${heroShoe.id === shoe.id && 'bg-amber-900'}`} 
                    onClick={()=>changeHeroImage(shoe, index)}>
                </button>
            ))}
        </div>
    </div>
  )
}
