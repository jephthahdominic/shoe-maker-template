import { FiSearch } from "react-icons/fi";

export default function Search() {
  return (
    <div className="relative text-[#707072] px-3 my-4">
        <input 
            type="search" 
            placeholder="Search for shoes and sandals" 
            className="w-full py-3 rounded-[50px] border border-[1px solid E5E7EB] pl-10 pr-4 focus:border-[#E4AC07] outline-none"
        />
        <FiSearch className="absolute top-3 left-6 text-2xl"/>
    </div>
  )
}
