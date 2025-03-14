import { Link } from "react-router-dom";

export default function BigProductCard({shoe}) {
  return (
    <Link to={`${shoe.id}`} className="border border-[1px solid #E5E7EB] shadow-normal shadow-light-gray rounded-t-[10px] bg-[rgba(255,255,255,0.4)]">
      <div className="w-[17rem] p-2 bg-[rgba(217,217,217,0.3)] rounded-t-[10px]">
        <img src={shoe.images[0].img} alt={shoe.images[0].alt} className=" object-contain"/>
      </div>
      <div className="pl-2 py-1">
        <h1 className="text-[1.35rem] font-playfair font-medium text-[#212121] leading-tight mt-2">{shoe.productName}</h1>
        <p className="text-[1rem] text-[#757575] mt-2">{shoe.category}</p>
        <span className="text-[1.125rem] text-[#212121] font-medium block mt-5">{shoe.price}</span>
      </div>
    </Link>
  )
}
