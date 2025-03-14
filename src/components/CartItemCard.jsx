import { AiOutlineDelete } from "react-icons/ai";
import { shoe4 } from "../assets/images";
import { BiMinus, BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function CartItemCard() {
  return (
    <div className="border border-light-gray rounded-[10px] flex flex-col gap-3 items-end p-4 bg-[rgba(255,255,255,0.6)]">
        <AiOutlineDelete className="text-[1.5rem]"/>
        <div className="w-full flex items-center gap-3">
            <img src={shoe4} width={100} className="rounded-md bg-light-gray"/>
            <div className="h-full flex flex-col justify-between">
                <h3 className="text-[#212121] font-playfair font-semibold text-[1.25rem]">Leather chelsea boot</h3>
                <span className="text-darkTransparent">N40,000</span>
            </div>
        </div>
        <div className="w-full mt-6 flex items-center justify-between">
            <div className="flex items-center gap-6 border border-light-gray p-1 rounded-[100px]">
                <BiMinus />
                <span>1</span>
                <BiPlus />
            </div>
            <span> UK size 4</span>
            <Link to={''}>Edit</Link>
        </div>
    </div>
  )
}
