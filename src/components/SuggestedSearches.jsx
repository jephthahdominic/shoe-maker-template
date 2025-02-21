import { useSearch } from "../contexts/SearchBarContext"

const suggestions = ["Brogue", "Chelsea boot", "Sandals"]

export default function SuggestedSearches() {
  const {dispatch} = useSearch()
  return (
    <section className='mt-6'>
        <h2 className=' text-[1.1235rem] text-dark-gray'>Suggested searches</h2>
        <div className='flex flex-wrap items-center gap-2 mt-4'>
          {suggestions.map((suggestion)=>(
            <span className='border border-light-gray text-[1rem] p-2 rounded-[10px] text-dark-gray' onClick={()=>dispatch({type:"isTyping", payload:suggestion})}>{suggestion}</span>
          ))}
        </div>     
    </section>
  )
}
