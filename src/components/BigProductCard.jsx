import { Link } from "react-router-dom";

export default function BigProductCard({shoe}) {
  return (
    <Link to={`${shoe.id}`} className="border border-[1px solid #E5E7EB] rounded-t-[10px]">
      <div className="w-[17rem] p-2 bg-[rgba(217,217,217,0.5)] rounded-t-[10px]">
        <img src={shoe.images[0].img} alt={shoe.images[0].alt} className=" object-contain"/>
      </div>
      <div className="pl-2 py-1">
        <h1 className="text-[1.25rem] font-sans font-medium text-[#000] leading-tight mt-2">{shoe.productName}</h1>
        <p className="text-[1rem] text-[#707072] mt-2">{shoe.category}</p>
        <span className="text-[1.125rem] font-semibold block mt-5">{shoe.price}</span>
      </div>
    </Link>
  )
}
