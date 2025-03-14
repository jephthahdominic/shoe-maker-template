import { FiMenu, FiSearch, FiShoppingCart } from 'react-icons/fi'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import { useSidebar } from '../contexts/SidebarContext'
import { useSearch } from '../contexts/SearchBarContext';

export default function AppHeader({showSearchButton, showCart, showSideBar}) {
  const {setIsSidebarOpen} = useSidebar();
  const {dispatch} = useSearch();
  return (
    <header className='w-full py-3 px-4 shadow-md flex items-center justify-between'>
        <Logo />
        <div className='flex gap-8 text-[24px]'>
          {showSearchButton && <FiSearch onClick={()=>dispatch({type:"openSearch"})}/>}
          {showCart && <Link to='/cart'><FiShoppingCart /></Link>}
          {showSideBar && <button onClick={()=>setIsSidebarOpen((s)=>!s)}><FiMenu /></button>}
        </div>
    </header>
  )
}
