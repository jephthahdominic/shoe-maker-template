export default function ProductCard({shoe}) {
  return (
    <div className="w-72 border border-[1px solid #E5E7EB] rounded-t-[10px]">
      <div className="w-72 bg-[rgba(217,217,217,0.5)] rounded-t-[10px]">
        <img src={shoe.images[0].img} alt={shoe.images[0].alt} className="w-full"/>
      </div>
      <div className="pl-2 py-1">
        <h1 className="text-[2rem] font-playfair font-medium text-[#000] leading-tight mt-2">{shoe.productName}</h1>
        <p className="text-lg text-[#707072] mt-2">{shoe.category}</p>
        <span className="text-[1.375rem] font-sans block mt-5">{shoe.price}</span>
      </div>
    </div>
  )
}
