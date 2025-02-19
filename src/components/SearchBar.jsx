import { FiSearch } from "react-icons/fi";
import { useSearch } from "../contexts/SearchBarContext";

export default function SearchBar() {
  const {state, dispatch} = useSearch()
  return (
    <div className="relative text-[#707072] my-5">
      <input 
        type="search" 
        placeholder="Search for shoes and sandals" 
        className="w-full py-3 rounded-[100px] border border-[1px solid E5E7EB] pl-9 pr-4 
         border-2 outline-none bg-[#E5E7EB]"
         disabled={state.isActive ? true: false}
         onClick={()=>dispatch({type:"openSearch"})}
      />
      <FiSearch className="absolute top-4 left-3 text-lg"/>
    </div>
  )
}
