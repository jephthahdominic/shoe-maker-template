import { AiOutlineDelete } from "react-icons/ai";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { remove } from "../features/shoppingCart/CartSlice";
import Button from "./Button";

export default function CartItemCard(item) {
    const dispatch = useDispatch()
  return (
    <div className="border border-light-gray rounded-[10px] flex flex-col gap-3 items-end p-4 bg-[rgba(255,255,255,0.6)]">
        <AiOutlineDelete className="text-[1.5rem]" onClick={()=>dispatch(remove(item.item.id))}/>
        <div className="w-full flex items-center gap-3">
            <img src={item.item.images[0].img} alt={item.item.images[0].alt} width={100} className="rounded-md bg-light-gray"/>
            <div className="h-full flex flex-col justify-between">
                <h3 className="text-[#212121] font-playfair font-semibold text-[1.25rem]">{item.item.productName}</h3>
                <span className="text-darkTransparent">{item.item.price}</span>
            </div>
        </div>
        <div className="w-full mt-6 flex items-center justify-between">
            <div className="flex items-center gap-6 border border-light-gray p-1 rounded-[100px]">
                <BiMinus />
                <span>1</span>
                <BiPlus />
            </div>
            <span> size {item.item.size}</span>
            <Link to={''}>Edit</Link>
            <Button>
                Buy Now
            </Button>
        </div>
    </div>
  )
}
