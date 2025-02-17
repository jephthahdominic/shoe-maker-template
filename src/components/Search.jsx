import { FiSearch } from "react-icons/fi";

export default function Search() {
  return (
    <div className="relative text-[#6B7280] px-2">
        <input 
            type="search" 
            placeholder="Search for shoes and sandals" 
            className="w-full py-3 rounded-[50px] border border-[1px solid E5E7EB] pl-12 pr-4"
        />
        <FiSearch className="absolute top-3 left-4 text-2xl"/>
    </div>
  )
}
